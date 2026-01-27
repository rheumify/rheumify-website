export const metadata = {
  title: 'Patient Resources',
  description: 'Rheumatology patient education - learn about rheumatic conditions and find trusted resources from the American College of Rheumatology.',
  keywords: ['rheumatology patient education', 'rheumatic disease', 'autoimmune conditions', 'ACR patient information'],
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
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </span>
          Understanding Rheumatic Diseases
        </h2>
        <p>
          Rheumatic diseases are conditions that affect your joints, muscles, bones, and sometimes other organs.
          They often involve inflammation and can be autoimmune in nature.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Common conditions include:</strong>
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/rheumatoid-arthritis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Rheumatoid Arthritis
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/lupus" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Lupus (Systemic Lupus Erythematosus)
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/gout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Gout
            </a>
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
              Sjogren's Syndrome
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/vasculitis" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Vasculitis
            </a>
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <a href="https://rheumatology.org/patients/polymyalgia-rheumatica" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Giant Cell Arteritis & Polymyalgia Rheumatica
            </a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </span>
          Trusted Resources
        </h2>
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
