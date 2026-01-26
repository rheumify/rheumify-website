export const metadata = {
  title: 'For Rheumatology Fellows',
  description: 'ABIM rheumatology board prep with comprehensive question bank and spaced repetition flashcards.',
  keywords: ['rheumatology board prep', 'ABIM rheumatology', 'rheumatology question bank', 'rheumatology flashcards', 'fellowship board exam'],
};

export default function FellowsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>For Rheumatology Fellows</h1>
        <p>
          Ace your ABIM board certification with comprehensive study tools created by board-certified rheumatologists.
        </p>
      </div>

      <div className="content-card">
        <h2>📝 Rheumify Question Bank</h2>
        <p>
          The most comprehensive web-based platform for rheumatology fellows preparing for ABIM board certification.
          Our question bank features AI-created content that is carefully curated and reviewed by board-certified
          rheumatologists to ensure accuracy and relevance.
        </p>
        <ul>
          <li><strong>Comprehensive Coverage:</strong> Questions spanning all rheumatology topics tested on ABIM boards</li>
          <li><strong>Detailed Explanations:</strong> Learn the reasoning behind each answer, not just the correct choice</li>
          <li><strong>Board-Style Format:</strong> Questions mirror the format and difficulty of actual board exams</li>
          <li><strong>Progress Tracking:</strong> Monitor your performance and identify areas for improvement</li>
        </ul>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://rheumify.glideapp.io" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Sign up: $15/month
          </a>
          <a href="https://rheumify.glideapp.io" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Sign up: $119/year (Save $61)
          </a>
        </div>
      </div>

      <div className="content-card">
        <h2>🃏 Spaced Repetition Flashcards</h2>
        <p>
          Included with your Rheumify subscription! Our flashcard system uses spaced repetition algorithms
          to optimize your study time and improve long-term retention.
        </p>
        <ul>
          <li>Science-backed learning methodology</li>
          <li>Cards appear based on your performance</li>
          <li>Covers high-yield topics for boards</li>
          <li>Study on any device, anywhere</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>🎧 RheumCast - Guidelines Podcast</h2>
        <p>
          Supplement your studying with our free AI-generated podcast covering ACR Clinical Practice Guidelines.
          Perfect for passive learning during commutes, workouts, or downtime.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://soundcloud.com/rheumify" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Listen Free on SoundCloud
          </a>
        </div>
      </div>

      <div className="content-card">
        <h2>💡 Study Tips for Board Success</h2>
        <p>
          Maximize your board prep with these strategies:
        </p>
        <ul>
          <li><strong>Start Early:</strong> Begin dedicated board study 6-12 months before your exam</li>
          <li><strong>Use Active Recall:</strong> Practice questions are more effective than passive reading</li>
          <li><strong>Space Your Practice:</strong> Regular short sessions beat marathon cramming</li>
          <li><strong>Review Guidelines:</strong> Know the latest ACR recommendations thoroughly</li>
          <li><strong>Practice Time Management:</strong> Simulate exam conditions with timed question blocks</li>
        </ul>
      </div>
    </div>
  );
}
