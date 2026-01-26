export const metadata = {
  title: 'GCA Fast Track Clinic',
  description: 'University of Washington Giant Cell Arteritis Fast Track Clinic - using vascular ultrasound to diagnose GCA and prevent blindness.',
  keywords: ['giant cell arteritis', 'GCA', 'temporal arteritis', 'fast track clinic', 'vascular ultrasound', 'Seattle', 'University of Washington', 'UW Medicine'],
};

export default function GCAFastTrackPage() {
  return (
    <>
      <section className="gca-hero">
        <div className="gca-hero-content">
          <h1>University of Washington</h1>
          <h2>Giant Cell Arteritis Fast Track Clinic</h2>
          <p>Using vascular ultrasound to diagnose GCA and prevent blindness</p>
        </div>
      </section>

      <div className="page-container">
        {/* Prominent activation instructions */}
        <div className="content-card" style={{
          borderLeft: '4px solid var(--purple-light)',
          background: 'linear-gradient(135deg, rgba(196, 181, 224, 0.1) 0%, var(--navy-light) 100%)'
        }}>
          <h2 style={{ color: 'var(--purple-light)' }}>How to Activate the Fast Track Clinic</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            <strong style={{ color: 'var(--white)' }}>Physicians must call to activate a Fast Track appointment for their patient.</strong>
          </p>
          <div style={{
            padding: '1.5rem',
            background: 'var(--navy-dark)',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--purple-light)', fontWeight: '600', marginBottom: '0.5rem' }}>
              Page the on-call rheumatologist at UW
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}>
              The on-call rheumatologist will coordinate rapid scheduling and appropriate workup.
            </p>
          </div>
          <p style={{ color: 'var(--gray-light)' }}>
            Patients cannot self-refer to the Fast Track Clinic. If you are a patient and believe you may have GCA,
            please contact your primary care physician or emergency department immediately.
          </p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>What is the Fast Track Clinic?</h3>
            <p>
              Our specialized clinic provides rapid evaluation for patients with suspected giant cell arteritis (GCA).
              We use non-invasive vascular ultrasound to help diagnose GCA quickly, allowing for prompt treatment
              to prevent serious complications like vision loss.
            </p>
          </div>

          <div className="info-card">
            <h3>Why Speed Matters</h3>
            <p>
              GCA can cause permanent blindness if not treated quickly. Our fast track approach ensures patients
              are evaluated within days of referral, not weeks, reducing the risk of irreversible vision loss.
            </p>
          </div>

          <div className="info-card">
            <h3>Vascular Ultrasound</h3>
            <p>
              Vascular ultrasound is a safe, non-invasive imaging technique that can detect inflammation in the
              temporal and other arteries. It provides immediate results and can help avoid the need for temporal
              artery biopsy in some cases.
            </p>
          </div>

          <div className="info-card">
            <h3>Who Should Be Referred?</h3>
            <p>
              Patients over 50 with new headache, scalp tenderness, jaw claudication, vision changes, or elevated
              inflammatory markers (ESR, CRP) who are suspected of having GCA should be referred urgently.
            </p>
          </div>
        </div>

        <div className="content-card" style={{ marginTop: '2rem' }}>
          <h2>Referral Information for Physicians</h2>
          <p>
            The GCA Fast Track Clinic is part of UW Medicine Rheumatology. For referrals:
          </p>
          <ul>
            <li><strong>Page the on-call rheumatologist</strong> to activate a Fast Track appointment</li>
            <li>Include relevant labs (ESR, CRP, CBC) if available</li>
            <li>Note any visual symptoms or high-risk features</li>
            <li>Patients should NOT delay starting steroids if GCA is strongly suspected</li>
          </ul>
          <p style={{ marginTop: '1rem', color: 'var(--pink-accent)' }}>
            <strong>Note:</strong> Ultrasound findings are most reliable within 1-2 weeks of starting steroids,
            so early referral is important even after treatment has begun.
          </p>
        </div>

        <div className="content-card">
          <h2>Frequently Asked Questions</h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--purple-light)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              What is Giant Cell Arteritis?
            </h3>
            <p>
              Giant cell arteritis (GCA), also known as temporal arteritis, is an inflammatory condition affecting
              medium and large arteries, particularly those around the head and neck. It primarily affects people
              over 50 and can cause headaches, scalp tenderness, jaw pain when chewing, and vision problems.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--purple-light)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              How is GCA diagnosed?
            </h3>
            <p>
              Diagnosis traditionally involves temporal artery biopsy, but vascular ultrasound can detect the
              characteristic "halo sign" of arterial inflammation. Blood tests showing elevated ESR and CRP
              support the diagnosis, along with clinical symptoms.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--purple-light)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              What are the warning signs of GCA?
            </h3>
            <p>
              Seek immediate medical attention for: new severe headache (especially in someone over 50),
              sudden vision changes or loss, scalp tenderness, jaw pain when chewing, unexplained fever,
              or symptoms of polymyalgia rheumatica (shoulder/hip stiffness).
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--purple-light)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Why is the Fast Track Clinic important?
            </h3>
            <p>
              Without prompt treatment, GCA can cause permanent blindness in up to 20% of patients.
              Fast track clinics have been shown to dramatically reduce rates of vision loss by ensuring
              rapid diagnosis and treatment initiation.
            </p>
          </div>
        </div>

        <div className="content-card">
          <h2>Learn More</h2>
          <p>
            Listen to our RheumCast episode on Giant Cell Arteritis for an in-depth discussion of the
            ACR Clinical Practice Guidelines.
          </p>
          <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
            <a href="https://soundcloud.com/rheumify" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Listen on SoundCloud
            </a>
            <a href="/patients" className="btn btn-secondary">
              Back to Patient Resources
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
