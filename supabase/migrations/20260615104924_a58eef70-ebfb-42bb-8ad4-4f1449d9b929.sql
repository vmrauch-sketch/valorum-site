
-- 1) Lock down SECURITY DEFINER functions: remove public/anon/authenticated EXECUTE, keep service_role
REVOKE ALL ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;

-- 2) Pin search_path on each function (mutable search_path warning)
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;

-- 3) Replace overly permissive INSERT policy on contact_submissions with validated checks
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON public.contact_submissions;

CREATE POLICY "Public can submit valid contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(email) BETWEEN 3 AND 320
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND (message IS NULL OR length(message) <= 5000)
  AND (company IS NULL OR length(company) <= 200)
  AND (phone IS NULL OR length(phone) <= 50)
  AND (revenue_range IS NULL OR length(revenue_range) <= 100)
);
