export const metadata = {
  title: 'ABIM Rheumatology Board Prep for Fellows',
  description: 'Rheumatology board review for fellows and recertifying physicians, from Dr. Alison Bays, MD: 550+ ABIM-style questions, flashcards, and a full exam-format guide.',
  keywords: ['rheumatology board review', 'ABIM rheumatology board prep', 'rheumatology question bank', 'rheumatology flashcards', 'fellowship board exam', 'rheumatology recertification', 'spaced repetition', 'exam format', 'certification prep'],
};

export default function FellowsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>For <span style={{ color: 'var(--purple-light)' }}>Rheumatologists & Fellows</span></h1>
        <p>
          Comprehensive resources for board preparation, continuing education, research productivity, and staying current with the latest in rheumatology.
        </p>
      </div>

      {/* Board Prep Section */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)' }}>Rheumify App - Board Prep & Knowledge Assessment</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          AI-created content curated and reviewed by a board-certified academic rheumatologist. Contains both a
          <strong> question bank</strong> with over 550 questions as well as <strong>spaced repetition flashcards</strong> with
          over 700 cards covering all of rheumatology.
        </p>
        <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
          Perfect for fellows preparing for initial certification or rheumatologists maintaining certification through board exams. Questions are reviewed and updated daily, with detailed per-choice explanations and PubMed-linked references to the primary literature where applicable.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://app.rheumify.org/pricing" className="btn btn-primary"
             style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)' }}>
            Subscribe: $25/month
          </a>
          <a href="https://app.rheumify.org/pricing" className="btn btn-secondary"
             style={{ borderColor: 'var(--purple-light)', color: 'var(--purple-light)' }}>
            Subscribe: $199/year (Save $101)
          </a>
        </div>
        <p style={{ marginTop: '0.85rem', fontSize: '0.9rem', opacity: 0.85 }}>
          Rheumatology fellow or trainee? Your rate is $15/month or $119/year (verification required) — <a href="https://app.rheumify.org/pricing" style={{ color: 'var(--purple-light)' }}>see fellow pricing</a>.
        </p>
        <a href="/question-analysis" style={{
          display: 'block',
          marginTop: '1.5rem',
          padding: '1.25rem',
          background: 'linear-gradient(135deg, rgba(196, 181, 224, 0.15), rgba(107, 72, 173, 0.15))',
          borderRadius: '12px',
          border: '2px solid var(--purple-light)',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.25rem', fontSize: '1.1rem' }}>
                Explore Question Analysis →
              </h3>
              <p style={{ margin: 0, opacity: 0.85, fontSize: '0.9rem', color: 'var(--text-color)' }}>
                Master test-taking strategies: question patterns, answer types, and clinical reasoning frameworks
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* How Rheumify Compares */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)' }}>How Rheumify Compares</h2>
        <div className="module-table-wrapper" style={{ marginTop: '1rem' }}>
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
                <td><strong>$199/year</strong> (or $25/mo)</td>
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
        <p style={{ marginTop: '1.5rem', lineHeight: '1.7' }}>
          Keeping high-quality board prep affordable is a core commitment at Rheumify — not a limited-time launch discount. A full year of Rheumify still costs less than most competitors charge for a few months, it's updated every day, and it's backed by name by the board-certified rheumatologist who built it.
        </p>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.7' }}>
          Rheumatology fellows and trainees pay even less — $119/year (or $15/month), verification required.
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.6 }}>
          Competitor pricing as of June 2026 and subject to change; check each provider for current rates.
        </p>
      </div>

      {/* Board Prep Guide link */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)' }}>How to Study for the Rheumatology Boards</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          A complete, no-hype guide to the ABIM rheumatology board exam: what is actually tested, how to plan your studying, why starting early and spaced repetition beat cramming, and current first-time pass rates.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="/rheumatology-board-prep" className="btn btn-primary"
             style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)' }}>
            Read the Board Prep Guide →
          </a>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)' }}>Free Learning Modules</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
          Board-focused rheumatology lessons covering high-yield topics, built around memorable analogies, clinical pearls, and quick self-check quizzes. Free to read - no account needed.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="/learning" className="btn btn-primary"
             style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)' }}>
            Explore Learning Modules →
          </a>
        </div>
      </div>

      {/* ACR Convergence 2025 */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)' }}>ACR Convergence 2025 Vasculitis Resources</h2>
        <p>
          A curated collection of vasculitis highlights from ACR Convergence 2025 in Chicago.
          Includes key trial updates, abstract links, and news coverage organized by disease.
        </p>
        <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.75rem' }}>
          Quick access to SELECT-GCA, METOGiA, MANDARA, and other important vasculitis abstracts with direct links to sources.
          Organized by condition: GCA, EGPA, IgG4-RD, and more.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem' }}>
          <a href="https://acr2025-vasculitis-ozg9.vercel.app/" className="btn btn-primary" target="_blank" rel="noopener noreferrer"
             style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)' }}>
            View ACR 2025 Resources
          </a>
        </div>
      </div>

      {/* Why Choose Rheumify */}
      <div className="content-card">
        <h2 style={{ color: 'var(--purple-light)' }}>Why Choose the Rheumify App?</h2>

        <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>AI-Generated, Physician-Reviewed Questions</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Board-style questions are AI-drafted, then validated by a board-certified academic rheumatologist — with detailed per-choice explanations and references linked to the primary literature on PubMed where applicable, so you can trust each answer and dig deeper.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M7 8h10"/>
                <path d="M7 12h10"/>
                <path d="M7 16h6"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>Spaced Repetition Flashcards</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Evidence-based algorithm optimizes flashcard timing for maximum retention of key concepts and clinical pearls.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>Progress Tracking</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Advanced analytics monitor performance, identify weak areas, and provide personalized recommendations.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '8px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"/>
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>Podcast Episodes</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Concise podcast episodes review key ACR clinical practice guidelines, providing on-the-go learning and quick refreshers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Tools */}
      <div className="content-card">
        <h2 style={{ color: 'var(--purple-light)' }}>Additional Tools & Resources</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>

          <div style={{ padding: '1.5rem', background: 'rgba(196, 181, 224, 0.1)', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.75rem' }}>ScriptCycle - Manuscript Planner</h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.6' }}>
              A free 2026 Notion planner with auto-lookup for journal impact factors. Track manuscripts from idea to publication.
            </p>
            <a href="https://www.notion.com/templates/scriptcycle" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"
               style={{ marginTop: '1rem', display: 'inline-block', borderColor: 'var(--purple-light)', color: 'var(--purple-light)' }}>
              Get Free Template
            </a>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(196, 181, 224, 0.1)', borderRadius: '12px' }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.75rem' }}>RheumCast - ACR Guidelines Podcast</h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.6' }}>
              AI-generated podcast breaking down ACR Clinical Practice Guidelines. Perfect for commutes and workouts.
            </p>
            <a href="https://soundcloud.com/rheumify" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"
               style={{ marginTop: '1rem', display: 'inline-block', borderColor: 'var(--purple-light)', color: 'var(--purple-light)' }}>
              Listen on SoundCloud
            </a>
          </div>

        </div>
      </div>

      {/* ABIM Board Exam Info */}
      <div className="content-card">
        <h2 style={{ color: 'var(--purple-light)' }}>ABIM Rheumatology Board Exam</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{
            padding: '1.5rem',
            background: 'var(--navy-dark)',
            borderRadius: '12px',
            border: '1px solid var(--purple-light)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Exam Format</h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              10-hour computer-based test with 240 multiple-choice questions (4 sessions of 60 questions) at Pearson VUE testing centers nationwide.
            </p>
          </div>
          <div style={{
            padding: '1.5rem',
            background: 'var(--navy-dark)',
            borderRadius: '12px',
            border: '1px solid var(--purple-light)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Pass Rates</h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              2025: 92% (285 examinees)<br/>
              2024: 90% (304 examinees)<br/>
              2023: 88% (256 examinees)<br/><br/>
              Average 5-year first-time pass rate: ~90%
            </p>
          </div>
          <div style={{
            padding: '1.5rem',
            background: 'var(--navy-dark)',
            borderRadius: '12px',
            border: '1px solid var(--purple-light)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Requirements</h3>
            <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
              ABIM Internal Medicine certification, completed ABIM-accredited rheumatology fellowship, and program director attestation of competency.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="content-card" style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--purple-dark), var(--navy-dark))',
        border: '2px solid var(--purple-light)'
      }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Ready to Start Studying?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
          Join rheumatologists and fellows who are using Rheumify to master rheumatology and ace their boards.
        </p>
        <div className="product-buttons" style={{ justifyContent: 'center', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://app.rheumify.org/pricing" className="btn btn-primary"
             style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}
