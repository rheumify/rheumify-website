export const metadata = {
  title: 'Rheumatology Learning',
  description: 'Master complex rheumatology topics through analogy-based 5-minute modules. Board-prep ready, evidence-based content by Dr. Alison Bays.',
};

export default function LearningPage() {
  return (
    <main className="main">
      <div className="learning-hero">
        <p className="breadcrumb"><a href="/">Home</a> &gt; Learning</p>
        <h1 className="page-title">Rheumatology Learning</h1>
        <p className="learning-subtitle">
          Master complex topics through analogy-based 5-minute modules
        </p>
        <p className="learning-description">
          Each topic is taught through a memorable analogy that makes even the most complex
          pathophysiology stick. Modules are designed for busy clinicians — 5 minutes each,
          board-prep ready, with interactive self-assessment. Built on the 2023 ACR/EULAR criteria
          and current evidence.
        </p>
      </div>

      <section className="learning-topics">
        <h2 className="section-title">Topics</h2>

        <a href="/learning/aps" className="topic-card topic-card-active">
          <div className="topic-card-icon">🏦</div>
          <div className="topic-card-content">
            <div className="topic-card-tags">
              <span className="topic-tag">3 Modules</span>
              <span className="topic-tag">15 min</span>
              <span className="topic-tag">ABIM 9%</span>
              <span className="topic-tag tag-difficulty">Intermediate</span>
            </div>
            <h3>Antiphospholipid Syndrome</h3>
            <p className="topic-card-analogy">&ldquo;Your Blood Is a Bank&rdquo;</p>
            <p className="topic-card-description">
              Master APS labs, clinical manifestations, and management through a banking analogy.
              When the fraud detection system goes rogue, accounts get frozen — and the consequences
              depend on which branch gets hit. Covers the 2023 ACR/EULAR classification criteria,
              the TRAPS trial, and catastrophic APS.
            </p>
            <span className="topic-card-cta">Start Learning →</span>
          </div>
        </a>

        <div className="topic-card topic-card-coming-soon">
          <div className="topic-card-icon">🔥</div>
          <div className="topic-card-content">
            <div className="topic-card-tags">
              <span className="topic-tag">Coming Soon</span>
            </div>
            <h3>Vasculitis</h3>
            <p className="topic-card-analogy">&ldquo;The Highway System&rdquo;</p>
            <p className="topic-card-description">
              Large, medium, and small vessel vasculitis as a highway network under attack —
              from interstate highways (large vessel) to neighborhood streets (small vessel).
            </p>
          </div>
        </div>

        <div className="topic-card topic-card-coming-soon">
          <div className="topic-card-icon">🦋</div>
          <div className="topic-card-content">
            <div className="topic-card-tags">
              <span className="topic-tag">Coming Soon</span>
            </div>
            <h3>Systemic Lupus Erythematosus</h3>
            <p className="topic-card-analogy">&ldquo;The Overzealous Security System&rdquo;</p>
            <p className="topic-card-description">
              When the immune system's security guards can't tell friend from foe —
              multi-organ autoimmunity through the lens of a building's security system gone haywire.
            </p>
          </div>
        </div>

        <div className="topic-card topic-card-coming-soon">
          <div className="topic-card-icon">🔧</div>
          <div className="topic-card-content">
            <div className="topic-card-tags">
              <span className="topic-tag">Coming Soon</span>
            </div>
            <h3>Rheumatoid Arthritis</h3>
            <p className="topic-card-analogy">&ldquo;The Factory Floor&rdquo;</p>
            <p className="topic-card-description">
              Joint destruction as a factory where the maintenance crew starts dismantling
              the machinery — from early synovitis to erosive disease and treatment targets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
