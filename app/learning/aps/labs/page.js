'use client';
import { useState } from 'react';

export default function APSLabsModule() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showAnswer, setShowAnswer] = useState({});
  const toggle = (id) => setExpandedSection(expandedSection === id ? null : id);
  const toggleAnswer = (id) => setShowAnswer(prev => ({...prev, [id]: !prev[id]}));

  return (
    <main className="main">
      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; <a href="/learning/aps">APS</a> &gt; Labs
        </p>
        <div className="module-badge">Module 1 of 3 • 5 min • Lab Interpretation</div>
        <h1 className="page-title">Decoding the Labs</h1>
        <p className="learning-subtitle">&ldquo;The Three Fraud Departments&rdquo;</p>
      </div>

      <section className="module-story-section">
        <h2 className="section-title">The Big Picture</h2>
        <div className="story-card">
          <p>
            Picture a massive bank — not your neighborhood branch, but a 24/7 financial network where trillions of transactions flow every second. This bank is your <strong>bloodstream</strong>. Red blood cells are the armored trucks carrying oxygen-cash to every organ. Platelets are the security team, rushing to seal any breach in the vault walls. And the coagulation cascade? That’s the bank’s <strong>fraud detection system</strong> — a sophisticated network of checkpoints designed to stop unauthorized withdrawals.
          </p>
          <p>
            Now imagine the fraud detection system goes rogue. It starts flagging legitimate transactions as suspicious. Accounts get frozen. Money stops flowing. That’s <strong>Antiphospholipid Syndrome</strong> — and the rogue detectors are the <em>aPL antibodies</em>.
          </p>
          <p>
            But here’s the thing about a rogue fraud department: you can’t fix it until you figure out which detectors are malfunctioning. This bank has <strong>three fraud departments</strong>, each using different methods to scan for problems. Your job? Identify which ones have gone rogue.
          </p>
        </div>
        <div className="board-pearl-box">
          <div className="board-pearl-label">Key Question</div>
          <p>What are the three types of aPL antibodies, how do we detect each one, and why does this matter for APS diagnosis?</p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Core Content — The Three Fraud Departments</h2>

        <div className="expandable-module-card" onClick={() => toggle('la')}>
          <div className="expandable-header-row">
            <h3>Department 1: Lupus Anticoagulant (LA) — The Transaction Speed Monitor</h3>
            <span className="expand-icon">{expandedSection === 'la' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The most important fraud detector — and the most paradoxical.</p>
          {expandedSection === 'la' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>
                  The first department monitors <strong>how fast transactions process</strong>. In a normal bank, transactions clear at a predictable speed. The Transaction Speed Monitor times each one. When it detects something “suspicious,” it slows everything down for review.
                </p>
                <p>
                  Here’s the great paradox of LA: <strong>in the test tube (in vitro), it SLOWS coagulation</strong> — hence the name “anticoagulant.” But <strong>in the body (in vivo), it PROMOTES thrombosis</strong>. It’s like a monitor that slows things down during an audit but in real time causes accounts to lock up. This is the fundamental paradox you must understand: <em>in vitro anticoagulant, in vivo procoagulant</em>.
                </p>
              </div>
              <h4>The 3-Step Detection Process</h4>
              <div className="step-flow">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <div><strong>Screen:</strong> Notice transactions are slow (aPTT is prolonged)</div>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <div><strong>Mixing Study:</strong> Bring in normal operators (normal plasma). If speed normalizes = <strong>“Mix and Fix” = factor deficiency</strong>. If still slow = <strong>“Mix and Miss” = inhibitor (LA)</strong></div>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <div><strong>Confirmatory:</strong> Flood the system with excess phospholipid. If speed normalizes, it confirms LA — the problem was phospholipid-dependent</div>
                </div>
              </div>
              <div className="board-pearl-box">
                <div className="board-pearl-label">Board Pearl</div>
                <p>LA is the <strong>strongest predictor of thrombotic events</strong> among all aPL antibodies. It also interferes with INR monitoring — use a <strong>chromogenic factor X assay</strong> instead of PT in LA-positive patients on warfarin. And it <strong>cannot be tested while on anticoagulants</strong> (the drugs also slow transactions).</p>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('acl')}>
          <div className="expandable-header-row">
            <h3>Department 2: Anticardiolipin (aCL) — The Pattern Scanner</h3>
            <span className="expand-icon">{expandedSection === 'acl' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">It doesn’t time transactions — it scans for suspicious patterns on the paperwork.</p>
          {expandedSection === 'acl' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>
                  The second department works completely differently from the first. Instead of monitoring transaction speed, the Pattern Scanner <strong>examines the paperwork</strong> — specifically, it looks for antibodies that target cardiolipin (a phospholipid in cell membranes).
                </p>
                <p>
                  Because it’s scanning paperwork rather than timing transactions, <strong>it CAN work while the bank is running its override system</strong> (anticoagulation). This is a key practical difference from LA testing.
                </p>
              </div>
              <ul className="content-list">
                <li><strong>Method:</strong> ELISA immunoassay (measures antibodies directly, not function)</li>
                <li><strong>Reports:</strong> Titers — how many suspicious patterns detected (IgG and IgM isotypes)</li>
                <li><strong>2023 ACR/EULAR thresholds:</strong> IgG ≥40 units or IgM ≥80 units for highest-weight category</li>
                <li><strong>Key advantage:</strong> NOT affected by anticoagulation — can test on warfarin</li>
                <li><strong>Key limitation:</strong> Less specific than LA — can have false positives from infections, medications</li>
              </ul>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('b2gpi')}>
          <div className="expandable-header-row">
            <h3>Department 3: Anti-β2GPI — The Identity Investigator</h3>
            <span className="expand-icon">{expandedSection === 'b2gpi' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The most sophisticated department — it tracks the actual person responsible.</p>
          {expandedSection === 'b2gpi' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>
                  While the Pattern Scanner looks at paperwork, the Identity Investigator <strong>tracks the actual person responsible</strong> for the fraud. β2-Glycoprotein I is the cofactor that aPL antibodies need to bind phospholipids — it’s the <em>true antigenic target</em>. Finding antibodies against it is like finding the ringleader’s exact address.
                </p>
              </div>
              <ul className="content-list">
                <li><strong>Method:</strong> ELISA targeting anti-β2GPI antibodies</li>
                <li><strong>Most specific</strong> antibody for APS pathogenesis</li>
                <li><strong>Domain I antibodies</strong> are the new gold standard in 2023 criteria (like finding the ringleader’s office, not just their neighborhood)</li>
                <li>Superior correlation with thrombosis compared to full-length β2GPI testing</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">The Comparison Table</h2>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>LA (Speed Monitor)</th>
                <th>aCL (Pattern Scanner)</th>
                <th>Anti-β2GPI (Investigator)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Method</td><td>Functional (coag assay)</td><td>ELISA (immunoassay)</td><td>ELISA (immunoassay)</td></tr>
              <tr><td>Measures</td><td>What the system DOES</td><td>Antibodies on paperwork</td><td>The actual target</td></tr>
              <tr><td>On anticoagulation?</td><td>❌ Cannot test</td><td>✅ Can test</td><td>✅ Can test</td></tr>
              <tr><td>Specificity for APS</td><td>Highest</td><td>Moderate</td><td>High</td></tr>
              <tr><td>Thrombosis prediction</td><td>Strongest</td><td>Moderate</td><td>Strong</td></tr>
              <tr><td>Key threshold (2023)</td><td>Positive/Negative</td><td>IgG ≥40, IgM ≥80</td><td>Domain I positivity</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Triple Positivity — The Grand Slam</h2>
        <div className="story-card highlight-card">
          <p>
            When <strong>ALL THREE</strong> departments report the same person… when the Transaction Speed Monitor flags a slowdown, the Pattern Scanner finds suspicious paperwork, AND the Identity Investigator confirms the culprit’s identity — that’s <strong>triple positivity</strong>. The case is airtight.
          </p>
          <p>
            Clinically, these patients face the <strong>highest thrombotic risk: 5–10% per year</strong>. They are the patients who absolutely cannot use DOACs (the TRAPS trial — Module 3). Triple positivity is the “grand slam” of aPL profiling.
          </p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">The 12-Week Confirmation Rule</h2>
        <div className="story-card">
          <p>
            The bank doesn’t act on a single report. What if the detector malfunctioned once? A transient infection can trigger temporary aPL positivity — the system threw a false alarm. That’s why the 2023 criteria require <strong>confirmation at least 12 weeks apart</strong>: two independent investigations, same conclusion. Never diagnose APS on a single positive test.
          </p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Board Pearls</h2>
        <div className="board-pearl-box"><div className="board-pearl-label">Pearl 1</div><p><strong>LA is in vitro anticoagulant, in vivo procoagulant.</strong> In your lab coagulation assays, LA slows clotting. In the patient’s blood vessels, it causes clots. Know this backwards and forwards.</p></div>
        <div className="board-pearl-box"><div className="board-pearl-label">Pearl 2</div><p><strong>Mix and Fix = Deficiency; Mix and Miss = Inhibitor.</strong> If aPTT corrects with mixing (Fix), it’s a factor deficiency. If it stays prolonged (Miss), it’s an inhibitor — LA positive.</p></div>
        <div className="board-pearl-box"><div className="board-pearl-label">Pearl 3</div><p><strong>Triple Positive = Highest Risk (5–10%/yr).</strong> LA + aCL + anti-β2GPI all positive = the grand slam. These patients need warfarin, never DOACs.</p></div>
        <div className="board-pearl-box"><div className="board-pearl-label">Pearl 4</div><p><strong>12-Week Confirmation Rule.</strong> Never diagnose APS on a single positive test. Confirm at ≥12 weeks. Transient positivity from infections is common.</p></div>
        <div className="board-pearl-box"><div className="board-pearl-label">Pearl 5</div><p><strong>Chromogenic Factor X Assay.</strong> LA interferes with INR monitoring. Use chromogenic factor X assay instead of PT to monitor warfarin in LA-positive patients.</p></div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Memory Aids</h2>
        <div className="mnemonic-box"><p><strong>“LA: Liar in the Lab, Assassin in the Artery”</strong> — In vitro anticoagulant, in vivo procoagulant.</p></div>
        <div className="mnemonic-box"><p><strong>“Mix and Fix / Mix and Miss”</strong> — Fix = deficiency corrects. Miss = inhibitor persists.</p></div>
        <div className="mnemonic-box"><p><strong>“LA lies about the INR — X marks the spot”</strong> — Use chromogenic factor X assay to monitor warfarin in LA-positive patients.</p></div>
        <div className="mnemonic-box"><p><strong>“Triple Positive = Grand Slam = Highest Risk”</strong></p></div>
        <div className="mnemonic-box"><p><strong>“12 Weeks or It Doesn’t Count”</strong> — Single positive is not APS.</p></div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Test Yourself</h2>
        <div className="quiz-card" onClick={() => toggleAnswer('q1')}>
          <p className="quiz-question"><strong>Q1:</strong> A 32-year-old woman with recurrent DVTs has a prolonged aPTT. A mixing study is performed and the aPTT does NOT correct. What is the next step?</p>
          {showAnswer.q1 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Confirmatory test with excess phospholipid. The “Mix and Miss” pattern indicates an inhibitor, not a factor deficiency. If the confirmatory test normalizes, this confirms lupus anticoagulant.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q1 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q2')}>
          <p className="quiz-question"><strong>Q2:</strong> A patient with known APS and LA positivity on warfarin has an INR of 3.8 but doesn’t appear over-anticoagulated. What’s happening?</p>
          {showAnswer.q2 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> LA can falsely elevate the INR by interfering with the PT assay (also phospholipid-dependent). Use a <strong>chromogenic factor X assay</strong> to monitor actual anticoagulation intensity.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q2 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q3')}>
          <p className="quiz-question"><strong>Q3:</strong> Which aPL antibody profile carries the highest thrombotic risk?</p>
          {showAnswer.q3 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Triple positivity (LA + aCL + anti-β2GPI all positive). These patients have 5–10% annual thrombotic risk and are specifically contraindicated from DOACs per the TRAPS trial.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q3 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
      </section>

      <section className="module-summary-section">
        <h2 className="section-title">Summary</h2>
        <div className="summary-box">
          <ul className="summary-list">
            <li>The three aPL antibodies are LA (functional assay), aCL (ELISA), and anti-β2GPI (ELISA)</li>
            <li>LA is the strongest thrombosis predictor but cannot be tested on anticoagulation</li>
            <li>aCL and anti-β2GPI CAN be tested on anticoagulation</li>
            <li>Triple positivity = highest risk (5–10%/year) = warfarin mandatory</li>
            <li>Always confirm at ≥12 weeks — never diagnose on a single positive</li>
            <li>Use chromogenic factor X assay for INR monitoring in LA-positive patients</li>
          </ul>
        </div>
      </section>

      <div className="module-nav">
        <a href="/learning/aps" className="module-nav-link">← Back to APS Overview</a>
        <a href="/learning/aps/clinical" className="module-nav-link module-nav-next">Next: Clinical Manifestations →</a>
      </div>
    </main>
  );
}

