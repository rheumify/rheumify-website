export const metadata = {
  title: 'Rheumatology Biologics — The Memory Palace | Rheumify',
  description: 'Master every biologic mechanism through a house memory palace. Drug suffixes, naming codes, mnemonics, dosing, and FDA indications.',
};

export default function BiologicsPage() {
  return (
    <>
      <style>{`
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600&display=swap");

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #FAF8F5;
      --card-bg:   #FFFFFF;
      --card-alt:  #F5F0EB;
      --border:    #DDD6CB;
      --text:      #1C1A17;
      --text-mid:  #4A4540;
      --text-light:#7A7268;

      /* Section accent colors — borders, icons, highlights */
      --red:       #9B2C2C;
      --teal:      #1D5F74;
      --purple:    #5B3F94;
      --ice:       #1D5280;
      --dark:      #2A2A2A;
      --electric:  #5C3D00;
      --control:   #2C5240;
      --green:     #2D5A27;

      --mnemonic-bg:  #FDF6EC;
      --mnemonic-border: #C8964A;
      --pearl-bg:  #EFF6FB;
      --pearl-border:#3A7EA0;
    }

    body {
      font-family: 'EB Garamond', Georgia, serif;
      background: var(--bg);
      color: var(--text);
      font-size: 18px;
      line-height: 1.75;
    }

    /* ── NAV ── */
    nav {
      background: #1C1A17;
      padding: 0.9rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    nav .logo {
      font-size: 1.4rem;
      font-weight: 700;
      color: #FAF8F5;
      letter-spacing: -0.02em;
    }
    nav .logo span { color: #C8964A; }
    nav ul { list-style: none; display: flex; gap: 1.8rem; }
    nav ul a { color: #C8C0B4; text-decoration: none; font-size: 0.95rem; font-family: 'Inter', sans-serif; }
    nav ul a:hover { color: #FAF8F5; }

    /* ── HERO ── */
    .hero {
      background: linear-gradient(135deg, #1C1A17 0%, #2D2520 60%, #3A2E25 100%);
      color: #FAF8F5;
      padding: 5rem 2rem 4rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(200,150,74,0.12) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 30%, rgba(91,63,148,0.1) 0%, transparent 50%);
    }
    .hero-inner { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
    .hero-eyebrow {
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #C8964A;
      margin-bottom: 1rem;
    }
    .hero h1 {
      font-size: clamp(2.2rem, 5vw, 3.4rem);
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 1.2rem;
    }
    .hero h1 em { font-style: italic; color: #C8964A; }
    .hero-sub {
      font-size: 1.15rem;
      color: #C8C0B4;
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.7;
    }
    .hero-pills {
      display: flex; flex-wrap: wrap; gap: 0.6rem;
      justify-content: center; margin-top: 1.5rem;
    }
    .hero-pill {
      background: rgba(200,150,74,0.15);
      border: 1px solid rgba(200,150,74,0.35);
      color: #C8964A;
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      padding: 0.3rem 0.9rem;
      border-radius: 20px;
    }

    /* ── LAYOUT ── */
    .page-wrap { max-width: 900px; margin: 0 auto; padding: 3rem 1.5rem 5rem; }

    /* ── SECTION HEADERS ── */
    .section-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 3.5rem 0 1.5rem;
      padding-bottom: 0.6rem;
      border-bottom: 2px solid currentColor;
    }
    .section-icon { font-size: 1.4rem; }
    .section-header h2 {
      font-size: 1.55rem;
      font-weight: 700;
    }

    /* ── CARDS ── */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1.6rem 1.8rem;
      margin-bottom: 1.2rem;
      box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }
    .card-alt { background: var(--card-alt); }

    /* ── MNEMONIC BOX ── */
    .mnemonic {
      background: var(--mnemonic-bg);
      border-left: 4px solid var(--mnemonic-border);
      border-radius: 0 8px 8px 0;
      padding: 1rem 1.4rem;
      margin: 1rem 0;
    }
    .mnemonic-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #C8964A;
      margin-bottom: 0.3rem;
    }
    .mnemonic p { font-size: 1rem; line-height: 1.6; }
    .mnemonic strong { color: #9B2C2C; }

    /* ── PEARL BOX ── */
    .pearl {
      background: var(--pearl-bg);
      border-left: 4px solid var(--pearl-border);
      border-radius: 0 8px 8px 0;
      padding: 1rem 1.4rem;
      margin: 1rem 0;
    }
    .pearl-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #3A7EA0;
      margin-bottom: 0.3rem;
    }

    /* ── DRUG GRID ── */
    .drug-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1rem;
      margin: 1.2rem 0;
    }
    .drug-card {
      background: var(--card-bg);
      border: 1.5px solid var(--border);
      border-radius: 10px;
      padding: 1.2rem 1.4rem;
      transition: box-shadow 0.2s;
    }
    .drug-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.09); }
    .drug-name {
      font-size: 1.05rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }
    .drug-class {
      font-family: 'Inter', sans-serif;
      font-size: 0.73rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 0.6rem;
      opacity: 0.75;
    }
    .drug-card ul { list-style: none; }
    .drug-card ul li {
      font-size: 0.92rem;
      padding: 0.18rem 0;
      color: var(--text-mid);
      display: flex;
      gap: 0.5rem;
    }
    .drug-card ul li::before { content: '→'; opacity: 0.5; flex-shrink: 0; }

    /* ── SUFFIX TABLE ── */
    .suffix-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      font-size: 0.97rem;
    }
    .suffix-table th {
      background: #1C1A17;
      color: #FAF8F5;
      padding: 0.7rem 1rem;
      text-align: left;
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
    .suffix-table td {
      padding: 0.65rem 1rem;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
    }
    .suffix-table tr:last-child td { border-bottom: none; }
    .suffix-table tr:nth-child(even) td { background: var(--card-alt); }
    .suffix-code {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 0.88rem;
      letter-spacing: 0.04em;
    }

    /* ── INDICATION TAGS ── */
    .tag-list { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem; }
    .tag {
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      padding: 0.2rem 0.65rem;
      border-radius: 12px;
      border: 1px solid currentColor;
      opacity: 0.85;
    }

    /* ── SUMMARY GRID ── */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }
    .summary-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem 1.2rem;
    }
    .room-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      color: var(--text-mid);
    }
    .summary-card p { font-size: 0.9rem; line-height: 1.55; }

    /* ── RESPONSIVE ── */
    @media (max-width: 600px) {
      .drug-grid { grid-template-columns: 1fr; }
      .suffix-table { font-size: 0.85rem; }
      .suffix-table th, .suffix-table td { padding: 0.5rem 0.7rem; }
    }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="logo">Rheum<span>ify</span></div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/learning">Learning</a></li>
          <li><a href="/cases">Cases</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Memory Palace Series</div>
          <h1>Rheumatology Biologics<br/><em>The Memory Palace</em></h1>
          <p className="hero-sub">
            Walk room by room through a house where every biologic lives.
            Mechanisms, mnemonics, dosing, and FDA indications — all in one place.
          </p>
          <div className="hero-pills">
            <span className="hero-pill">TNF Inhibitors</span>
            <span className="hero-pill">IL-6 Blockers</span>
            <span className="hero-pill">IL-17 / IL-23</span>
            <span className="hero-pill">IL-1 Blockers</span>
            <span className="hero-pill">B-cell Depletion</span>
            <span className="hero-pill">T-cell Costimulation</span>
            <span className="hero-pill">JAK Inhibitors</span>
            <span className="hero-pill">Complement</span>
            <span className="hero-pill">PDE4</span>
          </div>
        </div>
      </div>

      <div className="page-wrap">

        {/* ═══════════════════════════════════════════════
            SECTION 0 — DRUG NAMING DECODER RING
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--dark)'}}>
          <span className="section-icon">🔑</span>
          <h2>The Naming Decoder Ring</h2>
        </div>

        <div className="card">
          <p style={{marginBottom:'1rem'}}>Every biologic name is a code. Once you crack it, you'll never confuse <em>-mab</em> vs <em>-cept</em> again.</p>

          <table className="suffix-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Position</th>
                <th>What it means</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="suffix-code">-mab</span></td>
                <td>End</td>
                <td>Monoclonal <strong>ab</strong>ody</td>
                <td>rituximab, tocilizumab, secukinumab</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-cept</span></td>
                <td>End</td>
                <td>Re<strong>cept</strong>or fusion protein</td>
                <td>etanercept, abatacept, rilonacept</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-ra-</span></td>
                <td>Middle</td>
                <td><strong>Ra</strong>t source (chimeric)</td>
                <td>infliximab</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-xi-</span></td>
                <td>Middle</td>
                <td>Chimeric (mouse + human)</td>
                <td>infliximab, rituximab</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-zu-</span></td>
                <td>Middle</td>
                <td>Humanized (~95% human)</td>
                <td>tocilizumab, mepolizumab</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-u-</span></td>
                <td>Middle</td>
                <td>Fully human</td>
                <td>adalimumab, secukinumab, ustekinumab</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-li-</span></td>
                <td>Middle</td>
                <td>Immunologic target</td>
                <td>tocilizumab, anakinra (kinra = IL-1 kinetics)</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-ki-</span></td>
                <td>Middle</td>
                <td>Interleukin target</td>
                <td>anakinra, secukinumab (-ki- = kinase/IL)</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-ner-</span></td>
                <td>Middle</td>
                <td><strong>N</strong>erve/TNF</td>
                <td>etanercept (eta-<em>ner</em>-cept)</td>
              </tr>
              <tr>
                <td><span className="suffix-code">-tini-b / -tinib</span></td>
                <td>End</td>
                <td>Kinase inhibitor (small molecule)</td>
                <td>tofacitinib, baricitinib, upadacitinib</td>
              </tr>
            </tbody>
          </table>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic</div>
            <p><strong>"Mabs are missiles, cepts are traps."</strong> A monoclonal antibody (mab) flies to its target like a missile. A receptor fusion (cept) sits there and traps the cytokine passing by.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 1 — TNF INHIBITORS (Living Room)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--red)'}}>
          <span className="section-icon">🛋️</span>
          <h2>Living Room — TNF Inhibitors</h2>
        </div>

        <div className="card">
          <p>The <strong>living room</strong> is the busiest room in the house — TNF-α is the most targeted cytokine in rheumatology. Five biologics live here.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic — The 5 TNFi</div>
            <p><strong>"Every Inch Adds Considerable Growth"</strong><br/>
            <strong>E</strong>tanercept · <strong>I</strong>nfliximab · <strong>A</strong>dalimumab · <strong>C</strong>ertolizumab · <strong>G</strong>olimumab</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#9B2C2C'}}>
              <div className="drug-name">Etanercept</div>
              <div className="drug-class" style={{color:'#9B2C2C'}}>TNF receptor fusion</div>
              <ul>
                <li>Decoy TNF receptor (p75) + IgG1 Fc</li>
                <li>SQ only — no IV formulation</li>
                <li>Safest TNFi in demyelinating disease (relatively)</li>
                <li>Does NOT treat uveitis or IBD</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#9B2C2C'}}>RA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>PsA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>AS</span>
                <span className="tag" style={{color:'#9B2C2C'}}>JIA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>Plaque Ps</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#9B2C2C'}}>
              <div className="drug-name">Infliximab</div>
              <div className="drug-class" style={{color:'#9B2C2C'}}>Chimeric anti-TNF mAb</div>
              <ul>
                <li>IV infusion only</li>
                <li>First TNFi approved (1998, RA + CD)</li>
                <li>Most immunogenic → premedicate, add MTX</li>
                <li>Treats uveitis + IBD</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#9B2C2C'}}>RA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>AS</span>
                <span className="tag" style={{color:'#9B2C2C'}}>PsA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>IBD</span>
                <span className="tag" style={{color:'#9B2C2C'}}>Uveitis</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#9B2C2C'}}>
              <div className="drug-name">Adalimumab</div>
              <div className="drug-class" style={{color:'#9B2C2C'}}>Fully human anti-TNF mAb</div>
              <ul>
                <li>SQ every 2 weeks (or weekly in IBD)</li>
                <li>Most prescribed biologic worldwide</li>
                <li>Treats uveitis + IBD</li>
                <li>Many biosimilars available</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#9B2C2C'}}>RA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>PsA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>AS</span>
                <span className="tag" style={{color:'#9B2C2C'}}>JIA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>IBD</span>
                <span className="tag" style={{color:'#9B2C2C'}}>Uveitis</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#9B2C2C'}}>
              <div className="drug-name">Certolizumab pegol</div>
              <div className="drug-class" style={{color:'#9B2C2C'}}>PEGylated Fab' fragment</div>
              <ul>
                <li>No Fc region → does NOT cross placenta</li>
                <li>Drug of choice in pregnancy</li>
                <li>SQ every 2–4 weeks</li>
                <li>Treats IBD, uveitis</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#9B2C2C'}}>RA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>PsA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>AS</span>
                <span className="tag" style={{color:'#9B2C2C'}}>IBD</span>
                <span className="tag" style={{color:'#9B2C2C'}}>Pregnancy ✓</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#9B2C2C'}}>
              <div className="drug-name">Golimumab</div>
              <div className="drug-class" style={{color:'#9B2C2C'}}>Fully human anti-TNF mAb</div>
              <ul>
                <li>SQ monthly — easiest dosing schedule</li>
                <li>Also available IV (for RA)</li>
                <li>Treats IBD (IV form, UC)</li>
                <li>"Go once a month = Golimumab"</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#9B2C2C'}}>RA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>PsA</span>
                <span className="tag" style={{color:'#9B2C2C'}}>AS</span>
                <span className="tag" style={{color:'#9B2C2C'}}>UC (IV)</span>
              </div>
            </div>
          </div>

          <div className="pearl">
            <div className="pearl-label">High-Yield Pearl — TNFi Class Contraindications</div>
            <p>All TNFi are contraindicated in: active serious infection, active TB (screen first!), CHF (NYHA III–IV), and demyelinating disease. Certolizumab is the only one safe in pregnancy.</p>
          </div>

          <div className="card card-alt" style={{marginTop:'1rem', borderLeft:'3px solid #9B2C2C'}}>
            <p><strong>Etanercept vs the rest:</strong> Etanercept does NOT treat uveitis, IBD, or skin psoriasis as robustly. It's a decoy receptor — not an antibody — so it doesn't bind soluble TNF as irreversibly.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 2 — IL-6 (Kitchen)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--teal)'}}>
          <span className="section-icon">🍳</span>
          <h2>Kitchen — IL-6 Blockers</h2>
        </div>

        <div className="card">
          <p>IL-6 is the <strong>inflammatory soup</strong> — it drives fever, CRP, acute phase response, and synovitis. The kitchen is where soup is made.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic</div>
            <p><strong>"Toci and Sari stir the soup."</strong><br/>
            <strong>Tocilizumab</strong> (IV or SQ) + <strong>Sarilumab</strong> (SQ) — both block IL-6 receptor.</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#1D5F74'}}>
              <div className="drug-name">Tocilizumab</div>
              <div className="drug-class" style={{color:'#1D5F74'}}>Anti-IL-6R mAb (humanized)</div>
              <ul>
                <li>IV or SQ — only IL-6 blocker with IV option</li>
                <li>Suppresses CRP markedly (mask infections!)</li>
                <li>First-line for cytokine release syndrome (CRS)</li>
                <li>Giant cell arteritis: FDA approved</li>
                <li>Watch: lipids ↑, LFTs ↑, neutropenia</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#1D5F74'}}>RA</span>
                <span className="tag" style={{color:'#1D5F74'}}>GCA</span>
                <span className="tag" style={{color:'#1D5F74'}}>sJIA</span>
                <span className="tag" style={{color:'#1D5F74'}}>pJIA</span>
                <span className="tag" style={{color:'#1D5F74'}}>CRS</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#1D5F74'}}>
              <div className="drug-name">Sarilumab</div>
              <div className="drug-class" style={{color:'#1D5F74'}}>Anti-IL-6R mAb (fully human)</div>
              <ul>
                <li>SQ every 2 weeks only</li>
                <li>RA monotherapy or + MTX</li>
                <li>Similar efficacy to tocilizumab</li>
                <li>Same monitoring: lipids, LFTs, CBC</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#1D5F74'}}>RA</span>
              </div>
            </div>
          </div>

          <div className="pearl">
            <div className="pearl-label">Pearl — IL-6 + CRP</div>
            <p>IL-6 drives hepatic CRP production. IL-6 blockers suppress CRP so effectively that CRP becomes useless as an infection marker while on these drugs. Use ESR or procalcitonin instead if infection is suspected.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 3 — IL-17 / IL-23 (Bathroom)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--purple)'}}>
          <span className="section-icon">🚿</span>
          <h2>Bathroom — IL-17 & IL-23 Blockers</h2>
        </div>

        <div className="card">
          <p>The bathroom is where you <em>scrub skin</em> — IL-17 and IL-23 are the key cytokines in psoriatic disease and ankylosing spondylitis.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic — IL-17 drugs</div>
            <p><strong>"Secu-Ixe-Bimek scrub the skin"</strong><br/>
            <strong>Secukinumab</strong> · <strong>Ixekizumab</strong> · <strong>Bimekizumab</strong> — all anti-IL-17A (bimekizumab also hits IL-17F)</p>
          </div>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic — IL-23 drugs</div>
            <p><strong>"Guse-Rise-Tilde paint the tile"</strong><br/>
            <strong>Guselkumab</strong> · <strong>Risankizumab</strong> · <strong>Tildrakizumab</strong> — all anti-IL-23 (p19 subunit)</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#5B3F94'}}>
              <div className="drug-name">Secukinumab</div>
              <div className="drug-class" style={{color:'#5B3F94'}}>Anti-IL-17A mAb</div>
              <ul>
                <li>SQ — loading dose × 5 weeks, then monthly</li>
                <li>Excellent for AS + PsA + Ps</li>
                <li>Caution: IBD (may worsen!)</li>
                <li>Screen for candida history</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5B3F94'}}>AS</span>
                <span className="tag" style={{color:'#5B3F94'}}>PsA</span>
                <span className="tag" style={{color:'#5B3F94'}}>Plaque Ps</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#5B3F94'}}>
              <div className="drug-name">Ixekizumab</div>
              <div className="drug-class" style={{color:'#5B3F94'}}>Anti-IL-17A mAb</div>
              <ul>
                <li>SQ — loading dose, then q4 or q2 weeks</li>
                <li>Highly effective for skin psoriasis</li>
                <li>Also approved for AS and PsA</li>
                <li>Caution: IBD (may worsen)</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5B3F94'}}>AS</span>
                <span className="tag" style={{color:'#5B3F94'}}>PsA</span>
                <span className="tag" style={{color:'#5B3F94'}}>Plaque Ps</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#5B3F94'}}>
              <div className="drug-name">Bimekizumab</div>
              <div className="drug-class" style={{color:'#5B3F94'}}>Anti-IL-17A/F mAb</div>
              <ul>
                <li>Dual blockade: IL-17A + IL-17F</li>
                <li>Superior skin clearance vs secukinumab</li>
                <li>FDA approved PsA, AS, plaque Ps</li>
                <li>Higher candida risk (dual blockade)</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5B3F94'}}>AS</span>
                <span className="tag" style={{color:'#5B3F94'}}>PsA</span>
                <span className="tag" style={{color:'#5B3F94'}}>Plaque Ps</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#5B3F94'}}>
              <div className="drug-name">Ustekinumab</div>
              <div className="drug-class" style={{color:'#5B3F94'}}>Anti-IL-12/23 (p40) mAb</div>
              <ul>
                <li>Blocks BOTH IL-12 and IL-23 (shared p40)</li>
                <li>IV load, then SQ q12 weeks</li>
                <li>Approved for IBD (Crohn's + UC)</li>
                <li>Does NOT worsen IBD</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5B3F94'}}>PsA</span>
                <span className="tag" style={{color:'#5B3F94'}}>Plaque Ps</span>
                <span className="tag" style={{color:'#5B3F94'}}>Crohn's</span>
                <span className="tag" style={{color:'#5B3F94'}}>UC</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#5B3F94'}}>
              <div className="drug-name">Guselkumab</div>
              <div className="drug-class" style={{color:'#5B3F94'}}>Anti-IL-23 (p19) mAb</div>
              <ul>
                <li>Selective IL-23 blockade (not IL-12)</li>
                <li>SQ q8 weeks after loading</li>
                <li>Does NOT worsen IBD</li>
                <li>Approved PsA + Ps</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5B3F94'}}>PsA</span>
                <span className="tag" style={{color:'#5B3F94'}}>Plaque Ps</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#5B3F94'}}>
              <div className="drug-name">Risankizumab</div>
              <div className="drug-class" style={{color:'#5B3F94'}}>Anti-IL-23 (p19) mAb</div>
              <ul>
                <li>Selective IL-23 blockade</li>
                <li>SQ q12 weeks after loading</li>
                <li>Approved Crohn's disease</li>
                <li>PsA + plaque Ps + CD</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5B3F94'}}>PsA</span>
                <span className="tag" style={{color:'#5B3F94'}}>Plaque Ps</span>
                <span className="tag" style={{color:'#5B3F94'}}>Crohn's</span>
              </div>
            </div>
          </div>

          <div className="pearl">
            <div className="pearl-label">Pearl — IL-17 vs IBD</div>
            <p>IL-17 blockers (secukinumab, ixekizumab, bimekizumab) can <strong>worsen</strong> IBD. IL-23 blockers (guselkumab, risankizumab, tildrakizumab) and ustekinumab do <strong>not</strong> worsen IBD and can treat Crohn's.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 4 — IL-1 BLOCKERS (Nursery)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--ice)'}}>
          <span className="section-icon">🍼</span>
          <h2>Nursery — IL-1 Blockers</h2>
        </div>

        <div className="card">
          <p>The <strong>nursery</strong> is for inflammasome diseases — IL-1 is the master alarm cytokine of innate immunity. These drugs are essential for autoinflammatory (not autoimmune) diseases.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic — IL-1 Blockers</div>
            <p><strong>"Ana Can Riley"</strong> — the baby's name in the nursery.<br/>
            <strong>Ana</strong>kinra · <strong>Can</strong>akinumab · <strong>Riley</strong>nacept (rilonacept)</p>
          </div>

          {/* ── INLINE IL-1 SVG DIAGRAM ── */}
          <div style={{margin:'1.5rem 0', background:'#F0F7FF', border:'1.5px solid #3A7EA0', borderRadius:'12px', padding:'1.2rem 1rem', textAlign:'center'}}>
            <div style={{fontFamily:"'Inter',sans-serif", fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#3A7EA0', marginBottom:'0.7rem'}}>IL-1 Pathway — How Each Drug Blocks It</div>
            <svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'100%', height:'auto'}}>
              {/* IL-1β source */}
              <ellipse cx="100" cy="40" rx="52" ry="22" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5"/>
              <text x="100" y="45" textAnchor="middle" fontSize="12" fontWeight="700" fill="#92400E">IL-1β</text>

              {/* Arrow down from IL-1β */}
              <line x1="100" y1="63" x2="100" y2="95" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>

              {/* IL-1 Receptor on cell */}
              <rect x="60" y="96" width="80" height="32" rx="7" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5"/>
              <text x="100" y="117" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1D4ED8">IL-1R</text>

              {/* Arrow to inflammation */}
              <line x1="100" y1="129" x2="100" y2="160" stroke="#6B7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
              <text x="100" y="178" textAnchor="middle" fontSize="12" fontWeight="600" fill="#DC2626">🔥 Inflammation</text>

              {/* Anakinra — blocks receptor */}
              <circle cx="220" cy="112" r="28" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5,3"/>
              <text x="220" y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7C3AED">Ana-</text>
              <text x="220" y="121" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7C3AED">kinra</text>
              <line x1="193" y1="112" x2="142" y2="112" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowPurple)"/>
              <text x="218" y="150" textAnchor="middle" fontSize="9" fill="#7C3AED">Blocks IL-1R</text>

              {/* Canakinumab — blocks IL-1β */}
              <circle cx="278" cy="85" r="33" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5,3"/>
              <line x1="278" y1="120" x2="278" y2="140" stroke="#C8964A" strokeWidth="1.5"/>
              <text x="278" y="160" textAnchor="middle" fontSize="22" fill="#DC2626" fontFamily="serif">✕</text>
              <rect x="240" y="164" width="96" height="28" rx="5" fill="#7C3AED"/>
              <text x="288" y="183" textAnchor="middle" fontSize="12" fill="white" fontWeight="700">Canakinumab</text>
              <line x1="248" y1="85" x2="155" y2="50" stroke="#7C3AED" strokeWidth="1.5" markerEnd="url(#arrowPurple)"/>
              <text x="195" y="62" textAnchor="middle" fontSize="9" fill="#7C3AED" transform="rotate(-20,195,62)">Neutralizes IL-1β</text>

              {/* Rilonacept — decoy receptor */}
              <circle cx="396" cy="85" r="21" fill="#3A7EA0"/>
              <text x="396" y="93" textAnchor="middle" fontSize="21" fill="white" fontFamily="serif">🪤</text>
              <path d="M396,108 L396,152 Q400,172 382,180 Q364,186 352,194" fill="none" stroke="#3A7EA0" strokeWidth="1.5" markerEnd="url(#arrowTeal)"/>
              <ellipse cx="350" cy="197" rx="16" ry="12" fill="#3A7EA0" opacity="0.92"/>
              <text x="350" y="202" textAnchor="middle" fontSize="13" fill="white" fontFamily="serif">IL-1</text>
              <text x="420" y="88" textAnchor="middle" fontSize="10" fill="#1D5280" fontWeight="700">Rilonacept</text>
              <text x="420" y="102" textAnchor="middle" fontSize="9" fill="#1D5280">(decoy receptor)</text>

              {/* Arrowhead markers */}
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#6B7280"/>
                </marker>
                <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#7C3AED"/>
                </marker>
                <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#3A7EA0"/>
                </marker>
              </defs>
            </svg>
            <div style={{fontFamily:"'Inter',sans-serif", fontSize:'0.78rem', color:'#4A5568', marginTop:'0.5rem'}}>
              Anakinra blocks the receptor · Canakinumab neutralizes IL-1β · Rilonacept is a decoy trap
            </div>
          </div>

          <div className="mnemonic" style={{marginTop:'1.2rem'}}>
            <div className="mnemonic-label">Updated Mnemonic — How Each Crawls In</div>
            <p>
              <strong>A</strong>nakinra — <strong>A</strong>ttaches to the receptor (blocks it)<br/>
              <strong>C</strong>anakinumab — <strong>C</strong>aptures IL-1β directly (neutralizes)<br/>
              <strong>R</strong>ilonacept — <strong>R</strong>eels it in like a trap (decoy receptor)
            </p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#1D5280'}}>
              <div className="drug-name">Anakinra</div>
              <div className="drug-class" style={{color:'#1D5280'}}>IL-1R antagonist (recombinant)</div>
              <ul>
                <li>Blocks IL-1R — endogenous IL-1Ra analog</li>
                <li>SQ daily (short half-life)</li>
                <li>First-line for AOSD, sJIA flares</li>
                <li>Used in gout (off-label) when other meds fail</li>
                <li>Rapid onset — good for acute flares</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#1D5280'}}>RA</span>
                <span className="tag" style={{color:'#1D5280'}}>sJIA</span>
                <span className="tag" style={{color:'#1D5280'}}>AOSD</span>
                <span className="tag" style={{color:'#1D5280'}}>CAPS</span>
                <span className="tag" style={{color:'#1D5280'}}>MAS</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#1D5280'}}>
              <div className="drug-name">Canakinumab</div>
              <div className="drug-class" style={{color:'#1D5280'}}>Anti-IL-1β mAb (fully human)</div>
              <ul>
                <li>Directly neutralizes IL-1β</li>
                <li>SQ every 8 weeks (long half-life)</li>
                <li>Best for periodic fever syndromes (CAPS, FMF, TRAPS)</li>
                <li>Superior for gout flare prevention (CANTOS trial)</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#1D5280'}}>sJIA</span>
                <span className="tag" style={{color:'#1D5280'}}>AOSD</span>
                <span className="tag" style={{color:'#1D5280'}}>CAPS</span>
                <span className="tag" style={{color:'#1D5280'}}>FMF</span>
                <span className="tag" style={{color:'#1D5280'}}>TRAPS</span>
                <span className="tag" style={{color:'#1D5280'}}>Gout</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#1D5280'}}>
              <div className="drug-name">Rilonacept</div>
              <div className="drug-class" style={{color:'#1D5280'}}>IL-1 decoy receptor fusion</div>
              <ul>
                <li>Soluble decoy — traps IL-1α and IL-1β</li>
                <li>SQ weekly</li>
                <li>Approved for CAPS and recurrent pericarditis</li>
                <li>Unique: only biologic for recurrent pericarditis</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#1D5280'}}>CAPS</span>
                <span className="tag" style={{color:'#1D5280'}}>Recurrent Pericarditis</span>
              </div>
            </div>
          </div>

          <div className="pearl">
            <div className="pearl-label">Pearl — IL-1 Blockers vs Autoimmune vs Autoinflammatory</div>
            <p>IL-1 blockers shine in <strong>autoinflammatory</strong> diseases (inflammasomopathies: CAPS, FMF, TRAPS, AOSD, sJIA) where innate immunity misfires. They are less effective for typical autoimmune diseases like RA vs TNFi or IL-6 blockers.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 5 — B-CELL (Laundry Room)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--dark)'}}>
          <span className="section-icon">🧺</span>
          <h2>Laundry Room — B-cell Depletion</h2>
        </div>

        <div className="card">
          <p>The laundry room <em>washes out</em> B cells. Rituximab depletes CD20+ B cells — use it when TNFi fail, or when the patient has a reason to avoid TNFi.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic</div>
            <p><strong>"Ritu washes CD20 cells clean."</strong><br/>
            Rituximab targets <strong>CD20</strong> on B cells. Belimumab targets <strong>BLyS</strong> (B-lymphocyte stimulator).</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#2A2A2A'}}>
              <div className="drug-name">Rituximab</div>
              <div className="drug-class" style={{color:'#2A2A2A'}}>Anti-CD20 mAb (chimeric)</div>
              <ul>
                <li>IV infusion × 2 doses (2 weeks apart)</li>
                <li>Re-dose every 6 months in RA</li>
                <li>Screen HBsAg + HBcAb before starting (reactivation risk)</li>
                <li>Monitor immunoglobulins over time</li>
                <li>First choice in RA + lymphoma history</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#2A2A2A'}}>RA</span>
                <span className="tag" style={{color:'#2A2A2A'}}>GPA/MPA</span>
                <span className="tag" style={{color:'#2A2A2A'}}>pSS</span>
                <span className="tag" style={{color:'#2A2A2A'}}>IIM</span>
                <span className="tag" style={{color:'#2A2A2A'}}>Lymphoma</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#2A2A2A'}}>
              <div className="drug-name">Belimumab</div>
              <div className="drug-class" style={{color:'#2A2A2A'}}>Anti-BLyS mAb</div>
              <ul>
                <li>Targets BLyS (BAFF) — B cell survival signal</li>
                <li>IV monthly or SQ weekly</li>
                <li>FDA approved for SLE + lupus nephritis</li>
                <li>Modest efficacy — add-on therapy</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#2A2A2A'}}>SLE</span>
                <span className="tag" style={{color:'#2A2A2A'}}>Lupus Nephritis</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 6 — T-CELL COSTIMULATION (Office)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--control)'}}>
          <span className="section-icon">💼</span>
          <h2>Office — T-cell Costimulation Blockade</h2>
        </div>

        <div className="card">
          <p>T cells need TWO signals to activate. Abatacept blocks Signal 2 (CD28–CD80/86 costimulation) — like cutting off the office supply chain.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic</div>
            <p><strong>"Abata-cept = Abort costimulation."</strong><br/>
            CTLA4-Ig fusion → binds CD80/86 on APC → T cell can't get its second signal → anergy.</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#2C5240'}}>
              <div className="drug-name">Abatacept</div>
              <div className="drug-class" style={{color:'#2C5240'}}>CTLA4-Ig fusion protein</div>
              <ul>
                <li>IV monthly or SQ weekly</li>
                <li>Preferred in seropositive RA (RF+/CCP+)</li>
                <li>Safer than TNFi in COPD patients</li>
                <li>Does NOT worsen CHF or demyelinating disease</li>
                <li>Avoid with TNFi (increased infection)</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#2C5240'}}>RA</span>
                <span className="tag" style={{color:'#2C5240'}}>PsA</span>
                <span className="tag" style={{color:'#2C5240'}}>JIA</span>
              </div>
            </div>
          </div>

          <div className="pearl">
            <div className="pearl-label">Pearl — Abatacept + Seropositivity</div>
            <p>Abatacept works especially well in <strong>CCP-positive RA</strong>. The hypothesis: ACPA production is T-cell dependent, so blocking costimulation hits the root cause more directly in seropositive patients.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 7 — JAK INHIBITORS (Garage)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--electric)'}}>
          <span className="section-icon">🔧</span>
          <h2>Garage — JAK Inhibitors</h2>
        </div>

        <div className="card">
          <p>The garage has all the <em>tools</em> (small molecules). JAK inhibitors are oral — no injection. They block intracellular JAK-STAT signaling.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic — JAKi</div>
            <p><strong>"Tofa-Bari-Upa-Filo wrench the JAKs"</strong><br/>
            <strong>Tofacitinib</strong> (JAK1/3) · <strong>Baricitinib</strong> (JAK1/2) · <strong>Upadacitinib</strong> (JAK1) · <strong>Filgotinib</strong> (JAK1, EU)</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#5C3D00'}}>
              <div className="drug-name">Tofacitinib</div>
              <div className="drug-class" style={{color:'#5C3D00'}}>JAK1/3 inhibitor</div>
              <ul>
                <li>Oral BID (or once daily XR)</li>
                <li>First oral JAKi approved (2012)</li>
                <li>FDA black box: VTE, MACE, malignancy (>50 yo, CVD risk)</li>
                <li>Approved UC, PsA, RA, JIA</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5C3D00'}}>RA</span>
                <span className="tag" style={{color:'#5C3D00'}}>PsA</span>
                <span className="tag" style={{color:'#5C3D00'}}>UC</span>
                <span className="tag" style={{color:'#5C3D00'}}>JIA</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#5C3D00'}}>
              <div className="drug-name">Baricitinib</div>
              <div className="drug-class" style={{color:'#5C3D00'}}>JAK1/2 inhibitor</div>
              <ul>
                <li>Oral once daily</li>
                <li>Approved RA, alopecia areata, atopic derm</li>
                <li>Same BBW as tofacitinib</li>
                <li>Used COVID-19 (ACTT-2 trial)</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5C3D00'}}>RA</span>
                <span className="tag" style={{color:'#5C3D00'}}>Alopecia Areata</span>
                <span className="tag" style={{color:'#5C3D00'}}>Atopic Derm</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#5C3D00'}}>
              <div className="drug-name">Upadacitinib</div>
              <div className="drug-class" style={{color:'#5C3D00'}}>Selective JAK1 inhibitor</div>
              <ul>
                <li>Oral once daily</li>
                <li>Broadest indications of any JAKi</li>
                <li>RA, PsA, AS, nr-axSpA, UC, CD, atopic derm</li>
                <li>Same BBW class warning</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#5C3D00'}}>RA</span>
                <span className="tag" style={{color:'#5C3D00'}}>PsA</span>
                <span className="tag" style={{color:'#5C3D00'}}>AS</span>
                <span className="tag" style={{color:'#5C3D00'}}>UC/CD</span>
                <span className="tag" style={{color:'#5C3D00'}}>Atopic Derm</span>
              </div>
            </div>
          </div>

          <div className="pearl">
            <div className="pearl-label">Pearl — JAKi Black Box Warning (2021 FDA Update)</div>
            <p>All JAK inhibitors carry a boxed warning for: <strong>serious infections</strong>, <strong>malignancy</strong>, <strong>MACE</strong>, and <strong>thrombosis</strong>. The ORAL Surveillance trial (tofacitinib vs TNFi) showed increased risk in patients ≥50 with ≥1 CV risk factor. Use cautiously in that population — prefer TNFi or biologics first.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 8 — COMPLEMENT (Basement)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--green)'}}>
          <span className="section-icon">🧫</span>
          <h2>Basement — Complement Inhibitors</h2>
        </div>

        <div className="card">
          <p>The basement is where the old plumbing lives — the complement system. These drugs are niche but life-saving for rare diseases.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic</div>
            <p><strong>"Ecu and Ravu block C5 in the basement."</strong><br/>
            <strong>Eculizumab</strong> + <strong>Ravulizumab</strong> — both anti-C5 mAbs → block MAC formation.</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#2D5A27'}}>
              <div className="drug-name">Eculizumab</div>
              <div className="drug-class" style={{color:'#2D5A27'}}>Anti-C5 mAb</div>
              <ul>
                <li>Blocks C5 cleavage → no MAC</li>
                <li>IV every 2 weeks (after loading)</li>
                <li>Approved: PNH, aHUS, gMG, NMOSD</li>
                <li>MUST vaccinate vs. Neisseria meningitidis</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#2D5A27'}}>PNH</span>
                <span className="tag" style={{color:'#2D5A27'}}>aHUS</span>
                <span className="tag" style={{color:'#2D5A27'}}>gMG</span>
                <span className="tag" style={{color:'#2D5A27'}}>NMOSD</span>
              </div>
            </div>

            <div className="drug-card" style={{borderColor:'#2D5A27'}}>
              <div className="drug-name">Ravulizumab</div>
              <div className="drug-class" style={{color:'#2D5A27'}}>Anti-C5 mAb (long-acting)</div>
              <ul>
                <li>Same mechanism as eculizumab</li>
                <li>IV every 8 weeks (longer dosing interval)</li>
                <li>PNH, aHUS, gMG, NMOSD</li>
                <li>Same meningococcal vaccine requirement</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#2D5A27'}}>PNH</span>
                <span className="tag" style={{color:'#2D5A27'}}>aHUS</span>
                <span className="tag" style={{color:'#2D5A27'}}>gMG</span>
              </div>
            </div>
          </div>

          <div className="pearl">
            <div className="pearl-label">Pearl — Meningococcal Mandate</div>
            <p>C5 blockade eliminates the terminal complement pathway — your only defense against encapsulated bacteria like <em>Neisseria meningitidis</em>. Vaccinate at least 2 weeks before starting (MenACWY + MenB). If urgent, start antibiotic prophylaxis and vaccinate simultaneously.</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 9 — PDE4 (Backyard)
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--control)'}}>
          <span className="section-icon">⛺</span>
          <h2>Backyard — PDE4 Inhibitor</h2>
        </div>

        <div className="card">
          <p>The backyard is outside the house — apremilast is a small molecule (oral), not a true biologic, but lives nearby.</p>

          <div className="mnemonic">
            <div className="mnemonic-label">Mnemonic</div>
            <p><strong>"Block PDE, let cAMP stay — Apremilast saves the day."</strong><br/>
            PDE4 breaks down cAMP. Blocking PDE4 → ↑cAMP → ↓TNF, IL-17, IL-23.</p>
          </div>

          <div className="drug-grid">
            <div className="drug-card" style={{borderColor:'#2C5240'}}>
              <div className="drug-name">Apremilast</div>
              <div className="drug-class" style={{color:'#2C5240'}}>PDE4 inhibitor (small molecule)</div>
              <ul>
                <li>Oral BID (titrate up over first week)</li>
                <li>No labs required — no immunosuppression concern</li>
                <li>GI side effects (N/D) common at initiation</li>
                <li>Weight loss — monitor BMI</li>
                <li>Approved: PsA, plaque Ps, Behcet's oral ulcers</li>
              </ul>
              <div className="tag-list">
                <span className="tag" style={{color:'#2C5240'}}>PsA</span>
                <span className="tag" style={{color:'#2C5240'}}>Plaque Ps</span>
                <span className="tag" style={{color:'#2C5240'}}>Behcet's</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SUMMARY PALACE MAP
        ═══════════════════════════════════════════════ */}
        <div className="section-header" style={{color:'var(--dark)', marginTop:'4rem'}}>
          <span className="section-icon">🏠</span>
          <h2>The Memory Palace Map</h2>
        </div>

        <div className="card">
          <p style={{marginBottom:'1.2rem'}}>One lap through the house = all biologics in memory.</p>
          <div className="summary-grid">
            <div className="summary-card">
              <div className="room-label">🛋️ Living Room (TNF)</div>
              <p>Every Inch Adds Considerable Growth — Eta, Infli, Ada, Certi, Goli</p>
            </div>
            <div className="summary-card">
              <div className="room-label">🍳 Kitchen (IL-6)</div>
              <p>Toci and Sari stir the soup — suppress CRP, treat GCA.</p>
            </div>
            <div className="summary-card">
              <div className="room-label">🚿 Bathroom (IL-17/23)</div>
              <p>Secu-Ixe-Bimek scrub skin. Guse-Rise-Tilde paint tiles. No IBD with IL-17!</p>
            </div>
            <div className="summary-card">
              <div className="room-label">🍼 Nursery (IL-1)</div>
              <p>Ana Can Riley — receptor block, IL-1β trap, decoy. For inflammasomopathies.</p>
            </div>
            <div className="summary-card">
              <div className="room-label">🧺 Laundry (B-cell)</div>
              <p>Ritu washes CD20. Belimumab targets BLyS in SLE.</p>
            </div>
            <div className="summary-card">
              <div className="room-label">💼 Office (T-cell)</div>
              <p>Abata-cept aborts costimulation. Best in CCP+ RA.</p>
            </div>
            <div className="summary-card">
              <div className="room-label">🔧 Garage (JAK)</div>
              <p>Tofa-Bari-Upa wrench the JAKs. Oral, black box, check CV risk.</p>
            </div>
            <div className="summary-card">
              <div className="room-label">🧫 Basement (C5)</div>
              <p>Ecu + Ravu block MAC. Vaccinate vs meningococcus first!</p>
            </div>
            <div className="summary-card">
              <div className="room-label">⛺ Backyard (PDE4)</div>
              <p>Block PDE, let cAMP stay — APREMILAST saves the day.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
