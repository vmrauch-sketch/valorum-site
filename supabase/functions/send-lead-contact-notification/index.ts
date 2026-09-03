import { createClient } from 'npm:@supabase/supabase-js@2'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const TEMPLATE_NAME = 'lead-contact-notification'
const NOTIFICATION_RECIPIENT = 'atendimento.valorum@gmail.com'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

function jsonResponse(data: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing required environment variables')
    return jsonResponse({ error: 'Server configuration error' }, 500)
  }

  let submissionId: string
  try {
    const body = await req.json()
    submissionId = String(body.submissionId ?? body.submission_id ?? '')
  } catch {
    return jsonResponse({ error: 'Invalid JSON in request body' }, 400)
  }

  const uuidRe =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  if (!uuidRe.test(submissionId)) {
    return jsonResponse({ error: 'Invalid request' }, 400)
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // SECURITY: never trust client-supplied content — rebuild the email data
  // from the actual submission row, and reject stale requests.
  const { data: submission, error: submissionError } = await supabase
    .from('contact_submissions')
    .select('name, email, phone, company, revenue_range, message, created_at')
    .eq('id', submissionId)
    .maybeSingle()

  if (submissionError || !submission) {
    console.warn('Notification email rejected: no matching submission', {
      submissionId,
    })
    return jsonResponse({ error: 'Invalid request' }, 403)
  }

  const ageMs = Date.now() - new Date(submission.created_at).getTime()
  if (ageMs > 10 * 60 * 1000) {
    return jsonResponse({ error: 'Invalid request' }, 403)
  }

  const templateData = {
    name: submission.name,
    email: submission.email,
    phone: submission.phone ?? undefined,
    company: submission.company ?? undefined,
    revenue_range: submission.revenue_range ?? undefined,
    message: submission.message ?? undefined,
  }

  const logSend = async (
    status: 'sent' | 'suppressed' | 'failed',
    errorMessage?: string,
  ) => {
    const { error } = await supabase.from('email_send_log').insert({
      message_id: null,
      template_name: TEMPLATE_NAME,
      recipient_email: NOTIFICATION_RECIPIENT,
      status,
      error_message: errorMessage ?? null,
    })
    if (error) {
      console.error('Failed to write email_send_log', {
        code: error.code,
        message: error.message,
      })
    }
  }

  try {
    const result = await sendTemplateEmail(
      TEMPLATE_NAME,
      NOTIFICATION_RECIPIENT,
      {
        templateData,
        idempotencyKey: `lead-contact-${submissionId}`,
      },
    )

    if (!result.sent) {
      await logSend('suppressed')
      return jsonResponse({ success: false, reason: 'recipient_suppressed' })
    }

    await logSend('sent')
    return jsonResponse({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Failed to send lead contact notification', { message })
    await logSend('failed', message)
    return jsonResponse({ error: 'Failed to send email' }, 500)
  }
})
