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
          knowledge to clinical scenarios. Most diagnostic errors stem from reasoning failures rather than knowledge
          gaps. Understanding which cognitive skill a question is testing helps you approach it with the right
          mental framework.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          <strong>Important:</strong> On the rheumatology ABIM, these reasoning skills are embedded <em>within</em> each
          question—you won't see explicit multi-step questions or be told "now apply risk-benefit analysis." Instead,
          the skill being tested is implicit in how the question is structured and what information is provided.
          Learning to recognize these patterns helps you understand what the question writer is really asking.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Recognizing which cognitive process is being tested allows you to:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }}>
          <li>Focus on the relevant clinical data and filter out distractors</li>
          <li>Apply the appropriate decision-making strategy</li>
          <li>Avoid overthinking straightforward questions or underthinking complex ones</li>
          <li>Recognize when multiple reasoning types are needed within a single question</li>
        </ul>
      </div>

      {/* Clinical Reasoning Types */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>

        {/* 1. Pattern Recognition */}
        <div style={{
          marginBottom: '0.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>1. Pattern Recognition</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            <strong>What it tests:</strong> Your ability to recognize a classic clinical presentation and match it to
            the correct diagnosis. This is the most basic form of clinical reasoning—seeing a constellation of findings
            and identifying what they represent.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to approach it:</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
            Look for pathognomonic features or classic combinations. These questions reward knowing the "textbook"
            presentations. When you see a recognizable pattern, trust it—don't overthink. If it looks like a classic
            case, it probably is.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Common patterns in rheumatology:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Heliotrope rash + Gottron's papules = dermatomyositis</li>
            <li>Malar rash + serositis + cytopenias = SLE</li>
            <li>Sausage digits + nail pitting + low back pain = psoriatic arthritis</li>
            <li>Saddle nose deformity + subglottic stenosis = GPA</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 45-year-old woman presents with fatigue, morning stiffness lasting
              2 hours, and symmetric swelling of the MCP and PIP joints bilaterally. RF and anti-CCP are positive.
              What is the most likely diagnosis?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Osteoarthritis<br/>
              B) Rheumatoid arthritis ✓<br/>
              C) Psoriatic arthritis<br/>
              D) Systemic lupus erythematosus
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: Symmetric small joint polyarthritis + prolonged morning stiffness + positive RF and anti-CCP
              is the classic RA pattern. The question tests whether you recognize this constellation.</em>
            </p>
          </div>
        </div>

        {/* 2. Multi-Step Problem Solving */}
        <div style={{
          marginBottom: '0.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>2. Multi-Step Problem Solving</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            <strong>What it tests:</strong> Your ability to work through a clinical problem that requires sequential
            reasoning—where the answer to one question informs the next decision.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How it appears on the ABIM:</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
            You won't see explicit "Step 1, Step 2" questions. Instead, the multi-step reasoning is embedded in what
            information the vignette provides. The question expects you to have <em>already</em> worked through earlier
            steps mentally to arrive at the correct answer. For example, a treatment question assumes you've already
            established the diagnosis and assessed severity.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to approach it:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Before looking at answers, mentally work through: What's the diagnosis? How severe? What information do I still need?</li>
            <li>Check if the question is asking about an intermediate step or the final management step</li>
            <li>Don't skip ahead—each step builds on the previous one</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 32-year-old woman with SLE presents with fatigue, edema, and foamy urine.
              Labs show creatinine 1.8 mg/dL (baseline 0.9) and 3+ proteinuria. ANA and anti-dsDNA are positive.
              What is the most appropriate next step?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Start mycophenolate mofetil<br/>
              B) Increase prednisone to 60 mg daily<br/>
              C) Perform kidney biopsy ✓<br/>
              D) Start cyclophosphamide
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: The implicit reasoning chain is: proteinuria + rising creatinine → suspect lupus nephritis
              → need biopsy to classify before treatment. You can't choose the right treatment (A or D) without knowing
              the ISN/RPS class. The question tests whether you know to biopsy before treating.</em>
            </p>
          </div>
        </div>

        {/* 3. Risk-Benefit Analysis */}
        <div style={{
          marginBottom: '0.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>3. Risk-Benefit Analysis</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            <strong>What it tests:</strong> Your ability to weigh the potential benefits of a treatment against its
            risks in a specific clinical context. The "right" answer often depends on patient-specific factors that
            shift the usual calculation.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to approach it:</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
            Identify the key patient factors that shift the risk-benefit calculation. Ask yourself: "What makes this
            patient different from the textbook case?" Look for age, comorbidities, disease severity, infection history,
            pregnancy status, or patient preferences that would change your usual approach.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Common risk-benefit scenarios in rheumatology:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>Immunosuppression in patients with recent infections or malignancy history</li>
            <li>Biologic therapy in patients with hepatitis B/C or latent TB</li>
            <li>Treatment choices in pregnancy and breastfeeding</li>
            <li>NSAIDs in patients with CKD, cardiovascular disease, or GI bleeding history</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 35-year-old woman with antiphospholipid syndrome and history of DVT is found
              to be 8 weeks pregnant. She is currently on warfarin. What is the most appropriate next step?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Continue warfarin throughout pregnancy<br/>
              B) Stop warfarin and start low-molecular-weight heparin ✓<br/>
              C) Stop all anticoagulation until after delivery<br/>
              D) Switch to direct oral anticoagulant
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: She needs anticoagulation for APS, but warfarin is teratogenic (especially weeks 6-12).
              The benefit of preventing thrombosis must be balanced against fetal risk—LMWH provides anticoagulation
              while avoiding warfarin embryopathy. DOACs (D) lack safety data in pregnancy.</em>
            </p>
          </div>
        </div>

        {/* 4. Guideline Application */}
        <div style={{
          marginBottom: '0.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>4. Guideline Application</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            <strong>What it tests:</strong> Your knowledge of current clinical guidelines and ability to apply them to
            specific scenarios. These questions test whether you know the standard of care as defined by major
            professional organizations.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Key rheumatology guidelines for the ABIM:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li><strong>Hydroxychloroquine monitoring:</strong> Baseline eye exam, then annual screening after 5 years (or earlier with risk factors like renal disease, higher doses, or tamoxifen use)</li>
            <li><strong>TB screening before biologics:</strong> TST or IGRA before starting TNF inhibitors and other biologics; treat latent TB before or concurrently with biologic initiation</li>
            <li><strong>Treat-to-target in RA:</strong> Adjust therapy every 3 months if not at goal; aim for remission or low disease activity</li>
            <li><strong>DMARD escalation:</strong> If methotrexate monotherapy fails, add or switch to biologic or targeted synthetic DMARD</li>
            <li><strong>Gout urate-lowering therapy:</strong> Start if ≥2 flares/year, tophi present, or CKD stage ≥3; target serum urate &lt;6 mg/dL</li>
            <li><strong>Osteoporosis screening:</strong> DEXA for women ≥65, men ≥70, or earlier with risk factors (glucocorticoid use, RA)</li>
            <li><strong>Vaccination:</strong> Complete age-appropriate vaccines before starting immunosuppression; avoid live vaccines on immunosuppression</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 58-year-old woman with RA has been taking hydroxychloroquine 400 mg daily for
              7 years. She has no visual symptoms. Her last eye exam was 3 years ago and was normal. What is the most
              appropriate recommendation?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) No eye exam needed if asymptomatic<br/>
              B) Eye exam every 5 years is sufficient<br/>
              C) Annual eye exam with OCT and visual fields ✓<br/>
              D) Discontinue hydroxychloroquine due to duration of use
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: ACR and AAO guidelines recommend annual screening after 5 years of HCQ use. She is overdue
              at 7 years with a 3-year gap. Screening should include sensitive tests (OCT, automated visual fields)
              to detect retinopathy before symptoms develop.</em>
            </p>
          </div>
        </div>

        {/* 5. Exception Recognition */}
        <div style={{
          marginBottom: '0.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>5. Exception Recognition</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            <strong>What it tests:</strong> Your ability to recognize when the standard approach doesn't apply—when
            patient-specific factors require deviating from the usual recommendation.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to approach it:</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
            The vignette will include a detail that changes everything—but it won't be flagged with "however" or "but."
            You need to recognize that certain patient characteristics make the standard answer wrong. Train yourself to
            scan for contraindications, drug interactions, and special populations (pregnancy, renal failure, liver disease,
            infection) that modify the usual approach.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Common exceptions in rheumatology:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li>NSAIDs contraindicated in CKD, heart failure, GI bleeding history</li>
            <li>Methotrexate contraindicated in pregnancy, significant liver disease, heavy alcohol use</li>
            <li>Allopurinol dose adjustment in CKD (but still should be used—don't avoid it entirely)</li>
            <li>Avoid steroids in scleroderma renal crisis (they can precipitate it)</li>
            <li>Behçet's pulmonary aneurysms require immunosuppression, NOT anticoagulation</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 28-year-old man with Behçet's disease presents with hemoptysis. CT angiography
              shows a pulmonary artery aneurysm. What is the most appropriate treatment?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Anticoagulation with heparin<br/>
              B) High-dose glucocorticoids and cyclophosphamide ✓<br/>
              C) Warfarin therapy<br/>
              D) Inferior vena cava filter
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: The instinct might be anticoagulation for a vascular problem, but pulmonary artery aneurysms
              in Behçet's are due to vasculitis, not thrombosis. Anticoagulation could cause fatal rupture. This is an
              exception where the treatment is immunosuppression.</em>
            </p>
          </div>
        </div>

        {/* 6. Integration of Findings */}
        <div style={{
          marginBottom: '0.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>6. Integration of Findings</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            <strong>What it tests:</strong> Your ability to synthesize multiple pieces of clinical information—history,
            physical exam, labs, imaging—into a coherent clinical picture, especially when individual findings have
            broad differentials.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>How to approach it:</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', opacity: 0.9 }}>
            Don't fixate on one finding. Ask: "What single diagnosis explains ALL of these findings?" Look at how the
            pieces fit together. Sometimes a single lab value or physical finding changes the interpretation of everything
            else. These questions often present multi-system involvement that points to a systemic disease.
          </p>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 25-year-old woman presents with painful oral ulcers, inflammatory arthritis,
              pleuritic chest pain, and a facial rash that spares the nasolabial folds. Labs show hemoglobin 9.8, platelets
              95,000, creatinine 1.4, and 2+ proteinuria. ANA is positive at 1:640. What is the most likely diagnosis?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Behçet's disease<br/>
              B) Rheumatoid arthritis<br/>
              C) Systemic lupus erythematosus ✓<br/>
              D) Mixed connective tissue disease
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: Each finding alone has a broad differential. Together they point to SLE: malar rash sparing
              nasolabial folds + oral ulcers + serositis (pleuritis) + cytopenias + nephritis + positive ANA. The
              question tests whether you can integrate multiple findings into a unifying diagnosis.</em>
            </p>
          </div>
        </div>

        {/* 7. Timing/Urgency Decision */}
        <div style={{
          marginBottom: '0.5rem',
          padding: '1.5rem',
          background: 'rgba(196, 181, 224, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(196, 181, 224, 0.2)'
        }}>
          <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>7. Timing/Urgency Decision</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
            <strong>What it tests:</strong> Your ability to determine how quickly action is needed. Some conditions
            require immediate intervention while others can be worked up over time. This often distinguishes emergencies
            from urgent situations from routine management.
          </p>
          <p style={{ marginBottom: '0.75rem', fontWeight: '500' }}>Rheumatologic emergencies requiring immediate action:</p>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.8' }}>
            <li><strong>Septic arthritis:</strong> Joint aspiration and empiric antibiotics immediately</li>
            <li><strong>GCA with vision symptoms:</strong> IV methylprednisolone 1,000 mg daily before biopsy results</li>
            <li><strong>Scleroderma renal crisis:</strong> ACE inhibitor immediately, even with rising creatinine</li>
            <li><strong>CAPS:</strong> Triple therapy (anticoagulation + steroids + plasma exchange/IVIG)</li>
            <li><strong>MAS/HLH:</strong> High-dose steroids, consider anakinra or etoposide</li>
            <li><strong>Pulmonary-renal syndrome:</strong> Pulse steroids and plasmapheresis for anti-GBM/severe AAV</li>
            <li><strong>C-spine instability in RA:</strong> Urgent stabilization before any intubation</li>
          </ul>
          <div style={{
            background: 'var(--navy-dark)',
            padding: '1rem',
            borderRadius: '8px',
            marginTop: '1rem',
            border: '1px solid var(--purple-light)'
          }}>
            <p style={{ fontStyle: 'italic', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
              <strong>Example:</strong> A 52-year-old woman with known APS on warfarin presents with confusion, fever,
              acute kidney injury (creatinine 4.2 from baseline 1.0), thrombocytopenia (platelets 45,000), and new DVT.
              INR is 2.1. What is the most appropriate immediate management?
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              A) Increase warfarin dose<br/>
              B) Add aspirin to warfarin<br/>
              C) Glucocorticoids, therapeutic anticoagulation, and plasma exchange ✓<br/>
              D) Observation with repeat labs in 24 hours
            </p>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', opacity: 0.7 }}>
              <em>Analysis: This is catastrophic APS (CAPS)—multi-organ thrombosis despite anticoagulation with high
              mortality. Don't wait. Triple therapy is needed immediately: therapeutic anticoagulation + glucocorticoids +
              plasma exchange or IVIG. Observation (D) would be dangerous.</em>
            </p>
          </div>
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
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          As you practice, try to identify which reasoning type(s) each question is testing. This metacognitive
          awareness—thinking about your thinking—is one of the most powerful tools for improving your test performance.
        </p>
        <p style={{ lineHeight: '1.7' }}>
          <strong>Pro tip:</strong> When you get a question wrong, don't just review the fact you missed. Ask yourself:
          "What type of reasoning did this question require? Where did my reasoning process break down?" This helps you
          improve your approach, not just your knowledge base.
        </p>
      </div>

