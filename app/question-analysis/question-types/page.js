import Link from 'next/link';

export const metadata = {
  title: 'Question Pattern Types | Rheumify',
  description: 'Learn the 10 patterns of how board exam questions are structured and what they are asking.',
  keywords: ['ABIM question types', 'board exam patterns', 'rheumatology board prep'],
};

export default function QuestionTypesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Question <span style={{ color: 'var(--purple-light)' }}>Pattern Types</span></h1>
        <p>
          Board-style questions follow predictable patterns. Recognizing these patterns helps you quickly
          identify what's being asked and focus your clinical reasoning appropriately.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>

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
            <li>Learn the "time windows" for key emergencies</li>
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
            <li>Key rheumatologic emergencies: septic arthritis, scleroderma renal crisis, MAS/HLH, CAPS, pulmonary hemorrhage, C-spine instability in RA</li>
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
            Students may not understand what each lab actually measures pathophysiologically.
            Some labs have different implications in different contexts (e.g., ferritin in AOSD vs. hemochromatosis vs. infection).
            Note: Reference ranges are typically provided on board exams, so focus on interpretation rather than memorizing normal values.
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
            <li>Classic examples: Scleroderma renal crisis (ACE inhibitors, NOT steroids), NSAIDs in CKD patients with gout</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 68-year-old man with CKD stage 4 (eGFR 22) presents with acute gout flare of the first MTP joint. He cannot take colchicine due to intolerance. What is the most appropriate treatment?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Indomethacin<br/>
              B) Prednisone<br/>
              C) Allopurinol<br/>
              D) Probenecid
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: NSAIDs (A) are usually first-line for gout but are contraindicated with severe CKD. Prednisone (B) is the appropriate choice here—an exception to the usual NSAID-first approach. Allopurinol (C) is for prevention, not acute treatment.</em>
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
