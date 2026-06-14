export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master Rheumatology: <span>Board Prep, Question Bank & Clinical Tools</span></h1>
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
            <img src="/dr-alison-bays.jpg" alt="Dr. Alison Bays, MD - Board-certified academic rheumatologist and creator of Rheumify" width="1200" height="800" decoding="async" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
          </div>
          <div className="about-content">
            <h2>About <span>Dr. Alison Bays</span></h2>
            <p style={{ marginBottom: '1.5rem' }}>
              <a href="https://rheumify.substack.com" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'var(--purple-light)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Follow the Journey on Substack
              </a>
            </p>
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

      {/* Continuously Updated */}
      <section className="products-section" style={{ background: 'var(--navy-dark)' }}>
        <h2 className="section-title">Reviewed &amp; Updated <span>Every Day</span></h2>
        <div className="products-grid">
          <div className="product-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              Most board prep is written once and left to age. Rheumify is different. I personally review questions every day — sharpening explanations, fixing anything a user flags, retiring what's outdated, and adding new questions as guidelines and trials change.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              When a guideline updates or a trial changes practice, the questions change with it — not in the next edition, but right away. You're always studying the current standard of care, from someone who treats these patients and teaches this material.
            </p>
            <p style={{ color: 'var(--purple-light)', fontWeight: 600, margin: 0 }}>
              — Dr. Alison Bays, MD, board-certified academic rheumatologist
            </p>
            <p style={{ marginTop: '1.25rem', marginBottom: 0 }}>
              <a href="https://substack.com/@rheumify" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'var(--purple-light)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Learn how Rheumify is built — I write openly about the process on Substack →
              </a>
            </p>
            <p style={{ marginTop: '0.6rem', marginBottom: 0 }}>
              <a href="https://bsky.app/profile/rheumify.bsky.social" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'var(--purple-light)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19a4.5 4.5 0 1 0 0-9h-1.8A7 7 0 1 0 4 15.9"/>
                </svg>
                Follow along on Bluesky — frequent rheum posts, Mnemonic Mondays, and more →
              </a>
            </p>
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

          <a href="/patients" className="audience-card">
            <div className="icon icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>Patient Resources</h3>
            <p>Learn about rheumatic conditions, find clinic information, and understand your diagnosis and treatment options.</p>
          </a>

          <a href="/learning" className="audience-card">
            <div className="icon icon-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3>Learning Modules</h3>
            <p>Free, board-focused rheumatology lessons with analogies, clinical pearls, and quick quizzes covering high-yield topics.</p>
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
              AI-created content curated and reviewed by a board-certified academic rheumatologist. Contains both a question bank
              as well as spaced repetition flashcards.
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
              Over 550 board-style questions and 700+ flashcards covering all of rheumatology with detailed explanations - reviewed and updated daily.
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
        </div>
      </section>

      {/* How Rheumify Compares */}
      <section className="products-section" style={{ background: 'var(--navy-dark)' }}>
        <h2 className="section-title">How Rheumify <span>Compares</span></h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="module-table-wrapper">
            <table className="module-table">
              <thead>
                <tr>
                  <th>Question bank</th>
                  <th>Questions</th>
                  <th>Lowest annual cost</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(196, 181, 224, 0.12)' }}>
                  <td><strong>Rheumify</strong></td>
                  <td>550+ questions, 700+ flashcards</td>
                  <td><strong>$119/year</strong> (or $15/mo)</td>
                </tr>
                <tr>
                  <td>Rheum Review</td>
                  <td>~250 questions</td>
                  <td>$399/year (or $99/mo)</td>
                </tr>
                <tr>
                  <td>RheumWorld</td>
                  <td>1,400+ questions</td>
                  <td>$599/year (or $199/mo)</td>
                </tr>
                <tr>
                  <td>BoardVitals</td>
                  <td>400+ questions</td>
                  <td>$299 / 6 months (longest plan)</td>
                </tr>
                <tr>
                  <td>In-person board review course</td>
                  <td>Multi-day lectures (e.g., ACR, UCSF)</td>
                  <td>~$400–$600+ registration, plus travel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ maxWidth: '820px', margin: '1.5rem auto 0', lineHeight: '1.7', textAlign: 'center', color: 'var(--gray-light)' }}>
            Keeping high-quality board prep affordable is a core commitment at Rheumify — not a limited-time launch discount. A full year of Rheumify costs about the same as a single month of most competitors, it's updated every day, and it's backed by name by the board-certified rheumatologist who built it.
          </p>
          <p style={{ maxWidth: '820px', margin: '0.75rem auto 0', fontSize: '0.8rem', opacity: 0.6, textAlign: 'center' }}>
            Competitor pricing as of June 2026 and subject to change; check each provider for current rates.
          </p>
        </div>
      </section>
    </>
  );
}
