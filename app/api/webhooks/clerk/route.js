// Retired. Auth and the Clerk webhook live in the study app (app.rheumify.org).
// This static stub keeps the marketing site compatible with `output: 'export'`.
export const dynamic = 'force-static'

export function GET() {
  return new Response('Gone — auth lives at app.rheumify.org', { status: 410 })
}
