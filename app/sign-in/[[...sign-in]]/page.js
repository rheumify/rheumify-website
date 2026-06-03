// Auth lives in the study app (app.rheumify.org). This static page exists only so the
// marketing site builds under `output: 'export'`; it no longer renders Clerk.
export function generateStaticParams() {
  return [{ 'sign-in': [] }]
}

export const metadata = {
  title: 'Sign In',
  description: 'Sign in to the Rheumify study app.',
}

export default function SignInPage() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '0.75rem' }}>Sign in</h1>
      <p style={{ marginBottom: '1.5rem', opacity: 0.85 }}>The Rheumify study app has its own sign-in.</p>
      <a href="https://app.rheumify.org/sign-in" className="nav-app-btn">Go to the Study App →</a>
    </div>
  )
}
