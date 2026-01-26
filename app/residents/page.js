export const metadata = {
  title: 'For Internal Medicine Residents',
  description: 'Rheumatology resources for internal medicine residents - rotation guides and board prep.',
  keywords: ['internal medicine rheumatology', 'rheumatology rotation', 'IM resident rheumatology', 'medicine board prep'],
};

export default function ResidentsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>For Internal Medicine Residents</h1>
        <p>
          Build your rheumatology foundation with resources designed for your rotations and board preparation.
        </p>
      </div>

      <div className="content-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚧</div>
        <h2>Coming Soon</h2>
        <p style={{ maxWidth: '500px', margin: '1rem auto' }}>
          We're developing targeted resources for internal medicine residents including rheumatology rotation
          survival guides, high-yield board review content, and quick reference materials.
        </p>
        <p style={{ color: 'var(--gray-medium)', marginTop: '2rem' }}>
          In the meantime, check out our <a href="https://soundcloud.com/rheumify">RheumCast podcast</a> for
          accessible overviews of ACR Clinical Practice Guidelines.
        </p>
      </div>

      <div className="content-card">
        <h2>📬 Get Notified</h2>
        <p>
          Want to know when resident resources launch? Follow Rheumify on SoundCloud or check back soon
          for updates.
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
