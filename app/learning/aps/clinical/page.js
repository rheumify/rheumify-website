'use client';
import { useState } from 'react';

export default function APSClinicalModule() {
  const [showAnswer, setShowAnswer] = useState({});
  const toggleAnswer = (id) => setShowAnswer(prev => ({...prev, [id]: !prev[id]}));

  return (
    <main className="main">
      <style>{`
        /* ── LIGHT THEME (biologics palette) ── */
        body { background: #FAF8F5 !important; color: #1C1A17 !important; }
        .main { background: #FAF8F5; min-height: 100vh; }
        .page-title { color: #1C1A17; }
        .learning-subtitle { color: #4A4540; }
        .breadcrumb { color: #7A7268; }
        .breadcrumb a { color: #1D5F74; }
        .module-badge { background: rgba(29,95,116,0.08); color: #1D5F74; border: 1px solid rgba(29,95,116,0.2); border-radius: 20px; padding: 0.25rem 0.75rem; display: inline-block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.5rem; }
        .section-title { color: #1C1A17; }
        .story-card { background: #FFFFFF; border: 1px solid #DDD6CB; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.25rem; }
        .story-card p { color: #4A4540; }
        .story-card strong { color: #1C1A17; }
        .story-card em { color: #4A4540; }
        .highlight-card { border-left: 4px solid #C8964A; background: #FDF6EC; }
        .board-pearl-box { background: #EFF6FB; border-left: 4px solid #3A7EA0; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 1.25rem 0; }
        .board-pearl-label { color: #3A7EA0; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem; }
        .board-pearl-box p { color: #1C1A17; }
        .board-pearl-box strong { color: #1D5F74; }
        .step-card { background: #FFFFFF; border: 1px solid #DDD6CB; }
        .step-card div { color: #4A4540; }
        .step-card strong { color: #1C1A17; }
        .step-number { background: #1D5F74; color: #FFFFFF; }
        .content-list li { color: #4A4540; }
        .content-list li::before { color: #1D5F74; }
        .content-list strong { color: #1C1A17; }
        .quiz-card { background: #FFFFFF; border: 1px solid #DDD6CB; }
        .quiz-card:hover { border-color: #1D5F74; }
        .quiz-question { color: #4A4540; }
        .quiz-question strong { color: #1C1A17; }
        .quiz-answer { background: #F5F0EB; border-radius: 8px; padding: 1rem 1.25rem; margin: 0.75rem 0; }
        .quiz-answer p { color: #4A4540; }
        .quiz-answer strong { color: #1C1A17; }
        .quiz-toggle { color: #1D5F74; font-weight: 600; font-size: 0.85rem; display: block; margin-top: 0.5rem; }
        .module-table { background: #FFFFFF; border-collapse: collapse; }
        .module-table th { background: #1D5F74; color: #FFFFFF; }
        .module-table td { color: #4A4540; border-color: #DDD6CB; }
        .module-table strong { color: #1C1A17; }
        .summary-box { background: #FFFFFF; border: 1px solid #DDD6CB; border-radius: 12px; padding: 1.5rem; }
        .summary-list li { color: #4A4540; }
        .summary-list li::before { color: #1D5F74; }
        .module-nav-link { background: #FFFFFF; border: 1px solid #DDD6CB; color: #1C1A17; }
        .module-nav-link:hover { border-color: #1D5F74; color: #1D5F74; text-decoration: none; }
        /* ── PAGE-SPECIFIC ── */
        .domain-card { background: #FFFFFF; border: 1px solid #DDD6CB; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.25rem; }
        .domain-card h3 { margin: 0 0 2px; font-size: 1.1rem; color: #1C1A17; }
        .domain-card p { color: #4A4540; }
        .domain-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 0.75rem; }
        .domain-num { width: 36px; height: 36px; min-width: 36px; border-radius: 50%; background: #8680C0; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; }
        .domain-tagline { font-style: italic; color: #7A7268; font-size: 0.9rem; margin: 4px 0 0; }
        .domain-score { background: rgba(29,95,116,0.06); border: 1px solid rgba(29,95,116,0.15); border-radius: 8px; padding: 0.5rem 0.9rem; margin: 10px 0; font-size: 0.9rem; color: #4A4540; }
        .inline-mnemonic { background: #FDF6EC; border-left: 3px solid #C8964A; border-radius: 6px; padding: 0.65rem 0.9rem; margin: 10px 0; font-size: 0.95rem; color: #4A4540; }
      `}</style>

      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; <a href="/learning/aps">APS</a> &gt; Clinical
        </p>
        <div className="module-badge">Module 2 of 3 &bull; 5 min &bull; Clinical Manifestations</div>
        <h1 className="page-title">When Accounts Get Frozen</h1>
        <p className="learning-subtitle">&ldquo;The Six Clinical Domains&rdquo;</p>
      </div>

      <section className="module-story-section">
        <div className="story-card">
          <p>
            The fraud detection system has gone rogue. You identified the culprits in Module 1 &mdash; the three departments falsely flagging legitimate transactions. But here&rsquo;s the problem: <strong>you didn&rsquo;t catch them in time</strong>. They&rsquo;ve already started freezing accounts across the bank.
          </p>
          <p>
            And depending on <strong>which branch they hit</strong>, the consequences look very different. A frozen checking account is inconvenient. A frozen investment account is devastating. A system-wide crash is catastrophic. The 2023 ACR/EULAR criteria organize these consequences into <strong>six clinical domains</strong> &mdash; six different ways the bank gets hit.
          </p>
        </div>
        <div className="board-pearl-box">
          <div className="board-pearl-label">Key Question</div>
          <p>What are the six clinical domains of APS, what does each look like, and how do you put the clinical + lab pieces together for classification?</p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">The Six Domains</h2>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">1</div>
            <div>
              <h3>Checking Accounts &mdash; Macrovascular Venous (VTE)</h3>
              <p className="domain-tagline">The most common manifestation. Everyday accounts frozen first.</p>
            </div>
          </div>
          <p>
            The most everyday accounts &mdash; checking. These handle routine daily transactions. When checking accounts freeze, it&rsquo;s the most common and most recognizable problem: <strong>DVT and PE</strong>.
          </p>
          <ul className="content-list">
            <li>DVT of lower extremities = single most common thrombotic event in APS</li>
            <li>Unusual-site venous thrombosis (cerebral venous sinus, Budd-Chiari, renal vein) carries higher weight &mdash; more specific for APS</li>
            <li>Unprovoked VTE in a young patient (&lt;50, especially women) should always trigger aPL testing</li>
          </ul>
          <div className="domain-score">
            <strong>Classified:</strong> DVT/PE (provoked or unprovoked), unusual-site venous thrombosis (cerebral sinus, Budd-Chiari, renal vein) &nbsp;&bull;&nbsp; <strong>Not classified:</strong> Superficial thrombophlebitis
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">2</div>
            <div>
              <h3>Investment Accounts &mdash; Macrovascular Arterial</h3>
              <p className="domain-tagline">Less common than venous, but the stakes are much higher.</p>
            </div>
          </div>
          <p>
            Now the rogue system targets the high-value accounts &mdash; investments, retirement funds. When these get frozen, the consequences are catastrophic: <strong>stroke and MI in young patients</strong>.
          </p>
          <ul className="content-list">
            <li>Stroke is the most common arterial event, especially in patients &lt;50 without CV risk factors</li>
            <li>MI in APS is typically from in situ thrombosis, not atherosclerotic plaque rupture</li>
            <li>Peripheral and renal arterial thrombosis also occur</li>
          </ul>
          <div className="domain-score">
            <strong>Classified:</strong> Stroke, MI, peripheral arterial thrombosis (weighted by CV risk factor burden) &nbsp;&bull;&nbsp; <strong>Not classified:</strong> Events clearly attributable to atherosclerosis alone
          </div>
          <div className="board-pearl-box" style={{marginTop: '10px'}}>
            <div className="board-pearl-label">Board Pearl</div>
            <p><strong>Young stroke (&lt;50) + no cardiovascular risk factors = always test for aPL.</strong> This is one of the highest-yield setups on boards.</p>
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">3</div>
            <div>
              <h3>Small Branch Network &mdash; Microvascular Disease</h3>
              <p className="domain-tagline">NEW in 2023 &mdash; the distributed network goes down quietly.</p>
            </div>
          </div>
          <p>
            Beyond the big accounts, there&rsquo;s the small branch network &mdash; thousands of tiny, distributed transactions running in parallel. When this goes down, you don&rsquo;t get one dramatic freeze; you get <strong>widespread, subtle dysfunction</strong> across many small systems simultaneously.
          </p>
          <ul className="content-list">
            <li><strong>NEW in 2023</strong> &mdash; not part of old Sapporo criteria</li>
            <li>APS nephropathy: thrombotic microangiopathy (NOT lupus nephritis &mdash; look for TMA on biopsy)</li>
            <li>Livedo reticularis: net-like mottled skin = microvascular dysfunction</li>
            <li>Livedoid vasculopathy, adrenal hemorrhage</li>
          </ul>
          <div className="domain-score">
            <strong>Classified:</strong> Livedo reticularis, APS nephropathy (TMA on biopsy), livedoid vasculopathy, adrenal hemorrhage &nbsp;&bull;&nbsp; <strong>Not classified:</strong> Raynaud&rsquo;s phenomenon, isolated skin findings without biopsy
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">4</div>
            <div>
              <h3>Construction Project Funding &mdash; Obstetric APS</h3>
              <p className="domain-tagline">The critical supply line to the project gets cut.</p>
            </div>
          </div>
          <p>
            Pregnancy is a major new construction project that requires a constant flow of funds (blood through the placenta). When the fraud system blocks that supply line, the project stalls or fails.
          </p>
          <ul className="content-list">
            <li>&ge;3 consecutive early losses (&lt;10 wk) after excluding other causes</li>
            <li>Fetal loss &ge;10 wk</li>
            <li>Severe preeclampsia/eclampsia &lt;34 wk &nbsp;&bull;&nbsp; <strong>Not classified:</strong> &le;2 early losses, term preeclampsia, unexplained infertility alone</li>
            <li><strong>Obstetric APS can exist WITHOUT thrombosis</strong> &mdash; some patients only ever have pregnancy complications</li>
          </ul>
          <div className="board-pearl-box" style={{marginTop: '10px'}}>
            <div className="board-pearl-label">Board Pearl</div>
            <p>Purely obstetric APS patients often do NOT meet 2023 classification criteria (designed for research specificity). <strong>Classification criteria &ne; diagnostic criteria.</strong></p>
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">5</div>
            <div>
              <h3>Valve Gates &mdash; Cardiac Valve Disease</h3>
              <p className="domain-tagline">New to scored domains in 2023. The gates start to malfunction.</p>
            </div>
          </div>
          <p>
            The bank&rsquo;s valve gates &mdash; they&rsquo;re supposed to open and close smoothly, controlling flow between chambers. When the fraud system targets them, they malfunction: <strong>Libman-Sacks endocarditis</strong>, sterile vegetations on the mitral and aortic valves.
          </p>
          <ul className="content-list">
            <li>Classified: Valve thickening or regurgitation &nbsp;&bull;&nbsp; Not classified: Isolated MVP without thickening</li>
            <li>Typically mitral and aortic valves</li>
            <li>Can be a source of embolic stroke</li>
            <li>Distinguish from infective endocarditis (blood cultures negative, vegetations usually smaller)</li>
          </ul>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">6</div>
            <div>
              <h3>Friendly Fire &mdash; Hematologic Manifestations</h3>
              <p className="domain-tagline">The fraud system starts targeting the bank&rsquo;s own employees.</p>
            </div>
          </div>
          <p>
            In the chaos, the bank&rsquo;s own staff get caught in the crossfire. The most common casualty: <strong>thrombocytopenia</strong> &mdash; platelets consumed in the process of forming clots.
          </p>
          <ul className="content-list">
            <li>20&ndash;50% of APS patients have thrombocytopenia</li>
            <li>Usually moderate (50,000&ndash;100,000) &mdash; severe = consider other diagnoses</li>
            <li><strong>THE PARADOX:</strong> Low platelets but at risk for CLOTTING, not bleeding (like HIT)</li>
            <li>Classified: Persistent thrombocytopenia (&lt;100k) &nbsp;&bull;&nbsp; Not classified: Mild/transient thrombocytopenia</li>
          </ul>
          <div className="inline-mnemonic">
            <strong>&ldquo;Platelets low but clots still flow &mdash; APS paradox, now you know&rdquo;</strong> &mdash; Thrombocytopenia in APS means clotting risk, not bleeding risk.
          </div>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Catastrophic APS &mdash; System-Wide Meltdown</h2>
        <div className="story-card highlight-card">
          <p>
            The entire banking system crashes. Every branch, every ATM, every portal &mdash; <strong>frozen simultaneously</strong>. Catastrophic APS is the rarest (&lt;1%) and deadliest (30&ndash;50% mortality) variant: widespread thrombosis affecting <strong>&ge;3 organ systems</strong> developing over <strong>&le;1 week</strong>, with small vessel predominance.
          </p>
          <p>
            Classic triggers: infection, surgery, anticoagulation withdrawal. Treatment = everything deployed at once: anticoagulation + steroids + plasma exchange &plusmn; IVIG.
          </p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">2023 Classification Framework</h2>
        <div className="step-flow">
          <div className="step-card"><div className="step-number">1</div><div><strong>Entry:</strong> At least one positive aPL test within 3 years of event</div></div>
          <div className="step-card"><div className="step-number">2</div><div><strong>Score Clinical:</strong> Pick highest-weighted item per domain (D1&ndash;D6)</div></div>
          <div className="step-card"><div className="step-number">3</div><div><strong>Score Lab:</strong> LA assays + aCL/anti-&beta;2GPI ELISA titers (weighted by titer level and test type)</div></div>
          <div className="step-card"><div className="step-number">4</div><div><strong>Classify:</strong> Clinical &ge;3 AND Lab &ge;3 = APS</div></div>
        </div>
        <div className="inline-mnemonic" style={{marginTop: '12px'}}>
          <strong>&ldquo;Three-and-Three to Get the Key&rdquo;</strong> &mdash; &ge;3 clinical AND &ge;3 lab points to classify as APS.
        </div>
        <div className="board-pearl-box" style={{marginTop: '10px'}}>
          <div className="board-pearl-label">Key Nuance</div>
          <p>2023 criteria traded sensitivity for specificity: <strong>99% specific but 84% sensitive</strong> (vs. old Sapporo: 86% specific, 99% sensitive). Some true APS patients won&rsquo;t meet classification criteria &mdash; that&rsquo;s by design.</p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Test Yourself</h2>
        <div className="quiz-card" onClick={() => toggleAnswer('q1')}>
          <p className="quiz-question"><strong>Q1:</strong> A 28-year-old woman with 3 consecutive early pregnancy losses, no thrombosis, LA positive, aCL IgG 62 GPL. Does she meet 2023 criteria?</p>
          {showAnswer.q1 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Clinical score = 1 point (obstetric domain, &ge;3 early losses). She needs &ge;3 clinical points. <strong>She does NOT meet classification criteria.</strong> This illustrates the sensitivity&ndash;specificity tradeoff. She should still be diagnosed and managed clinically.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q1 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q2')}>
          <p className="quiz-question"><strong>Q2:</strong> A 35-year-old man with known APS on warfarin undergoes knee surgery. Anticoagulation held. Five days post-op: renal failure, stroke, and ARDS over 48 hours. Diagnosis?</p>
          {showAnswer.q2 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Catastrophic APS. Known APS + trigger (anticoag cessation + surgery) + &ge;3 organs in &lt;1 week. Treatment: anticoagulation + steroids + plasma exchange &plusmn; IVIG &mdash; all simultaneously.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q2 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q3')}>
          <p className="quiz-question"><strong>Q3:</strong> A patient with APS has livedo reticularis, proteinuria, and rising creatinine. Biopsy shows thrombotic microangiopathy without immune complex deposition. Diagnosis and significance?</p>
          {showAnswer.q3 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> APS nephropathy (microvascular domain). Biopsy shows TMA, NOT immune complex glomerulonephritis &mdash; this distinguishes it from lupus nephritis. Treatment differs significantly.</p>
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
            <li>Classification requires &ge;3 clinical AND &ge;3 lab points (&ldquo;Three-and-Three to Get the Key&rdquo;)</li>
            <li>CAPS = &ge;3 organs in &le;1 week &mdash; treat with combination therapy</li>
            <li>2023 criteria: 99% specific, 84% sensitive (traded sensitivity for specificity)</li>
          </ul>
        </div>
      </section>

      <div className="module-nav">
        <a href="/learning/aps/labs" className="module-nav-link">&larr; Previous: Lab Interpretation</a>
        <a href="/learning/aps/management" className="module-nav-link module-nav-next">Next: Management &amp; Treatment &rarr;</a>
      </div>
    </main>
  );
}
