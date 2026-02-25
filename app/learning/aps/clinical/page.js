'use client';
import { useState } from 'react';

export default function APSClinicalModule() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showAnswer, setShowAnswer] = useState({});
  const toggle = (id) => setExpandedSection(expandedSection === id ? null : id);
  const toggleAnswer = (id) => setShowAnswer(prev => ({...prev, [id]: !prev[id]}));

  return (
    <main className="main">
      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; <a href="/learning/aps">APS</a> &gt; Clinical
        </p>
        <div className="module-badge">Module 2 of 3 • 5 min • Clinical Manifestations</div>
        <h1 className="page-title">When Accounts Get Frozen</h1>
        <p className="learning-subtitle">&ldquo;The Six Clinical Domains&rdquo;</p>
      </div>

      <section className="module-story-section">
        <h2 className="section-title">The Big Picture</h2>
        <div className="story-card">
          <p>
            The fraud detection system has gone rogue. You identified the culprits in Module 1 — the three departments falsely flagging legitimate transactions. But here’s the problem: <strong>you didn’t catch them in time</strong>. They’ve already started freezing accounts across the bank.
          </p>
          <p>
            And depending on <strong>which branch they hit</strong>, the consequences look very different. A frozen checking account is inconvenient. A frozen investment account is devastating. A system-wide crash is catastrophic. The 2023 ACR/EULAR criteria organize these consequences into <strong>six clinical domains</strong> — six different ways the bank gets hit.
          </p>
        </div>
        <div className="board-pearl-box">
          <div className="board-pearl-label">Key Question</div>
          <p>What are the six clinical domains of APS, what does each look like, and how do you put the clinical + lab pieces together for classification?</p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">The Six Domains</h2>

        <div className="expandable-module-card" onClick={() => toggle('venous')}>
          <div className="expandable-header-row">
            <h3>Domain 1: Checking Accounts — Macrovascular Venous (VTE)</h3>
            <span className="expand-icon">{expandedSection === 'venous' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The most common manifestation. Everyday accounts frozen first.</p>
          {expandedSection === 'venous' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>Start with the most everyday accounts — checking. These handle routine daily transactions. When checking accounts freeze, it’s the most common and most recognizable problem: <strong>DVT and PE</strong>.</p>
              </div>
              <ul className="content-list">
                <li>DVT of lower extremities = single most common thrombotic event in APS</li>
                <li>Unusual-site venous thrombosis (cerebral venous sinus, Budd-Chiari, renal vein) carries higher weight — more specific for APS</li>
                <li>Unprovoked VTE in a young patient (&lt;50, especially women) should always trigger aPL testing</li>
              </ul>
              <div className="scoring-box">
                <p><strong>2023 Scoring:</strong> Provoked DVT/PE = 1pt | Unprovoked DVT/PE = 3pts | Unusual-site venous = 3pts</p>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('arterial')}>
          <div className="expandable-header-row">
            <h3>Domain 2: Investment Accounts — Macrovascular Arterial</h3>
            <span className="expand-icon">{expandedSection === 'arterial' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">Less common than venous, but the stakes are much higher.</p>
          {expandedSection === 'arterial' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>Now the rogue system targets the high-value accounts — investments, retirement funds. When these get frozen, the consequences are catastrophic: <strong>stroke and MI in young patients</strong>.</p>
              </div>
              <ul className="content-list">
                <li>Stroke is the most common arterial event, especially in patients &lt;50 without CV risk factors</li>
                <li>MI in APS is typically from in situ thrombosis, not atherosclerotic plaque rupture</li>
                <li>Peripheral and renal arterial thrombosis also occur</li>
              </ul>
              <div className="scoring-box">
                <p><strong>2023 Scoring:</strong> With CV risk factors = 2pts | Without CV risk factors = 4pts</p>
              </div>
              <div className="board-pearl-box">
                <div className="board-pearl-label">Board Pearl</div>
                <p><strong>Young stroke (&lt;50) + no cardiovascular risk factors = always test for aPL.</strong> This is one of the highest-yield setups on boards.</p>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('micro')}>
          <div className="expandable-header-row">
            <h3>Domain 3: ATM Network — Microvascular Disease</h3>
            <span className="expand-icon">{expandedSection === 'micro' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">NEW in 2023 — the distributed network goes down quietly.</p>
          {expandedSection === 'micro' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>Beyond the big accounts, there’s the ATM network — thousands of small, distributed transactions. When this goes down, you don’t get one dramatic freeze; you get <strong>widespread, subtle dysfunction</strong> across many small systems.</p>
              </div>
              <ul className="content-list">
                <li><strong>NEW in 2023</strong> — not part of old Sapporo criteria</li>
                <li>APS nephropathy: thrombotic microangiopathy (NOT lupus nephritis — look for TMA on biopsy)</li>
                <li>Livedo reticularis: net-like mottled skin = microvascular dysfunction</li>
                <li>Livedoid vasculopathy, adrenal hemorrhage</li>
              </ul>
              <div className="scoring-box">
                <p><strong>2023 Scoring:</strong> Livedo reticularis = 2pts | Biopsy-proven TMA/livedoid vasculopathy = 5pts | Adrenal hemorrhage = 5pts</p>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('obstetric')}>
          <div className="expandable-header-row">
            <h3>Domain 4: Wire Transfer — Obstetric APS</h3>
            <span className="expand-icon">{expandedSection === 'obstetric' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The critical supply line to the construction project gets cut.</p>
          {expandedSection === 'obstetric' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>Think of pregnancy as a major new construction project that requires a constant wire transfer of funds (blood through the placenta). When the fraud system blocks that transfer, the project stalls or fails.</p>
              </div>
              <ul className="content-list">
                <li>≥3 consecutive early losses (&lt;10 wk) after excluding other causes = 1pt</li>
                <li>Fetal loss ≥10 wk = 3pts (major transfer blocked mid-project)</li>
                <li>Severe preeclampsia/eclampsia &lt;34 wk = 4pts (emergency shutdown)</li>
                <li><strong>Obstetric APS can exist WITHOUT thrombosis</strong> — some patients only ever have pregnancy complications</li>
              </ul>
              <div className="board-pearl-box">
                <div className="board-pearl-label">Board Pearl</div>
                <p>Purely obstetric APS patients often do NOT meet 2023 classification criteria (designed for research specificity). <strong>Classification criteria ≠ diagnostic criteria.</strong></p>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('cardiac')}>
          <div className="expandable-header-row">
            <h3>Domain 5: Vault Doors — Cardiac Valve Disease</h3>
            <span className="expand-icon">{expandedSection === 'cardiac' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">New to scored domains in 2023. The vault doors start to malfunction.</p>
          {expandedSection === 'cardiac' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>The bank vault doors — they’re supposed to open and close smoothly. When the fraud system targets them, they malfunction: <strong>Libman-Sacks endocarditis</strong>, sterile vegetations on the mitral and aortic valves.</p>
              </div>
              <ul className="content-list">
                <li>Valve thickening/regurgitation on echo = 2pts</li>
                <li>Typically mitral and aortic valves</li>
                <li>Can be a source of embolic stroke</li>
                <li>Distinguish from infective endocarditis (blood cultures negative, vegetations usually smaller)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('heme')}>
          <div className="expandable-header-row">
            <h3>Domain 6: Friendly Fire — Hematologic Manifestations</h3>
            <span className="expand-icon">{expandedSection === 'heme' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The fraud system starts targeting the bank’s own employees.</p>
          {expandedSection === 'heme' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>In the chaos, the bank’s own staff get caught in the crossfire. The most common casualty: <strong>thrombocytopenia</strong> — platelets consumed in the process of forming clots.</p>
              </div>
              <ul className="content-list">
                <li>20–50% of APS patients have thrombocytopenia</li>
                <li>Usually moderate (50,000–100,000) — severe = consider other diagnoses</li>
                <li><strong>THE PARADOX:</strong> Low platelets but at risk for CLOTTING, not bleeding (like HIT)</li>
                <li>Persistent thrombocytopenia = 2pts</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Catastrophic APS — System-Wide Meltdown</h2>
        <div className="story-card highlight-card">
          <p>
            The entire banking system crashes. Every branch, every ATM, every portal — <strong>frozen simultaneously</strong>. Catastrophic APS is the rarest (&lt;1%) and deadliest (30–50% mortality) variant: widespread thrombosis affecting <strong>≥3 organ systems</strong> developing over <strong>≤1 week</strong>, with small vessel predominance.
          </p>
          <p>
            Classic triggers: infection, surgery, anticoagulation withdrawal. Treatment = everything deployed at once: anticoagulation + steroids + plasma exchange ± IVIG.
          </p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">2023 Classification Framework</h2>
        <div className="step-flow">
          <div className="step-card"><div className="step-number">1</div><div><strong>Entry:</strong> At least one positive aPL test within 3 years of event</div></div>
          <div className="step-card"><div className="step-number">2</div><div><strong>Score Clinical:</strong> Pick highest-weighted item per domain (D1–D6)</div></div>
          <div className="step-card"><div className="step-number">3</div><div><strong>Score Lab:</strong> LA assays (1–5pts) + aCL/anti-β2GPI ELISA (1–7pts)</div></div>
          <div className="step-card"><div className="step-number">4</div><div><strong>Classify:</strong> Clinical ≥3 AND Lab ≥3 = APS</div></div>
        </div>
        <div className="board-pearl-box">
          <div className="board-pearl-label">Key Nuance</div>
          <p>2023 criteria traded sensitivity for specificity: <strong>99% specific but 84% sensitive</strong> (vs. old Sapporo: 86% specific, 99% sensitive). Some true APS patients won’t meet classification criteria — that’s by design.</p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Memory Aids</h2>
        <div className="mnemonic-box"><p><strong>“Three-and-Three to Get the Key”</strong> — ≥3 clinical AND ≥3 lab points to classify</p></div>
        <div className="mnemonic-box"><p><strong>“Platelets low but clots still flow — APS paradox, now you know”</strong> — Thrombocytopenia in APS means clotting risk, not bleeding risk.</p></div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Test Yourself</h2>
        <div className="quiz-card" onClick={() => toggleAnswer('q1')}>
          <p className="quiz-question"><strong>Q1:</strong> A 28-year-old woman with 3 consecutive early pregnancy losses, no thrombosis, LA positive, aCL IgG 62 GPL. Does she meet 2023 criteria?</p>
          {showAnswer.q1 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Clinical score = 1 point (obstetric domain, ≥3 early losses). She needs ≥3 clinical points. <strong>She does NOT meet classification criteria.</strong> This illustrates the sensitivity–specificity tradeoff. She should still be diagnosed and managed clinically.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q1 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q2')}>
          <p className="quiz-question"><strong>Q2:</strong> A 35-year-old man with known APS on warfarin undergoes knee surgery. Anticoagulation held. Five days post-op: renal failure, stroke, and ARDS over 48 hours. Diagnosis?</p>
          {showAnswer.q2 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Catastrophic APS. Known APS + trigger (anticoag cessation + surgery) + ≥3 organs in &lt;1 week. Treatment: anticoagulation + steroids + plasma exchange ± IVIG — all simultaneously.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q2 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q3')}>
          <p className="quiz-question"><strong>Q3:</strong> A patient with APS has livedo reticularis, proteinuria, and rising creatinine. Biopsy shows thrombotic microangiopathy without immune complex deposition. Diagnosis and significance?</p>
          {showAnswer.q3 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> APS nephropathy (microvascular domain). Biopsy shows TMA, NOT immune complex glomerulonephritis — this distinguishes it from lupus nephritis. Treatment differs significantly.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q3 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
      </section>

      <section className="module-summary-section">
        <h2 className="section-title">Summary</h2>
        <div className="summary-box">
          <ul className="summary-list">
            <li>Six clinical domains: Venous, Arterial, Microvascular (NEW), Obstetric, Cardiac valve (NEW to scoring), Hematologic (NEW to scoring)</li>
            <li>DVT/PE = most common manifestation; stroke = most common arterial event</li>
            <li>Young stroke (&lt;50) without risk factors = test aPL</li>
            <li>Obstetric APS can exist without thrombosis</li>
            <li>Classification requires ≥3 clinical AND ≥3 lab points</li>
            <li>CAPS = ≥3 organs in ≤1 week — treat with combination therapy</li>
            <li>2023 criteria: 99% specific, 84% sensitive (traded sensitivity for specificity)</li>
          </ul>
        </div>
      </section>

      <div className="module-nav">
        <a href="/learning/aps/labs" className="module-nav-link">← Previous: Lab Interpretation</a>
        <a href="/learning/aps/management" className="module-nav-link module-nav-next">Next: Management & Treatment →</a>
      </div>
    </main>
  );
}

