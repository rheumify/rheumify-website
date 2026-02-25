'use client';
import { useState } from 'react';

export default function APSManagementModule() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showAnswer, setShowAnswer] = useState({});
  const toggle = (id) => setExpandedSection(expandedSection === id ? null : id);
  const toggleAnswer = (id) => setShowAnswer(prev => ({...prev, [id]: !prev[id]}));

  return (
    <main className="main">
      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; <a href="/learning/aps">APS</a> &gt; Management
        </p>
        <div className="module-badge">Module 3 of 3 • 5 min • Management & Treatment</div>
        <h1 className="page-title">Unfreezing the Accounts</h1>
        <p className="learning-subtitle">&ldquo;The Override Playbook&rdquo;</p>
      </div>

      <section className="module-story-section">
        <h2 className="section-title">The Big Picture</h2>
        <div className="story-card">
          <p>
            You’ve identified the rogue fraud detectors (Module 1). You’ve documented the damage — frozen checking accounts, seized investments, collapsed ATM networks, blocked construction projects, jammed vault doors, and friendly fire on employees (Module 2). Now the board of directors demands answers: <strong>How do we override this system? How do we unfreeze the accounts?</strong>
          </p>
          <p>
            The answer comes in four tiers — from basic prevention to full emergency response. Think of it as the bank’s <strong>crisis management playbook</strong>.
          </p>
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">The Four-Tier Override Playbook</h2>

        <div className="expandable-module-card" onClick={() => toggle('tier1')}>
          <div className="expandable-header-row">
            <h3>Tier 1: Basic Safeguards — Primary Prevention</h3>
            <span className="expand-icon">{expandedSection === 'tier1' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The fraud system is active but hasn’t frozen anything yet.</p>
          {expandedSection === 'tier1' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>The fraud system is installed and active, but no accounts have been affected yet. You’ve detected the rogue code (positive aPL) but nothing’s frozen. Do you bring in a full override team? No — that’s overkill and might cause its own problems (bleeding). Instead, you install a <strong>basic safeguard</strong>.</p>
              </div>
              <ul className="content-list">
                <li><strong>Low-dose aspirin (75–100 mg)</strong> for high-risk aPL carriers (triple positive, LA positive, persistently high titers)</li>
                <li>Also recommended for SLE patients with positive aPL</li>
                <li>Cardiovascular risk factor management</li>
                <li><strong>DO NOT anticoagulate</strong> without a clinical event — bleeding risk outweighs benefit</li>
                <li>Avoid estrogen-containing contraceptives</li>
              </ul>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('tier2')}>
          <div className="expandable-header-row">
            <h3>Tier 2: The Manual Override Team — After Thrombosis</h3>
            <span className="expand-icon">{expandedSection === 'tier2' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">Accounts are actively frozen. Time to bring in warfarin.</p>
          {expandedSection === 'tier2' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>Accounts are actively getting frozen. It’s time for the <strong>manual override team</strong> — experienced operators who sit in the bank and manually process every transaction the fraud system tries to block. That team is <strong>warfarin</strong>. Not the automated app (DOACs). The manual team that needs constant supervision (INR monitoring) but can be fine-tuned in real time.</p>
              </div>
              <h4>After Venous Thrombosis</h4>
              <div className="module-table-wrapper">
                <table className="module-table">
                  <thead><tr><th>Scenario</th><th>Treatment</th><th>INR</th><th>Duration</th></tr></thead>
                  <tbody>
                    <tr><td>First unprovoked VTE</td><td>Warfarin</td><td>2.0–3.0</td><td>Indefinite</td></tr>
                    <tr><td>First provoked VTE</td><td>Warfarin</td><td>2.0–3.0</td><td>Consider indefinite</td></tr>
                    <tr><td>Recurrent VTE despite INR 2–3</td><td>Increase INR or add LDA or LMWH</td><td>3.0–4.0</td><td>Indefinite</td></tr>
                  </tbody>
                </table>
              </div>
              <h4>After Arterial Thrombosis</h4>
              <div className="module-table-wrapper">
                <table className="module-table">
                  <thead><tr><th>Scenario</th><th>Treatment</th><th>INR</th></tr></thead>
                  <tbody>
                    <tr><td>First arterial event, low bleeding risk</td><td>Warfarin</td><td>2.0–3.0 or 3.0–4.0</td></tr>
                    <tr><td>First arterial event, high bleeding risk</td><td>Warfarin + LDA</td><td>2.0–3.0</td></tr>
                    <tr><td>Recurrent arterial event</td><td>Escalate: higher INR, add LDA, or LMWH</td><td>3.0–4.0</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="board-pearl-box">
                <div className="board-pearl-label">Board Pearl</div>
                <p>APS thrombosis = <strong>indefinite anticoagulation with warfarin</strong>. This is NOT a time-limited 3–6 month course. The fraud system never turns off, so neither does the override team. <strong>“Two-Three for Veins, Three-Four for Brains.”</strong></p>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('doacs')}>
          <div className="expandable-header-row">
            <h3>Why Warfarin Wins and DOACs Lose</h3>
            <span className="expand-icon">{expandedSection === 'doacs' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">One of the highest-yield boards concepts in APS management.</p>
          {expandedSection === 'doacs' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>Think of DOACs as an <strong>automated override app</strong> — modern, convenient, no monitoring. Warfarin is the old-school <strong>manual override team</strong>. In most situations, the app works great. But APS is not most situations.</p>
                <p>The rogue fraud system attacks through <strong>multiple pathways</strong> — endothelial cells, platelets, complement. DOACs target a single factor (Xa or thrombin). Warfarin suppresses <strong>multiple factors (II, VII, IX, X)</strong> — casting a wider net.</p>
              </div>
              <div className="module-table-wrapper">
                <table className="module-table">
                  <thead><tr><th>Trial</th><th>Design</th><th>Key Finding</th></tr></thead>
                  <tbody>
                    <tr><td><strong>TRAPS (2018)</strong></td><td>Rivaroxaban vs warfarin in triple-positive APS</td><td><strong>Stopped early</strong> — excess arterial events on rivaroxaban</td></tr>
                    <tr><td><strong>RAPS (2016)</strong></td><td>Rivaroxaban vs warfarin in APS + VTE</td><td>Lower thrombin generation on rivaroxaban (surrogate concern)</td></tr>
                    <tr><td><strong>ASTRO-APS (2023)</strong></td><td>Apixaban vs warfarin</td><td>Non-inferior, but warfarin remains first-line per guidelines</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('tier3')}>
          <div className="expandable-header-row">
            <h3>Tier 3: Security Escort — Obstetric APS</h3>
            <span className="expand-icon">{expandedSection === 'tier3' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The construction project needs a dedicated escort. Level depends on history.</p>
          {expandedSection === 'tier3' && (
            <div className="expanded-content">
              <div className="story-card">
                <p>The bank is funding a major construction project (pregnancy). The fraud system threatens to cut off the wire transfer (placental blood supply). You need a <strong>dedicated security escort</strong> — but the level depends on how dangerous the neighborhood is.</p>
              </div>
              <div className="module-table-wrapper">
                <table className="module-table">
                  <thead><tr><th>History</th><th>Pregnancy Rx</th><th>Escort Level</th></tr></thead>
                  <tbody>
                    <tr><td>Positive aPL, no events</td><td>LDA alone</td><td>Light escort</td></tr>
                    <tr><td>Obstetric APS (prior losses)</td><td>LDA + prophylactic heparin</td><td>Standard escort</td></tr>
                    <tr><td>Thrombotic APS (prior clots)</td><td>LDA + therapeutic heparin</td><td>Full armed escort</td></tr>
                    <tr><td>Refractory (losses despite Rx)</td><td>Escalate + HCQ ± prednisone</td><td>Upgraded detail</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="board-pearl-box">
                <div className="board-pearl-label">Board Pearl</div>
                <p><strong>Warfarin is teratogenic</strong> — must switch to heparin before 6 weeks gestation. Heparin does NOT cross the placenta. LDA until 36 weeks. Heparin through pregnancy + 6–12 weeks postpartum. HCQ reduces aPL levels and has direct antithrombotic effects on placenta.</p>
              </div>
            </div>
          )}
        </div>

        <div className="expandable-module-card" onClick={() => toggle('tier4')}>
          <div className="expandable-header-row">
            <h3>Tier 4: Emergency Response — Catastrophic APS</h3>
            <span className="expand-icon">{expandedSection === 'tier4' ? '▲' : '▼'}</span>
          </div>
          <p className="card-preview">The entire system has crashed. Deploy everything simultaneously.</p>
          {expandedSection === 'tier4' && (
            <div className="expanded-content">
              <div className="story-card highlight-card">
                <p>The entire banking system has crashed. Every branch, every ATM, every portal — frozen simultaneously. This isn’t time for a manual override team. You need the <strong>emergency response protocol</strong>: shut down the fraud system entirely, bring in emergency liquidity from outside, and repair the damage all at once.</p>
              </div>
              <div className="module-table-wrapper">
                <table className="module-table">
                  <thead><tr><th>Component</th><th>Mechanism</th><th>Bank Analogy</th></tr></thead>
                  <tbody>
                    <tr><td><strong>IV Heparin</strong></td><td>Prevent new clots</td><td>Stop more accounts from freezing</td></tr>
                    <tr><td><strong>High-dose steroids</strong></td><td>Suppress immune storm</td><td>Emergency power-down of fraud system</td></tr>
                    <tr><td><strong>Plasma exchange</strong></td><td>Remove aPL antibodies</td><td>Flush fraud code from the system</td></tr>
                    <tr><td><strong>± IVIG</strong></td><td>Immunomodulation</td><td>Inject emergency patches</td></tr>
                  </tbody>
                </table>
              </div>
              <p style={{color: '#9CA3AF', marginTop: '12px'}}>Salvage: rituximab (destroy the factory making the rogue software), eculizumab (block downstream pathways). Mortality remains 30–37% even with triple therapy. Always treat the trigger.</p>
            </div>
          )}
        </div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Memory Aids</h2>
        <div className="mnemonic-box"><p><strong>“Warfarin is the Workhorse”</strong> — In APS, warfarin works and DOACs don’t. When in doubt on boards, choose warfarin.</p></div>
        <div className="mnemonic-box"><p><strong>“Two-Three for Veins, Three-Four for Brains”</strong> — Venous: INR 2–3. Arterial (stroke): consider INR 3–4.</p></div>
      </section>

      <section className="module-content-section">
        <h2 className="section-title">Test Yourself</h2>
        <div className="quiz-card" onClick={() => toggleAnswer('q1')}>
          <p className="quiz-question"><strong>Q1:</strong> A 40-year-old woman with triple-positive APS and DVT history, stable on warfarin INR 2.5 for 3 years. Asks about switching to rivaroxaban for convenience. Recommendation?</p>
          {showAnswer.q1 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Do NOT switch. Triple-positive APS = absolute contraindication to DOACs per the TRAPS trial (stopped early, excess arterial events on rivaroxaban). Continue warfarin INR 2–3 indefinitely.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q1 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q2')}>
          <p className="quiz-question"><strong>Q2:</strong> A 30-year-old woman with obstetric APS (two fetal losses at 14 and 18 weeks, no thrombosis) is planning pregnancy. Currently on LDA. Pregnancy management?</p>
          {showAnswer.q2 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> LDA (continue) + prophylactic heparin (enoxaparin 40mg daily). If another loss despite this → escalate to therapeutic heparin + consider HCQ. Warfarin must be avoided (teratogenic).</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q2 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
        <div className="quiz-card" onClick={() => toggleAnswer('q3')}>
          <p className="quiz-question"><strong>Q3:</strong> A patient with known APS develops rapid multi-organ failure after an infection. Renal failure, stroke, and ARDS over 3 days. Diagnosis and treatment?</p>
          {showAnswer.q3 && (
            <div className="quiz-answer">
              <p><strong>Answer:</strong> Catastrophic APS. Treatment: anticoagulation + high-dose steroids + plasma exchange ± IVIG — all simultaneously. Treat the infection trigger. Mortality 30–37% even with aggressive therapy.</p>
            </div>
          )}
          <span className="quiz-toggle">{showAnswer.q3 ? 'Hide Answer' : 'Show Answer'}</span>
        </div>
      </section>

      <section className="module-summary-section">
        <h2 className="section-title">Summary</h2>
        <div className="summary-box">
          <ul className="summary-list">
            <li>APS thrombosis = indefinite anticoagulation with warfarin (NOT time-limited)</li>
            <li>Venous APS: INR 2–3. Arterial APS: INR 2–3 or 3–4 (risk-dependent)</li>
            <li>DOACs contraindicated in triple-positive APS (TRAPS trial)</li>
            <li>Pregnancy: switch warfarin to heparin (teratogenic). Escort level depends on history.</li>
            <li>Refractory obstetric APS: escalate heparin + add HCQ ± prednisone</li>
            <li>CAPS: anticoag + steroids + plasma exchange ± IVIG — simultaneously</li>
            <li>HCQ is adjunctive for SLE-associated APS, refractory obstetric APS, and increasingly all APS</li>
          </ul>
        </div>
      </section>

      <div className="module-nav">
        <a href="/learning/aps/clinical" className="module-nav-link">← Previous: Clinical Manifestations</a>
        <a href="/learning/aps" className="module-nav-link module-nav-next">✅ Series Complete — Back to Overview</a>
      </div>
    </main>
  );
}

