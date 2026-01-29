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

      {/* Navigation Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <a href="#question-types" style={{ textDecoration: 'none' }}>
          <div className="content-card" style={{
            borderLeft: '4px solid var(--purple-light)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>Question Types</h3>
            <p style={{ opacity: 0.85, fontSize: '0.95rem' }}>
              Learn the 10 patterns of how questions are structured and what they're asking.
            </p>
          </div>
        </a>
        <a href="#answer-types" style={{ textDecoration: 'none' }}>
          <div className="content-card" style={{
            borderLeft: '4px solid var(--purple-light)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>Answer Types</h3>
            <p style={{ opacity: 0.85, fontSize: '0.95rem' }}>
              Understand the structure of answer choices and common distractor patterns.
            </p>
          </div>
        </a>
        <a href="#clinical-reasoning" style={{ textDecoration: 'none' }}>
          <div className="content-card" style={{
            borderLeft: '4px solid var(--purple-light)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '0.5rem' }}>Clinical Reasoning</h3>
            <p style={{ opacity: 0.85, fontSize: '0.95rem' }}>
              Master the cognitive frameworks used to solve clinical problems.
            </p>
          </div>
        </a>
      </div>

      {/* Why Question Patterns Matter */}
      <div className="content-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Why Question Patterns Matter</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Research shows that high-performing students approach questions differently than struggling students.
          A key study found that low performers demonstrate <strong>premature closure</strong> (stopping the thinking
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

      {/* Question Types Section */}
      <section id="question-types" style={{ scrollMarginTop: '100px' }}>
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <h2 style={{ color: 'var(--purple-light)', marginBottom: '1.5rem' }}>Question Pattern Types</h2>
          <p style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
            Board-style questions follow predictable patterns. Recognizing these patterns helps you quickly
            identify what's being asked and focus your clinical reasoning appropriately.
          </p>

          {/* 1. Next Best Step */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>1. Next Best Step</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions present a clinical scenario and ask what you should do <em>immediately next</em>.
              The lead-in typically says "most appropriate next step," "best initial management," or "which should be done first?"
              All answer choices are often reasonable actions—but only one is the immediate next step.
            </p>

            {/* The Strategic Decoder */}
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1.25rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              border: '1px solid var(--purple-light)'
            }}>
              <h4 style={{ color: 'var(--purple-light)', marginBottom: '0.75rem', fontSize: '1rem' }}>
                🎯 The Strategic Decoder
              </h4>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
                <strong>"Next best step" is NOT one question type—it's actually 5 different questions disguised as the same phrase.</strong> Your first job is to decode WHICH question they're actually asking.
              </p>
              <p style={{ marginBottom: '0.75rem', fontSize: '0.9rem', fontWeight: '500' }}>Ask yourself two questions:</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8', fontSize: '0.9rem' }}>
                <li><strong>Is the patient stable or unstable?</strong> (If unstable → stabilize first)</li>
                <li><strong>Is the diagnosis clear or unclear?</strong> (If unclear → workup; if clear → treat)</li>
              </ul>
            </div>

            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              The most common error is selecting the "ultimate" answer instead of the "next" answer.
              This reflects premature closure—the brain recognizes the end goal and skips intermediate steps.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <li>Identify where you are in the clinical algorithm (diagnosis phase? treatment phase? monitoring?)</li>
              <li>Ask: "What is the ONE thing I must do before anything else?"</li>
              <li>If multiple answers seem correct, rank them chronologically—the earliest step wins</li>
              <li>Watch for "stabilize first" situations—ABCs always come before definitive diagnosis</li>
            </ul>

            {/* Scenario Types */}
            <h4 style={{ color: 'var(--purple-light)', marginBottom: '1rem', marginTop: '1.5rem' }}>Common Scenario Types</h4>

            {/* Scenario 1: Buried Emergency */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.2)',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              borderLeft: '3px solid #e74c3c'
            }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#e74c3c' }}>Scenario Type 1: The Buried Emergency</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Setup:</strong> Long vignette with chronic history, lots of medications—then buried in the text: an acute alarming symptom.</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>What they're testing:</strong> Can you recognize the emergency amid noise?</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0' }}><strong>How to win:</strong> Scan for red flags FIRST. Ignore chronic history initially. The answer addresses the emergency.</p>
            </div>

            {/* Scenario 2: Obvious Diagnosis */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.2)',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              borderLeft: '3px solid #27ae60'
            }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#27ae60' }}>Scenario Type 2: The Obvious Diagnosis</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Setup:</strong> Classic presentation, textbook features. Diagnosis is clear to anyone. Answer choices include confirmatory tests.</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>What they're testing:</strong> Will you overthink a clear diagnosis? Can you move to treatment appropriately?</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0' }}><strong>How to win:</strong> If diagnosis is obvious, don't need every confirmatory test. Move to treatment <em>unless</em> treatment has serious risks (then confirm first) or gold standard test is quick/easy.</p>
            </div>

            {/* Scenario 3: Treatment Failure */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.2)',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              borderLeft: '3px solid #f39c12'
            }}>
              <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#f39c12' }}>Scenario Type 3: The Treatment Failure</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Setup:</strong> Patient on appropriate treatment. Not improving or worsening. Question asks "next step."</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>What they're testing:</strong> Do you escalate? Switch? Add workup?</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0' }}><strong>How to win:</strong> Ask: "Was treatment adequate?" (dose, duration, adherence). "Could this be a complication?" (need new workup). "Is diagnosis still correct?" (if really not responding).</p>
            </div>

            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A 45-year-old woman with RA on methotrexate presents with 2 weeks of progressive dyspnea and dry cough. O2 sat is 88% on room air. CXR shows bilateral interstitial infiltrates. What is the most appropriate next step?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Start empiric antibiotics for PJP<br/>
                B) Obtain high-resolution CT chest<br/>
                C) Perform bronchoscopy with BAL<br/>
                D) Discontinue methotrexate immediately
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: All options are reasonable at some point. But the immediate next step is B—you need imaging to characterize the infiltrates before choosing between infection vs. drug-induced pneumonitis.</em>
              </p>
            </div>
          </div>

          {/* 2. Most Specific Test/Finding */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>2. Most Specific Test/Finding</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions ask you to identify the finding or test that is pathognomonic or most specific for a condition.
              The distractors are often sensitive but not specific findings. Lead-ins include "most specific," "most likely to confirm,"
              or "which finding would be most diagnostic."
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students often confuse sensitivity with specificity. When asked for "most specific," students pick the most commonly
              associated finding rather than the one that definitively confirms the diagnosis.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Ask: "If this test/finding is positive, can I be confident the patient has the disease?"</li>
              <li>Remember: Specific = SpIN (Specific test, when Positive, rules IN)</li>
              <li>Look for pathognomonic findings (e.g., anti-dsDNA for SLE nephritis, apple-green birefringence for amyloid)</li>
              <li>Avoid choosing "common" findings that occur in multiple conditions</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A 28-year-old woman presents with malar rash, arthritis, and oral ulcers. ANA is positive at 1:640. Which finding would be MOST SPECIFIC for diagnosing SLE?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Elevated ESR<br/>
                B) Positive ANA<br/>
                C) Anti-Smith antibodies<br/>
                D) Low complement C3
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: ANA is sensitive (~95%) but not specific. Anti-Smith (C) is ~99% specific for SLE—if positive, the patient almost certainly has SLE, even though it's only present in ~30% of cases.</em>
              </p>
            </div>
          </div>

          {/* 3. Differential Diagnosis */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>3. Differential Diagnosis</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions present a clinical scenario and ask "what is the most likely diagnosis?"
              The vignette contains classic features of one condition, but distractors represent conditions with overlapping features.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              <strong>Anchoring bias</strong> is the biggest culprit. Students latch onto one finding early in the vignette and stop processing new information.
              Research shows experts generate a diagnostic hypothesis within 5 minutes but continue testing it against all data; novices stop too early.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Read the ENTIRE vignette before forming a hypothesis</li>
              <li>Identify 2-3 "pivot clues"—the findings that distinguish one diagnosis from others</li>
              <li>For each answer choice, ask: "Does this explain ALL the findings?"</li>
              <li>Use the "cover-the-options" technique: predict the answer before looking at choices</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A 35-year-old man presents with low back pain that improves with exercise and worsens with rest. He reports morning stiffness lasting 2 hours. He also has heel pain and red, painful eyes. What is the most likely diagnosis?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Mechanical low back pain<br/>
                B) Rheumatoid arthritis<br/>
                C) Ankylosing spondylitis<br/>
                D) Fibromyalgia
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: The pivot clues are: (1) inflammatory back pain pattern (improves with exercise), (2) enthesitis (heel pain), and (3) uveitis. This triad is classic for spondyloarthritis.</em>
              </p>
            </div>
          </div>

          {/* 4. Treatment Contraindication */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>4. Treatment Contraindication</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions present a patient who needs treatment but has a condition or characteristic that makes one option dangerous.
              Lead-ins include "which should be avoided," "contraindicated," or the reverse: "which is safe to use."
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students focus on the primary problem and miss the buried contraindication. This is <strong>inattentional blindness</strong>—the brain
              filters out information that doesn't seem relevant to the main task.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Scan the entire history for "red flags": pregnancy, renal/hepatic impairment, heart failure, active infection, malignancy history</li>
              <li>For each answer choice, mentally run through its contraindications</li>
              <li>Pay attention to medication lists—drug interactions are commonly tested</li>
              <li>If the question asks "which is safe," use process of elimination on contraindicated options</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A 58-year-old woman with RA has inadequate response to methotrexate. PMH includes CHF (EF 35%) and latent TB (completed treatment). Which biologic should be AVOIDED?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Rituximab<br/>
                B) Tocilizumab<br/>
                C) Adalimumab<br/>
                D) Abatacept
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: TNF inhibitors (C) are contraindicated in moderate-severe heart failure. The buried contraindication is her CHF with EF 35%.</em>
              </p>
            </div>
          </div>

          {/* 5. Timing/Urgency Decision */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>5. Timing/Urgency Decision</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions test whether you recognize when something needs to happen urgently versus when it can wait.
              The scenario may describe a stable patient who suddenly has a finding requiring immediate action, or an apparently
              urgent situation where watchful waiting is appropriate.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Two opposite errors: (1) Over-reacting—ordering emergent workup for benign findings, or (2) Under-reacting—missing
              time-sensitive emergencies. Students often don't have mental "timelines" for how quickly different conditions progress.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Identify conditions that cause irreversible damage if delayed: vision loss, joint destruction, organ failure</li>
              <li>Learn the "time windows" for key emergencies (e.g., septic arthritis causes cartilage damage within 48 hours)</li>
              <li>If hemodynamically unstable, stabilize first—no test or referral is more urgent than ABCs</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A 72-year-old woman with new headache and jaw claudication reports transient visual loss in her right eye lasting 5 minutes earlier today. ESR is 95. What is the MOST appropriate timing of intervention?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Start high-dose steroids immediately<br/>
                B) Schedule outpatient temporal artery biopsy within 1 week<br/>
                C) Obtain MRI brain before treatment<br/>
                D) Refer to ophthalmology for routine evaluation
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: Transient visual loss in GCA is an emergency—permanent vision loss can occur within hours. Start steroids immediately (A). Biopsy can wait; vision cannot.</em>
              </p>
            </div>
          </div>

          {/* 6. Red Flag Emergency */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>6. Red Flag Emergency</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions present life-threatening or organ-threatening emergencies: septic arthritis, scleroderma renal crisis,
              macrophage activation syndrome, pulmonary-renal syndrome. The vignette contains "alarm" findings, and the correct
              answer involves immediate, aggressive intervention.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students may not recognize the emergency because the patient "doesn't look that sick" in the vignette, or they get
              distracted by the chronic disease context.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Memorize the classic "red flag" presentations for each disease category</li>
              <li>When you see one, shift to "emergency mode"—the answer usually involves immediate action, not watchful waiting</li>
              <li>Key rheumatologic emergencies: septic arthritis, scleroderma renal crisis, MAS, pulmonary hemorrhage, C-spine instability in RA</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A 45-year-old woman with diffuse scleroderma presents with new severe headache and BP 210/120. Creatinine has risen from 1.0 to 3.2 over 3 days. UA shows proteinuria and few RBCs. What is the most appropriate treatment?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) IV methylprednisolone<br/>
                B) Captopril<br/>
                C) Labetalol<br/>
                D) Cyclophosphamide
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: This is scleroderma renal crisis. ACE inhibitors (B) are the treatment of choice—steroids can actually precipitate this condition.</em>
              </p>
            </div>
          </div>

          {/* 7. Lab Interpretation */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>7. Lab Interpretation</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions provide laboratory data (serologies, synovial fluid analysis, imaging findings) and ask you to
              interpret them—either to make a diagnosis or to explain a mechanism.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students may not have memorized reference ranges or may not understand what each lab actually measures pathophysiologically.
              Some labs have different implications in different contexts (e.g., ferritin in AOSD vs. hemochromatosis vs. infection).
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Build "lab pattern" flashcards: What does low C3/C4 + positive dsDNA + proteinuria mean? (Lupus nephritis)</li>
              <li>Understand what each test measures pathophysiologically, not just "positive = disease"</li>
              <li>For synovial fluid: memorize the crystal analysis (negatively birefringent = gout, positively = CPPD)</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> Synovial fluid analysis: WBC 45,000 (90% PMNs), no organisms on Gram stain. Polarized microscopy shows needle-shaped crystals that are yellow when parallel to the slow axis. What is the diagnosis?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Gout<br/>
                B) Pseudogout (CPPD)<br/>
                C) Septic arthritis<br/>
                D) Reactive arthritis
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: Needle-shaped crystals that are yellow parallel to slow axis = negatively birefringent = monosodium urate = Gout (A). CPPD crystals are rhomboid and positively birefringent.</em>
              </p>
            </div>
          </div>

          {/* 8. Treatment Escalation */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>8. Treatment Escalation</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions present a patient already on treatment who is not responding adequately. The question asks what to do next:
              increase dose, add another agent, switch to a different class, or change strategy entirely.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students may not know the treatment algorithms or may not recognize when a treatment has been given adequate time to work
              (e.g., methotrexate needs 3 months before declaring failure).
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Learn the standard treatment ladders for major diseases (RA, lupus, vasculitis)</li>
              <li>Know the expected time-to-response for each drug class</li>
              <li>Check if the patient has actually failed treatment vs. been inadequately dosed or given insufficient time</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A patient with RA on methotrexate 25mg weekly (with folic acid) for 4 months has persistent moderate disease activity (DAS28 4.2). What is the best next step?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Continue current therapy for 2 more months<br/>
                B) Add a TNF inhibitor<br/>
                C) Switch to leflunomide<br/>
                D) Increase methotrexate to 30mg weekly
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: MTX at max dose for adequate time (≥3 months) with persistent moderate-high disease activity → add a biologic (B) per treat-to-target guidelines.</em>
              </p>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              <a href="https://pubmed.ncbi.nlm.nih.gov/33158479/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                ACR RA Treatment Guidelines 2021 →
              </a>
            </p>
          </div>

          {/* 9. Complication Recognition */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>9. Complication Recognition</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These questions present a patient with a known rheumatic disease who develops new symptoms. The question asks you to
              identify that this represents a complication of the disease or treatment. Distractors may include unrelated conditions or disease flares.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students may attribute new symptoms to the original disease ("it's just a lupus flare") when it's actually a treatment
              complication or a disease complication (lymphoma in Sjögren's, pulmonary fibrosis in scleroderma).
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>For each major disease, know the key complications (e.g., Sjögren's → lymphoma, RA → C-spine instability)</li>
              <li>For each major drug, know the serious adverse effects (e.g., MTX → hepatotoxicity, TNF inhibitors → reactivation TB)</li>
              <li>When something "doesn't fit" the usual disease pattern, consider complications or secondary diagnoses</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A 55-year-old woman with Sjögren's syndrome presents with unilateral parotid swelling that has been enlarging over 3 months. She has lost 10 lbs. What is the most important diagnosis to exclude?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Sjögren's flare<br/>
                B) Parotid stone<br/>
                C) MALT lymphoma<br/>
                D) Mumps
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: Persistent unilateral parotid swelling + weight loss in Sjögren's = must rule out lymphoma (C). Sjögren's patients have 44x increased risk of NHL, especially MALT lymphoma.</em>
              </p>
            </div>
          </div>

          {/* 10. Exception to Rule */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>10. Exception to Rule</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              These are the most challenging questions. They present scenarios where the "usual" approach doesn't apply—a situation
              where you should NOT give steroids (even though steroids are usually the answer), or where a typically second-line agent
              is actually first-line for a specific manifestation.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students learn rules and apply them consistently—which works most of the time but fails when the question tests an exception.
              Recognizing exceptions requires deeper understanding of <em>why</em> the rule exists.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>When learning a rule, also learn "EXCEPT when..." clauses</li>
              <li>Pay attention to unusual features in the vignette—they may signal an exception</li>
              <li>Classic example: Scleroderma renal crisis (ACE inhibitors, NOT steroids—steroids can precipitate it)</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> A patient with GPA has severe alveolar hemorrhage requiring mechanical ventilation. Standard induction therapy with cyclophosphamide is planned. What should be ADDED to improve outcomes?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Methotrexate<br/>
                B) Plasma exchange<br/>
                C) IVIG<br/>
                D) Mycophenolate
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: For severe/life-threatening GPA manifestations (alveolar hemorrhage, rapidly progressive GN), plasma exchange (B) is added to standard induction—an exception where additional therapy beyond standard immunosuppression improves outcomes.</em>
              </p>
            </div>
          </div>

          {/* References */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(196, 181, 224, 0.3)' }}>
            <h4 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>References</h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '2', fontSize: '0.9rem' }}>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/26140127/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Heist BS, et al. Exploring Clinical Reasoning Strategies and Test-Taking Behaviors. J Grad Med Educ. 2014;6(4):709-14.
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/12915363/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Croskerry P. The Importance of Cognitive Errors in Diagnosis. Acad Med. 2003;78(8):775-80.
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27680311/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Norman GR, et al. The Causes of Errors in Clinical Reasoning. Acad Med. 2017;92(1):23-30.
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/21430797/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Pelaccia T, et al. An analysis of clinical reasoning through the dual-process theory. Med Educ Online. 2011;16:5890.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Answer Types Section */}
      <section id="answer-types" style={{ scrollMarginTop: '100px', marginTop: '2rem' }}>
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <h2 style={{ color: 'var(--purple-light)', marginBottom: '1.5rem' }}>Answer Choice Patterns</h2>
          <p style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
            Understanding how answer choices are constructed helps you identify the correct answer and avoid common traps.
            Each pattern type signals a specific test-taking strategy.
          </p>

          {/* 1. Four Similar + Outlier */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>1. Four Similar + Outlier</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Three or four answer choices share a common theme, mechanism, or category, while one stands apart.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>The outlier is often <strong>correct</strong> when the question asks for an exception, contraindication, or distinguishing feature</li>
              <li>If the question asks for the most appropriate action, the outlier is usually a <strong>distractor</strong></li>
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
              Answer choices range from watchful waiting/supportive care to aggressive intervention. Often presents a spectrum of treatment intensity.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Consider disease severity, acuity, and patient factors</li>
              <li>Acute life-threatening presentations favor <strong>action</strong></li>
              <li>Stable or mild presentations favor <strong>conservative approaches</strong></li>
              <li>Red flags = act; no red flags = observe</li>
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
              Answer choices contain specific dosages, frequencies, durations, or numeric thresholds. Often tests memorization of guidelines.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Look for standard doses you should know</li>
              <li>Extremely high or low doses are usually distractors</li>
              <li>Consider renal/hepatic adjustment if mentioned in the stem</li>
            </ul>
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid var(--purple-light)'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <strong>Example:</strong> Perioperative corticosteroid management for PMR patient on prednisone 7.5mg daily?
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                A) Continue prednisone 7.5 mg daily throughout<br/>
                B) Increase to physiologic replacement dose ✓<br/>
                C) Increase prednisone to 15 mg daily starting 3 days before<br/>
                D) Discontinue prednisone 1 week before surgery
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
                <em>Analysis: The correct answer uses "physiologic replacement" rather than arbitrary dose escalation. Stopping (D) risks adrenal crisis; high doses (C) increase infection risk.</em>
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
              Answer choices represent different phases: initial/acute, maintenance, or escalation therapy. Tests understanding of treatment algorithms.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Identify where the patient is in their disease course: Newly diagnosed? Flaring? Refractory?</li>
              <li>Match the treatment stage to the clinical scenario</li>
            </ul>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Key stages to recognize:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li><strong>Induction therapy:</strong> High-intensity treatment to control active disease</li>
              <li><strong>Maintenance therapy:</strong> Lower-intensity treatment to prevent flares</li>
              <li><strong>Rescue/escalation therapy:</strong> Treatment for refractory disease</li>
            </ul>
          </div>

          {/* 5. Refer vs Manage */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>5. Refer vs Manage</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Answer choices include options to manage in-house versus referring to a specialist or different care setting.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Consider: Is this within the scope of the physician in the stem? Is time-sensitive intervention needed? Would delay from referral cause harm?
            </p>
            <p style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Refer when:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Diagnosis is uncertain and requires specialized testing</li>
              <li>Treatment requires expertise beyond the current setting</li>
              <li>Surgical or procedural intervention is needed</li>
            </ul>
            <p style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Manage when:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>The diagnosis is clear and initial treatment is straightforward</li>
              <li>Delay would cause harm</li>
            </ul>
          </div>

          {/* 6. Same Drug Different Routes */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>6. Same Drug Different Routes</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              The same medication appears multiple times with different administration routes (IV, oral, subcutaneous, topical).
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Consider severity (IV for severe/acute)</li>
              <li>Consider bioavailability</li>
              <li>Consider patient factors (GI absorption issues favor parenteral routes)</li>
            </ul>
            <p style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Common scenarios:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>IV methylprednisolone vs oral prednisone (severity-based)</li>
              <li>Subcutaneous vs IV methotrexate (absorption issues)</li>
              <li>IV vs oral cyclophosphamide (lupus nephritis protocols)</li>
            </ul>
          </div>

          {/* 7. Two Correct at Different Times */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>7. Two Correct at Different Times</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Two answers seem correct, but one is appropriate <em>now</em> while the other would be appropriate at a different disease stage or time point.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Strategy:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Pay close attention to temporal cues in the stem: "initial," "next," "at this time," "after failing first-line"</li>
              <li>The timing determines which correct answer is THE correct answer</li>
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
        </div>
      </section>

      {/* Clinical Reasoning Section */}
      <section id="clinical-reasoning" style={{ scrollMarginTop: '100px', marginTop: '2rem' }}>
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <h2 style={{ color: 'var(--purple-light)', marginBottom: '1.5rem' }}>Clinical Reasoning Types</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
            Understanding the cognitive skills tested on board examinations. Each type represents a different cognitive skill that physicians use in practice. Understanding which skill is being tested helps you approach each question with the right mental framework.
          </p>

          {/* How Physicians Think */}
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1.25rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '1px solid var(--purple-light)'
          }}>
            <h4 style={{ color: 'var(--purple-light)', marginBottom: '0.75rem', fontSize: '1rem' }}>
              🧠 How Physicians Think: Dual-Process Theory
            </h4>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Research identifies two fundamental cognitive processes:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8', fontSize: '0.9rem' }}>
              <li><strong>Type 1 (Intuitive/Fast):</strong> Automatic, effortless, pattern-based. "Pattern recognition."</li>
              <li><strong>Type 2 (Analytical/Slow):</strong> Deliberate, effortful, rule-based. "Hypothetico-deductive reasoning."</li>
            </ul>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', opacity: 0.85 }}>
              <strong>Critical insight:</strong> Diagnostic errors most often occur when physicians use pattern recognition <em>without verification</em>—they recognize what they expect to see and stop thinking. This is called <strong>premature closure</strong>, and it underlies 74% of diagnostic errors.
            </p>
          </div>

          {/* 1. Pattern Recognition */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>1. Pattern Recognition</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              The near-instantaneous recognition of a clinical picture based on key features. When you see "malar rash + photosensitivity + oral ulcers + arthritis," your brain immediately says "SLE" without needing to work through a differential. This is Type 1 thinking at its best.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Pattern recognition requires exposure to many cases. Experts have seen thousands of patients; students have seen dozens. Without sufficient "exemplars" stored in memory, pattern recognition fails or misfires.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Develop This Skill:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>Create "illness scripts" in your mind: for each disease, know the classic patient, key features, and expected course</li>
              <li>Study case vignettes, not just facts—the goal is to see the pattern</li>
              <li>When you get a question wrong, ask: "What pattern should I have recognized?"</li>
              <li>Learn "pivot clues"—the features that distinguish one diagnosis from look-alikes</li>
            </ul>
          </div>

          {/* 2. Multi-Step Problem Solving */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>2. Multi-Step Problem Solving</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Sequential reasoning through a complex case where you cannot immediately recognize the pattern. You must: (1) gather data, (2) generate hypotheses, (3) test hypotheses against data, (4) revise hypotheses, and (5) reach a conclusion. This is Type 2 (analytical) thinking.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Multi-step reasoning is cognitively demanding. Your working memory can "fill up," causing you to lose track of earlier clues. Students may also get stuck on one hypothesis (<strong>anchoring bias</strong>) or reach a plausible answer and stop testing it (<strong>premature closure</strong>).
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Develop This Skill:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>Practice "thinking aloud"—verbalize your reasoning as you work through cases</li>
              <li>Use a systematic framework: Problem representation → Hypothesis generation → Hypothesis testing → Revision</li>
              <li>Force yourself to consider at least 3 diagnoses before committing to one</li>
              <li>After reaching an answer, ask: "What would make me wrong?" (diagnostic timeout)</li>
            </ul>
          </div>

          {/* 3. Risk-Benefit Analysis */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>3. Risk-Benefit Analysis</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Weighing the potential benefits of an intervention against its potential harms in the context of a specific patient. This includes considering disease severity, treatment efficacy, side effect profiles, patient preferences, and comorbidities.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students often learn drugs in isolation without learning the context-dependent trade-offs. They may not know which side effects are dose-dependent vs. idiosyncratic, reversible vs. permanent, or how patient factors shift the risk-benefit calculus.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Develop This Skill:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>For each drug, learn the major risks AND how patient factors modify those risks</li>
              <li>Practice framing trade-offs: "If I give this drug, the benefit is X, but the risk is Y. Is Y acceptable given this patient's situation?"</li>
              <li>Learn the "numbers" when available (e.g., risk of serious infection on biologics is ~5% per year)</li>
              <li>Consider both action AND inaction risks—what happens if you don't treat?</li>
            </ul>
          </div>

          {/* 4. Guideline Application */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>4. Guideline Application</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Correctly applying evidence-based guidelines (ACR, EULAR, etc.) to a clinical scenario. This includes knowing the guideline recommendations, the level of evidence supporting them, and when the patient meets criteria for a particular recommendation.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Guidelines are frequently updated, so students may have learned outdated recommendations. They may also confuse "classification criteria" (used for research) with "diagnostic criteria" (used in practice).
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Develop This Skill:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>Focus on major society guidelines (ACR/EULAR) for common diseases</li>
              <li>Know the STRONG recommendations—these are what boards test</li>
              <li>Understand the reasoning behind guidelines, not just the recommendations</li>
              <li>Learn the key numbers: disease activity scores, classification criteria thresholds, treatment targets</li>
            </ul>
          </div>

          {/* 5. Exception/Nuance Recognition */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>5. Exception/Nuance Recognition</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Recognizing when the "usual" rule doesn't apply. Medicine is full of "except when" clauses: NSAIDs are first-line for gout flares <em>except</em> in patients with CKD; steroids are mainstay of vasculitis treatment <em>except</em> in scleroderma renal crisis.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students learn rules and apply them consistently—which is appropriate most of the time. Exceptions require deeper understanding of the pathophysiology to know why the rule exists and when it breaks down. This is the highest-level reasoning skill.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Develop This Skill:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>When learning a rule, immediately ask: "When does this NOT apply?"</li>
              <li>Learn the pathophysiology behind the exception—it makes the exception memorable</li>
              <li>Create a list of high-yield exceptions and review them regularly</li>
              <li>When a vignette has unusual features, consider whether they signal an exception</li>
            </ul>
          </div>

          {/* 6. Integration of Multiple Findings */}
          <div style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>6. Integration of Multiple Findings</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Synthesizing disparate pieces of information—history, physical exam, labs, imaging—into a coherent clinical picture. This requires holding multiple data points in working memory and seeing how they connect.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Working memory limitations are the main barrier. A complex vignette can have 10+ data points; your working memory holds only 4-7 items. When working memory fills up, new information overwrites old information, causing you to "lose" important clues.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Develop This Skill:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.8' }}>
              <li>Create a "problem representation"—a one-sentence summary that captures the key features</li>
              <li>Group related findings: "Three inflammatory features, two organ-specific features, one medication history"</li>
              <li>Ask: "What single diagnosis explains ALL of these findings?"</li>
              <li>If a finding doesn't fit your hypothesis, take it seriously—don't dismiss inconvenient data</li>
            </ul>
          </div>

          {/* 7. Timing/Urgency Decision */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)'
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>7. Timing/Urgency Decision</h3>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
              Determining the appropriate urgency of evaluation or treatment. This includes recognizing emergencies that require immediate action, distinguishing urgent from non-urgent presentations, and knowing the time course of different diseases.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Why Students Struggle:</p>
            <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
              Students often don't have calibrated "internal clocks" for how fast diseases progress. Without these timelines, they can't assess urgency accurately.
            </p>
            <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to Develop This Skill:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              <li>Learn the "time windows" for key emergencies</li>
              <li>Know which conditions require same-day vs. same-week vs. outpatient evaluation</li>
              <li>When a vignette describes rapid progression, shift to "emergency mode"</li>
              <li>Remember: "Time is tissue" in many rheumatologic emergencies</li>
            </ul>

            {/* Emergencies Box */}
            <div style={{
              background: 'var(--navy-dark)',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              border: '1px solid #e74c3c'
            }}>
              <p style={{ fontWeight: '600', marginBottom: '0.75rem', color: '#e74c3c' }}>🚨 Rheumatologic Emergencies</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '0', lineHeight: '1.9', fontSize: '0.9rem' }}>
                <li><strong>Septic arthritis:</strong> Cartilage damage within 48 hours. Requires immediate aspiration and antibiotics.</li>
                <li><strong>GCA with vision changes:</strong> Risk of permanent blindness within hours-days. Start high-dose steroids before biopsy.</li>
                <li><strong>Scleroderma renal crisis:</strong> Malignant hypertension + AKI. Start ACE inhibitor immediately, NOT steroids.</li>
                <li><strong>Pulmonary-renal syndrome:</strong> Hemoptysis + hematuria. Life-threatening; requires urgent immunosuppression and often plasma exchange.</li>
                <li><strong>Macrophage activation syndrome:</strong> Cytopenias + very high ferritin + liver dysfunction. Can be fatal within days without treatment.</li>
              </ul>
            </div>
          </div>

          {/* References */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(196, 181, 224, 0.3)' }}>
            <h4 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>References</h4>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '2', fontSize: '0.9rem' }}>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/21430797/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Pelaccia T, et al. An analysis of clinical reasoning through the dual-process theory. Med Educ Online. 2011;16:5890.
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27680311/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Norman GR, et al. The Causes of Errors in Clinical Reasoning. Acad Med. 2017;92(1):23-30.
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/12522200/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Croskerry P. Cognitive Errors in Clinical Decision Making. Ann Emerg Med. 2003;41(1):110-120.
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/16009864/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  Graber ML, et al. Diagnostic error in internal medicine. Arch Intern Med. 2005;165(13):1493-9.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Fellows */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/fellows" style={{ color: 'var(--purple-light)' }}>
          ← Back to Rheumatologists & Fellows
        </Link>
      </div>
    </div>
  );
}
