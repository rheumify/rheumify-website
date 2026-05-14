'use client';
import { useState } from 'react';

export default function APSLabsModule() {
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
        .dept-card { background: #FFFFFF; border: 1px solid #DDD6CB; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.25rem; }
        .dept-card h3 { margin: 0 0 2px; font-size: 1.1rem; color: #1C1A17; }
        .dept-card p { color: #4A4540; }
        .dept-header { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 0.75rem; }
        .dept-number { width: 36px; height: 36px; min-width: 36px; border-radius: 50%; background: #6C63FF; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; }
        .dept-tagline { font-style: italic; color: #7A7268; font-size: 0.9rem; margin: 4px 0 0; }
        .inline-mnemonic { background: #FDF6EC; border-left: 3px solid #C8964A; border-radius: 6px; padding: 0.65rem 0.9rem; margin: 10px 0; font-size: 0.95rem; color: #4A4540; }
      `}</style>

      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; <a href="/learning/aps">APS</a> &gt; Labs
        </p>
        <div className="module-badge">Module 1 of 3 &bull; 5 min &bull; Lab Interpretation</div>
        <h1 className="page-title">Decoding the Labs</h1>
        <p className="learning-subtitle">&ldquo;The Three Fraud Departments&rdquo;</p>
      </div>

      <section className="module-story-section">
        <div className="story-card">
          <p>
            Your bloodstream is a 24/7 financial network &mdash; trillions of transactions every second. Platelets are the security team. The coagulation cascade is the bank&rsquo;s <strong>fraud detection system</strong> &mdash; a layered network of checkpoints designed to stop unauthorized withdrawals (bleeding).
          </p>
          <p>
            Now the fraud detection system <em>goes rogue</em>. It flags legitimate transactions as suspicious. Accounts freeze. Money stops flowing to critical branches. That&rsquo;s <strong>Antiphospholipid Syndrome</strong> &mdash; and the rogue detectors are the <em>aPL antibodies</em>. You can&rsquo;t fix the system until you know which departments went rogue &mdash; and how to prove it.
          </p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">The Three Fraud Departments</h2>

        <div className="dept-card">
          <div className="dept-header">
            <div className="dept-number">1</div>
            <div>
              <h3>Lupus Anticoagulant (LA) &mdash; The Transaction Speed Monitor</h3>
              <p className="dept-tagline">The most important detector &mdash; and the most paradoxical.</p>
            </div>
          </div>
          <p>
            This department monitors <strong>how fast transactions process</strong>. Here&rsquo;s the great paradox: <strong>in the test tube (in vitro), LA SLOWS coagulation</strong> &mdash; hence &ldquo;anticoagulant.&rdquo; But <strong>in the body (in vivo), it PROMOTES thrombosis</strong>. The monitor that slows things down during the audit causes real accounts to lock up in real time.
          </p>
          <div className="inline-mnemonic">
            <strong>&ldquo;LA: Liar in the Lab, Assassin in the Artery&rdquo;</strong> &mdash; In vitro anticoagulant. In vivo procoagulant.
          </div>
          <h4 style={{marginTop:'14px', marginBottom:'8px'}}>The 3-Step Detection</h4>
          <div className="step-flow">
            <div className="step-card">
              <div className="step-number">1</div>
              <div><strong>Screen:</strong> aPTT is prolonged &mdash; transactions are slow.</div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div><strong>Mixing Study:</strong> Add normal plasma. Normalizes? <strong>Mix and Fix — the Factor was missed (deficiency).</strong> Still slow? <strong>Mix and Miss — an Inhibitor exists.</strong></div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div><strong>Confirmatory:</strong> Flood with excess phospholipid. Normalizes? LA confirmed &mdash; the problem was phospholipid-dependent.</div>
            </div>
          </div>
          <div className="inline-mnemonic" style={{marginTop:'8px'}}>
            <strong>&ldquo;Mix and Fix &mdash; the Factor was missed. Mix and Miss &mdash; an Inhibitor exists.&rdquo;</strong>
          </div>
          <div className="board-pearl-box" style={{marginTop:'12px'}}>
            <div className="board-pearl-label">Two Practical Consequences</div>
            <p><strong>1. Cannot test on anticoagulation</strong> &mdash; the drugs also slow transactions, making results uninterpretable. Test before starting, or use aCL/anti-&beta;2GPI instead.</p>
            <p style={{marginTop:'6px'}}><strong>2. Falsely elevates the INR</strong> &mdash; LA interferes with the PT assay (also phospholipid-dependent), so the reported INR doesn&rsquo;t reflect true anticoagulation intensity. Use a <strong>chromogenic factor X assay</strong> instead to monitor warfarin in LA-positive patients.</p>
            <div className="inline-mnemonic" style={{marginTop:'8px'}}>
              <strong>&ldquo;LA: Liar in the Lab, Liar on the INR &mdash; Factor X tells the truth&rdquo;</strong>
            </div>
          </div>
        </div>

        <div className="dept-card">
          <div className="dept-header">
            <div className="dept-number">2</div>
            <div>
              <h3>Anticardiolipin (aCL) &mdash; The Pattern Scanner</h3>
              <p className="dept-tagline">Doesn&rsquo;t time transactions &mdash; scans for suspicious patterns in the paperwork.</p>
            </div>
          </div>
          <p>
            Instead of monitoring transaction speed, this department examines the <strong>paperwork</strong> &mdash; antibodies targeting cardiolipin (a phospholipid in cell membranes). Because it scans paperwork rather than times transactions, <strong>it CAN run while anticoagulation is active</strong> &mdash; a key practical difference from LA.
          </p>
          <ul className="content-list">
            <li><strong>Method:</strong> ELISA &mdash; measures antibodies directly, not clotting function</li>
            <li><strong>2023 thresholds:</strong> IgG &ge;40 GPL units or IgM &ge;80 MPL units for highest-weight category</li>
            <li><strong>&#10003; Can test on anticoagulation</strong></li>
            <li><strong>Limitation:</strong> Less specific &mdash; infections and medications can cause transient false positives</li>
          </ul>
        </div>

        <div className="dept-card">
          <div className="dept-header">
            <div className="dept-number">3</div>
            <div>
              <h3>Anti-&beta;2GPI &mdash; The Identity Investigator</h3>
              <p className="dept-tagline">Tracks the actual ringleader &mdash; not just the paperwork trail.</p>
            </div>
          </div>
          <p>
            While the Pattern Scanner finds suspicious paperwork, the Identity Investigator tracks the <strong>actual person responsible</strong>. &beta;2-Glycoprotein I is the cofactor aPL antibodies need to bind phospholipids &mdash; it&rsquo;s the <em>true antigenic target</em>. Finding antibodies against it is like confirming the ringleader&rsquo;s exact address.
          </p>
          <ul className="content-list">
            <li><strong>Method:</strong> ELISA targeting anti-&beta;2GPI</li>
            <li><strong>Most specific</strong> antibody for true APS pathogenesis</li>
            <li><strong>Domain I antibodies</strong> are the 2023 gold standard &mdash; the ringleader&rsquo;s office, not just the neighborhood</li>
            <li><strong>&#10003; Can test on anticoagulation</strong></li>
          </ul>
          <div className="inline-mnemonic" style={{marginTop:'10px'}}>
            <strong>&ldquo;B2G-PI = Private Investigator&rdquo;</strong> &mdash; The PI tracks down the actual ringleader directly, not just the paperwork trail. Most specific because it targets the true antigenic culprit.
          </div>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Side by Side</h2>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>LA (Speed Monitor)</th>
                <th>aCL (Pattern Scanner)</th>
                <th>Anti-&beta;2GPI (Investigator)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Method</td><td>Functional (coag assay)</td><td>ELISA</td><td>ELISA</td></tr>
              <tr><td>On anticoagulation?</td><td>&#10060; Cannot test</td><td>&#10003; Can test</td><td>&#10003; Can test</td></tr>
              <tr><td>Specificity for APS</td><td>Highest</td><td>Moderate</td><td>High</td></tr>
              <tr><td>Thrombosis prediction</td><td>Strongest</td><td>Moderate</td><td>Strong</td></tr>
              <tr><td>2023 key threshold</td><td>Positive / Negative</td><td>IgG &ge;40, IgM &ge;80</td><td>Domain I positivity</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Triple Positivity</h2>
        <div className="story-card highlight-card">
          <p>
            When <strong>all three departments</strong> flag the same culprit &mdash; Speed Monitor, Pattern Scanner, and Identity Investigator all positive &mdash; the case is airtight. That&rsquo;s <strong>triple positivity</strong>: the grand slam of aPL profiling. These patients face the <strong>highest thrombotic risk: 5&ndash;10% per year</strong> and absolutely cannot use DOACs (see Module 3, TRAPS trial). Warfarin only.
          </p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">The 12-Week Confirmation Rule</h2>
        <div className="story-card">
          <p>
            The bank doesn&rsquo;t act on a single report. Transient infections can trigger temporary aPL positivity &mdash; a false alarm. The 2023 criteria require <strong>confirmation at least 12 weeks apart</strong>: two independent investigations, same conclusion. A single positive is never enough to diagnose APS.
          </p>
        </div>
      </section>


      <section className="module-content-section">
        <h2 className="section-title">Understanding the Coagulation Cascade</h2>
        <div className="story-card">
          <p>
            The aPL antibodies don&rsquo;t attack the blood directly &mdash; they hijack the coagulation cascade, the system that normally stops bleeding after injury. Understanding how it works explains why LA prolongs the PTT but not the PT, why certain factor deficiencies look different from lupus anticoagulant in the lab, and how our anticoagulants target different parts of this pathway.
          </p>
        </div>
        <div style={{fontFamily:'Georgia, serif', background:'#FAF8F5', padding:'16px', borderRadius:'12px', maxWidth:'700px', margin:'0 auto', boxSizing:'border-box', fontSize:'13px', color:'#1C1A17'}}>

          <div style={{display:'flex', gap:'12px', marginBottom:'6px'}}>
            <div style={{flex:1, background:'#1D5F74', color:'white', borderRadius:'8px', padding:'10px 12px', textAlign:'center'}}>
              <div style={{fontWeight:'bold', fontSize:'14px'}}>PTT &mdash; Regular Lane</div>
              <div style={{fontSize:'11px', color:'#A8D8E8', marginTop:'2px'}}>Intrinsic Pathway</div>
            </div>
            <div style={{flex:1, background:'#C8964A', color:'white', borderRadius:'8px', padding:'10px 12px', textAlign:'center'}}>
              <div style={{fontWeight:'bold', fontSize:'14px'}}>PT &mdash; Express Lane</div>
              <div style={{fontSize:'11px', color:'#FDF0DC', marginTop:'2px'}}>Extrinsic Pathway</div>
            </div>
          </div>

          <div style={{color:'#9B9590', fontSize:'10px', fontStyle:'italic', marginBottom:'8px', paddingLeft:'2px'}}>
            &#8627; XII activates cascade &mdash; isolated XII deficiency does not cause bleeding
          </div>

          <div style={{display:'flex', gap:'12px', alignItems:'flex-start'}}>

            <div style={{flex:1}}>
              <div style={{display:'flex', alignItems:'center', gap:'8px', background:'#E8F4F8', border:'1.5px dashed #3A7EA0', borderRadius:'6px', padding:'8px 10px', opacity:0.85}}>
                <div style={{minWidth:'30px', height:'30px', background:'#1D5F74', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', fontSize:'14px', flexShrink:0}}>12</div>
                <div>
                  <div style={{fontWeight:'bold'}}>Factor XII</div>
                  <div style={{fontSize:'10px', color:'#4A4540', fontStyle:'italic'}}>Contact activation &mdash; isolated XII deficiency &ne; bleeding</div>
                </div>
              </div>

              <div style={{textAlign:'center', color:'#1D5F74', fontSize:'18px', lineHeight:'1.3'}}>&#8595;</div>

              <div style={{display:'flex', alignItems:'center', gap:'8px', background:'#EFF6FB', border:'1.5px solid #3A7EA0', borderRadius:'6px', padding:'8px 10px'}}>
                <div style={{minWidth:'30px', height:'30px', background:'#1D5F74', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', fontSize:'14px', flexShrink:0}}>11</div>
                <div>
                  <div style={{fontWeight:'bold'}}>Factor XI</div>
                  <div style={{fontSize:'11px', color:'#4A4540'}}>Hemophilia C</div>
                </div>
              </div>

              <div style={{textAlign:'center', color:'#1D5F74', fontSize:'18px', lineHeight:'1.3'}}>&#8595;</div>

              <div style={{display:'flex', alignItems:'center', gap:'8px', background:'#EFF6FB', border:'1.5px solid #3A7EA0', borderRadius:'6px', padding:'8px 10px'}}>
                <div style={{minWidth:'30px', height:'30px', background:'#1D5F74', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', fontSize:'14px', flexShrink:0}}>9</div>
                <div>
                  <div style={{fontWeight:'bold'}}>Factor IX</div>
                  <div style={{fontSize:'11px', color:'#4A4540'}}>Hemophilia B (Christmas disease)</div>
                </div>
              </div>

              <div style={{background:'#FDF6EC', borderLeft:'3px solid #C8964A', borderRadius:'0 4px 4px 0', padding:'3px 8px', margin:'3px 0', fontSize:'10px', color:'#7A4A10'}}>
                &#9888; LA interferes here (phospholipid-dependent step)
              </div>

              <div style={{textAlign:'center', color:'#1D5F74', fontSize:'18px', lineHeight:'1.3'}}>&#8595;</div>

              <div style={{display:'flex', alignItems:'center', gap:'8px', background:'#EFF6FB', border:'1.5px solid #3A7EA0', borderRadius:'6px', padding:'8px 10px'}}>
                <div style={{minWidth:'30px', height:'30px', background:'#1D5F74', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', fontSize:'14px', flexShrink:0}}>8</div>
                <div>
                  <div style={{fontWeight:'bold'}}>Factor VIII</div>
                  <div style={{fontSize:'11px', color:'#4A4540'}}>Hemophilia A &mdash; cofactor for IX</div>
                </div>
              </div>

              <div style={{background:'#FDF6EC', border:'1px solid #C8964A', borderRadius:'6px', padding:'5px 10px', marginTop:'6px', textAlign:'center', fontSize:'11px', fontStyle:'italic', color:'#7A4A10'}}>
                Counts down: 12 &#8594; 11 &#8594; 9 &#8594; 8
              </div>

              <div style={{background:'#1D5F74', color:'white', borderRadius:'6px', padding:'7px 10px', marginTop:'6px', fontSize:'11px', textAlign:'center'}}>
                <span style={{fontWeight:'bold'}}>Hepar<u>IN</u></span> monitors the <span style={{fontWeight:'bold'}}><u>IN</u>trinsic</span> pathway<br/>
                <span style={{fontSize:'10px', color:'#A8D8E8'}}>&#8594; tracked by PTT</span>
              </div>
            </div>

            <div style={{flex:1}}>
              <div style={{display:'flex', alignItems:'center', gap:'8px', background:'#FDF0DC', border:'1.5px solid #C8964A', borderRadius:'6px', padding:'8px 10px'}}>
                <div style={{minWidth:'30px', height:'30px', background:'#6B4510', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', fontSize:'14px', flexShrink:0}}>III</div>
                <div>
                  <div style={{fontWeight:'bold'}}>Tissue Factor (III)</div>
                  <div style={{fontSize:'11px', color:'#4A4540'}}>Exposed on vessel injury</div>
                </div>
              </div>

              <div style={{textAlign:'center', color:'#C8964A', fontSize:'18px', lineHeight:'1.3'}}>&#8595;</div>

              <div style={{display:'flex', alignItems:'flex-start', gap:'8px', background:'#FDF6EC', border:'1.5px solid #C8964A', borderRadius:'6px', padding:'8px 10px'}}>
                <div style={{minWidth:'30px', height:'30px', background:'#7A5020', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:'bold', fontSize:'14px', flexShrink:0, marginTop:'1px'}}>7</div>
                <div>
                  <div style={{fontWeight:'bold'}}>Factor VII</div>
                  <div style={{fontSize:'11px', color:'#4A4540'}}>Activates X (with TF)</div>
                  <div style={{fontSize:'11px', fontStyle:'italic', color:'#7A4A10', marginTop:'2px'}}>&ldquo;Seven stands alone&rdquo;</div>
                  <div style={{fontSize:'10px', color:'#4A4540', marginTop:'3px', borderTop:'1px solid #DDD6CB', paddingTop:'3px'}}>PT&#8593; + PTT normal = Factor VII only</div>
                </div>
              </div>

              <div style={{background:'#C8964A', color:'white', borderRadius:'6px', padding:'7px 10px', marginTop:'6px', fontSize:'11px', textAlign:'center'}}>
                <span style={{fontWeight:'bold'}}>Warfarin</span> &#8594; blocks vitamin K factors<br/>
                <span style={{fontSize:'10px', color:'#FDF0DC'}}>VII has shortest half-life &mdash; PT rises first<br/>&#8594; tracked by PT / INR</span>
              </div>

              <div style={{background:'#FDF0DC', border:'1px solid #C8964A', borderRadius:'6px', padding:'6px 10px', marginTop:'6px', fontSize:'10px', color:'#7A4A10'}}>
                <strong>Vitamin K&ndash;dependent:</strong> II, VII, IX, X + Protein C &amp; S
              </div>
            </div>
          </div>

          <svg viewBox="0 0 400 44" width="100%" height="44" style={{display:'block', margin:'4px 0'}} overflow="visible">
            <defs>
              <marker id="cascadeArr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#5B52C7"/>
              </marker>
            </defs>
            <line x1="100" y1="2" x2="100" y2="22" stroke="#5B52C7" strokeWidth="2"/>
            <line x1="300" y1="2" x2="300" y2="22" stroke="#5B52C7" strokeWidth="2"/>
            <line x1="100" y1="22" x2="300" y2="22" stroke="#5B52C7" strokeWidth="2"/>
            <line x1="200" y1="22" x2="200" y2="42" stroke="#5B52C7" strokeWidth="2" markerEnd="url(#cascadeArr)"/>
          </svg>

          <div style={{background:'#5B52C7', color:'white', borderRadius:'8px', padding:'10px 12px', textAlign:'center', marginBottom:'4px'}}>
            <div style={{fontWeight:'bold', fontSize:'13px'}}>Common Pathway</div>
            <div style={{fontSize:'11px', color:'#D0CCFF', marginTop:'2px'}}>Both lanes merge here</div>
          </div>

          <div style={{textAlign:'center', color:'#5B52C7', fontSize:'18px', lineHeight:'1.3'}}>&#8595;</div>

          <div style={{background:'#F0EEFF', border:'1.5px solid #5B52C7', borderRadius:'6px', padding:'8px 12px', textAlign:'center', marginBottom:'4px'}}>
            <div style={{fontWeight:'bold'}}>Factor X + V</div>
            <div style={{fontSize:'11px', color:'#4A4540'}}>Prothrombinase complex</div>
          </div>

          <div style={{textAlign:'center', color:'#5B52C7', fontSize:'18px', lineHeight:'1.3'}}>&#8595;</div>

          <div style={{background:'#5B52C7', color:'white', borderRadius:'8px', padding:'12px', textAlign:'center', marginBottom:'4px'}}>
            <div style={{fontWeight:'bold', fontSize:'14px'}}>Prothrombin (Factor II)</div>
            <div style={{fontSize:'11px', color:'#D0CCFF', marginTop:'2px'}}>&#8594; Thrombin: the final turnstile</div>
          </div>

          <div style={{textAlign:'center', color:'#5B52C7', fontSize:'18px', lineHeight:'1.3'}}>&#8595;</div>

          <div style={{background:'#F0EEFF', border:'1.5px solid #5B52C7', borderRadius:'6px', padding:'8px 12px', textAlign:'center', marginBottom:'10px'}}>
            <div style={{fontWeight:'bold'}}>Fibrinogen &#8594; Fibrin &#128274;</div>
            <div style={{fontSize:'11px', color:'#4A4540', marginTop:'2px'}}>Crosslinked and stabilized by Factor XIII</div>
          </div>

          <div style={{background:'#EFF6FB', border:'1px solid #3A7EA0', borderRadius:'6px', padding:'8px 12px', textAlign:'center', marginBottom:'6px', fontSize:'11px', fontStyle:'italic', color:'#1D5F74', fontWeight:'bold'}}>
            Pearl: &ldquo;LA lies low &mdash; half the time PTT won&rsquo;t show&rdquo;
            <div style={{fontWeight:'normal', fontSize:'10px', marginTop:'2px'}}>(LA falsely normal in ~50% of cases)</div>
          </div>

          <div style={{background:'#FDF6EC', border:'1px solid #C8964A', borderRadius:'5px', padding:'8px 14px', textAlign:'center', fontSize:'11px', fontStyle:'italic', color:'#7A4A10', lineHeight:'1.8'}}>
            Regular Lane counts down &mdash; twelve, eleven, nine, eight.<br/>
            Express Lane has one stop &mdash; Factor Seven, no wait.<br/>
            Both lines end at prothrombin &mdash; it seals every fate.
          </div>

        </div>
      </section>


      <section className="module-content-section">
        <h2 className="section-title">Test Yourself</h2>
        <div className="quiz-card" onClick={() => toggleAnswer('q1')}>
          <p className="quiz-question"><strong>Q1:</strong> A 32-year-old woman with recurrent DVTs has a prolonged aPTT. Mixing study does NOT correct. Next step?</p>
          {showAnswer.q1 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Confirmatory test with excess phospholipid (e.g., dRVVT with phospholipid neutralization). &ldquo;Mix and Miss&rdquo; = inhibitor, not factor deficiency. If the confirmatory test normalizes, lupus anticoagulant is confirmed.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q1 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>

        <div className="quiz-card" onClick={() => toggleAnswer('q3')}>
          <p className="quiz-question"><strong>Q3:</strong> Which aPL profile carries the highest thrombotic risk, and what therapy does it mandate?</p>
          {showAnswer.q3 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Triple positivity (LA + aCL + anti-&beta;2GPI all positive) = 5&ndash;10% annual thrombotic risk. Warfarin is mandatory. DOACs are contraindicated &mdash; the TRAPS trial was stopped early for excess arterial events on rivaroxaban in triple-positive patients.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q3 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
      </section>

      <section className="module-summary-section">
        <h2 className="section-title">Summary</h2>
        <div className="summary-box">
          <ul className="summary-list">
            <li>Three aPL antibodies: LA (functional assay), aCL (ELISA), anti-&beta;2GPI (ELISA)</li>
            <li>LA: in vitro anticoagulant, in vivo procoagulant &mdash; strongest thrombosis predictor</li>
            <li>LA cannot be tested on anticoagulation; aCL and anti-&beta;2GPI can</li>
            <li>Mix and Fix &mdash; the Factor was missed; Mix and Miss &mdash; an Inhibitor exists (LA)</li>
            <li>LA lies on the INR &mdash; use chromogenic factor X assay for warfarin monitoring</li>
            <li>Triple positivity = grand slam = highest risk (5&ndash;10%/year) = warfarin only</li>
            <li>Always confirm at &ge;12 weeks &mdash; never diagnose APS on a single positive test</li>
          </ul>
        </div>
      </section>

      <div className="module-nav">
        <a href="/learning/aps" className="module-nav-link">&larr; Back to APS Overview</a>
        <a href="/learning/aps/clinical" className="module-nav-link module-nav-next">Next: Clinical Manifestations &rarr;</a>
      </div>
    </main>
  );
}
