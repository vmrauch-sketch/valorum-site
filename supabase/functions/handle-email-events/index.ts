import { createEmailWebhookHandler } from 'npm:@lovable.dev/email-js@0.1.0'
import { createClient } from 'npm:@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

type Reason = 'bounce' | 'complaint' | 'unsubscribe'
type LogStatus = 'bounced' | 'complained' | 'suppressed'

const REASON_MESSAGE: Record<Reason, string> = {
  bounce: 'Permanent bounce — email address is invalid or rejected',
  complaint: 'Spam complaint — recipient marked email as spam',
  unsubscribe: 'Recipient unsubscribed',
}

async function record(
  eventId: string,
  recipient: string,
  messageId: string | null,
  reason: Reason,
  logStatus: LogStatus,
) {
  const email = recipient.toLowerCase()

  const { error: suppressError } = await supabase
    .from('suppressed_emails')
    .upsert({ email, reason, metadata: null }, { onConflict: 'email' })

  if (suppressError) {
    console.error('Failed to upsert suppressed email', {
      event_id: eventId,
      code: suppressError.code,
      message: suppressError.message,
    })
    throw new Error('Failed to write suppression')
  }

  const { error: logError } = await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: 'system',
    recipient_email: email,
    status: logStatus,
    error_message: REASON_MESSAGE[reason],
    metadata: null,
  })

  if (logError) {
    console.error('Failed to insert email_send_log', {
      event_id: eventId,
      code: logError.code,
      message: logError.message,
    })
    throw new Error('Failed to write send log')
  }
}

const handler = createEmailWebhookHandler({
  apiKey: Deno.env.get('LOVABLE_API_KEY')!,
  on: {
    'email.bounced': async (event) => {
      await record(
        event.event_id,
        event.data.recipient,
        event.data.message_id ?? null,
        'bounce',
        'bounced',
      )
    },
    'email.complaint': async (event) => {
      await record(
        event.event_id,
        event.data.recipient,
        event.data.message_id ?? null,
        'complaint',
        'complained',
      )
    },
    'email.unsubscribed': async (event) => {
      await record(
        event.event_id,
        event.data.recipient,
        event.data.message_id ?? null,
        'unsubscribe',
        'suppressed',
      )
    },
  },
})

Deno.serve((req) => handler(req))
