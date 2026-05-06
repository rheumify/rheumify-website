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

    .bio-content {
      background: var(--bg);
      color: var(--text);
      font-size: 18px;
      line-height: 1.75;
      font-family: 'EB Garamond', Georgia, serif;
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

    /* ── BREADCRUMB ── */
    .bio-breadcrumb {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: #9CA3AF;
      padding: 0.9rem 2rem;
    }
    .bio-breadcrumb a { color: #C4B5E0; text-decoration: none; }

    /* ── HERO ── */
    .hero {
      text-align: center;
      padding: 3.5rem 2rem 2.5rem;
      border-bottom: 1px solid var(--border);
    }
    .hero h1 {
      font-size: 2.6rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      margin-bottom: 0.3rem;
    }
    .hero .bio-subtitle {
      font-size: 1.35rem;
      font-style: italic;
      color: #C4B5E0;
    }

    /* ── INTRO BOX ── */
    .intro-box {
      max-width: 820px;
      margin: 2.5rem auto;
      padding: 2rem 2.5rem;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 10px;
    }
    .intro-box h2 {
      font-size: 1.35rem;
      font-weight: 600;
      margin-bottom: 0.8rem;
      color: var(--teal);
    }
    .intro-box p { color: var(--text-mid); margin-bottom: 0.6rem; }
    .intro-box p:last-child { margin-bottom: 0; }

    /* ── STEP NAV ── */
    .step-nav {
      max-width: 900px;
      margin: 2rem auto;
      padding: 0 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
    }
    .bio-step-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1.2rem;
      text-align: center;
      cursor: pointer;
      transition: border-color 0.2s, box-shadow 0.2s;
      text-decoration: none;
      color: var(--text);
    }
    .bio-step-card:hover { border-color: var(--teal); box-shadow: 0 2px 8px rgba(0,0,0,0.07); }
    .bio-step-card .step-num {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.3rem;
    }
    .bio-step-card .step-title { font-size: 1rem; font-weight: 600; }
    .bio-step-card .step-time {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      color: var(--text-light);
      margin-top: 0.3rem;
    }

    /* ── SECTION ── */
    .content-section {
      max-width: 900px;
      margin: 3rem auto;
      padding: 0 1.5rem;
    }
    .section-divider {
      border: none;
      border-top: 2px solid var(--border);
      margin: 3.5rem auto;
      max-width: 900px;
    }

    .step-header {
      display: flex;
      align-items: baseline;
      gap: 0.8rem;
      margin-bottom: 1.5rem;
    }
    .step-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      flex-shrink: 0;
    }
    .step-header h2 {
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: -0.01em;
    }

    /* ── MNEMONIC BOX ── */
    .mnemonic {
      background: var(--mnemonic-bg);
      border-left: 4px solid var(--mnemonic-border);
      border-radius: 0 8px 8px 0;
      padding: 1rem 1.4rem;
      margin: 1.2rem 0;
      font-style: italic;
      font-size: 1.05rem;
      color: var(--text);
    }
    .mnemonic strong { font-style: normal; color: var(--red); }

    /* ── PEARL BOX ── */
    .pearl {
      background: var(--pearl-bg);
      border-left: 4px solid var(--pearl-border);
      border-radius: 0 8px 8px 0;
      padding: 0.9rem 1.3rem;
      margin: 0.8rem 0;
      font-size: 0.97rem;
      color: var(--text-mid);
    }
    .pearl strong { color: var(--ice); }

    /* ── MECHANISM BOX ── */
    .mechanism-box {
      background: #F0F4F0;
      border: 1px solid #B5CDB5;
      border-radius: 8px;
      padding: 1.2rem 1.5rem;
      margin: 1.2rem 0;
      font-size: 0.97rem;
    }
    .mechanism-box h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--control);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    /* ── ROOM SECTION ── */
    .room {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 2rem;
      margin: 2rem 0;
    }
    .room-header {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      margin-bottom: 0.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border);
    }
    .room-emoji { font-size: 1.6rem; line-height: 1; }
    .room-header h3 { font-size: 1.4rem; font-weight: 600; }
    .room-intro { color: var(--text-mid); margin: 1rem 0 1.2rem; font-size: 1rem; }

    /* ── DRUG GRID ── */
    .drug-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.2rem;
      margin-top: 1.2rem;
    }
    .drug-grid.single { grid-template-columns: 1fr; }
    .drug-grid.two-col { grid-template-columns: repeat(2, 1fr); }

    .drug-card {
      background: var(--card-alt);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.3rem 1.5rem;
    }
    .drug-card h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }
    .drug-card .brand {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      color: var(--text-light);
      margin-bottom: 0.7rem;
    }
    .drug-card dl { font-size: 0.95rem; }
    .drug-card dt {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-light);
      margin-top: 0.6rem;
    }
    .drug-card dd { color: var(--text-mid); margin-left: 0; }
    .drug-card .card-mnemonic {
      margin-top: 0.8rem;
      padding: 0.6rem 0.9rem;
      background: var(--mnemonic-bg);
      border-left: 3px solid var(--mnemonic-border);
      border-radius: 0 6px 6px 0;
      font-style: italic;
      font-size: 0.93rem;
      color: var(--red);
    }
    .drug-card .card-pearl {
      margin-top: 0.8rem;
      padding: 0.6rem 0.9rem;
      background: var(--pearl-bg);
      border-left: 3px solid var(--pearl-border);
      border-radius: 0 6px 6px 0;
      font-size: 0.88rem;
      color: var(--text-mid);
    }

    /* ── BCELL WIDE CARD ── */
    .drug-card.wide {
      grid-column: 1 / -1;
    }

    /* ── TABLE ── */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
      font-size: 0.95rem;
    }
    th {
      font-family: 'Inter', sans-serif;
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-light);
      padding: 0.5rem 0.8rem;
      text-align: left;
      border-bottom: 2px solid var(--border);
    }
    td {
      padding: 0.55rem 0.8rem;
      border-bottom: 1px solid var(--border);
      color: var(--text-mid);
      vertical-align: top;
    }
    td:first-child { font-weight: 500; color: var(--text); }
    tr:last-child td { border-bottom: none; }

    /* ── DOSING CALLOUT ── */
    .dosing-callout {
      background: #F8F4EE;
      border: 1px solid var(--mnemonic-border);
      border-radius: 8px;
      padding: 1rem 1.4rem;
      margin: 1.2rem 0;
      font-size: 0.97rem;
    }
    .dosing-callout strong { color: var(--electric); }

    /* ── SUMMARY SECTION ── */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }
    .summary-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.1rem 1.3rem;
    }
    .summary-card .room-label {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-light);
      margin-bottom: 0.4rem;
    }
    .summary-card p { font-style: normal; font-size: 0.97rem; color: var(--text-mid); }

    /* ── BADGE ── */
    .badge {
      display: inline-block;
      font-family: 'Inter', sans-serif;
      font-size: 0.72rem;
      font-weight: 600;
      padding: 0.2em 0.6em;
      border-radius: 4px;
      margin-left: 0.4rem;
      vertical-align: middle;
    }
    .badge.oral { background: #E8F4E8; color: #2D6A2D; }
    .badge.sc { background: #E8EEF8; color: #1D3A7A; }
    .badge.iv { background: #F8EAE8; color: #7A1D1D; }
    .badge.pregnancy { background: #FFF3E0; color: #7A4500; }

    /* ── MECHANISM COMPARISON ── */
    .compare-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin: 1.2rem 0;
    }
    .compare-item {
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid var(--border);
      font-size: 0.93rem;
    }
    .compare-item h5 {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .compare-item.jak { background: #FDFAF0; border-color: #C8A000; }
    .compare-item.jak h5 { color: #6B5000; }
    .compare-item.tyk { background: #F0FAF5; border-color: #4A9A70; }
    .compare-item.tyk h5 { color: #1D5C3A; }

    /* ── FOOTER ── */
    footer {
      text-align: center;
      padding: 2.5rem 1.5rem;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: var(--text-light);
      border-top: 1px solid var(--border);
      margin-top: 4rem;
    }

    @media (max-width: 640px) {
      .drug-grid.two-col { grid-template-columns: 1fr; }
      .compare-box { grid-template-columns: 1fr; }
      .hero h1 { font-size: 1.9rem; }
    }
      `}</style>

<div className="bio-breadcrumb">
  <a href="#">Home</a> &rsaquo; <a href="#">Learning</a> &rsaquo; Biologics
</div>


<div className="hero">
  <h1>Rheumatology Biologics</h1>
  <p className="bio-subtitle">&ldquo;The Memory Palace&rdquo;</p>
</div>


<div className="bio-content">

<div className="intro-box">
  <h2>The Analogy</h2>
  <p>This guide uses a <strong>memory palace</strong> &mdash; a technique where you walk through a familiar space and place what you need to remember in specific locations. Each room in the house maps to a drug class. Each fixture maps to a specific drug or mechanism.</p>
  <p>Start outside. There&rsquo;s a garden hose spraying water onto the lawn. The water is cytokines. The grass is the receptor on the cell. Walk through the front door, into the living room, the kitchen, B-cell death row, the garage, and out to the backyard. By the time you&rsquo;re done, every biologic has a home.</p>
  <p><em>Pro tip &mdash; make it your house. Walk through your own place (or a friend&rsquo;s house, your childhood home) either physically or mentally. The weirder the image, the stickier the memory.</em></p>
</div>


<div className="step-nav">
  <a className="bio-step-card" href="#step-1">
    <div className="step-num">Step 1 &middot; 5 min</div>
    <div className="step-title">Drug Suffixes</div>
    <div className="step-time">The Garden Hose</div>
  </a>
  <a className="bio-step-card" href="#step-2">
    <div className="step-num">Step 2 &middot; 5 min</div>
    <div className="step-title">WHO Naming</div>
    <div className="step-time">The Labeling System</div>
  </a>
  <a className="bio-step-card" href="#step-3">
    <div className="step-num">Step 3 &middot; 5 min</div>
    <div className="step-title">Name Cheat Codes</div>
    <div className="step-time">Hidden Gems</div>
  </a>
  <a className="bio-step-card" href="#step-4">
    <div className="step-num">Step 4 &middot; 15 min</div>
    <div className="step-title">Drug-by-Drug</div>
    <div className="step-time">The House Tour</div>
  </a>
</div>

<hr className="section-divider" />


<div className="content-section" id="step-1">
  <div className="step-header">
    <span className="step-label">Step 1</span>
    <h2>The Garden Hose &mdash; <em>&ldquo;What Kind of Fix Is It?&rdquo;</em></h2>
  </div>

  <p>The grass is the receptor on the cell. Three ways to stop the water from hitting the grass:</p>

        <img src="https://www.rheumify.org/images/biologics/garden-hose.svg" alt="Garden hose analogy — MABs soak up stream, CEPTs catch runoff, INIBs clog hose" style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', display: 'block', margin: '1.5rem auto' }} />

  <table>
    <thead>
      <tr><th>Suffix</th><th>Type</th><th>How It Works</th></tr>
    </thead>
    <tbody>
      <tr><td>-mab</td><td>Monoclonal antibody</td><td>Goes straight for the source &mdash; soaks up the stream before it hits the grass.</td></tr>
      <tr><td>-cept</td><td>Receptor fusion protein</td><td>Holds a bucket between the nozzle and the grass &mdash; a decoy that catches the water.</td></tr>
      <tr><td>-inib</td><td>Small molecule inhibitor</td><td>Clogs the hose from the inside &mdash; the flow stops, but you can&rsquo;t see why from outside.</td></tr>
    </tbody>
  </table>

  <div className="mnemonic"><strong>MABs go straight for the source, CEPTs catch the runoff, INIBs clog the course.</strong></div>

  <p>MABs and CEPTs work <strong>outside the cell</strong> &mdash; they intercept cytokines in the bloodstream or synovial space. INIBs are small enough to get <strong>inside the cell</strong> and block signaling pathways (like JAK-STAT). The hose looks fine from the outside, but something&rsquo;s clogged inside.</p>
</div>

<hr className="section-divider" />


<div className="content-section" id="step-2">
  <div className="step-header">
    <span className="step-label">Step 2</span>
    <h2>The Labeling System &mdash; <em>&ldquo;Read the Name, Know the Fix&rdquo;</em></h2>
  </div>

  <p>Every biologic has a name stamped on it by the WHO. The ending before <em>-mab</em> tells you how human the antibody is. More mouse protein = more immunogenicity = more likely you&rsquo;ll need methotrexate backup.</p>

  <table>
    <thead>
      <tr><th>Substem</th><th>Origin</th><th>Mnemonic</th></tr>
    </thead>
    <tbody>
      <tr><td>-o-mab</td><td>Fully mouse</td><td>&ldquo;O no, it&rsquo;s all <strong>mO</strong>use!&rdquo;</td></tr>
      <tr><td>-xi-mab</td><td>Chimeric (mixed)</td><td>&ldquo;mi<strong>XI</strong>-mab = a MI<strong>X</strong> of mouse and man&rdquo;</td></tr>
      <tr><td>-zu-mab</td><td>Humanized</td><td>&ldquo;<strong>ZU</strong>-mab = almost human, just a <strong>ZU</strong>-spicion of mouse&rdquo;</td></tr>
      <tr><td>-u-mab</td><td>Fully human</td><td>&ldquo;<strong>U</strong>-mab = it&rsquo;s all h<strong>U</strong>man, it&rsquo;s all U&rdquo;</td></tr>
    </tbody>
  </table>

  <div className="mnemonic"><strong>O is mOuse, X is miXed, ZU is humanized betwixt, U is hUman &mdash; least immunogenic in the mix.</strong></div>

  <div className="pearl"><strong>Why this matters clinically:</strong> Chimeric (-ximab) antibodies are most immunogenic &rarr; anti-drug antibodies form &rarr; loss of efficacy over time. This is why infliximab needs methotrexate as a co-pilot. Fully human (-umab) antibodies are least immunogenic &rarr; can often be used as monotherapy.</div>
</div>

<hr className="section-divider" />


<div className="content-section" id="step-3">
  <div className="step-header">
    <span className="step-label">Step 3</span>
    <h2>Name Cheat Codes &mdash; <em>&ldquo;Free Points in the Syllables&rdquo;</em></h2>
  </div>

  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>Hidden Gems: Drug Names That Teach Themselves</h3>
  <table>
    <thead>
      <tr><th>Drug</th><th>What&rsquo;s Hiding</th><th>Mnemonic</th></tr>
    </thead>
    <tbody>
      <tr><td>HUMIRA</td><td><strong>HU</strong>man <strong>M</strong>onoclonal antibody <strong>I</strong>n <strong>R</strong>heumatoid <strong>A</strong>rthritis</td><td>The brand name IS the mechanism + indication</td></tr>
      <tr><td>Anakinra</td><td>Ana-<strong>KIN</strong>-RA = <strong>AN</strong>tagonist of interleu<strong>KIN</strong> Receptor Alpha/beta</td><td>The drug IS the body&rsquo;s own IL-1Ra, cloned</td></tr>
      <tr><td>Anifrolumab</td><td>&ldquo;-fro-&rdquo; = inter<strong>FRO</strong>n (WHO infix)</td><td>AN-ti-inter<strong>FRO</strong>-n-lu-mab &mdash; the target is in the middle</td></tr>
      <tr><td>Benlysta</td><td><strong>B</strong>-lymphocyte stimulator antibody</td><td>&ldquo;Ben<strong>LYSTA</strong> &mdash; the B-LySt Antibody.&rdquo;</td></tr>
    </tbody>
  </table>

</div>

<hr className="section-divider" />


<div className="content-section" id="step-4">
  <div className="step-header">
    <span className="step-label">Step 4</span>
    <h2>The House Tour &mdash; <em>&ldquo;Room by Room, Drug by Drug&rdquo;</em></h2>
  </div>
  <p style={{ color: 'var(--text-mid)', marginBottom: '0.5rem' }}>Now you have the tools and the cheat codes. Time to walk through the house. Each room maps to a drug class. For each drug, notice how the name confirms what you already know from Steps 1&ndash;3.</p>
</div>


<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">🚨</span>
      <h3>The Front Door &mdash; IL-1 Inhibitors</h3>
    </div>
    <p className="room-intro">IL-1 is the front door &mdash; the first signal that kicks off autoinflammatory fires (gout, FMF, CAPS, Still&rsquo;s disease). These drugs guard the door.</p>
          <img src="https://www.rheumify.org/images/biologics/front-door-bouncers.svg" alt="IL-1 Inhibitors — Two bouncers at the front door" style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', display: 'block', margin: '1rem auto 1.2rem' }} />
    <div className="mnemonic"><strong>&ldquo;ANA blocks ALL IL-ONE at the door (alpha and beta). CANA? CAN only block beta, nothing more.&rdquo;</strong></div>

    <div className="drug-grid">
      <div className="drug-card">
        <h4>Anakinra <span className="badge sc">SC</span></h4>
        <div className="brand">Kineret</div>
        <dl>
          <dt>Mechanism</dt><dd>IL-1 receptor antagonist (recombinant IL-1Ra). Blocks both alpha and beta.</dd>
          <dt>Dosing</dt><dd>100 mg SC daily</dd>
          <dt>FDA</dt><dd>RA (FDA-approved, but rarely used clinically due to daily SC injections), CAPS (NOMID). Also used for gout flares, Still&rsquo;s disease, FMF, recurrent pericarditis.</dd>
        </dl>
        <div className="card-pearl">Injection site reactions common. Short half-life = quick washout if infection develops.</div>
      </div>

      <div className="drug-card">
        <h4>Canakinumab <span className="badge sc">SC</span></h4>
        <div className="brand">Ilaris</div>
        <dl>
          <dt>Mechanism</dt><dd>Monoclonal antibody against IL-1&beta; specifically.</dd>
          <dt>Dosing</dt><dd>150 mg SC every 8 weeks (varies by indication)</dd>
          <dt>FDA</dt><dd>CAPS, SJIA, TRAPS, HIDS/MKD, FMF, gout flare prevention.</dd>
        </dl>
        <div className="card-pearl">CANTOS trial: reduced cardiovascular events &mdash; board-testable.</div>
      </div>

      <div className="drug-card">
        <h4>Rilonacept <span className="badge sc">SC</span></h4>
        <div className="brand">Arcalyst</div>
        <dl>
          <dt>Mechanism</dt><dd>Soluble decoy receptor (&ldquo;IL-1 Trap&rdquo;) &mdash; the <em>-cept</em> tells you it&rsquo;s a decoy. Catches both IL-1&alpha; and IL-1&beta;.</dd>
          <dt>Dosing</dt><dd>320 mg SC loading, then 160 mg SC weekly</dd>
          <dt>FDA</dt><dd>CAPS and recurrent pericarditis.</dd>
        </dl>
      </div>
    </div>

    <div className="dosing-callout">
      <strong>IL-1 Dosing rhythm:</strong> &ldquo;ANA every DAY, RILO every WEEK, CANA every EIGHT &mdash; the IL-1 triple feat.&rdquo;
    </div>
  </div>
</div>


<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">🌡️</span>
      <h3>The Thermostat &mdash; IL-6 Inhibitors</h3>
    </div>
    <p className="room-intro">IL-6 controls the thermostat &mdash; it drives fever and CRP. Block IL-6 and the thermostat reads normal. But the house is still burning. <strong>That&rsquo;s the board trap:</strong> the smoke alarm (CRP) goes silent, but the fire (infection) is still raging.</p>
    <div className="mnemonic"><strong>&ldquo;TOCI TOUCHES the SIX receptor &mdash; Giant Cell&rsquo;s protector. SARI wraps SIX &mdash; same receptor, different fix.&rdquo;</strong></div>

    <div className="drug-grid">
      <div className="drug-card">
        <h4>Tocilizumab <span className="badge iv">IV</span><span className="badge sc">SC</span></h4>
        <div className="brand">Actemra</div>
        <dl>
          <dt>Mechanism</dt><dd>Humanized monoclonal antibody against the IL-6 receptor (IL-6R). Blocks IL-6 signaling at the receptor level. IV or SC.</dd>
          <dt>Dosing</dt><dd>IV 4&ndash;8 mg/kg every 4 weeks; SC 162 mg weekly or every 2 weeks</dd>
          <dt>FDA</dt><dd>RA, GCA, SJIA, PJIA, CRS (CAR-T), SSc-ILD.</dd>
        </dl>
        <div className="card-pearl">First-line for GCA (GiACTA trial). Monitor lipids. Risk of GI perforation. Masks infection signs &mdash; CRP stays low.</div>
      </div>

      <div className="drug-card">
        <h4>Sarilumab <span className="badge sc">SC</span></h4>
        <div className="brand">Kevzara</div>
        <dl>
          <dt>Mechanism</dt><dd>Fully human monoclonal antibody against the IL-6 receptor (IL-6R). Binds IL-6R with higher affinity than tocilizumab. SC only.</dd>
          <dt>Dosing</dt><dd>200 mg SC every 2 weeks</dd>
          <dt>FDA</dt><dd>RA, PMR, polyarticular JIA.</dd>
        </dl>
        <div className="card-pearl">Fully human (-umab) vs. tocilizumab&rsquo;s humanized (-zumab) = potentially lower immunogenicity. Higher receptor-binding affinity than tocilizumab. SC only &mdash; no IV option.</div>
      </div>
    </div>
  </div>
</div>


<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">📺</span>
      <h3>The TV &mdash; IL-17 &amp; IL-12/23 Inhibitors</h3>
    </div>
    <p className="room-intro">IL-17 drives inflammation in the skin and spine. Think of it as an R-rated channel &mdash; you must be SEVENTEEN to watch.</p>
          <img src="https://www.rheumify.org/images/biologics/tv-il17-security.svg" alt="IL-17 Inhibitors — TV with security guard checking IDs at Channel 17" style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', display: 'block', margin: '1rem auto 1.2rem' }} />
    <div className="mnemonic"><strong>&ldquo;SECU-rity checks IDs at SEVENTEEN &mdash; but Crohn&rsquo;s gets cancelled from the screen.&rdquo;</strong></div>

    <p style={{ margin: '0.8rem 0', fontSize: '0.97rem', color: 'var(--text-mid)' }}>
      Secukinumab and ixekizumab target <strong>IL-17A</strong> only. Bimekizumab targets <strong>both IL-17A and IL-17F</strong>.
    </p>
    <div className="mnemonic"><strong>&ldquo;BIME means BOTH &mdash; A and F, get out. Two subtypes, one drug, total knockout.&rdquo;</strong></div>

    <div className="drug-grid">
      <div className="drug-card">
        <h4>Secukinumab <span className="badge sc">SC</span></h4>
        <div className="brand">Cosentyx</div>
        <dl>
          <dt>Target</dt><dd>IL-17A</dd>
          <dt>Dosing</dt><dd>150&ndash;300 mg SC; loading dose varies, then every 4 weeks</dd>
          <dt>FDA</dt><dd>Plaque psoriasis, PsA, AS, nr-axSpA, HS.</dd>
        </dl>
        <div className="card-pearl">Watch for Candida infections. Avoid in IBD (can worsen Crohn&rsquo;s).</div>
      </div>

      <div className="drug-card">
        <h4>Ixekizumab <span className="badge sc">SC</span></h4>
        <div className="brand">Taltz</div>
        <dl>
          <dt>Target</dt><dd>IL-17A</dd>
          <dt>Dosing</dt><dd>160 mg SC loading, then 80 mg SC every 2&ndash;4 weeks</dd>
          <dt>FDA</dt><dd>Plaque psoriasis, PsA, AS, nr-axSpA.</dd>
        </dl>
        <div className="card-pearl">Same IL-17A target as secukinumab. Watch for Candida and IBD exacerbation.</div>
      </div>

      <div className="drug-card">
        <h4>Bimekizumab <span className="badge sc">SC</span></h4>
        <div className="brand">Bimzelx</div>
        <dl>
          <dt>Target</dt><dd>IL-17A <em>and</em> IL-17F</dd>
          <dt>Dosing</dt><dd>320 mg SC every 4 weeks initially, then every 4&ndash;8 weeks</dd>
          <dt>FDA</dt><dd>Plaque psoriasis, PsA, AS, nr-axSpA.</dd>
        </dl>
        <div className="card-pearl">Dual IL-17A/F inhibition. Higher rates of oral candidiasis. Avoid in IBD (class effect).</div>
      </div>
    </div>

    <h4 style={{ margin: '1.5rem 0 0.6rem', fontSize: '1.1rem' }}>IL-12/23 and IL-23 Inhibitors</h4>
    <div className="mnemonic"><strong>&ldquo;USTE blocks the USUAL TWO &mdash; twelve AND twenty-three are through. GUSEL and RISAN are precise &mdash; only twenty-three, that&rsquo;s their device.&rdquo;</strong></div>

    <div className="drug-grid">
      <div className="drug-card">
        <h4>Ustekinumab <span className="badge sc">SC</span><span className="badge iv">IV loading</span></h4>
        <div className="brand">Stelara</div>
        <dl>
          <dt>Target</dt><dd>p40 subunit shared by IL-12 and IL-23</dd>
          <dt>Dosing</dt><dd>Weight-based IV loading, then 90 mg SC every 8 or 12 weeks</dd>
          <dt>FDA</dt><dd>Plaque psoriasis, PsA, Crohn&rsquo;s, UC.</dd>
        </dl>
        <div className="card-pearl">Works for IBD &mdash; unlike IL-17 inhibitors. Excellent safety profile.</div>
      </div>

      <div className="drug-card">
        <h4>Guselkumab <span className="badge sc">SC</span></h4>
        <div className="brand">Tremfya</div>
        <dl>
          <dt>Target</dt><dd>p19 (IL-23 selective)</dd>
          <dt>Dosing</dt><dd>100 mg SC weeks 0 and 4, then every 8 weeks</dd>
          <dt>FDA</dt><dd>Plaque psoriasis, PsA, AS, nr-axSpA.</dd>
        </dl>
      </div>

      <div className="drug-card">
        <h4>Risankizumab <span className="badge sc">SC</span></h4>
        <div className="brand">Skyrizi</div>
        <dl>
          <dt>Target</dt><dd>p19 (IL-23 selective)</dd>
          <dt>Dosing</dt><dd>150 mg SC weeks 0 and 4, then every 12 weeks; IV loading for Crohn&rsquo;s</dd>
          <dt>FDA</dt><dd>Plaque psoriasis, PsA, Crohn&rsquo;s disease, UC.</dd>
        </dl>
      </div>
    </div>
  </div>
</div>


<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">❄️</span>
      <h3>The Kitchen Freezer &mdash; TNF Inhibitors</h3>
    </div>
    <p className="room-intro">
      TNF is the biggest flood in the house &mdash; the most cytokine, the most damage. Five drugs stop it. But notice <em>where</em> they live: the kitchen freezer. That&rsquo;s not random.
    </p>

    <div className="mechanism-box">
      <h4>🧊 Why the Fridge? &mdash; Biology Meets Memory</h4>
      <p>These are <strong>biologics</strong> &mdash; large protein molecules that are temperature-sensitive and must be refrigerated. You can&rsquo;t put them in a cabinet like a pill. They live in the fridge because they <em>are</em> proteins.</p>
      <p style={{ marginTop: '0.6rem' }}>And they work <strong>extracellularly</strong> &mdash; out in the open, in the synovial space and bloodstream, intercepting TNF-alpha before it can dock on its receptor. Compare that to the garage: JAK inhibitors are small molecules that sneak inside the cell and cut the wiring. <em>These never get that far.</em> They freeze the flood before it even reaches the door.</p>
      <p style={{ marginTop: '0.6rem', fontStyle: 'italic', color: 'var(--text-light)' }}>Biologics in the fridge. Small molecules in the cabinet. That&rsquo;s the divide.</p>
    </div>

    <div className="mnemonic"><strong>&ldquo;Five on ICE &mdash; biologics, temperature-sensitive proteins that intercept TNF&rsquo;s call before it reaches the cell.&rdquo;</strong></div>

    <div className="drug-grid two-col">
      <div className="drug-card">
        <h4>Adalimumab <span className="badge sc">SC</span></h4>
        <div className="brand">Humira</div>
        <dl>
          <dt>Mechanism</dt><dd>Fully human monoclonal antibody against TNF-alpha.</dd>
          <dt>Name cheat</dt><dd>HUMIRA = <strong>HU</strong>man <strong>M</strong>onoclonal antibody <strong>I</strong>n <strong>R</strong>heumatoid <strong>A</strong>rthritis</dd>
          <dt>Dosing</dt><dd>40 mg SC every 2 weeks</dd>
          <dt>FDA</dt><dd>RA, JIA, PsA, AS, plaque psoriasis, Crohn&rsquo;s, UC, uveitis, HS.</dd>
        </dl>
        <div className="card-pearl">Most indications of any biologic. Now has biosimilars galore.</div>
      </div>

      <div className="drug-card">
        <h4>Infliximab <span className="badge iv">IV</span></h4>
        <div className="brand">Remicade</div>
        <dl>
          <dt>Mechanism</dt><dd>Chimeric monoclonal antibody. IV only.</dd>
          <dt>Dosing</dt><dd>3&ndash;10 mg/kg IV; induction at weeks 0, 2, 6, then every 4&ndash;8 weeks</dd>
          <dt>FDA</dt><dd>RA, Crohn&rsquo;s, UC, AS, PsA, plaque psoriasis.</dd>
        </dl>
        <div className="card-pearl">Chimeric (-ximab) = higher immunogenicity &rarr; pair with methotrexate. IV only. Check for latent TB before ALL TNF inhibitors. Can trigger drug-induced lupus.</div>
      </div>

      <div className="drug-card">
        <h4>Etanercept <span className="badge sc">SC</span></h4>
        <div className="brand">Enbrel</div>
        <dl>
          <dt>Mechanism</dt><dd>Soluble TNF receptor fusion protein (decoy receptor). The ONLY <em>-cept</em> among TNF blockers.</dd>
          <dt>Dosing</dt><dd>50 mg SC weekly</dd>
          <dt>FDA</dt><dd>RA, JIA, PsA, AS, plaque psoriasis.</dd>
        </dl>
        <div className="card-mnemonic">&ldquo;The CEPT can CATCH but can&rsquo;t CROHN&rsquo;S &mdash; leave granulomas alone.&rdquo;</div>
        <div className="card-pearl">Does NOT work for IBD, granulomatous diseases, or uveitis. Shorter half-life.</div>
      </div>

      <div className="drug-card">
        <h4>Certolizumab Pegol <span className="badge sc">SC</span> <span className="badge pregnancy">&#10003; Pregnancy</span></h4>
        <div className="brand">Cimzia</div>
        <dl>
          <dt>Mechanism</dt><dd>PEGylated Fab fragment &mdash; NO Fc portion. Cannot cross the placenta.</dd>
          <dt>Dosing</dt><dd>400 mg SC weeks 0, 2, 4; then 200 mg every 2 weeks (or 400 mg every 4 weeks)</dd>
          <dt>FDA</dt><dd>RA, Crohn&rsquo;s, PsA, AS, nr-axSpA, plaque psoriasis.</dd>
        </dl>
        <div className="card-mnemonic">&ldquo;CERTolizumab is CERTified PEG-nant friendly.&rdquo;</div>
        <div className="card-pearl">The only TNF inhibitor that does NOT cross the placenta.</div>
      </div>

      <div className="drug-card">
        <h4>Golimumab <span className="badge sc">SC</span><span className="badge iv">IV option</span></h4>
        <div className="brand">Simponi / Simponi Aria</div>
        <dl>
          <dt>Mechanism</dt><dd>Fully human monoclonal antibody. Monthly SC dosing.</dd>
          <dt>Dosing</dt><dd>Simponi 50 mg SC monthly; Simponi Aria 2 mg/kg IV every 8 weeks</dd>
          <dt>FDA</dt><dd>RA, PsA, AS, UC.</dd>
        </dl>
        <div className="card-mnemonic">&ldquo;GOLImumab &mdash; GO once a month, Live your life.&rdquo;</div>
      </div>
    </div>
  </div>
</div>


<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">💀</span>
      <h3>B-Cell Death Row</h3>
    </div>
    <p className="room-intro">B-cell death row, five ways to go. These drugs target B cells through depletion or starvation &mdash; each a different way to eliminate rogue B cells driving autoimmunity.</p>

    <div className="mnemonic">
      <strong>&ldquo;B-cell death row, five ways to go:</strong><br/>
      RITUXIMAB &mdash; CD20&rsquo;s last RITE.<br/>
      OBI &mdash; the OBITUARY, same target, deadlier bite.<br/>
      INE-B &mdash; INEVITABLE, NINETEEN swept clean.<br/>
      BELI &mdash; BELLY-empty, no BLyS to feed the machine.<br/>
      <strong>CAR-T &mdash; your own cells, reprogrammed and mean.&rdquo;</strong>
    </div>

    
    <div className="drug-grid two-col" style={{ marginTop: '1.2rem' }}>
      <div className="drug-card">
        <h4>Rituximab <span className="badge iv">IV</span></h4>
        <div className="brand">Rituxan</div>
        <dl>
          <dt>Target</dt><dd>CD20 on B cells</dd>
          <dt>Type</dt><dd>Type I anti-CD20 (chimeric IgG1). Kills via CDC and ADCC.</dd>
          <dt>Key uses</dt><dd>RA (after TNF failure), ANCA vasculitis (GPA/MPA), pemphigus vulgaris, SLE (second-line), IgG4-RD (off-label).</dd>
        </dl>
        <div className="card-mnemonic">RITUXIMAB = CD20&rsquo;s last RITE. A ritualistic elimination of B cells bearing CD20.</div>
        <div className="card-pearl">Check hepatitis B before starting &mdash; risk of reactivation. Monitor immunoglobulins with repeated cycles.</div>
      </div>

      <div className="drug-card">
        <h4>Obinutuzumab <span className="badge iv">IV</span></h4>
        <div className="brand">Gazyva</div>
        <dl>
          <dt>Target</dt><dd>CD20 (glycoengineered, more potent than rituximab)</dd>
          <dt>Type</dt><dd>Type II anti-CD20 (humanized). Enhanced direct cell death + ADCC; less CDC than rituximab.</dd>
          <dt>Key uses</dt><dd>Lupus nephritis (FDA-approved Oct 2025). Originally approved in CLL/lymphoma.</dd>
        </dl>
        <div className="card-mnemonic">OBI writes the OBITUARY &mdash; same target, deadlier bite.</div>
        <div className="card-pearl">REGENCY Phase III: 46.4% complete renal response on MMF + glucocorticoids. Only anti-CD20 mAb to show complete renal response benefit in a Phase III lupus nephritis trial. Administered twice yearly after 4 initial doses in year one.</div>
      </div>

      <div className="drug-card">
        <h4>Inebilizumab <span className="badge iv">IV</span></h4>
        <div className="brand">Uplizna</div>
        <dl>
          <dt>Target</dt><dd>CD19 (broader than CD20 &mdash; catches plasmablasts and some plasma cells)</dd>
          <dt>Key uses</dt><dd>IgG4-related disease (FDA-approved Apr 2025, MITIGATE trial &mdash; first approved treatment for IgG4-RD).</dd>
        </dl>
        <div className="card-mnemonic">INE-B = INEVITABLE, NINETEEN swept clean.</div>
        <div className="card-pearl">CD19 is expressed earlier and later in B-cell development than CD20 &mdash; inebilizumab catches cells that rituximab misses, including antibody-secreting plasmablasts. MITIGATE trial: 87% reduction in IgG4-RD flare risk.</div>
      </div>

      <div className="drug-card">
        <h4>Belimumab <span className="badge sc">SC</span><span className="badge iv">IV</span></h4>
        <div className="brand">Benlysta</div>
        <dl>
          <dt>Target</dt><dd>BLyS / BAFF (B-lymphocyte stimulator) &mdash; starves B cells rather than killing them directly.</dd>
          <dt>Key uses</dt><dd>SLE (first drug approved for lupus in 50+ years), lupus nephritis (BLISS-LN trial).</dd>
        </dl>
        <div className="card-mnemonic">BELI = BELLY-empty &mdash; no BLyS to feed the machine.</div>
        <div className="card-pearl">Doesn&rsquo;t deplete B cells directly &mdash; blocks the survival signal. Takes months for full effect. Often combined with standard therapy.</div>
      </div>

      <div className="drug-card wide">
        <h4>CAR-T Cell Therapy</h4>
        <div className="brand">Chimeric Antigen Receptor T cells &mdash; Experimental in Autoimmune Disease</div>
        <dl>
          <dt>Target</dt><dd>CD19 (via patient&rsquo;s own reprogrammed T cells)</dd>
          <dt>Mechanism</dt><dd>T cells harvested, engineered with a CD19-targeting receptor, and reinfused. A one-time <em>living therapy</em> &mdash; the reprogrammed T cells persist and hunt B cells.</dd>
          <dt>Key uses</dt><dd>Mackensen et al. (NEJM 2022): deep remission in SLE, myositis, and systemic sclerosis. Active trials in lupus nephritis, ANCA vasculitis, and more.</dd>
        </dl>
        <div className="card-mnemonic">CAR-T = your own cells, reprogrammed and mean.</div>
        <div className="card-pearl">Cytokine release syndrome (CRS) is the major risk. Unlike conventional drugs, this is potentially curative &mdash; drug-free remissions reported lasting 1&ndash;2+ years.</div>
      </div>
    </div>
  </div>
</div>


<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">⚡</span>
      <h3>The Garage &mdash; JAK Inhibitors (The Electrical Panel)</h3>
    </div>
    <p className="room-intro">JAK inhibitors sneak into the electrical panel and cut the wiring &mdash; the intracellular signaling system that tells everything to turn on. Unlike the biologics in the fridge (which work outside the cell), JAKi are small molecules that penetrate the cell and interrupt signaling at the source.</p>
          <img src="https://www.rheumify.org/images/biologics/jak-electrical-panel.svg" alt="JAK Inhibitors Electrical Panel — breaker switches showing selectivity" style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', display: 'block', margin: '1rem auto 1.2rem' }} />
    <div className="mnemonic"><strong>&ldquo;TOFA&rsquo;s a TOTAL blackout, BARI BARS the first two, UPA blocks just one &mdash; JAK1, that&rsquo;s you.&rdquo;</strong></div>

    <div className="drug-grid">
      <div className="drug-card">
        <h4>Tofacitinib <span className="badge oral">Oral</span></h4>
        <div className="brand">Xeljanz</div>
        <dl>
          <dt>Selectivity</dt><dd>JAK1 + JAK3 (&gt; JAK2). TOFA = TOTAL blackout.</dd>
          <dt>Dosing</dt><dd>5 mg PO twice daily (or 11 mg XR once daily)</dd>
          <dt>FDA</dt><dd>RA, PsA, UC, JIA, AS.</dd>
        </dl>
        <div className="card-pearl">First FDA-approved JAK inhibitor (2012). Boxed warning: increased risk of MACE, VTE, malignancy (ORAL Surveillance trial). Applies as a class warning to all JAKi.</div>
      </div>

      <div className="drug-card">
        <h4>Baricitinib <span className="badge oral">Oral</span></h4>
        <div className="brand">Olumiant</div>
        <dl>
          <dt>Selectivity</dt><dd>JAK1 + JAK2. BARI BARS the first two.</dd>
          <dt>Dosing</dt><dd>2 mg PO once daily</dd>
          <dt>FDA</dt><dd>RA, alopecia areata.</dd>
        </dl>
        <div className="card-mnemonic">&ldquo;BARI builds a BARRIER &mdash; walls off JAK 1 and 2, nothing getting through.&rdquo;</div>
      </div>

      <div className="drug-card">
        <h4>Upadacitinib <span className="badge oral">Oral</span></h4>
        <div className="brand">Rinvoq</div>
        <dl>
          <dt>Selectivity</dt><dd>JAK1 selective. UPA = just U &mdash; JAK1 only.</dd>
          <dt>Dosing</dt><dd>15 mg PO once daily (RA, PsA, AS); 30&ndash;45 mg for IBD induction</dd>
          <dt>FDA</dt><dd>RA, PsA, AS, nr-axSpA, GCA, atopic dermatitis, UC, Crohn&rsquo;s.</dd>
        </dl>
        <div className="card-pearl">Most JAK1-selective. Broadest indication list of the JAKi class.</div>
      </div>
    </div>

    
    <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
        <span style={{ fontSize: '1.4rem' }}>🎛️</span>
        <h4 style={{ fontSize: '1.2rem', fontWeight: '600' }}>The Smart Thermostat &mdash; TYK2 Inhibitor</h4>
      </div>
      <p style={{ color: 'var(--text-mid)', fontSize: '0.98rem', marginBottom: '1rem' }}>Same garage. Different panel entirely. TYK2 is a member of the JAK family &mdash; but deucravacitinib doesn&rsquo;t touch it the same way.</p>

      <div className="compare-box">
        <div className="compare-item jak">
          <h5>⚡ Other JAK Inhibitors (TOFA / BARI / UPA)</h5>
          <p>Bind the <strong>active kinase domain (JH1)</strong> &mdash; the main breaker. Block ATP from binding, cutting power to the whole circuit.</p>
        </div>
        <div className="compare-item tyk">
          <h5>🎛️ Deucravacitinib (DEUCE)</h5>
          <p>Binds the <strong>regulatory pseudokinase domain (JH2)</strong> &mdash; the dimmer switch. Locks TYK2 in an inactive conformation without touching the active site. A fundamentally different mechanism.</p>
        </div>
      </div>

      <div className="mechanism-box" style={{ marginTop: '1rem' }}>
        <h4>🔍 Why This Matters</h4>
        <p>TYK2&rsquo;s JH2 regulatory domain is structurally distinct from JAK1, JAK2, and JAK3. DEUCE fits only that lock &mdash; which is why it&rsquo;s highly TYK2-selective without off-target JAK effects. That selectivity is what allows it to <strong>skip the JAK inhibitor class boxed warning</strong> (no MACE/VTE/malignancy warning). It also means it can be used where JAKi class concerns would otherwise give pause.</p>
        <p style={{ marginTop: '0.5rem' }}>TYK2 mediates downstream signaling of <strong>IL-23, IL-12, and type I IFN</strong> &mdash; exactly the cytokines that drive psoriasis and PsA pathology.</p>
      </div>

      <div className="drug-card" style={{ marginTop: '1rem', background: 'var(--card-bg)' }}>
        <h4>Deucravacitinib <span className="badge oral">Oral</span></h4>
        <div className="brand">Sotyktu</div>
        <dl>
          <dt>Mechanism</dt><dd>Selective TYK2 inhibitor via allosteric binding to the regulatory pseudokinase domain (JH2) &mdash; not the active site (JH1).</dd>
          <dt>Dosing</dt><dd>6 mg PO once daily</dd>
          <dt>FDA</dt><dd>Plaque psoriasis, PsA (first TYK2 inhibitor for PsA &mdash; POETYK PsA-1 and PsA-2 trials).</dd>
        </dl>
        <div className="card-mnemonic">&ldquo;DEUCE hits TYK-TWO on the back panel &mdash; not the breaker, but the dimmer, that&rsquo;s the channel.&rdquo;</div>
        <div className="card-pearl"><strong>No JAK inhibitor class boxed warning</strong> &mdash; the different binding mechanism means the ORAL Surveillance-style risks don&rsquo;t apply. This is a key clinical and counseling point.</div>
      </div>
    </div>
  </div>
</div>


<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">⛺</span>
      <h3>The Backyard &mdash; PDE4 Inhibitor</h3>
    </div>
    <p className="room-intro">Picture kids camping in the backyard &mdash; tents up, everything calm. cAMP = the CAMP. PDE4 normally breaks down cAMP (tears down the tents). Apremilast blocks PDE4 &mdash; the kids keep camping, everything stays calm.</p>
    <div className="mnemonic"><strong>&ldquo;Block PDE, let cAMP stay &mdash; APREMILAST saves the day.&rdquo;</strong></div>

    <div className="drug-grid single">
      <div className="drug-card">
        <h4>Apremilast <span className="badge oral">Oral</span></h4>
        <div className="brand">Otezla</div>
        <dl>
          <dt>Mechanism</dt><dd>PDE4 inhibitor. Oral. Raises intracellular cAMP &rarr; reduces inflammatory cytokine production.</dd>
          <dt>Dosing</dt><dd>Titrate over 6 days to 30 mg PO twice daily</dd>
          <dt>FDA</dt><dd>PsA, plaque psoriasis, oral ulcers in Beh&ccedil;et&rsquo;s disease.</dd>
        </dl>
        <div className="card-pearl">Oral, no lab monitoring required. Side effects: diarrhea, nausea, weight loss, headache, depression. Less efficacious than biologics but easiest to start. Beh&ccedil;et&rsquo;s oral ulcers = unique niche indication.</div>
      </div>
    </div>
  </div>
</div>

<div className="content-section">
  <div className="room">
    <div className="room-header">
      <span className="room-emoji">🔑</span>
      <h3>Other Key Players</h3>
    </div>

    <div className="drug-grid">
      <div className="drug-card">
        <h4>Abatacept <span className="badge sc">SC</span><span className="badge iv">IV</span></h4>
        <div className="brand">Orencia &mdash; T-Cell Co-Stimulation Blocker</div>
        <dl>
          <dt>Mechanism</dt><dd>CTLA-4-Ig fusion protein. Blocks Signal 2 (the co-stimulatory handshake between APC and T cell).</dd>
          <dt>Dosing</dt><dd>Weight-based IV monthly; or 125 mg SC weekly</dd>
          <dt>FDA</dt><dd>RA, JIA, PsA.</dd>
        </dl>
        <div className="card-mnemonic">&ldquo;ABATE the handshake &mdash; T cells won&rsquo;t awake.&rdquo;</div>
        <div className="card-pearl">It&rsquo;s a -CEPT (receptor fusion protein). DO NOT combine with TNF inhibitors.</div>
      </div>

      <div className="drug-card">
        <h4>Anifrolumab <span className="badge iv">IV</span></h4>
        <div className="brand">Saphnelo &mdash; Type I Interferon Blocker</div>
        <dl>
          <dt>Mechanism</dt><dd>Monoclonal antibody against type I interferon receptor (IFNAR1).</dd>
          <dt>Name cheat</dt><dd>AN-ti-inter<strong>FRO</strong>-n-lu-mab &mdash; the target is in the name.</dd>
          <dt>Dosing</dt><dd>300 mg IV every 4 weeks</dd>
          <dt>FDA</dt><dd>Moderate-to-severe SLE (TULIP-1, TULIP-2 trials).</dd>
        </dl>
        <div className="card-pearl">Increased risk of herpes zoster &mdash; type I IFN is critical for antiviral defense.</div>
      </div>

      <div className="drug-card">
        <h4>Avacopan <span className="badge oral">Oral</span></h4>
        <div className="brand">Tavneos &mdash; Complement Inhibitor</div>
        <dl>
          <dt>Mechanism</dt><dd>Oral C5a receptor antagonist. Blocks C5a from binding its receptor, cutting off complement-driven neutrophil activation.</dd>
          <dt>Dosing</dt><dd>30 mg PO twice daily</dd>
          <dt>FDA</dt><dd>Adjunctive treatment for ANCA vasculitis (GPA and MPA).</dd>
        </dl>
        <div className="card-mnemonic">&ldquo;AVA-copan ADVOCATES by phone &mdash; blocks C5a&rsquo;s call so steroids can go home.&rdquo;</div>
        <div className="card-pearl">ORAL medication (the only oral complement inhibitor in rheumatology). ADVOCATE trial: non-inferior to prednisone taper at 52 weeks. Steroid-sparing.</div>
        <div style={{ marginTop: '0.8rem', padding: '0.9rem 1.1rem', background: '#fff5f5', borderLeft: '4px solid #c53030', borderRadius: '6px' }}>
          <strong style={{ color: '#c53030' }}>&#9888; FDA Safety Warning &mdash; Drug-Induced Liver Injury (DILI)</strong>
          <p style={{ marginTop: '0.4rem', fontSize: '0.95rem', color: '#742a2a' }}>Post-marketing reports of serious hepatotoxicity including fatal cases and vanishing bile duct syndrome. Monitor LFTs at baseline and periodically during treatment. Discontinue if significant liver injury develops.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<hr className="section-divider" />


<div className="content-section" id="step-5">
  <div className="step-header">
    <h2>The Whole House at a Glance</h2>
  </div>
  <div className="summary-grid">
    <div className="summary-card">
      <div className="room-label">🌿 Garden Hose</div>
      <p>MABs go straight for the source, CEPTs catch the runoff, INIBs clog the course.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">🚨 Front Door (IL-1)</div>
      <p>ANA blocks ALL IL-ONE at the door. CANA? CAN only block beta, nothing more.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">🌡️ Thermostat (IL-6)</div>
      <p>TOCI TOUCHES the SIX receptor &mdash; Giant Cell&rsquo;s protector. CRP goes silent, but infection still burns.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">📺 TV (IL-17)</div>
      <p>SECU-rity checks IDs at SEVENTEEN &mdash; Crohn&rsquo;s gets cancelled from the screen.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">📺 TV (IL-12/23)</div>
      <p>USTE blocks the USUAL TWO. GUSEL and RISAN are precise &mdash; only twenty-three, that&rsquo;s their device.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">❄️ Kitchen Freezer (TNF)</div>
      <p>Five biologics on ICE &mdash; proteins that intercept TNF extracellularly, before it reaches the cell. CERTified PEG-nant friendly. The CEPT can CATCH but can&rsquo;t CROHN&rsquo;S.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">💀 B-Cell Death Row</div>
      <p>Rituximab &mdash; last RITE (CD20). Obinutuzumab &mdash; OBITUARY. Inebilizumab &mdash; INEVITABLE (CD19). Belimumab &mdash; BELLY-empty. CAR-T &mdash; reprogrammed and mean.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">⚡ Garage (JAK)</div>
      <p>TOFA&rsquo;s a TOTAL blackout, BARI BARS the first two, UPA blocks just one &mdash; JAK1, that&rsquo;s you.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">🎛️ Garage (TYK2)</div>
      <p>DEUCE hits TYK-TWO on the back panel &mdash; not the breaker, but the dimmer, that&rsquo;s the channel. No class boxed warning.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">⛺ Backyard (PDE4)</div>
      <p>Block PDE, let cAMP stay &mdash; APREMILAST saves the day.</p>
    </div>
    <div className="summary-card">
      <div className="room-label">🔑 Other Key Players</div>
      <p>AN-ti-interFRO-n (anifrolumab). AVA ADVOCATES by phone &mdash; steroids can go home.</p>
    </div>
  </div>
</div>
</div>
    </>
  );
}
