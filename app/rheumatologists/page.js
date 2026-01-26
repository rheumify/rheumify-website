export const metadata = {
  title: 'For Rheumatologists',
  description: 'Resources for practicing rheumatologists - manuscript planning, ACR guidelines podcast, and citation tools.',
  keywords: ['rheumatology planner', 'manuscript tracker', 'ACR guidelines', 'citation formatter', 'rheumatologist resources'],
};

export default function RheumatologistsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>For Rheumatologists</h1>
        <p>
          Tools and resources designed to streamline your practice, research, and continuing education.
        </p>
      </div>

      <div className="content-card">
        <h2>📋 ScriptCycle - Manuscript Planner</h2>
        <p>
          A comprehensive 2026 Notion planner designed specifically for rheumatologists managing research and publications.
        </p>
        <ul>
          <li><strong>Auto-Lookup Magic:</strong> Select a journal → Impact factor, open access costs, acceptance rates instantly appear</li>
          <li><strong>No Data Re-Entry:</strong> Master databases are your single source of truth. Update once, reflected everywhere</li>
          <li><strong>Portfolio Visibility:</strong> See all manuscripts at once. Filter by status, priority, or deadline</li>
          <li><strong>Pre-loaded Deadlines:</strong> Conference abstract deadlines and major journal requirements already included</li>
          <li><strong>8 Linked Pages:</strong> Track manuscripts from ideas to publication with organized workflows</li>
        </ul>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://www.notion.com/templates/scriptcycle" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Get Free Template
          </a>
        </div>
      </div>

      <div className="content-card">
        <h2>🎧 RheumCast - ACR Guidelines Podcast</h2>
        <p>
          Stay current with ACR Clinical Practice Guidelines through our AI-generated podcast.
          Two engaging hosts break down the latest recommendations in digestible episodes perfect for your commute or workout.
        </p>
        <p>
          <strong>Current episodes include:</strong> Kawasaki Disease, Giant Cell Arteritis, Rheumatoid Arthritis, Lupus, and more.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://soundcloud.com/rheumify" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Listen on SoundCloud
          </a>
        </div>
      </div>

      <div className="content-card">
        <h2>🔄 ScriptSwap - Citation Formatter</h2>
        <p>
          Stop wasting time reformatting references. ScriptSwap lets you paste PMIDs, DOIs, or URLs and instantly
          generate properly formatted citations in Vancouver (ICMJE), APA, AMA, and other styles.
        </p>
        <ul>
          <li>Batch process multiple references at once</li>
          <li>Swap between citation styles with one click</li>
          <li>Export ready-to-use bibliography</li>
          <li>Works with PubMed, DOI, and web URLs</li>
        </ul>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="/tools/scriptswap" className="btn btn-primary">
            Use ScriptSwap
          </a>
        </div>
      </div>
    </div>
  );
}
