export const metadata = {
  title: 'For Rheumatologists | Rheumify',
  description: 'Resources for practicing rheumatologists - manuscript planning, ACR guidelines podcast, citation tools, and the UW GCA Fast Track Clinic for rapid giant cell arteritis evaluation.',
  keywords: ['rheumatology planner', 'manuscript tracker', 'ACR guidelines', 'citation formatter', 'rheumatologist resources', 'GCA fast track', 'giant cell arteritis', 'temporal arteritis', 'vasculitis clinic'],
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

      {/* GCA Fast Track Clinic Section */}
      <div className="content-card gca-card">
        <h2>🌸 UW GCA Fast Track Clinic</h2>
        <p>
          The University of Washington GCA Fast Track Clinic provides rapid evaluation and treatment for patients
          with suspected Giant Cell Arteritis (GCA), also known as temporal arteritis. Early diagnosis and treatment
          are critical to prevent vision loss and other serious complications.
        </p>

        <div className="gca-info-grid">
          <div className="gca-info-item">
            <h4>🏥 What We Offer</h4>
            <p>Same-day or next-day appointments for urgent GCA evaluation, including temporal artery ultrasound and expert rheumatology consultation.</p>
          </div>
          <div className="gca-info-item">
            <h4>⏰ Rapid Response</h4>
            <p>We understand that GCA is a medical emergency. Our fast track system ensures patients are seen quickly to minimize the risk of permanent vision loss.</p>
          </div>
          <div className="gca-info-item">
            <h4>📋 When to Refer</h4>
            <p>New severe headache in patients over 50, jaw claudication, scalp tenderness, visual symptoms, unexplained elevated ESR/CRP, or PMR with concerning symptoms.</p>
          </div>
          <div className="gca-info-item">
            <h4>📞 How to Refer</h4>
            <p>Call the UW Rheumatology clinic and mention "GCA Fast Track" for priority scheduling. Fax referrals are also accepted for urgent evaluation.</p>
          </div>
        </div>

        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="/gca-fast-track" className="btn btn-primary">
            Learn More About GCA Fast Track
          </a>
        </div>
      </div>
    </div>
  );
}