{/* Cognitive Debiasing Section */}
      <div className="content-card" style={{ marginTop: '2rem', borderLeft: '4px solid var(--purple-light)' }}>
        <h2 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>Cognitive Debiasing</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Research shows that 10-17% of diagnostic errors are due to <strong>premature closure</strong>—settling on a
          diagnosis too quickly without considering alternatives. Before finalizing your answer, pause and ask yourself
          two debiasing questions:
          </p>
        <div style={{
                      background: 'rgba(196, 181, 224, 0.15)',
                      padding: '1.25rem',
                      borderRadius: '8px',
                      marginBottom: '1rem'
          }}>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--purple-light)' }}>
            1. "What doesn't fit?"
              </p>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem', opacity: 0.9 }}>
            Look for findings in the vignette that your chosen diagnosis doesn't explain. If there's a lab value,
                          symptom, or timeline that doesn't quite fit, that's a signal to reconsider.
              </p>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--purple-light)' }}>
            2. "What else could this be?"
              </p>
          <p style={{ lineHeight: '1.7', opacity: 0.9 }}>
            Force yourself to consider at least one alternative before committing. This simple step has been shown
            to significantly reduce confirmation bias and improve diagnostic accuracy.
              </p>
              </div>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          <em>Studies using structured reflection techniques show improved diagnostic accuracy from 38% to 50%
                        when learners are prompted to consider alternatives before finalizing their answer.</em>
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
                          <li style={{ marginBottom: '0.5rem' }}>
                            <a href="https://pubmed.ncbi.nlm.nih.gov/40012058/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                              Kojima T, et al. Reducing confirmation bias using the OMP model with verbalizing discordance. BMC Med Educ. 2025 →
                                </a>
                                </li>
                                          <li>
                                            <a href="https://pubmed.ncbi.nlm.nih.gov/31290117/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                                              Costa Filho GB, et al. Effects of deliberate reflection on diagnostic accuracy and calibration. Perspect Med Educ. 2019 →
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
