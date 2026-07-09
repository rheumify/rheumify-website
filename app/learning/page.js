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

        /* ── TOPIC BLOCKS (modules listed inline) ── */
        .learning-topics { max-width: 900px; margin: 0 auto; padding: 0 2rem 3rem; }
        .topic-block { margin-bottom: 2.25rem; }
        .topic-block-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.75rem;
        }
        .topic-block-header .tb-icon { font-size: 1.9rem; min-width: 2.2rem; text-align: center; }
        .topic-block-header h3 {
          color: #1C1A17;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }
        .topic-block-header a.tb-title-link { color: #1C1A17; text-decoration: none; }
        .topic-block-header a.tb-title-link:hover { color: #1D5F74; }
        .topic-block-header .tb-analogy {
          color: #1D5F74;
          font-style: italic;
          font-size: 0.95rem;
          margin: 0;
        }
        .topic-block-meta { font-family: inherit; }

        .module-list {
          list-style: none;
          margin: 0;
          padding: 0;
          background: #FFFFFF;
          border: 1px solid #DDD6CB;
          border-radius: 12px;
          overflow: hidden;
        }
        .module-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1.3rem;
          border-bottom: 1px solid #EDE7DD;
          text-decoration: none;
          color: #1C1A17;
          transition: background 0.15s;
        }
        .module-link:last-child { border-bottom: none; }
        .module-link:hover { background: #F5F0EB; text-decoration: none; }
        .module-link .ml-num {
          font-size: 0.78rem;
          font-weight: 700;
          color: #7A7268;
          min-width: 2.4rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .module-link .ml-title { flex: 1; font-size: 1rem; font-weight: 500; }
        .module-link .ml-meta { color: #1D5F74; font-size: 0.85rem; font-weight: 600; white-space: nowrap; }
        .module-link.coming-soon { opacity: 0.55; cursor: default; pointer-events: none; }
        .module-link.coming-soon .ml-meta { color: #7A7268; }

        /* ── COMING SOON TOPIC CARDS ── */
        .topic-card-coming-soon {
          display: flex;
          gap: 1.5rem;
          background: #FFFFFF;
          border: 1px solid #DDD6CB;
          border-radius: 14px;
          padding: 1.5rem 1.75rem;
          margin-bottom: 1.25rem;
          opacity: 0.6;
        }
        .topic-card-icon { font-size: 2.2rem; min-width: 2.5rem; text-align: center; padding-top: 0.1rem; }
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
        .topic-card-content h3 { color: #1C1A17; font-size: 1.2rem; margin-bottom: 0.2rem; }
        .topic-card-analogy { color: #1D5F74; font-style: italic; font-size: 0.97rem; margin-bottom: 0.5rem; }
        .topic-card-description { color: #4A4540; font-size: 0.95rem; line-height: 1.65; }
        .subhead { color: #7A7268; font-size: 0.95rem; max-width: 900px; margin: 0 auto 1rem; padding: 0 2rem; }
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

      <p className="subhead">Jump straight to any module below.</p>

      <section className="learning-topics">
        <h2 className="section-title">Topics</h2>

        <div className="topic-block">
          <div className="topic-block-header">
            <span className="tb-icon">🏠</span>
            <div>
              <h3><a className="tb-title-link" href="/learning/biologics">Rheumatology Biologics</a></h3>
              <p className="tb-analogy">&ldquo;The Memory Palace&rdquo; &mdash; A House &middot; free on Substack</p>
            </div>
          </div>
          <ul className="module-list">
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologics-module-1?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 1</span><span className="ml-title">The Garden Hose &amp; the Labeling System</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologics-module-2?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 2</span><span className="ml-title">The Front Door &mdash; IL-1 Inhibitors</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologic-module-3?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 3</span><span className="ml-title">The Thermostat &mdash; IL-6 Inhibitors</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologics-module-4?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 4</span><span className="ml-title">The TV &mdash; IL-17 &amp; IL-12/23</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologics-module-5?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 5</span><span className="ml-title">The Kitchen Freezer &mdash; TNF Inhibitors</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologics-module?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 6</span><span className="ml-title">B-Cell Death Row + Other Key Players</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologics-module-7?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 7</span><span className="ml-title">The Garage &mdash; JAK &amp; TYK2 Inhibitors</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/biologics-module-8?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 8</span><span className="ml-title">The Backyard &mdash; PDE4 Inhibitor</span><span className="ml-meta">Substack &#8599;</span></a></li>
          </ul>
        </div>

        <div className="topic-block">
          <div className="topic-block-header">
            <span className="tb-icon">🏦</span>
            <div>
              <h3><a className="tb-title-link" href="/learning/aps">Antiphospholipid Syndrome</a></h3>
              <p className="tb-analogy">&ldquo;Your Blood Is a Bank&rdquo; &mdash; free on Substack</p>
            </div>
          </div>
          <ul className="module-list">
            <li><span className="module-link coming-soon"><span className="ml-num">Mod 1</span><span className="ml-title">Decoding the Labs</span><span className="ml-meta">Coming soon</span></span></li>
            <li><span className="module-link coming-soon"><span className="ml-num">Mod 2</span><span className="ml-title">When Accounts Get Frozen</span><span className="ml-meta">Coming soon</span></span></li>
            <li><span className="module-link coming-soon"><span className="ml-num">Mod 3</span><span className="ml-title">Unfreezing the Accounts</span><span className="ml-meta">Coming soon</span></span></li>
          </ul>
        </div>

        <div className="topic-block">
          <div className="topic-block-header">
            <span className="tb-icon">🦴</span>
            <div>
              <h3><a className="tb-title-link" href="/learning/osteoporosis">Osteoporosis</a></h3>
              <p className="tb-analogy">A six-part series &mdash; free on Substack</p>
            </div>
          </div>
          <ul className="module-list">
            <li><a className="module-link" href="https://rheumify.substack.com/p/osteoporosis-module-1?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 1</span><span className="ml-title">Osteoporosis Module 1</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/osteoporosis-module-ii?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 2</span><span className="ml-title">Osteoporosis Module 2</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/osteoporosis-module-iii?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 3</span><span className="ml-title">Osteoporosis Module 3</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/osteoporosis-module-iv?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 4</span><span className="ml-title">Osteoporosis Module 4</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/osteoporosis-module-v?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 5</span><span className="ml-title">Osteoporosis Module 5</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/osteoporosis-module-vi?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 6</span><span className="ml-title">Osteoporosis Module 6</span><span className="ml-meta">Substack &#8599;</span></a></li>
          </ul>
        </div>

        <div className="topic-block">
          <div className="topic-block-header">
            <span className="tb-icon">🛡️</span>
            <div>
              <h3><a className="tb-title-link" href="/learning/immunology">Immunology</a></h3>
              <p className="tb-analogy">A module series &mdash; free on Substack</p>
            </div>
          </div>
          <ul className="module-list">
            <li><a className="module-link" href="https://rheumify.substack.com/p/immunology-module-1?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 1</span><span className="ml-title">Immunology Module 1</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/immunology-module-2?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 2</span><span className="ml-title">Immunology Module 2</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/immunology-module-3?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 3</span><span className="ml-title">Immunology Module 3</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/immunology-module-4?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 4</span><span className="ml-title">Immunology Module 4</span><span className="ml-meta">Substack &#8599;</span></a></li>
            <li><a className="module-link" href="https://rheumify.substack.com/p/immunology-module-5?r=5swh49" target="_blank" rel="noopener noreferrer"><span className="ml-num">Mod 5</span><span className="ml-title">Immunology Module 5</span><span className="ml-meta">Substack &#8599;</span></a></li>
          </ul>
        </div>

        <div className="topic-card-coming-soon">
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

        <div className="topic-card-coming-soon">
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

        <div className="topic-card-coming-soon">
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
