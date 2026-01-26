export const metadata = {
  title: 'Patient Resources',
  description: 'Rheumatology patient education - learn about rheumatic conditions, GCA Fast Track Clinic, and find support.',
  keywords: ['rheumatology patient education', 'rheumatic disease', 'autoimmune conditions', 'giant cell arteritis', 'GCA'],
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

      <div className="content-card gca-card">
        <h2>GCA Fast Track Clinic</h2>
        <p>
          The University of Washington Giant Cell Arteritis (GCA) Fast Track Clinic uses vascular ultrasound
          to diagnose GCA and prevent blindness. Our specialized clinic provides rapid evaluation for patients
          with suspected giant cell arteritis.
        </p>
        <div className="fast-track-alert" style={{
          marginTop: '1.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.15)',
          borderRadius: '8px',
          border: '2px solid var(--purple-light)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
            How to Access the Fast Track Clinic
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--white)' }}>Your physician must call to activate a Fast Track appointment.</strong>
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            To schedule an urgent GCA evaluation, your doctor should:
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--purple-light)',
            fontWeight: '600',
            marginTop: '1rem',
            padding: '1rem',
            background: 'var(--navy-dark)',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
            Page the on-call rheumatologist at UW
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--gray-medium)' }}>
            The on-call rheumatologist will coordinate rapid scheduling and ensure you are seen promptly.
          </p>
        </div>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="/gca-fast-track" className="btn btn-primary">
            Learn More About GCA Fast Track
          </a>
        </div>
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
        <ul>
          <li>Rheumatoid Arthritis</li>
          <li>Lupus (Systemic Lupus Erythematosus)</li>
          <li>Giant Cell Arteritis & Polymyalgia Rheumatica</li>
          <li>Gout</li>
          <li>Psoriatic Arthritis</li>
          <li>Ankylosing Spondylitis</li>
          <li>Sjogren's Syndrome</li>
          <li>Vasculitis</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Trusted Resources</h2>
        <p>
          For reliable patient education about rheumatic diseases, we recommend:
        </p>
        <ul>
          <li>
            <a href="https://www.rheumatology.org/I-Am-A/Patient-Caregiver" target="_blank" rel="noopener noreferrer">
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
