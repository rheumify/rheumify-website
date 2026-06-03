import Link from 'next/link';

export const metadata = {
  title: 'Answer-Choice Tips | Rheumify',
  description: 'Optional test-taking cues for the few questions with a recognizable answer-choice structure — and why most questions have no shortcut.',
  keywords: ['ABIM answer patterns', 'distractor patterns', 'board exam strategy', 'rheumatology board prep'],
};

const card = {
  marginBottom: '2rem',
  padding: '1.5rem',
  background: 'rgba(196, 181, 224, 0.1)',
  borderRadius: '10px',
  border: '1px solid rgba(196, 181, 224, 0.2)',
};
const exampleBox = {
  background: 'var(--navy-dark)',
  padding: '1rem',
  borderRadius: '8px',
  marginTop: '1rem',
  border: '1px solid var(--purple-light)',
};

export default function AnswerTypesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Answer-Choice <span style={{ color: 'var(--purple-light)' }}>Tips</span></h1>
        <p>
          Most questions have no shortcut — but a handful carry a recognizable answer-choice structure worth a quick
          tactical nudge. These are optional cues, not a skill you&apos;re graded on.
        </p>
      </div>

      {/* Framing */}
      <div className="content-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Read the case first, not the shape</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          By design, most board questions use four <strong>homogeneous</strong> options — all diagnoses, all regimens,
          all the same kind of thing — because that&apos;s the NBME standard for a well-written item. When the options are
          homogeneous, there is no structural shortcut: the right move is to reason the clinical case.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          A minority of questions do have a recognizable structure that&apos;s worth a small tactical cue — numbers, a
          conservative-to-aggressive spread, a timing decision, or one option standing apart. Use the tips below as a
          double-check, never as the reason for your answer. Picking an option because of its <em>shape</em> rather than
          the medicine is a test-taking tell, and it&apos;s exactly what well-written items are designed to defeat.
        </p>
        <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
          <a href="https://www.nbme.org/educators/item-writing-guide" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
            NBME Item-Writing Guide →
          </a>
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>

        {/* 1. Numeric / Threshold */}
        <div style={card}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>1. Numeric / Threshold</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            The options are doses, intervals, durations, or cutoff values — they differ by a number, not a concept.
            These reward knowing the specific figure and applying it in context.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Tip:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Commit to the number before you look, then find it — if you&apos;re guessing between two, you don&apos;t know it yet</li>
            <li>Extremely high or low values are usually distractors</li>
            <li>Watch the stem for renal/hepatic adjustment</li>
          </ul>
          <div style={exampleBox}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A patient with giant cell arteritis presents with new vision changes. Most appropriate initial treatment?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Prednisone 20 mg daily<br/>
              B) Prednisone 60 mg daily<br/>
              C) Methylprednisolone 1,000 mg IV daily for 3 days ✓<br/>
              D) Tocilizumab
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>GCA with vision symptoms is an emergency requiring IV pulse steroids. Oral prednisone (A, B) is insufficient when vision is threatened; tocilizumab (D) is steroid-sparing, not initial therapy for acute vision loss.</em>
            </p>
          </div>
        </div>

        {/* 2. Conservative vs Intervene */}
        <div style={card}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>2. Conservative vs Intervene</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            The options run from watchful waiting or supportive care up to a drug, procedure, or surgery. The question
            tests whether you match the aggressiveness of the response to how sick the patient actually is.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Tip:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Anchor on disease severity and acuity first</li>
            <li>Red flags → act decisively; no red flags → conservative is often right</li>
            <li>The most aggressive option is not automatically the safest answer</li>
          </ul>
          <div style={exampleBox}>
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
              <em>Despite the dramatic presentation, the ACE inhibitor (A) is the proven first-line therapy. The more aggressive-sounding options are either harmful or not first-line.</em>
            </p>
          </div>
        </div>

        {/* 3. Sequencing / Timing */}
        <div style={card}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>3. Sequencing / Timing</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            More than one option is a reasonable thing to do — they differ by <em>order</em> or <em>timing</em>
            (induction vs maintenance, hold vs resume, now vs after a step). The question tests temporal reasoning:
            not just what to do, but when. Lead-ins like &quot;at this time&quot; or &quot;next step&quot; are the tell.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Tip:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Place the patient in the disease course: newly diagnosed, in remission, or relapsing?</li>
            <li>Decide what to do <strong>right now</strong>, not eventually — two defensible options is the signal</li>
            <li>Induction → maintenance → escalation: match the phase to the scenario</li>
          </ul>
          <div style={exampleBox}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> ANCA-associated vasculitis in remission after 6 months of cyclophosphamide and prednisone. Most appropriate next step?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Continue cyclophosphamide for another 6 months<br/>
              B) Switch to rituximab for maintenance ✓<br/>
              C) Stop all immunosuppression<br/>
              D) Add methotrexate to cyclophosphamide
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>After induction achieves remission, the patient transitions to maintenance (rituximab). Continuing cyclophosphamide adds toxicity; stopping everything risks relapse. The drugs aren&apos;t the question — the timing is.</em>
            </p>
          </div>
        </div>

        {/* 4. Convergence / Odd-One-Out */}
        <div style={{ ...card, marginBottom: 0 }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>4. Convergence / Odd-One-Out</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            Three options cluster around one idea and one stands apart. This is the tip to use most cautiously: an
            option being &quot;different&quot; is a test-taking signal, <strong>not</strong> proof. Sometimes the outlier is the
            key (it&apos;s the disease-specific or exception answer); just as often it&apos;s bait. Reason the case forward,
            then use the structure only to sanity-check — never to decide.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Tip:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>The outlier tends to be correct when the lead-in asks for an exception, contraindication, or distinguishing feature</li>
            <li>When the lead-in asks for the &quot;most appropriate&quot; routine action, the outlier is more often the distractor</li>
            <li>If you can&apos;t justify it clinically, the shape alone isn&apos;t enough</li>
          </ul>
          <div style={exampleBox}>
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
              <em>A, C, and D are generic inflammatory markers; B is the disease-specific combination for MDA5-DM. Here the outlier is correct — but only because the medicine supports it, not because it looks different.</em>
            </p>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
            <a href="https://journals.sagepub.com/doi/10.3102/0034654317726529" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Gierl MJ, et al. Developing, Analyzing, and Using Distractors for Multiple-Choice Tests. Rev Educ Res. 2017 →
            </a>
          </p>
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
              <a href="https://www.tandfonline.com/doi/abs/10.1207/S15324818AME1503_5" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                Haladyna TM, Downing SM, Rodriguez MC. A Review of Multiple-Choice Item-Writing Guidelines for Classroom Assessment. Applied Measurement in Education. 2002.
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
