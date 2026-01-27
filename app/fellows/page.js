export const metadata = {
  title: 'Rheumify App for Fellows | ABIM Board Prep',
  description: 'The most comprehensive web-based platform for rheumatology fellows preparing for ABIM board certification. AI-created content reviewed by board-certified rheumatologists.',
  keywords: ['rheumatology board prep', 'ABIM rheumatology', 'rheumatology question bank', 'rheumatology flashcards', 'fellowship board exam', 'spaced repetition'],
};

export default function FellowsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Rheumify App for <span style={{ color: 'var(--purple-light)' }}>Fellows</span></h1>
        <p>
          The most comprehensive web-based platform for rheumatology fellows preparing for ABIM board certification.
        </p>
      </div>

      {/* Main Product Overview */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)' }}>About the Rheumify App</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          AI-created content curated and reviewed by a board-certified rheumatologist. Contains both a
          <strong> question bank</strong> with over 500 questions as well as <strong>spaced repetition flashcards</strong> with
          over 300 cards covering all rheumatology subspecialties.
        </p>
        <div className="product-buttons" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://buy.stripe.com/dRmeVc49F0ct9xVcMJc3m03" className="btn btn-primary" target="_blank" rel="noopener noreferrer"
             style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)' }}>
            Sign up: $15/month
          </a>
          <a href="https://buy.stripe.com/14A14mdKf2kB5hFbIFc3m04" className="btn btn-secondary" target="_blank" rel="noopener noreferrer"
             style={{ borderColor: 'var(--purple-light)', color: 'var(--purple-light)' }}>
            Sign up: $119/year (Save $61)
          </a>
        </div>
      </div>

      {/* Mastering Board Questions: 5-Step Method */}
      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1.5rem' }}>Mastering Board Questions: Your 5-Step Method</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
          Learn a systematic approach to tackle any board-style question with confidence. Each question in Rheumify includes
          detailed explanations that reinforce these clinical reasoning principles.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Step 1 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1.25rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'var(--navy-dark)'
            }}>
              1
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Deconstruct the Prompt</h3>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.6' }}>
                Identify keywords, patient context, and the precise question being asked to avoid misinterpretation.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1.25rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'var(--navy-dark)'
            }}>
              2
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Analyze Clinical Data</h3>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.6' }}>
                Thoroughly review all provided laboratory results, imaging, and physical examination findings for critical clues.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1.25rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'var(--navy-dark)'
            }}>
              3
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Formulate a Differential</h3>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.6' }}>
                Based on the evidence, generate a concise list of possible diagnoses or management strategies.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1.25rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'var(--navy-dark)'
            }}>
              4
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Select the Best Answer</h3>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.6' }}>
                Critically evaluate each option, ruling out distractors and choosing the most accurate and appropriate response.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
            padding: '1.25rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'var(--navy-dark)'
            }}>
              5
            </div>
            <div>
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Learn from Explanations</h3>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.6' }}>
                Review the rationale for both correct and incorrect answers to reinforce your understanding and knowledge retention.
              </p>
            </div>
          </div>
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
              <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>AI-Generated Questions</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Advanced AI creates board-style questions covering all rheumatology subspecialties, validated by a board-certified rheumatologist.
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

      {/* Platform Features */}
      <div className="content-card">
        <h2 style={{ color: 'var(--purple-light)' }}>Platform Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(196, 181, 224, 0.1)', borderRadius: '12px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 1rem',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            <h3 style={{ color: 'var(--purple-light)' }}>Mobile Optimized</h3>
            <p style={{ opacity: 0.9 }}>Study anywhere with our responsive platform optimized for all devices with offline capability.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(196, 181, 224, 0.1)', borderRadius: '12px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 1rem',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 style={{ color: 'var(--purple-light)' }}>Expert-Reviewed Content</h3>
            <p style={{ opacity: 0.9 }}>Every question and flashcard meticulously reviewed by board-certified rheumatologists.</p>
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
              2024: 90% (304 examinees)<br/>
              2023: 88% (256 examinees)<br/>
              2022: 87% (270 examinees)<br/><br/>
              Average 5-year first-time pass rate: ~91%
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

      {/* Comparison Table */}
      <div className="content-card">
        <h2 style={{ color: 'var(--purple-light)' }}>How Rheumify Compares</h2>
        <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.95rem'
          }}>
            <thead>
              <tr style={{ background: 'var(--purple-dark)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--purple-light)' }}>Resource</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--purple-light)' }}>Type</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--purple-light)' }}>Questions</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--purple-light)' }}>Flashcards</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--purple-light)' }}>Mobile</th>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--purple-light)' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: 'rgba(196, 181, 224, 0.15)' }}>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 'bold', color: 'var(--purple-light)' }}>Rheumify</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Web Platform</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>AI + Expert &gt;500</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Spaced Repetition &gt;300 cards</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Optimized</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>$119/year OR $15/month</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ACR CARE</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Online Module</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>60/year (now inactive)</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>$300+</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>BoardVitals</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Question Bank</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>400+</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Yes</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>$199-399</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>StatPearls</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Review Course</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>734</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Yes</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>$299+</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Healio Rheumatology</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Question Bank</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>268</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-</td>
                <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Free</td>
              </tr>
            </tbody>
          </table>
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
          Join rheumatology fellows who are using Rheumify to prepare for their ABIM board certification.
        </p>
        <div className="product-buttons" style={{ justifyContent: 'center', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://buy.stripe.com/14A14mdKf2kB5hFbIFc3m04" className="btn btn-primary" target="_blank" rel="noopener noreferrer"
             style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}
