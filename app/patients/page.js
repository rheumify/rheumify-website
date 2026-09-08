export const metadata = {
  title: 'Patient Resources',
  description: 'Rheumatology patient education - learn about rheumatic conditions, what your medication costs under Medicare, and find trusted resources from the American College of Rheumatology.',
  keywords: ['rheumatology patient education', 'rheumatic disease', 'autoimmune conditions', 'ACR patient information', 'Medicare biologic cost'],
};

export default function PatientsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Patient Resources</h1>
        <p>
          Learn about rheumatic conditions and find resources to help you understand your diagnosis and treatment options.
        </p>
      </div>

      <div className="content-card">
        <h2>Paying for Your Medication</h2>
        <p>
          What your medicine actually costs under each kind of Medicare, why infusions and pills are treated differently, and what to do when your plan says no.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <a href="/patients/insurance" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>
            Medicare and your medication &rarr;
          </a>
        </p>
      </div>

      <div className="content-card">
        <h2>Understanding Your Labs</h2>
        <p>
          If you get labs drawn at more than one place &mdash; Quest, LabCorp, different health systems &mdash; your results end up scattered across separate MyChart logins. <strong>LabLens</strong> is a free Mac app Dr. Bays built to help you keep them in one place. Download your reports, import them, and see each value tracked over time, with a plain-English explanation of what each test is, why it&apos;s checked, and what to ask your doctor. Everything stays on your own computer &mdash; no account, no cloud, nothing uploaded anywhere.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <a href="https://www.glaze.app/app/lablens-GkByoP" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>
            Get LabLens (free) &rarr;
          </a>
        </p>
      </div>

      <div className="content-card">
        <h2>Understanding Rheumatic Diseases</h2>
        <p>
          Rheumatic diseases are conditions that affect your joints, muscles, bones, and sometimes other organs.
          They often involve inflammation and can be autoimmune in nature.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Common conditions include:</strong>
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--gray-medium)' }}>
          In-depth guides written and reviewed by Dr. Bays are now available for Rheumatoid Arthritis and Gout (more conditions coming soon). Other conditions currently link to the American College of Rheumatology.
        </p>
        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '2' }}>
          <li>
            <a href="/patients/conditions/rheumatoid-arthritis" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>
              Rheumatoid Arthritis
            </a>
          </li>
          <li>
            <a href="/patients/conditions/gout" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>
              Gout
            </a>
          </li>
          <li>
            <a href="https://rheumatology.org/patients/lupus" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Lupus (SLE)
            </a>
          </li>
          <li>
            <a href="https://rheumatology.org/patients/psoriatic-arthritis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Psoriatic Arthritis
            </a>
          </li>
          <li>
            <a href="https://rheumatology.org/patients/axial-spondyloarthritis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Axial Spondyloarthritis
            </a>
          </li>
          <li>
            <a href="https://rheumatology.org/patients/vasculitis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Vasculitis
            </a>
          </li>
          <li>
            <a href="https://rheumatology.org/patients/scleroderma" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Scleroderma
            </a>
          </li>
          <li>
            <a href="https://rheumatology.org/patients/sjogrens-syndrome" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Sjögren&apos;s Syndrome
            </a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Video Education</h2>
        <p>
          Short, clear videos on rheumatic conditions and treatments, from Dr. Bays.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLxRoIvhSVeLTNfRZmXWjNfRZ0000000"
                title="Rheumify patient education videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              />
            </div>
          </div>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <a href="https://www.youtube.com/@rheumify" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>
            More videos on YouTube &rarr;
          </a>
        </p>
      </div>

      <div className="content-card">
        <h2>Trusted Resources</h2>
        <p>
          These organizations provide reliable, physician-reviewed information for patients:
        </p>
        <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '2' }}>
          <li>
            <a href="https://rheumatology.org/patients" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              American College of Rheumatology - Patient Resources
            </a>
          </li>
          <li>
            <a href="https://www.arthritis.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Arthritis Foundation
            </a>
          </li>
          <li>
            <a href="https://www.niams.nih.gov/health-topics" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              NIAMS (National Institutes of Health)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
