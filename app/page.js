export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master Rheumatology with <span>Rheumify</span></h1>
          <p>
            The most comprehensive web-based platform for rheumatology - from preparing
            fellows for board exams to helping researchers organize and track their manuscripts.
          </p>
        </div>
      </section>

      {/* Audience Selection */}
      <section className="audience-section">
        <h2 className="section-title">Resources for <span>Every Stage</span> of Your Journey</h2>
        <div className="audience-grid">
          <a href="/rheumatologists" className="audience-card">
            <div className="icon">🩺</div>
            <h3>For Rheumatologists</h3>
            <p>Streamline your practice with our Notion planner, stay current with ACR guidelines through our AI podcast, and format citations effortlessly.</p>
          </a>

          <a href="/fellows" className="audience-card">
            <div className="icon">📚</div>
            <h3>For Rheumatology Fellows</h3>
            <p>Ace your ABIM board certification with our comprehensive question bank and spaced repetition flashcards, curated by board-certified rheumatologists.</p>
          </a>

          <a href="/residents" className="audience-card coming-soon">
            <div className="icon">🏥</div>
            <h3>For Internal Medicine Residents</h3>
            <p>Build your rheumatology foundation with resources designed for your rotation and board prep.</p>
            <span className="coming-soon-badge">Coming Soon</span>
          </a>

          <a href="/students" className="audience-card coming-soon">
            <div className="icon">🎓</div>
            <h3>For Medical Students</h3>
            <p>Discover the fascinating world of rheumatology with introductory resources and study guides.</p>
            <span className="coming-soon-badge">Coming Soon</span>
          </a>

          <a href="/patients" className="audience-card">
            <div className="icon">❤️</div>
            <h3>Patient Resources</h3>
            <p>Learn about rheumatic conditions, find clinic information, and understand your diagnosis and treatment options.</p>
          </a>

          <a href="/tools/scriptswap" className="audience-card">
            <div className="icon">🔧</div>
            <h3>Tools</h3>
            <p>Free utilities including ScriptSwap citation formatter and more to support your research and clinical work.</p>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title">Rheumify <span>Products</span></h2>
        <div className="products-grid">
          <div className="product-card">
            <h3>Rheumify Question Bank</h3>
            <p>
              The most comprehensive web-based platform for rheumatology fellows preparing for ABIM board certification.
              AI-created content curated and reviewed by a board-certified rheumatologist. Contains both a question bank
              as well as spaced repetition flashcards.
            </p>
            <div className="product-buttons">
              <a href="https://rheumify.glideapp.io" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Sign up: $15/month
              </a>
              <a href="https://rheumify.glideapp.io" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Sign up: $119/year
              </a>
            </div>
          </div>

          <div className="product-card">
            <h3>RheumCast</h3>
            <p>
              A free AI-generated podcast with two hosts discussing the current ACR Clinical Practice Guidelines.
              Stay up to date with the latest recommendations while commuting or exercising.
            </p>
            <div className="product-buttons">
              <a href="https://soundcloud.com/rheumify" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Listen on SoundCloud
              </a>
            </div>
          </div>

          <div className="product-card">
            <h3>ScriptCycle</h3>
            <p>
              A free 2026 Notion planner for Rheumatologists. Pre-loaded with conferences, abstract deadlines,
              and major journal requirements. Comes with 8 linked pages that help track manuscripts from ideas to publication.
            </p>
            <div className="product-buttons">
              <a href="https://www.notion.com/templates/scriptcycle" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Get Template
              </a>
            </div>
          </div>

          <div className="product-card">
            <h3>ScriptSwap</h3>
            <p>
              A free resource to quickly add references in any form and get a bibliography.
              Add multiple PMIDs or DOIs or URLs. Swap citation styles back and forth between Vancouver, APA, AMA, and more.
            </p>
            <div className="product-buttons">
              <a href="/tools/scriptswap" className="btn btn-primary">
                Use ScriptSwap
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
