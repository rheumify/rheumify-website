export const metadata = {
  title: 'Immunology — Learning Modules',
  description: 'An immunology series by Dr. Alison Bays, MD, MPH&TM. Each module is published free on Substack — foundational immunology for rheumatology board prep and clinical practice.',
};

export default function ImmunologyOverviewPage() {
  return (
    <main className="main">
      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; Immunology
        </p>
        <h1 className="page-title">Immunology</h1>
        <p className="learning-subtitle">A module series, free on Substack</p>
      </div>

      <section className="learning-topics">
        <div className="analogy-setup-card">
          <h2 className="section-title">About This Series</h2>
          <p>
            A multi-part walk through the immunology that underpins rheumatology. Each module is a
            focused, board-relevant lesson published free on Substack. Read them in order or jump to
            the one you need; click any module below to open the full post.
          </p>
        </div>
      </section>

      <section className="learning-topics">
        <h2 className="section-title">Modules</h2>

        <a href="https://rheumify.substack.com/p/immunology-module-1?r=5swh49" target="_blank" rel="noopener noreferrer" className="module-overview-card">
          <div className="module-overview-number">1</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Free on Substack</span>
            </div>
            <h3>Module 1</h3>
            <p className="topic-card-description">Read the full module free on Substack.</p>
            <span className="topic-card-cta">Read on Substack →</span>
          </div>
        </a>

        <a href="https://rheumify.substack.com/p/immunology-module-2?r=5swh49" target="_blank" rel="noopener noreferrer" className="module-overview-card">
          <div className="module-overview-number">2</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Free on Substack</span>
            </div>
            <h3>Module 2</h3>
            <p className="topic-card-description">Read the full module free on Substack.</p>
            <span className="topic-card-cta">Read on Substack →</span>
          </div>
        </a>

        <a href="https://rheumify.substack.com/p/immunology-module-3?r=5swh49" target="_blank" rel="noopener noreferrer" className="module-overview-card">
          <div className="module-overview-number">3</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Free on Substack</span>
            </div>
            <h3>Module 3</h3>
            <p className="topic-card-description">Read the full module free on Substack.</p>
            <span className="topic-card-cta">Read on Substack →</span>
          </div>
        </a>

        <a href="https://rheumify.substack.com/p/immunology-module-4?r=5swh49" target="_blank" rel="noopener noreferrer" className="module-overview-card">
          <div className="module-overview-number">4</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Free on Substack</span>
            </div>
            <h3>Module 4</h3>
            <p className="topic-card-description">Read the full module free on Substack.</p>
            <span className="topic-card-cta">Read on Substack →</span>
          </div>
        </a>

        <a href="https://rheumify.substack.com/p/immunology-module-5?r=5swh49" target="_blank" rel="noopener noreferrer" className="module-overview-card">
          <div className="module-overview-number">5</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Free on Substack</span>
            </div>
            <h3>Module 5</h3>
            <p className="topic-card-description">Read the full module free on Substack.</p>
            <span className="topic-card-cta">Read on Substack →</span>
          </div>
        </a>
      </section>
    </main>
  );
}
