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
          If you are on Medicare and taking a biologic, what you pay depends on something almost nobody explains: whether the medication goes in at an infusion center or at your kitchen table. An infusion falls under Part B, where you pay 20% with <strong>no yearly ceiling</strong>. The same kind of medicine taken at home falls under Part D, where costs stop at $2,100 a year. And Original Medicare requires <strong>no prior authorization</strong> for a medication given in a doctor&apos;s office &mdash; while 94% of Medicare Advantage members are in plans that do.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Look up your medication and see what a year would cost under each kind of Medicare. Free, nothing collected, nothing for sale.
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
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="/patients/conditions/rheumatoid-arthritis" style={{ color: 'var(--purple-light)' }}>
              Rheumatoid Arthritis
            </a>{' '}
            <span style={{ fontSize: '0.8rem', color: 'var(--gray-medium)' }}>&mdash; in-depth guide</span>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/lupus" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Lupus (Systemic Lupus Erythematosus)
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="/patients/conditions/gout" style={{ color: 'var(--purple-light)' }}>
              Gout
            </a>{' '}
            <span style={{ fontSize: '0.8rem', color: 'var(--gray-medium)' }}>&mdash; in-depth guide</span>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/psoriatic-arthritis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Psoriatic Arthritis
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/spondyloarthritis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Ankylosing Spondylitis
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/sjogrens-syndrome" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Sjogren&apos;s Syndrome
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/vasculitis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Vasculitis
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/polymyalgia-rheumatica" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Giant Cell Arteritis &amp; Polymyalgia Rheumatica
            </a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Video Education</h2>
        <p>
          Patient-friendly video presentations from the Vasculitis Foundation, presented by Dr. Alison Bays.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px' }}>
              <iframe
                src="https://www.youtube.com/embed/baKyPak5Uho"
                title="Five Things to Know About Your Heart When You Have Vasculitis"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: 'var(--purple-light)', fontWeight: 600 }}>
              Heart Health &amp; Vasculitis
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-medium)', marginTop: '0.25rem' }}>
              How vasculitis can impact your heart and what you can do to protect your cardiovascular health.
            </p>
          </div>
          <div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px' }}>
              <iframe
                src="https://www.youtube.com/embed/x9yklXExjTE"
                title="Giant Cell Arteritis (GCA) — What Patients Need to Know"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: 'var(--purple-light)', fontWeight: 600 }}>
              Giant Cell Arteritis (GCA)
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-medium)', marginTop: '0.25rem' }}>
              Understanding GCA — diagnosis, treatment, and what patients need to know.
            </p>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h2>Trusted Resources</h2>
        <p>
          For reliable patient education about rheumatic diseases, we recommend:
        </p>
        <ul>
          <li>
            <a href="https://rheumatology.org/patient-information" target="_blank" rel="noopener noreferrer">
              American College of Rheumatology - Patient Resources
            </a>
          </li>
          <li>
            <a href="https://www.arthritis.org/" target="_blank" rel="noopener noreferrer">
              Arthritis Foundation
            </a>
          </li>
          <li>
            <a href="https://www.lupus.org/" target="_blank" rel="noopener noreferrer">
              Lupus Foundation of America
            </a>
          </li>
          <li>
            <a href="https://www.vasculitisfoundation.org/" target="_blank" rel="noopener noreferrer">
              Vasculitis Foundation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
