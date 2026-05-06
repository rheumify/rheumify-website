export const metadata = {
  title: 'Rheumatology Learning',
  description: 'Master complex rheumatology topics through analogy-based 5-minute modules. Board-prep ready, evidence-based content by Dr. Alison Bays.',
};

export default function LearningPage() {
  return (
    <main className="main">
      <style>{`
        /* ── LIGHT THEME (biologics palette) ── */
        body { background: #FAF8F5 !important; color: #1C1A17 !important; }
        .main { background: #FAF8F5; min-height: 100vh; }
        .page-title { color: #1C1A17; }
        .learning-subtitle { color: #4A4540; font-size: 1.15rem; }
        .learning-description { color: #4A4540; }
        .section-title { color: #1C1A17; }
        .breadcrumb { color: #7A7268; }
        .breadcrumb a { color: #1D5F74; }

        /* ── MEMORY PALACE EXPLAINER ── */
        .memory-palace-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 2.5rem;
        }
        .memory-palace-card {
          background: #FFFFFF;
          border: 1px solid #DDD6CB;
          border-radius: 14px;
          padding: 2rem 2.5rem;
        }
        .memory-palace-card h2 {
          color: #1C1A17;
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
        }
        .memory-palace-card p {
          color: #4A4540;
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }
        .memory-palace-card p:last-child { margin-bottom: 0; }
        .palace-examples {
          display: flex;
          gap: 1rem;
          margin-top: 1.25rem;
          flex-wrap: wrap;
        }
        .palace-example {
          background: #FAF8F5;
          border: 1px solid #DDD6CB;
          border-radius: 10px;
          padding: 0.9rem 1.2rem;
          flex: 1;
          min-width: 200px;
        }
        .palace-example .palace-icon {
          font-size: 1.6rem;
          margin-bottom: 0.4rem;
        }
        .palace-example .palace-topic {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #7A7268;
          margin-bottom: 0.2rem;
        }
        .palace-example .palace-name {
          font-weight: 600;
          color: #1C1A17;
          font-size: 0.97rem;
        }
        .palace-example .palace-desc {
          color: #7A7268;
          font-size: 0.85rem;
          margin-top: 0.2rem;
        }

        /* ── TOPIC CARDS ── */
        .learning-topics { max-width: 900px; margin: 0 auto; padding: 0 2rem 3rem; }
        .topic-card {
          display: flex;
          gap: 1.5rem;
          background: #FFFFFF;
          border: 1px solid #DDD6CB;
          border-radius: 14px;
          padding: 1.75rem 2rem;
          margin-bottom: 1.25rem;
          text-decoration: none;
          color: #1C1A17;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .topic-card-active:hover {
          border-color: #1D5F74;
          box-shadow: 0 3px 12px rgba(29,95,116,0.1);
          text-decoration: none;
        }
        .topic-card-coming-soon { opacity: 0.6; cursor: default; }
        .topic-card-icon {
          font-size: 2.2rem;
          min-width: 2.5rem;
          text-align: center;
          padding-top: 0.1rem;
        }
        .topic-card-content { flex: 1; }
        .topic-card-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.5rem; }
        .topic-tag {
          background: rgba(29,95,116,0.08);
          color: #1D5F74;
          border: 1px solid rgba(29,95,116,0.18);
          border-radius: 20px;
          padding: 0.15rem 0.6rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .tag-difficulty {
          background: rgba(108,99,255,0.08);
          color: #6C63FF;
          border-color: rgba(108,99,255,0.2);
        }
        .topic-card-content h3 { color: #1C1A17; font-size: 1.2rem; margin-bottom: 0.2rem; }
        .topic-card-analogy { color: #1D5F74; font-style: italic; font-size: 0.97rem; margin-bottom: 0.5rem; }
        .topic-card-description { color: #4A4540; font-size: 0.95rem; line-height: 1.65; margin-bottom: 0.75rem; }
        .topic-card-cta { color: #1D5F74; font-weight: 600; font-size: 0.9rem; }
      `}</style>

      <div className="learning-hero">
        <p className="breadcrumb"><a href="/">Home</a> &gt; Learning</p>
        <h1 className="page-title">Rheumatology Learning</h1>
        <p className="learning-subtitle">
          Master complex topics through analogy-based 5-minute modules
        </p>
      </div>

      <section className="memory-palace-section">
        <div className="memory-palace-card">
          <h2>How These Modules Work: The Memory Palace</h2>
          <p>
            A <strong>memory palace</strong> (also called the <em>method of loci</em>) is one of the oldest and most powerful memorization techniques in existence &mdash; used by ancient Greek orators, world memory champions, and medical students worldwide. The idea is simple: instead of trying to memorize a list of abstract facts, you <strong>mentally place each piece of information in a familiar location</strong> and then walk through that space to retrieve it.
          </p>
          <p>
            Our brains are remarkably good at spatial memory. We rarely forget the layout of a house we&rsquo;ve visited or the route we drive to work. Memory palaces exploit that strength &mdash; by anchoring new knowledge to places you already know, the information stops feeling like a list to memorize and starts feeling like a <strong>story you can walk through</strong>.
          </p>
          <p>
            Each topic on Rheumify has its own palace. Here&rsquo;s what&rsquo;s live so far:
          </p>
          <div className="palace-examples">
            <div className="palace-example">
              <div className="palace-icon">🏠</div>
              <div className="palace-topic">Rheumatology Biologics</div>
              <div className="palace-name">A House</div>
              <div className="palace-desc">Walk room by room — garden hose to backyard — to master every biologic class, mechanism, and indication.</div>
            </div>
            <div className="palace-example">
              <div className="palace-icon">🏦</div>
              <div className="palace-topic">Antiphospholipid Syndrome</div>
              <div className="palace-name">A Bank</div>
              <div className="palace-desc">The coagulation cascade is a fraud detection system gone rogue — freezing accounts across the body.</div>
            </div>
            <div className="palace-example" style={{opacity: 0.5}}>
              <div className="palace-icon">🛣️</div>
              <div className="palace-topic">Vasculitis (Coming Soon)</div>
              <div className="palace-name">A Highway System</div>
              <div className="palace-desc">Large, medium, and small vessel disease as a road network under attack.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-topics">
        <h2 className="section-title">Topics</h2>

        <a href="/learning/biologics" className="topic-card topic-card-active">
          <div className="topic-card-icon">🏠</div>
          <div className="topic-card-content">
            <div className="topic-card-tags">
              <span className="topic-tag">4 Steps</span>
              <span className="topic-tag">30 min</span>
              <span className="topic-tag">High Yield</span>
              <span className="topic-tag tag-difficulty">All Levels</span>
            </div>
            <h3>Rheumatology Biologics</h3>
            <p className="topic-card-analogy">&ldquo;The Memory Palace&rdquo; &mdash; A House</p>
            <p className="topic-card-description">
              Every biologic mechanism mapped to a room in your house. Walk from the garden hose
              (drug suffixes) through the front door (IL-1), living room (IL-6, IL-17), kitchen
              (TNF), laundry room (B cells), garage (JAK/TYK2), and backyard (PDE4). Includes
              dosing, FDA indications, and board-testable mnemonics for every drug.
            </p>
            <span className="topic-card-cta">Start Learning &rarr;</span>
          </div>
        </a>

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
              When the fraud detection system goes rogue, accounts get frozen &mdash; and the consequences
              depend on which branch gets hit. Covers the 2023 ACR/EULAR classification criteria,
              the TRAPS trial, and catastrophic APS.
            </p>
            <span className="topic-card-cta">Start Learning &rarr;</span>
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
              Large, medium, and small vessel vasculitis as a highway network under attack &mdash;
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
              When the immune system&rsquo;s security guards can&rsquo;t tell friend from foe &mdash;
              multi-organ autoimmunity through the lens of a building&rsquo;s security system gone haywire.
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
              the machinery &mdash; from early synovitis to erosive disease and treatment targets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
