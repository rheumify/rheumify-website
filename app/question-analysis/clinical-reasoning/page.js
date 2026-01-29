import Link from 'next/link';

export const metadata = {
  title: 'Clinical Reasoning Frameworks | Question Analysis | Rheumify',
  description: 'Understanding the cognitive skills and clinical reasoning frameworks tested on rheumatology board exams.',
  keywords: ['clinical reasoning', 'cognitive skills', 'board exam strategy', 'rheumatology board prep', 'ABIM'],
};

export default function ClinicalReasoningPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Clinical Reasoning <span style={{ color: 'var(--purple-light)' }}>Frameworks</span></h1>
        <p>
          Understanding the cognitive skills tested on board examinations. Each framework represents a different
          type of thinking that physicians use in clinical practice.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="content-card" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Why Clinical Reasoning Matters</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Board examinations don't just test factual knowledge—they assess how you <strong>apply</strong> that
          knowledge to clinical scenarios. Understanding which cognitive skill a question is testing helps you
          approach it with the right mental framework.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Research in medical education has identified distinct reasoning processes that physicians use.
          Recognizing which process is being tested allows you to:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          <li>Focus on the relevant clinical data</li>
          <li>Apply the appropriate decision-making strategy</li>
          <li>Avoid overthinking or underthinking the question</li>
          <li>Recognize when multiple reasoning types are needed</li>
        </ul>
      </div>

      {/* Clinical Reasoning Types */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>

        {/* 1. Pattern Recognition */}
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>1</div>
            <h2 style={{ color: 'var(--purple-light)', margin: 0 }}>Pattern Recognition</h2>
          </div>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>What it tests:</strong> Your ability to recognize a classic clinical presentation and
            match it to the correct diagnosis. This is the most basic form of clinical reasoning—seeing a
            constellation of findings and identifying what they represent.
          </p>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>How to approach it:</strong> Look for pathognomonic features or classic combinations.
            These questions reward knowing the "textbook" presentations. Don't overthink—if it looks like
            a classic case, it probably is.
          </p>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 45-year-old woman presents with fatigue, morning stiffness lasting
              2 hours, and symmetric swelling of the MCP and PIP joints bilaterally. RF and anti-CCP are positive.
              <br /><br />
              <strong>The pattern:</strong> Symmetric small joint polyarthritis + morning stiffness + positive
              serology = classic RA presentation.
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Common in:</strong> Diagnosis questions, "most likely diagnosis" stems
          </p>
        </div>

        {/* 2. Multi-Step Problem Solving */}
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>2</div>
            <h2 style={{ color: 'var(--purple-light)', margin: 0 }}>Multi-Step Problem Solving</h2>
          </div>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>What it tests:</strong> Your ability to work through a clinical problem that requires
            sequential reasoning—where the answer to one question informs the next decision.
          </p>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>How to approach it:</strong> Break the problem into steps. First establish the diagnosis,
            then consider what additional information is needed, then determine management. Don't skip ahead—each
            step builds on the previous one.
          </p>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example:</strong> A patient with new SLE is found to have proteinuria. You need to:
              (1) recognize this suggests lupus nephritis, (2) understand a biopsy is needed for classification,
              (3) know that the biopsy class determines treatment choice.
              <br /><br />
              <strong>The reasoning chain:</strong> Proteinuria → suspect nephritis → biopsy → classify →
              treat based on class.
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Common in:</strong> Management questions, "next step" questions with evolving clinical scenarios
          </p>
        </div>

        {/* 3. Risk-Benefit Analysis */}
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>3</div>
            <h2 style={{ color: 'var(--purple-light)', margin: 0 }}>Risk-Benefit Analysis</h2>
          </div>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>What it tests:</strong> Your ability to weigh the potential benefits of a treatment
            against its risks in a specific clinical context. The "right" answer often depends on patient-specific
            factors.
          </p>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>How to approach it:</strong> Identify the key patient factors that shift the risk-benefit
            calculation. Age, comorbidities, disease severity, and patient preferences all play roles.
            Ask yourself: "What makes this patient different from the average case?"
          </p>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example 1:</strong> A 72-year-old woman with RA has failed methotrexate and has moderate
              disease activity. She also has a history of recurrent UTIs and recent shingles.
              <br /><br />
              <strong>The calculation:</strong> Need to balance the benefit of better disease control against
              infection risk. Her infection history shifts the balance toward less immunosuppressive options
              or ensuring vaccination/prophylaxis before escalation.
            </p>
          </div>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example 2:</strong> A 35-year-old woman with antiphospholipid syndrome and history of DVT
              is found to be pregnant.
              <br /><br />
              <strong>The calculation:</strong> She needs anticoagulation for APS, but warfarin is teratogenic.
              The benefit of preventing thrombosis must be weighed against fetal risk—switching to LMWH + low-dose
              aspirin provides anticoagulation while avoiding warfarin embryopathy.
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Common in:</strong> Treatment selection, contraindication questions, elderly/complex patients, pregnancy
          </p>
        </div>

        {/* 4. Guideline Application */}
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>4</div>
            <h2 style={{ color: 'var(--purple-light)', margin: 0 }}>Guideline Application</h2>
          </div>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>What it tests:</strong> Your knowledge of current clinical guidelines and ability to
            apply them to specific scenarios. These questions often test whether you know the standard of care.
          </p>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>How to approach it:</strong> These questions usually have a "textbook" right answer based
            on major guidelines (ACR, EULAR). Know the key recommendations, especially screening intervals,
            first-line treatments, and monitoring requirements.
          </p>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example:</strong> A patient with RA on hydroxychloroquine for 6 years asks about
              eye monitoring.
              <br /><br />
              <strong>The guideline:</strong> ACR recommends baseline eye exam then annual screening after
              5 years of use (or earlier with risk factors). This patient is due for annual screening.
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Common in:</strong> Screening questions, monitoring intervals, first-line treatment selection
          </p>
        </div>

        {/* 5. Exception Recognition */}
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>5</div>
            <h2 style={{ color: 'var(--purple-light)', margin: 0 }}>Exception Recognition</h2>
          </div>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>What it tests:</strong> Your ability to recognize when the standard approach doesn't
            apply—when patient-specific factors require deviating from the usual recommendation.
          </p>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>How to approach it:</strong> Look for the "but" in the stem—the detail that makes this
            patient different. Common exceptions involve contraindications, drug interactions, comorbidities,
            or unusual presentations. The question is testing whether you recognize that the usual rule doesn't apply.
          </p>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example 1:</strong> A 68-year-old man with CKD stage 4 (eGFR 22) presents with acute gout
              flare. NSAIDs are first-line for gout flares, but...
              <br /><br />
              <strong>The exception:</strong> CKD contraindicates NSAIDs. Despite being first-line, you need
              an alternative—likely colchicine (dose-adjusted) or glucocorticoids.
            </p>
          </div>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example 2:</strong> A 28-year-old man with Behçet's disease presents with hemoptysis.
              CT shows pulmonary artery aneurysm. You might think vascular thrombosis needs anticoagulation, but...
              <br /><br />
              <strong>The exception:</strong> Pulmonary artery aneurysms in Behçet's are due to vasculitis,
              not thrombosis—anticoagulation could cause fatal rupture. Treatment is immunosuppression, not
              anticoagulation.
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Common in:</strong> Contraindication questions, patients with comorbidities, "which would you avoid" stems
          </p>
        </div>

        {/* 6. Integration of Findings */}
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>6</div>
            <h2 style={{ color: 'var(--purple-light)', margin: 0 }}>Integration of Findings</h2>
          </div>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>What it tests:</strong> Your ability to synthesize multiple pieces of clinical
            information—history, physical exam, labs, imaging—into a coherent clinical picture.
          </p>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>How to approach it:</strong> Don't fixate on one finding. Look at how the pieces fit
            together. Sometimes a single lab value changes the interpretation of everything else. Ask:
            "What diagnosis explains ALL of these findings?"
          </p>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example:</strong> A patient presents with inflammatory arthritis, oral ulcers, and a
              new rash. Labs show anemia, low platelets, and positive ANA.
              <br /><br />
              <strong>The integration:</strong> Each finding alone has a broad differential, but together
              they point to SLE—meeting multiple classification criteria simultaneously.
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Common in:</strong> Complex diagnostic cases, multi-system disease presentations
          </p>
        </div>

        {/* 7. Timing/Urgency Decision */}
        <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--purple-light), var(--purple-dark))',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}>7</div>
            <h2 style={{ color: 'var(--purple-light)', margin: 0 }}>Timing/Urgency Decision</h2>
          </div>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>What it tests:</strong> Your ability to determine how quickly action is needed.
            Some conditions require immediate intervention; others can be worked up over time.
          </p>

          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            <strong>How to approach it:</strong> Identify red flags that signal urgency. Consider what
            could go wrong if action is delayed. Questions often test whether you can distinguish between
            "urgent" (needs action now) and "important but not emergent" (can wait for more information).
          </p>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example 1:</strong> A patient on methotrexate presents with new dyspnea and dry cough.
              CXR shows bilateral interstitial infiltrates.
              <br /><br />
              <strong>The urgency:</strong> MTX pneumonitis can progress rapidly. This requires immediate
              action—stop the drug, consider steroids, don't wait for a definitive bronchoscopy to act.
            </p>
          </div>

          <div style={{
            background: 'rgba(196, 181, 224, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.95rem' }}>
              <strong>Example 2:</strong> A patient with known APS presents with confusion, renal failure,
              thrombocytopenia, and new DVT despite therapeutic anticoagulation. This is catastrophic APS (CAPS).
              <br /><br />
              <strong>The urgency:</strong> CAPS has high mortality. Don't wait—this requires immediate
              triple therapy (anticoagulation + steroids + plasma exchange or IVIG). Similarly, HLH/MAS
              requires urgent recognition and treatment before multi-organ failure progresses.
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <strong>Common in:</strong> Emergency presentations, drug toxicity, rapidly progressive disease (CAPS, HLH/MAS, scleroderma renal crisis)
          </p>
        </div>

      </div>

      {/* Putting It Together Section */}
      <div className="content-card" style={{ marginTop: '2rem' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Putting It Together</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Most board questions test more than one reasoning skill. A complex question might require you to:
        </p>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          <li><strong>Recognize a pattern</strong> to establish the diagnosis</li>
          <li><strong>Integrate findings</strong> to assess disease severity</li>
          <li><strong>Apply guidelines</strong> to select initial treatment</li>
          <li><strong>Recognize an exception</strong> based on a comorbidity</li>
          <li><strong>Weigh risks and benefits</strong> to choose the final answer</li>
        </ol>
        <p style={{ lineHeight: '1.7' }}>
          As you practice, try to identify which reasoning type(s) each question is testing. This metacognitive
          awareness—thinking about your thinking—is one of the most powerful tools for improving your test performance.
        </p>
      </div>

      {/* References Section */}
      <div className="content-card" style={{ marginTop: '2rem', background: 'rgba(196, 181, 224, 0.05)' }}>
        <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem', fontSize: '1rem' }}>Further Reading</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="https://pubmed.ncbi.nlm.nih.gov/26140127/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Heist BS, et al. Exploring Clinical Reasoning Strategies and Learner-Level Thinking. J Grad Med Educ. 2014 →
            </a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <a href="https://pubmed.ncbi.nlm.nih.gov/16365605/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Norman G. Research in clinical reasoning: past history and current trends. Med Educ. 2005 →
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/21997584/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
              Eva KW. What every teacher needs to know about clinical reasoning. Med Educ. 2005 →
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Link href="/question-analysis" style={{ color: 'var(--purple-light)' }}>
          ← Back to Question Analysis
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/question-analysis/question-types" style={{ color: 'var(--purple-light)' }}>
            Question Types →
          </Link>
          <Link href="/question-analysis/answer-types" style={{ color: 'var(--purple-light)' }}>
            Answer Types →
          </Link>
        </div>
      </div>
    </div>
  );
}
