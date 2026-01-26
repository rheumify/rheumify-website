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
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </span>
          GCA Fast Track Clinic
        </h2>
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
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.75rem' }}>
            How to Access the Fast Track Clinic
          </h3>
          <p>
            <strong>Your physician must call to activate a Fast Track appointment.</strong>
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--purple-light)',
            fontWeight: '600',
            padding: '1rem',
            background: 'var(--navy-dark)',
            borderRadius: '6px',
            textAlign: 'center',
            marginTop: '1rem'
          }}>
            Page the on-call rheumatologist at UW
          </p>
        </div>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://gcafast.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Visit GCA Fast Track Website
          </a>
        </div>
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
        <ul>
          <li>Rheumatoid Arthritis</li>
          <li>Lupus (Systemic Lupus Erythematosus)</li>
          <li>Giant Cell Arteritis & Polymyalgia Rheumatica</li>
          <li>Gout</li>
          <li>Psoriatic Arthritis</li>
          <li>Ankylosing Spondylitis</li>
          <li>Sjögren's Syndrome</li>
          <li>Vasculitis</li>
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
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
          </span>
          RheumCast - Learn Through Listening
        </h2>
        <p>
          Our podcast, RheumCast, discusses current clinical practice guidelines for various rheumatic conditions.
          While designed for healthcare professionals, patients may find these discussions helpful for understanding
          how doctors approach diagnosis and treatment.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://soundcloud.com/rheumify" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Listen on SoundCloud
          </a>
        </div>
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
