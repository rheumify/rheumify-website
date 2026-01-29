import Link from 'next/link';

export const metadata = {
  title: 'Question Analysis | Rheumify',
  description: 'Learn about different question types, answer patterns, and clinical reasoning approaches used in rheumatology board exams.',
  keywords: ['ABIM question types', 'board exam strategy', 'clinical reasoning', 'rheumatology board prep'],
};

export default function QuestionAnalysisPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Question <span style={{ color: 'var(--purple-light)' }}>Analysis</span></h1>
        <p>
          Understanding question patterns, answer structures, and clinical reasoning frameworks to approach board-style questions with confidence.
        </p>
      </div>

      {/* Why Question Patterns Matter */}
      <div className="content-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Why Question Patterns Matter</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Research shows that high-performing students approach questions differently than those who struggle with standardized tests.
          A key study found that learners who struggle often demonstrate <strong>premature closure</strong> (stopping the thinking
          process after an initial diagnosis) and faulty knowledge application, while high performers systematically
          rule out alternatives before selecting an answer.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          By recognizing question patterns, you can:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          <li>Identify what cognitive task the question is testing</li>
          <li>Avoid pattern-specific traps</li>
          <li>Apply the right reasoning strategy for each type</li>
        </ul>
        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          <a href="https://pubmed.ncbi.nlm.nih.gov/26140127/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
            Heist BS, et al. Exploring Clinical Reasoning Strategies. J Grad Med Educ. 2014 →
          </a>
        </p>
      </div>

      {/* Three Main Categories */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>

        {/* Question Types Card */}
        <Link href="/question-analysis/question-types" style={{ textDecoration: 'none' }}>
          <div className="content-card" style={{
            borderLeft: '4px solid var(--purple-light)',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Question Pattern Types
                  <span style={{ fontSize: '1rem' }}>→</span>
                </h2>
                <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '1rem' }}>
                  Board-style questions follow predictable patterns. Recognizing these patterns helps you quickly
                  identify what's being asked and focus your clinical reasoning appropriately.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Next Best Step', 'Most Specific Test', 'Differential Diagnosis', 'Treatment Contraindication',
                    'Timing/Urgency', 'Red Flag Emergency', 'Lab Interpretation', 'Treatment Escalation',
                    'Complication Recognition', 'Exception to Rule'].map((type, i) => (
                    <span key={i} style={{
                      background: 'rgba(196, 181, 224, 0.2)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: 'var(--purple-light)'
                    }}>{type}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Answer Types Card */}
        <Link href="/question-analysis/answer-types" style={{ textDecoration: 'none' }}>
          <div className="content-card" style={{
            borderLeft: '4px solid var(--purple-light)',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Answer Choice Patterns
                  <span style={{ fontSize: '1rem' }}>→</span>
                </h2>
                <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '1rem' }}>
                  Understanding how answer choices are constructed helps you identify the correct answer and avoid common traps.
                  Each pattern type signals a specific test-taking strategy.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['The Outlier Pattern', 'Conservative vs Action', 'Specific Doses/Numbers', 'Three Stages of Management',
                    'Two Correct at Different Times'].map((type, i) => (
                    <span key={i} style={{
                      background: 'rgba(196, 181, 224, 0.2)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: 'var(--purple-light)'
                    }}>{type}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Clinical Reasoning Card */}
        <Link href="/question-analysis/clinical-reasoning" style={{ textDecoration: 'none' }}>
          <div className="content-card" style={{
            borderLeft: '4px solid var(--purple-light)',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Clinical Reasoning Frameworks
                  <span style={{ fontSize: '1rem' }}>→</span>
                </h2>
                <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '1rem' }}>
                  Understanding the cognitive skills tested on board examinations. Each type represents a different
                  cognitive skill that physicians use in practice.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Pattern Recognition', 'Multi-Step Problem Solving', 'Risk-Benefit Analysis', 'Guideline Application',
                    'Exception Recognition', 'Integration of Findings', 'Timing/Urgency Decision'].map((type, i) => (
                    <span key={i} style={{
                      background: 'rgba(196, 181, 224, 0.2)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: 'var(--purple-light)'
                    }}>{type}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Back to Fellows */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/fellows" style={{ color: 'var(--purple-light)' }}>
          ← Back to Rheumatologists & Fellows
        </Link>
      </div>
    </div>
  );
}
