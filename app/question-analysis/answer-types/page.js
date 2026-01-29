import Link from 'next/link';

export const metadata = {
  title: 'Answer Choice Patterns | Rheumify',
  description: 'Understanding how answer choices are constructed to identify correct answers and avoid common traps.',
  keywords: ['ABIM answer patterns', 'distractor patterns', 'board exam strategy', 'rheumatology board prep'],
};

export default function AnswerTypesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Answer Choice <span style={{ color: 'var(--purple-light)' }}>Patterns</span></h1>
        <p>
          Understanding how answer choices are constructed helps you identify the correct answer and avoid common traps.
          Each pattern type signals a specific test-taking strategy.
        </p>
      </div>

      {/* How Answer Choices Are Designed */}
      <div className="content-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>How Answer Choices Are Designed</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          According to the NBME Item-Writing Guide, well-designed multiple-choice questions follow specific principles.
          The correct answer should be the "most" correct option, while distractors (wrong answers) should be plausible
          enough to attract test-takers who don't know the material. A good distractor isn't random—it's diagnostically
          informative and represents a common misconception or mistake.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          <strong>Homogeneity:</strong> Quality questions have answer choices that are homogeneous—they all address the
          lead-in question in the same manner. For example, if asked "What is the most likely diagnosis?", all options
          should be diagnoses, not a mix of diagnoses, tests, and treatments.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          <strong>The Preferred Distractor:</strong> Research shows that most questions have a "preferred distractor"—the
          wrong answer chosen most frequently. This is why you can often narrow down to two choices: the correct answer
          versus the preferred distractor. The key is recognizing what distinguishes them.
        </p>
        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          <a href="https://www.nbme.org/educators/item-writing-guide" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
            NBME Item-Writing Guide →
          </a>
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>

        {/* 1. The Outlier Pattern */}
        <div style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>1. The Outlier Pattern</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            Three answer choices share a common theme, mechanism, or category, while one stands apart.
            According to educational assessment research, outlier distractors—those that are obviously dissimilar—
            can signal either a poorly designed question OR a deliberate test of exception recognition.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>When to consider the outlier:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>The outlier is often <strong>correct</strong> when the question asks for an exception, contraindication, or distinguishing feature</li>
            <li>If the question asks for the "most appropriate" action and three answers follow a theme, the outlier is usually the <strong>distractor</strong></li>
            <li>Well-designed questions aim for homogeneity—when one choice stands out, ask why</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> Which biomarker combination best monitors anti-MDA5 dermatomyositis?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Lymphocyte count and CRP levels<br/>
              B) Anti-MDA5 antibody titer and ferritin levels ✓<br/>
              C) ESR and creatine kinase levels<br/>
              D) Complement levels and ANA titer
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: Options A, C, and D are generic inflammatory markers. Option B is the specific biomarker combination for MDA5-DM—the outlier that's correct because it's disease-specific.</em>
            </p>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
            <a href="https://journals.sagepub.com/doi/10.3102/0034654317726529" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Gierl MJ, et al. Developing, Analyzing, and Using Distractors for Multiple-Choice Tests. Rev Educ Res. 2017 →
            </a>
          </p>
        </div>

        {/* 2. Conservative vs Action */}
        <div style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>2. Conservative vs Action</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            Answer choices range from watchful waiting or supportive care to aggressive intervention.
            This pattern tests your ability to calibrate treatment intensity to the clinical situation.
            The NBME discourages "red herrings"—data designed to mislead—so the information in the vignette
            should guide you toward the appropriate level of action.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Consider disease severity, acuity, and patient factors</li>
            <li>Acute life-threatening presentations favor <strong>action</strong></li>
            <li>Stable or mild presentations favor <strong>conservative approaches</strong></li>
            <li>Red flags = act decisively; no red flags = consider observation</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A patient with scleroderma renal crisis and BP 196/118. Initial management?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Start ACE inhibitor and titrate aggressively ✓<br/>
              B) Initiate hemodialysis immediately<br/>
              C) Discontinue steroids and start pulse methylprednisolone<br/>
              D) Start therapeutic plasma exchange
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: Despite the crisis presentation, option A (ACE inhibitor) is correct—it's the proven first-line therapy. More aggressive options (B, C, D) are either harmful or not first-line, despite seeming more decisive.</em>
            </p>
          </div>
        </div>

        {/* 3. Specific Doses/Numbers */}
        <div style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>3. Specific Doses/Numbers</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            Answer choices contain specific dosages, frequencies, durations, or numeric thresholds.
            These questions test memorization of guidelines and your ability to apply them in context.
            According to NBME principles, options should be similar in specificity—so when numbers appear,
            expect all choices to contain numbers arranged in a logical order.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Know the standard doses for high-yield medications</li>
            <li>Extremely high or low doses are usually distractors</li>
            <li>Consider renal/hepatic adjustment if mentioned in the stem</li>
            <li>Duration questions often test knowledge of treatment timelines</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A patient with giant cell arteritis and vision symptoms. What is the appropriate initial prednisone dose?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) 10 mg daily<br/>
              B) 20 mg daily<br/>
              C) 40-60 mg daily ✓<br/>
              D) 100 mg daily
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: GCA with vision symptoms requires high-dose steroids (1 mg/kg, typically 40-60 mg). Options A and B are too low; option D is higher than standard recommendations unless using IV methylprednisolone initially.</em>
            </p>
          </div>
        </div>

        {/* 4. Three Stages of Management */}
        <div style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>4. Three Stages of Management</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            Answer choices represent different phases of treatment: initial/induction, maintenance, or escalation therapy.
            These questions test your understanding of treatment algorithms and where the patient falls within them.
            The key is matching the patient's current disease state to the appropriate therapeutic phase.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Identify where the patient is in their disease course: Newly diagnosed? In remission? Relapsing?</li>
            <li>Match the treatment stage to the clinical scenario</li>
          </ul>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Key stages to recognize:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li><strong>Induction therapy:</strong> High-intensity treatment to control active disease (e.g., cyclophosphamide for severe vasculitis)</li>
            <li><strong>Maintenance therapy:</strong> Lower-intensity treatment to prevent flares after remission (e.g., azathioprine, rituximab)</li>
            <li><strong>Rescue/escalation therapy:</strong> Treatment for refractory disease or relapse (e.g., switching mechanism of action)</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A patient with ANCA-associated vasculitis achieved remission after 6 months of cyclophosphamide and prednisone. What is the most appropriate next step?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Continue cyclophosphamide for another 6 months<br/>
              B) Switch to azathioprine or rituximab for maintenance ✓<br/>
              C) Stop all immunosuppression<br/>
              D) Add methotrexate to cyclophosphamide
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: After achieving remission with induction (cyclophosphamide), the patient transitions to maintenance therapy (B). Continuing cyclophosphamide (A) increases toxicity risk. Stopping all therapy (C) risks relapse. Adding more immunosuppression (D) is inappropriate after remission.</em>
            </p>
          </div>
        </div>

        {/* 5. Two Correct at Different Times */}
        <div style={{
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>5. Two Correct at Different Times</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            Two answers seem correct, but one is appropriate <em>now</em> while the other would be appropriate at a
            different disease stage or time point. This pattern tests temporal reasoning—understanding not just what
            to do, but when to do it. The NBME designs questions with focused lead-ins ("at this time," "next step")
            precisely to test this distinction.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Pay close attention to temporal cues: "initial," "next," "at this time," "after failing first-line"</li>
            <li>The timing determines which correct answer is THE correct answer</li>
            <li>Both options may be part of the treatment algorithm—the question tests sequencing</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> For lupus nephritis with extra-renal manifestations, which triple therapy?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) MMF + calcineurin inhibitor + steroids<br/>
              B) MMF + belimumab + steroids ✓
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: Both are valid triple therapy regimens, but the presence of extra-renal manifestations makes belimumab preferable (better for mucocutaneous/musculoskeletal disease). CNI would be favored for nephrotic-range proteinuria without extra-renal disease.</em>
            </p>
          </div>
        </div>

        {/* References */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(196, 181, 224, 0.3)' }}>
          <h4 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>References</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '2', fontSize: '0.9rem' }}>
            <li>
              <a href="https://www.nbme.org/educators/item-writing-guide" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                NBME Item-Writing Guide: Constructing Written Test Questions (6th Edition)
              </a>
            </li>
            <li>
              <a href="https://journals.sagepub.com/doi/10.3102/0034654317726529" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                Gierl MJ, et al. Developing, Analyzing, and Using Distractors for Multiple-Choice Tests in Education. Review of Educational Research. 2017;87(6):1082-1116.
              </a>
            </li>
            <li>
              <a href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2021.731763/full" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                The Position of Distractors in Multiple-Choice Test Items. Frontiers in Education. 2021.
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Back to Question Analysis */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/question-analysis" style={{ color: 'var(--purple-light)' }}>
          ← Back to Question Analysis
        </Link>
      </div>
    </div>
  );
}
