'use client';
import Link from 'next/link';

export default function APSClinicalPage() {
  return (
    <div className="learning-page">
      <style>{`
        /* ---- base layout ---- */
        .learning-page { max-width: 860px; margin: 0 auto; padding: 1.5rem 1rem 3rem; font-family: 'Inter', sans-serif; color: #2C2825; }
        .breadcrumb { font-size: 0.8rem; color: #7A7268; margin-bottom: 1rem; }
        .breadcrumb a { color: #1D5F74; }
        .module-badge { background: rgba(29,95,116,0.08); color: #1D5F74; border: 1px solid rgba(29,95,116,0.2); border-radius: 20px; padding: 0.25rem 0.75rem; display: inline-block; font-size: 0.8rem; font-weight: 600; margin-bottom: 0.5rem; }
        .learning-hero { background: linear-gradient(135deg,#EFF6FB 0%,#F9F6F2 100%); border-radius: 12px; padding: 1.5rem 1.75rem; margin-bottom: 1.5rem; border: 1px solid #D8ECF4; }
        .learning-hero h1 { font-size: 1.6rem; font-weight: 700; color: #1D3A4A; margin: 0 0 0.3rem; }
        .learning-hero .subtitle { color: #5A5550; font-size: 0.95rem; margin: 0; }
        .board-pearl-box { background: #FFF8E6; border-left: 4px solid #C8964A; border-radius: 6px; padding: 0.75rem 1rem; margin: 1rem 0; }
        .board-pearl-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.07em; color: #C8964A; text-transform: uppercase; margin-bottom: 0.3rem; }
        .board-pearl-box strong { color: #1D5F74; }
        .module-content-section { margin-bottom: 2rem; }
        .section-title { font-size: 1.15rem; font-weight: 700; color: #1D3A4A; border-bottom: 2px solid #D8ECF4; padding-bottom: 0.4rem; margin-bottom: 1rem; }
        .step-number { background: #8680C0; color: #ffffff; }
        .step-card { display: flex; align-items: flex-start; gap: 0.75rem; background: #F5F0EB; border-radius: 8px; padding: 0.65rem 0.9rem; margin-bottom: 0.5rem; }
        .content-list li::before { color: #1D5F74; }
        .step-flow { display: flex; flex-direction: column; gap: 0.4rem; }
        .quiz-card:hover { border-color: #1D5F74; }
        .step-number { width: 28px; height: 28px; min-width: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; }
        .quiz-toggle { color: #1D5F74; font-weight: 600; font-size: 0.85rem; display: block; margin-top: 0.5rem; }
        .quiz-card { background: #fff; border: 1px solid #E0DAD4; border-radius: 8px; padding: 0.75rem 1rem; margin-bottom: 0.6rem; }
        .module-table th { background: #1D5F74; color: #FFFFFF; }
        .module-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
        .module-table td, .module-table th { padding: 0.5rem 0.75rem; border: 1px solid #D8ECF4; text-align: left; }
        .module-table tr:nth-child(even) td { background: #F5F9FC; }
        .summary-list { padding-left: 1.2rem; }
        .summary-list li { margin-bottom: 0.4rem; font-size: 0.92rem; }
        .summary-list li::before { color: #1D5F74; }
        .module-nav-link { display: inline-block; margin-top: 1.5rem; padding: 0.5rem 1.1rem; border: 1.5px solid #D8ECF4; border-radius: 8px; font-size: 0.88rem; color: #4A4540; text-decoration: none; transition: border-color 0.2s, color 0.2s; }
        .module-nav-link:hover { border-color: #1D5F74; color: #1D5F74; text-decoration: none; }
        .domain-card { border: 1px solid #D8ECF4; border-radius: 10px; padding: 0.9rem 1rem; margin-bottom: 0.75rem; background: #fff; }
        .domain-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.3rem; }
        .domain-num { width: 26px; height: 26px; border-radius: 50%; background: #8680C0; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; flex-shrink: 0; }
        .domain-name { font-weight: 700; font-size: 0.95rem; color: #1D3A4A; }
        .domain-tagline { font-style: italic; color: #7A7268; font-size: 0.9rem; margin: 4px 0 0; }
        .domain-score { background: rgba(29,95,116,0.06); border: 1px solid rgba(29,95,116,0.15); border-radius: 8px; padding: 0.5rem 0.9rem; margin: 10px 0; font-size: 0.9rem; color: #4A4540; }
        .inline-mnemonic { background: #FDF6EC; border-left: 3px solid #C8964A; border-radius: 6px; padding: 0.65rem 0.9rem; margin: 10px 0; font-size: 0.95rem; color: #4A4540; }
      `}</style>

      <div className="learning-hero">
        <div className="module-badge">APS &mdash; Module 2</div>
        <h1>Clinical Diagnosis &amp; Classification</h1>
        <p className="subtitle">Thrombotic &amp; obstetric criteria, 2023 ACR/EULAR classification, and clinical decision-making</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/learning">Learn</Link> &rsaquo; <Link href="/learning/aps">APS</Link> &rsaquo; Clinical Diagnosis
      </nav>

      {/* ===================== SECTION 1 ===================== */}
      <section className="module-content-section">
        <h2 className="section-title">Thrombotic Manifestations</h2>
        <div className="board-pearl-box">
          <div className="board-pearl-label">Board Pearl</div>
          APS causes <strong>clotting despite thrombocytopenia</strong> &mdash; if a patient has both low platelets and clots, think APS.
        </div>

        <table className="module-table">
          <thead>
            <tr><th>Category</th><th>Key Manifestations</th><th>Board Tip</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Venous</strong></td>
              <td>DVT (most common), PE, cerebral sinus thrombosis, Budd-Chiari, renal vein thrombosis</td>
              <td>DVT/PE in young patient without risk factors &rarr; test aPL</td>
            </tr>
            <tr>
              <td><strong>Arterial</strong></td>
              <td>Stroke/TIA (most common arterial), MI, peripheral arterial occlusion</td>
              <td>Stroke &lt;50 years without risk factors &rarr; APS until proven otherwise</td>
            </tr>
            <tr>
              <td><strong>Microvascular</strong></td>
              <td>Livedo reticularis, digital ischemia, renal thrombotic microangiopathy</td>
              <td>Livedo + clots &rarr; think APS (also SLE overlap)</td>
            </tr>
            <tr>
              <td><strong>Catastrophic (CAPS)</strong></td>
              <td>&ge;3 organs in &le;1 week, small-vessel thrombosis</td>
              <td>Mortality ~30%; treat: anticoagulation + steroids + IVIG/plasmapheresis</td>
            </tr>
          </tbody>
        </table>

        <div className="inline-mnemonic" style={{marginTop: '10px'}}>
          <strong>&ldquo;Clots everywhere, platelets nowhere &mdash; APS is the name of the game&rdquo;</strong> &mdash; Arterial, venous, micro; thrombocytopenia doesn&rsquo;t protect from clotting in APS.
        </div>
      </section>

      {/* ===================== SECTION 2 ===================== */}
      <section className="module-content-section">
        <h2 className="section-title">Obstetric Manifestations</h2>

        <table className="module-table">
          <thead>
            <tr><th>Criterion</th><th>Definition</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Recurrent early loss</strong></td>
              <td>&ge;3 unexplained miscarriages &lt;10 weeks</td>
              <td>Exclude chromosomal, anatomic causes first</td>
            </tr>
            <tr>
              <td><strong>Fetal loss</strong></td>
              <td>&ge;1 morphologically normal fetal death &ge;10 weeks</td>
              <td>Normal fetal morphology must be documented</td>
            </tr>
            <tr>
              <td><strong>Premature birth</strong></td>
              <td>&lt;34 weeks due to pre-eclampsia, eclampsia, or placental insufficiency</td>
              <td>High aPL burden association</td>
            </tr>
          </tbody>
        </table>

        <div className="board-pearl-box" style={{marginTop: '10px'}}>
          <div className="board-pearl-label">Key Nuance</div>
          Obstetric APS can exist <strong>without</strong> thrombosis &mdash; don&rsquo;t require clots to diagnose obstetric APS.
        </div>

        <div className="inline-mnemonic" style={{marginTop: '10px'}}>
          <strong>&ldquo;Three early or one late &mdash; obstetric APS won&rsquo;t wait&rdquo;</strong> &mdash; 3 early losses OR 1 fetal loss &ge;10 weeks qualifies.
        </div>
      </section>

      {/* ===================== SECTION 3 ===================== */}
      <section className="module-content-section">
        <h2 className="section-title">Hematologic &amp; Other Features</h2>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">H</div>
            <div className="domain-name">Thrombocytopenia in APS</div>
          </div>
          <div className="domain-tagline">Low platelets + clotting = APS paradox</div>
          <ul style={{marginTop: '8px', paddingLeft: '1.2rem', fontSize: '0.9rem'}}>
            <li>Classified: Persistent thrombocytopenia (&lt;100k) &nbsp;&bull;&nbsp; Not classified: Mild/transient thrombocytopenia</li>
          </ul>
          <div className="inline-mnemonic">
            <strong>&ldquo;Platelets low but clots still flow &mdash; APS paradox, now you know&rdquo;</strong> &mdash; Thrombocytopenia in APS means clotting risk, not bleeding risk.
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4 — Classification Framework ===================== */}
      <section className="module-content-section">
        <h2 className="section-title">2023 Classification Framework</h2>
        <div className="step-flow">
          <div className="step-card"><div className="step-number">1</div><div><strong>Entry:</strong> At least one positive aPL test within 3 years of event</div></div>
          <div className="step-card"><div className="step-number">2</div><div><strong>Score Clinical:</strong> Pick highest-weighted item per domain (D1&ndash;D6)</div></div>
          <div className="step-card"><div className="step-number">3</div><div><strong>Score Lab:</strong> LA assays + aCL/anti-&beta;2GPI ELISA titers (weighted by titer level and test type)</div></div>
          <div className="step-card"><div className="step-number">4</div><div><strong>Classify:</strong> Clinical &ge;3 AND Lab &ge;3 = APS</div></div>
        </div>
<p style={{fontSize:'12px', color:'#6B6560', marginBottom:'8px'}}>
  Based on: <a href="https://doi.org/10.1002/art.42624" target="_blank" rel="noopener noreferrer" style={{color:'#1D5F74', textDecoration:'underline'}}>Barbhaiya et al. 2023 ACR/EULAR APS Classification Criteria. <em>Arthritis Rheumatol</em> 2023;75(10):1687&ndash;1702</a>
</p>
        <div className="inline-mnemonic" style={{marginTop: '12px'}}>
          <strong>&ldquo;Three-and-Three to Get the Key&rdquo;</strong> &mdash; &ge;3 clinical AND &ge;3 lab points to classify as APS.
        </div>
        <div className="board-pearl-box" style={{marginTop: '10px'}}>
          <div className="board-pearl-label">Key Nuance</div>
          The 2023 criteria are <strong>highly specific (99%) but less sensitive (84%)</strong> &mdash; designed to ensure only true APS is classified in clinical trials and research.
        </div>
      </section>

      {/* ===================== SECTION 5 — Clinical Domains ===================== */}
      <section className="module-content-section">
        <h2 className="section-title">2023 Clinical Scoring Domains</h2>
        <p style={{fontSize: '0.88rem', color: '#5A5550', marginBottom: '1rem'}}>Six clinical domains, each weighted. Take the <strong>highest-weighted item</strong> per domain only. Maximum clinical score = sum of highest items across D1&ndash;D6.</p>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">D1</div>
            <div className="domain-name">Macrovascular &mdash; Venous TE</div>
          </div>
          <div className="domain-tagline">DVT, PE, other venous events</div>
          <div className="domain-score">
            Unprovoked proximal DVT/PE: <strong>+3</strong> &nbsp;|&nbsp; Provoked proximal DVT/PE: <strong>+1</strong> &nbsp;|&nbsp; Distal DVT: <strong>+1</strong>
          </div>
          <div className="inline-mnemonic">
            <strong>Mnemonic:</strong> &ldquo;Unprovoked = more points&rdquo; &mdash; the less explained the clot, the more it points toward APS.
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">D2</div>
            <div className="domain-name">Macrovascular &mdash; Arterial TE</div>
          </div>
          <div className="domain-tagline">Stroke, TIA, MI</div>
          <div className="domain-score">
            Stroke/TIA: <strong>+4</strong> &nbsp;|&nbsp; Other arterial: <strong>+3</strong> &nbsp;|&nbsp; MI: <strong>+3</strong>
          </div>
          <div className="inline-mnemonic">
            <strong>Mnemonic:</strong> &ldquo;Strokes score highest&rdquo; &mdash; Arterial domain is weighted more heavily than venous.
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">D3</div>
            <div className="domain-name">Microvascular</div>
          </div>
          <div className="domain-tagline">Small vessel disease</div>
          <div className="domain-score">
            Livedoid vasculopathy: <strong>+3</strong> &nbsp;|&nbsp; APS nephropathy: <strong>+2</strong> &nbsp;|&nbsp; Livedo racemosa: <strong>+2</strong>
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">D4</div>
            <div className="domain-name">Cardiac Manifestations</div>
          </div>
          <div className="domain-tagline">Valve disease, intracardiac thrombus</div>
          <div className="domain-score">
            Valvular thickening/vegetation: <strong>+4</strong> &nbsp;|&nbsp; Intracardiac thrombus: <strong>+4</strong>
          </div>
          <div className="inline-mnemonic">
            <strong>Mnemonic:</strong> &ldquo;Libman-Sacks = APS + SLE&rdquo; &mdash; nonbacterial thrombotic endocarditis on aortic/mitral valves.
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">D5</div>
            <div className="domain-name">Hematologic</div>
          </div>
          <div className="domain-tagline">Thrombocytopenia</div>
          <div className="domain-score">
            Platelet 20&ndash;130k: <strong>+2</strong>
          </div>
        </div>

        <div className="domain-card">
          <div className="domain-header">
            <div className="domain-num">D6</div>
            <div className="domain-name">Obstetric</div>
          </div>
          <div className="domain-tagline">Pregnancy morbidity</div>
          <div className="domain-score">
            &ge;3 early losses: <strong>+1</strong> &nbsp;|&nbsp; Fetal death &ge;10w: <strong>+3</strong> &nbsp;|&nbsp; Preeclampsia/insufficiency &lt;34w: <strong>+3</strong>
          </div>
          <div className="inline-mnemonic">
            <strong>Mnemonic:</strong> &ldquo;Late loss = more points&rdquo; &mdash; fetal death is more specific than early recurrent losses.
          </div>
        </div>
      </section>

      {/* ===================== SECTION 6 — Key Board Pearls ===================== */}
      <section className="module-content-section">
        <h2 className="section-title">Key Clinical Pearls</h2>
        <ul className="summary-list">
          <li>Young stroke (&lt;50) without risk factors = test aPL</li>
          <li>Obstetric APS can exist without thrombosis</li>
          <li>Classification requires &ge;3 clinical AND &ge;3 lab points (&ldquo;Three-and-Three to Get the Key&rdquo;)</li>
          <li>CAPS = &ge;3 organs in &le;1 week &mdash; treat with combination therapy</li>
          <li>2023 criteria: 99% specific, 84% sensitive (traded sensitivity for specificity)</li>
        </ul>
        <div className="board-pearl-box">
          <div className="board-pearl-label">High-Yield Board Fact</div>
          Lupus anticoagulant <strong>prolongs PTT in vitro</strong> but causes <strong>thrombosis in vivo</strong> &mdash; this is the classic APS paradox tested on boards.
        </div>
      </section>

      <Link href="/learning/aps/labs" className="module-nav-link">
        Next: Lab Workup &amp; Antibody Testing &rarr;
      </Link>
    </div>
  );
}
