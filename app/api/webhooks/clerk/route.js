import { Webhook } from 'svix'
import { headers } from 'next/headers'

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET
  if (!WEBHOOK_SECRET) {
    console.error('CLERK_WEBHOOK_SECRET not set')
    return new Response('Missing webhook secret', { status: 500 })
  }

  // Get Svix signature headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 })
  }

  // Verify the webhook signature
  const payload = await req.json()
  const body = JSON.stringify(payload)
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
  } catch (err) {
    console.error('Webhook verification failed:', err)
    return new Response('Invalid signature', { status: 400 })
  }

  // Handle new user signup
  if (evt.type === 'user.created') {
    const { id, email_addresses, first_name, last_name, created_at } = evt.data
    const email = email_addresses?.[0]?.email_address || ''
    const display_name = [first_name, last_name].filter(Boolean).join(' ') || email

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Users`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            clerk_user_id: id,
            email,
            display_name,
            created_at: new Date(created_at).toISOString(),
            streak_current: 0,
            streak_longest: 0,
            email_opt_in: false,
          },
        }),
      }
    )

    if (!airtableRes.ok) {
      const errText = await airtableRes.text()
      console.error('Failed to create Airtable user record:', errText)
      return new Response('Airtable error', { status: 500 })
    }

    console.log(`Created Airtable record for new user: ${email}`)
  }

  return new Response('OK', { status: 200 })
}
