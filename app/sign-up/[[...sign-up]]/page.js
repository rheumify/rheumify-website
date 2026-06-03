// Auth lives in the study app (app.rheumify.org). This static page exists only so the
// marketing site builds under `output: 'export'`; it no longer renders Clerk.
export function generateStaticParams() {
  return [{ 'sign-up': [] }]
}

export const metadata = {
  title: 'Create Account',
  description: 'Create your Rheumify study app account.',
}

export default function SignUpPage() {
  return (
    <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '0.75rem' }}>Create your account</h1>
      <p style={{ marginBottom: '1.5rem', opacity: 0.85 }}>Sign-up happens in the Rheumify study app.</p>
      <a href="https://app.rheumify.org/sign-up" className="nav-app-btn">Go to the Study App →</a>
    </div>
  )
}
