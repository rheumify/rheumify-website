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

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-image">
            <img src="/dr-alison-bays.jpg" alt="Dr. Alison Bays, MD - Board-certified rheumatologist and creator of Rheumify" />
          </div>
          <div className="about-content">
            <h2>About <span>Dr. Alison Bays</span></h2>
            <div className="about-credentials">
              <div className="credential-item">
                <span className="credential-icon credential-icon-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </span>
                <div>
                  <h4>Academic Excellence</h4>
                  <p>Dedicated academic rheumatologist with 10+ years of experience in clinical practice, medical education, and research.</p>
                </div>
              </div>
              <div className="credential-item">
                <span className="credential-icon credential-icon-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </span>
                <div>
                  <h4>Medical Education</h4>
                  <p>Fellowship curriculum development, board exam preparation strategies, and educational technology integration.</p>
                </div>
              </div>
              <div className="credential-item">
                <span className="credential-icon credential-icon-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </span>
                <div>
                  <h4>Clinical Expertise</h4>
                  <p>Specializes in vasculitis, especially giant cell arteritis, and medical technology in rheumatology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Selection */}
      <section className="audience-section">
        <h2 className="section-title">Resources for <span>Every Stage</span> of Your Journey</h2>
        <div className="audience-grid">
          <a href="/fellows" className="audience-card">
            <div className="icon icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h3>For Rheumatologists & Fellows</h3>
            <p>Board prep, manuscript planning, ACR guidelines podcast, citation tools, and ACR Convergence highlights - all in one place.</p>
          </a>

          <a href="/residents" className="audience-card coming-soon">
            <div className="icon icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <h3>For Internal Medicine Residents</h3>
            <p>Build your rheumatology foundation with resources designed for your rotation and board prep.</p>
            <span className="coming-soon-badge">Coming Soon</span>
          </a>

          <a href="/students" className="audience-card coming-soon">
            <div className="icon icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3>For Medical Students</h3>
            <p>Discover the fascinating world of rheumatology with introductory resources and study guides.</p>
            <span className="coming-soon-badge">Coming Soon</span>
          </a>

          <a href="/patients" className="audience-card">
            <div className="icon icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>Patient Resources</h3>
            <p>Learn about rheumatic conditions, find clinic information, and understand your diagnosis and treatment options.</p>
          </a>

          <a href="/tools/scriptswap" className="audience-card">
            <div className="icon icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
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
            <h3><a href="/fellows" style={{ color: 'inherit', textDecoration: 'none' }}>Rheumify Question Bank</a></h3>
            <p>
              The most comprehensive web-based platform for rheumatology fellows preparing for ABIM board certification.
              AI-created content curated and reviewed by a board-certified rheumatologist. Contains both a question bank
              as well as spaced repetition flashcards.
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
              Over 500 board-style questions and 300+ flashcards covering all rheumatology subspecialties with detailed explanations.
            </p>
            <div className="product-buttons">
              <a href="https://buy.stripe.com/dRmeVc49F0ct9xVcMJc3m03" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Sign up: $15/month
              </a>
              <a href="https://buy.stripe.com/14A14mdKf2kB5hFbIFc3m04" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Sign up: $119/year (Save $61)
              </a>
            </div>
          </div>

          <div className="product-card">
            <h3><a href="https://acr2025-vasculitis-ozg9.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>ACR Convergence 2025 Vasculitis Resources</a></h3>
            <p>
              A curated collection of vasculitis highlights from ACR Convergence 2025 in Chicago.
              Includes key trial updates, abstract links, and news coverage organized by disease.
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
              Quick access to SELECT-GCA, METOGiA, MANDARA, and other important vasculitis abstracts with direct links to sources.
            </p>
            <div className="product-buttons">
              <a href="https://acr2025-vasculitis-ozg9.vercel.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View ACR 2025 Resources
              </a>
            </div>
          </div>

          <div className="product-card">
            <h3>RheumCast</h3>
            <p>
              A free AI-generated podcast with two hosts discussing the current ACR Clinical Practice Guidelines.
              Stay up to date with the latest recommendations while commuting or exercising.
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
              Listen to bite-sized episodes on GCA, RA, lupus, Kawasaki disease, and more - perfect for learning on the go.
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
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
              Auto-lookup journal impact factors and acceptance rates. Track all your manuscripts in one organized dashboard.
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
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
              Paste your references, pick a style, and copy a perfectly formatted bibliography in seconds.
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
