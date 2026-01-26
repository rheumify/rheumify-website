export const metadata = {
  title: 'For Medical Students',
  description: 'Introduction to rheumatology for medical students - study guides and specialty exploration.',
  keywords: ['medical student rheumatology', 'rheumatology introduction', 'rheumatology specialty', 'medical education'],
};

export default function StudentsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>For Medical Students</h1>
        <p>
          Discover the fascinating world of rheumatology and explore if this specialty is right for you.
        </p>
      </div>

      <div className="content-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚧</div>
        <h2>Coming Soon</h2>
        <p style={{ maxWidth: '500px', margin: '1rem auto' }}>
          We're building introductory resources for medical students interested in rheumatology,
          including specialty overviews, study guides, and information about the path to becoming a rheumatologist.
        </p>
        <p style={{ color: 'var(--gray-medium)', marginTop: '2rem' }}>
          Curious about rheumatology? Our <a href="https://soundcloud.com/rheumify">RheumCast podcast</a> is
          a great way to learn about different rheumatic conditions through engaging discussions.
        </p>
      </div>

      <div className="content-card">
        <h2>🩺 Why Rheumatology?</h2>
        <p>
          Rheumatology is a rewarding specialty that combines:
        </p>
        <ul>
          <li><strong>Diagnostic Puzzles:</strong> Complex cases requiring excellent clinical reasoning</li>
          <li><strong>Long-term Relationships:</strong> Follow patients through their journey over years</li>
          <li><strong>Cutting-edge Medicine:</strong> Rapidly evolving therapeutics and immunology</li>
          <li><strong>Work-Life Balance:</strong> Primarily outpatient with manageable call schedules</li>
          <li><strong>Impact:</strong> Transform lives by controlling chronic disease</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>📬 Stay Updated</h2>
        <p>
          Want to know when student resources launch? Follow Rheumify on SoundCloud for updates
          and start learning about rheumatology through our podcast.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://soundcloud.com/rheumify" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Follow on SoundCloud
          </a>
        </div>
      </div>
    </div>
  );
}
