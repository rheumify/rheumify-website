export const metadata = {
  title: 'Rheumatology Biologics — The Memory Palace',
  description: 'Master every biologic mechanism through a house memory palace. Drug suffixes, naming codes, mnemonics, dosing, and FDA indications.',
};

export default function BiologicsPage() {
  return (
    <main className="main">
      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; Biologics
        </p>
        <h1 className="page-title">Rheumatology Biologics</h1>
        <p className="learning-subtitle">&ldquo;The Memory Palace&rdquo;</p>
      </div>

      <section className="aps-intro">
        <div className="analogy-setup-card">
          <h2 className="section-title">The Analogy</h2>
          <p>
            This guide uses a <strong>memory palace</strong> &mdash; a technique where you walk through
            a familiar space and place what you need to remember in specific locations. Each room in the
            house maps to a drug class. Each fixture in the room maps to a specific drug or mechanism.
          </p>
          <p>
            Start outside. There&rsquo;s a <strong>garden hose</strong> spraying water onto the lawn.
            The water is cytokines. The grass is the receptor on the cell. Walk through the front door,
            into the living room, the kitchen, the laundry room, the garage, and out to the backyard.
            By the time you&rsquo;re done, every biologic has a home.
          </p>
          <p>
            To make it work really well, try walking through <em>your own place</em> (or a friend&rsquo;s
            house, your childhood home, an open house) either physically (the best) or mentally. Try making
            the images absurd &mdash; the weirder, the more memorable.
          </p>
        </div>
      </section>

      <section className="learning-topics">
        <h2 className="section-title">Steps</h2>

        <a href="#step-1" className="module-overview-card" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
          <div className="module-overview-number">1</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Drug Suffixes</span>
            </div>
            <h3>The Garden Hose</h3>
            <p className="topic-card-analogy">&ldquo;What Kind of Fix Is It?&rdquo;</p>
            <p className="topic-card-description">
              Three ways to stop the water: MABs soak up the stream, CEPTs catch the runoff,
              INIBs clog the hose from inside.
            </p>
            <span className="topic-card-cta">Start Learning &rarr;</span>
          </div>
        </a>

        <a href="#step-2" className="module-overview-card" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
          <div className="module-overview-number">2</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">WHO Naming</span>
            </div>
            <h3>The Labeling System</h3>
            <p className="topic-card-analogy">&ldquo;Read the Name, Know the Fix&rdquo;</p>
            <p className="topic-card-description">
              Every biologic has a name stamped on it by the WHO. The ending tells you how human it is.
            </p>
            <span className="topic-card-cta">Start Learning &rarr;</span>
          </div>
        </a>

        <a href="#step-3" className="module-overview-card" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
          <div className="module-overview-number">3</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Name Cheat Codes</span>
            </div>
            <h3>Hidden Gems &amp; the -KIN- Family</h3>
            <p className="topic-card-analogy">&ldquo;Free Points in the Syllables&rdquo;</p>
            <p className="topic-card-description">
              HUMIRA spells out its mechanism. ABATE is in abatacept. Every drug with -KIN- in the
              name hunts an interleuKIN.
            </p>
            <span className="topic-card-cta">Start Learning &rarr;</span>
          </div>
        </a>

        <a href="#step-4" className="module-overview-card" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
          <div className="module-overview-number">4</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">15 min</span>
              <span className="topic-tag">Drug-by-Drug</span>
            </div>
            <h3>The House Tour</h3>
            <p className="topic-card-analogy">&ldquo;Room by Room, Drug by Drug&rdquo;</p>
            <p className="topic-card-description">
              Front door (IL-1) &rarr; Thermostat (IL-6) &rarr; TV (IL-17) &rarr; Kitchen freezer (TNF)
              &rarr; Laundry room (B cells) &rarr; Garage (JAK/TYK2) &rarr; Backyard (PDE4).
            </p>
            <span className="topic-card-cta">Start Learning &rarr;</span>
          </div>
        </a>
      </section>

      {/* ===== STEP 1: THE GARDEN HOSE ===== */}
      <section className="aps-module" id="step-1">
        <div className="analogy-setup-card">
          <h2 className="section-title">Step 1: The Garden Hose &mdash; &ldquo;What Kind of Fix Is It?&rdquo;</h2>
          <p>
            The grass is the receptor on the cell. Three ways to stop the water from hitting the grass:
          </p>
          <div className="references-card" style={{marginTop: '1rem'}}>
            <p><strong>-mab (Monoclonal AntiBodies)</strong> = Go straight for the source &mdash; soak up the stream before it hits the grass.</p>
            <p><strong>-cept (reCEPTor fusion proteins)</strong> = Hold a bucket between the nozzle and the grass &mdash; a decoy that catches the water before it reaches the real target.</p>
            <p><strong>-inib (small molecule INhIBitors)</strong> = Clog the hose from the inside &mdash; the flow stops, but you can&rsquo;t see why from outside.</p>
          </div>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;MABs go straight for the source, CEPTs catch the runoff, INIBs clog the course.&rdquo;
          </blockquote>
          <p>
            <strong>MABs</strong> find the target (cytokine or receptor) and bind directly to it &mdash; working outside the cell.
            <strong>CEPTs</strong> are decoy receptors that also work outside the cell, grabbing the cytokine before it reaches the real receptor.
            <strong>INIBs</strong> are tiny enough to get inside the cell and block signaling pathways (like JAK-STAT). The hose looks fine from the outside, but something&rsquo;s clogged inside.
          </p>
          <div style={{margin: '2rem 0', textAlign: 'center'}}>
            <img src="/images/biologics/garden-hose.svg" alt="Garden hose analogy - MABs soak up stream, CEPTs catch runoff, INIBs clog hose" style={{width: '100%', maxWidth: '800px', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      {/* ===== STEP 2: THE LABELING SYSTEM ===== */}
      <section className="aps-module" id="step-2">
        <div className="analogy-setup-card">
          <h2 className="section-title">Step 2: The Labeling System &mdash; &ldquo;Read the Name, Know the Fix&rdquo;</h2>
          <p>
            Every biologic has a name stamped on it by the WHO. The ending before &ldquo;-mab&rdquo; tells you
            how human the antibody is. More mouse protein = more immunogenicity = more likely you&rsquo;ll need methotrexate backup.
          </p>

          <h3 style={{marginTop: '1.5rem'}}>The Spectrum: Mouse → Human</h3>
          <div className="references-card" style={{marginTop: '1rem'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '2px solid rgba(255,255,255,0.2)'}}>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>Substem</th>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>Origin</th>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>Mnemonic</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>-o-mab</strong></td>
                  <td style={{padding: '0.5rem'}}>Fully mouse</td>
                  <td style={{padding: '0.5rem'}}>&ldquo;O no, it&rsquo;s all mOuse!&rdquo;</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>-xi-mab</strong></td>
                  <td style={{padding: '0.5rem'}}>Chimeric (mixed)</td>
                  <td style={{padding: '0.5rem'}}>&ldquo;miXI-mab = a MIX of mouse and man&rdquo;</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>-zu-mab</strong></td>
                  <td style={{padding: '0.5rem'}}>Humanized</td>
                  <td style={{padding: '0.5rem'}}>&ldquo;ZU-mab = almost human, just a ZU-spicion of mouse&rdquo;</td>
                </tr>
                <tr>
                  <td style={{padding: '0.5rem'}}><strong>-u-mab</strong></td>
                  <td style={{padding: '0.5rem'}}>Fully human</td>
                  <td style={{padding: '0.5rem'}}>&ldquo;U-mab = it&rsquo;s all hUman, it&rsquo;s all U&rdquo;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;O is mOuse, X is miXed, ZU is humanized betwixt, U is hUman &mdash; least immunogenic in the mix.&rdquo;
          </blockquote>

          <h3 style={{marginTop: '1.5rem'}}>Why This Matters Clinically</h3>
          <p>
            <strong>Chimeric (-ximab):</strong> Most immunogenic → anti-drug antibodies form → loss of efficacy over time.
            This is WHY infliximab needs methotrexate as a co-pilot.
          </p>
          <p>
            <strong>Fully human (-umab):</strong> Least immunogenic → can often be used as monotherapy.
          </p>
        </div>
      </section>

      {/* ===== STEP 3: NAME CHEAT CODES ===== */}
      <section className="aps-module" id="step-3">
        <div className="analogy-setup-card">
          <h2 className="section-title">Step 3: Name Cheat Codes &mdash; &ldquo;Free Points Hiding in the Syllables&rdquo;</h2>

          <h3 style={{marginTop: '1.5rem'}}>Hidden Gems: Drug Names That Teach Themselves</h3>
          <div className="references-card" style={{marginTop: '1rem'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '2px solid rgba(255,255,255,0.2)'}}>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>Drug</th>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>What&rsquo;s Hiding</th>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>Mnemonic</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>HUMIRA</strong></td>
                  <td style={{padding: '0.5rem'}}>HUman Monoclonal antibody in Rheumatoid Arthritis</td>
                  <td style={{padding: '0.5rem'}}>The brand name IS the mechanism + indication</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>Anakinra</strong></td>
                  <td style={{padding: '0.5rem'}}>Ana-KIN-RA = ANtagonist of interleuKIN Receptor Alpha/beta</td>
                  <td style={{padding: '0.5rem'}}>The drug IS the body&rsquo;s own IL-1Ra, cloned</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>Abatacept</strong></td>
                  <td style={{padding: '0.5rem'}}>&ldquo;ABATE&rdquo; = to reduce. It abates T-cell activation.</td>
                  <td style={{padding: '0.5rem'}}>&ldquo;ABATE the handshake &mdash; T cells won&rsquo;t awake.&rdquo;</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>Anifrolumab</strong></td>
                  <td style={{padding: '0.5rem'}}>&ldquo;-fro-&rdquo; = interFROn (WHO infix)</td>
                  <td style={{padding: '0.5rem'}}>AN-ti-interFRO-n-lu-mab &mdash; the target is in the middle</td>
                </tr>
                <tr>
                  <td style={{padding: '0.5rem'}}><strong>Benlysta</strong></td>
                  <td style={{padding: '0.5rem'}}>B-lymphocyte stimulator antibody</td>
                  <td style={{padding: '0.5rem'}}>&ldquo;BenLYSTA &mdash; the B-LySt Antibody.&rdquo;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{marginTop: '1.5rem'}}>The &ldquo;-KIN- Family&rdquo; &mdash; Same Last Name, Different Targets</h3>
          <p><em>&ldquo;See -KIN- in the name? It&rsquo;s hunting an interleuKIN.&rdquo;</em></p>

          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;CANA&rsquo;s cannon fires at ONE. USTE&rsquo;s the usual &mdash; TWELVE and TWENTY-THREE, done.
            SECU-rity guards SEVENTEEN&rsquo;s scene. RISAN and GUSEL? TWENTY-THREE only &mdash; precise and clean.&rdquo;
          </blockquote>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '2px solid rgba(255,255,255,0.2)'}}>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>Drug</th>
                  <th style={{padding: '0.5rem', textAlign: 'left'}}>Target</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>Cana</strong>kinumab</td>
                  <td style={{padding: '0.5rem'}}>IL-1β</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>Uste</strong>kinumab</td>
                  <td style={{padding: '0.5rem'}}>IL-12 + IL-23</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <td style={{padding: '0.5rem'}}><strong>Secu</strong>kinumab, <strong>Ixeki</strong>zumab, <strong>Bime</strong>kizumab</td>
                  <td style={{padding: '0.5rem'}}>IL-17</td>
                </tr>
                <tr>
                  <td style={{padding: '0.5rem'}}><strong>Risan</strong>kizumab, <strong>Gusel</strong>kumab</td>
                  <td style={{padding: '0.5rem'}}>IL-23 only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== STEP 4: THE HOUSE TOUR ===== */}
      <section className="aps-module" id="step-4">
        <div className="analogy-setup-card">
          <h2 className="section-title">Step 4: The House Tour &mdash; &ldquo;Room by Room, Drug by Drug&rdquo;</h2>
          <p>
            Now you have the tools and the cheat codes. Time to walk through the house. Each room maps to a drug class.
            For each drug, notice how the name confirms what you already know from Steps 1–3.
          </p>
          <p>
            <strong>Pro tip &mdash; Make it YOUR house.</strong> Memory palaces work best when they&rsquo;re personal.
            Walk through your own house and picture each drug class in a real room you know.
            The weirder the image, the stickier the memory.
          </p>
        </div>

        {/* --- IL-1: Front Door --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">🚨 The Front Door &mdash; IL-1 Inhibitors</h3>
          <p>
            IL-1 is the front door &mdash; the first signal that kicks off autoinflammatory fires
            (gout, FMF, CAPS, Still&rsquo;s disease). These drugs guard the door.
          </p>
          <div style={{margin: '2rem 0', textAlign: 'center'}}>
            <img src="/images/biologics/front-door-bouncers.svg" alt="IL-1 Inhibitors - Two bouncers at the front door" style={{width: '100%', maxWidth: '800px', borderRadius: '12px'}} />
          </div>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;ANA blocks ALL IL-ONE at the door (alpha and beta). CANA? CAN only block beta, nothing more.&rdquo;
          </blockquote>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Anakinra (Kineret)</h4>
            <p><strong>Mechanism:</strong> IL-1 receptor antagonist (recombinant IL-1Ra). Blocks both alpha and beta.</p>
            <p><strong>Dosing:</strong> 100mg SC daily</p>
            <p><strong>FDA:</strong> RA, CAPS (NOMID). Also used for gout flares, Still&rsquo;s disease, FMF, recurrent pericarditis.</p>
            <p><strong>Pearl:</strong> Injection site reactions common. Short half-life = quick washout if infection develops.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Canakinumab (Ilaris)</h4>
            <p><strong>Mechanism:</strong> Monoclonal antibody against IL-1β specifically.</p>
            <p><strong>Dosing:</strong> 150mg SC every 8 weeks (varies by indication)</p>
            <p><strong>FDA:</strong> CAPS, SJIA, TRAPS, HIDS/MKD, FMF.</p>
            <p><strong>Pearl:</strong> CANTOS trial: reduced cardiovascular events &mdash; board-testable.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Rilonacept (Arcalyst)</h4>
            <p><strong>Mechanism:</strong> Soluble decoy receptor (&ldquo;IL-1 Trap&rdquo;) &mdash; the -cept tells you it&rsquo;s a decoy receptor. Catches both IL-1 alpha and beta.</p>
            <p><strong>Dosing:</strong> 320mg SC loading, then 160mg SC weekly</p>
            <p><strong>FDA:</strong> CAPS and recurrent pericarditis.</p>
          </div>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic'}}>
            IL-1 Dosing: &ldquo;ANA every DAY, RILO every WEEK, CANA every EIGHT &mdash; the IL-1 triple feat.&rdquo;
          </blockquote>
        </div>

        {/* --- IL-6: Thermostat --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">🌡️ The Thermostat &mdash; IL-6 Inhibitors</h3>
          <p>
            IL-6 controls the thermostat &mdash; it drives fever and CRP. Block IL-6, and the thermostat reads normal.
            But the house is still burning. <strong>That&rsquo;s the board trap.</strong> The smoke alarm (CRP) goes silent &mdash;
            but the fire (infection) is still raging.
          </p>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;TOCI TOUCHES the SIX receptor &mdash; Giant Cell&rsquo;s protector.
            SARI wraps SIX &mdash; same receptor, different fix.&rdquo;
          </blockquote>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Tocilizumab (Actemra)</h4>
            <p><strong>Mechanism:</strong> IL-6 receptor antibody. IV or SC.</p>
            <p><strong>Dosing:</strong> IV 4–8mg/kg every 4 weeks; SC 162mg weekly or every 2 weeks</p>
            <p><strong>FDA:</strong> RA, GCA, SJIA, PJIA, CRS (CAR-T), SSc-ILD.</p>
            <p><strong>Pearls:</strong> First-line for GCA (GiACTA trial). Monitor lipids. Risk of GI perforation. Masks infection signs &mdash; CRP stays low.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Sarilumab (Kevzara)</h4>
            <p><strong>Mechanism:</strong> Also IL-6 receptor antibody. SC only.</p>
            <p><strong>Dosing:</strong> 200mg SC every 2 weeks</p>
            <p><strong>FDA:</strong> RA, PMR.</p>
            <p><strong>Pearl:</strong> Similar efficacy to tocilizumab, same monitoring. SC only (no IV option).</p>
          </div>
        </div>

        {/* --- IL-17: TV --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">📺 The TV &mdash; IL-17 Inhibitors</h3>
          <p>
            IL-17 drives inflammation in the skin and spine. Think of it as an R-rated channel &mdash;
            you must be SEVENTEEN to watch.
          </p>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;SECU-rity checks IDs at SEVENTEEN &mdash; but Crohn&rsquo;s gets cancelled from the screen.&rdquo;
          </blockquote>
          <p>Subtype pattern: Secukinumab and ixekizumab target IL-17<strong>A</strong>. Bimekizumab targets <strong>BOTH</strong> IL-17A AND IL-17F.</p>
          <div style={{margin: '2rem 0', textAlign: 'center'}}>
            <img src="/images/biologics/tv-il17-security.svg" alt="IL-17 Inhibitors - TV with security guard checking IDs at Channel 17" style={{width: '100%', maxWidth: '800px', borderRadius: '12px'}} />
          </div>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1rem 0', fontStyle: 'italic'}}>
            &ldquo;BIME means BOTH &mdash; A and F, get out. Two subtypes, one drug, total knockout.&rdquo;
          </blockquote>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Secukinumab (Cosentyx)</h4>
            <p><strong>Dosing:</strong> 150–300mg SC; loading dose varies by indication, then every 4 weeks</p>
            <p><strong>FDA:</strong> Plaque psoriasis, PsA, AS, nr-axSpA, HS.</p>
            <p><strong>Pearl:</strong> Watch for Candida infections. <strong>Avoid in IBD</strong> (can worsen Crohn&rsquo;s).</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Ixekizumab (Taltz)</h4>
            <p><strong>Dosing:</strong> 160mg SC loading, then 80mg SC every 2–4 weeks (varies by indication)</p>
            <p><strong>FDA:</strong> Plaque psoriasis, PsA, AS, nr-axSpA.</p>
            <p><strong>Pearl:</strong> Same IL-17A target as secukinumab. Also watch for Candida and IBD exacerbation.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Bimekizumab (Bimzelx)</h4>
            <p><strong>Dosing:</strong> 320mg SC every 4 weeks initially, then every 4–8 weeks (varies by indication)</p>
            <p><strong>FDA:</strong> Plaque psoriasis, PsA.</p>
            <p><strong>Pearl:</strong> Dual IL-17A/F inhibition &mdash; the only IL-17 blocker that hits both subtypes. Higher rates of oral candidiasis. Avoid in IBD (class effect).</p>
          </div>
        </div>

        {/* --- IL-12/23 --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">IL-12/23 and IL-23 Inhibitors</h3>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;USTE blocks the USUAL TWO &mdash; twelve AND twenty-three are through.
            GUSEL and RISAN are precise &mdash; only twenty-three, that&rsquo;s their device.&rdquo;
          </blockquote>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Ustekinumab (Stelara)</h4>
            <p><strong>Mechanism:</strong> Monoclonal antibody against p40 subunit shared by IL-12 and IL-23.</p>
            <p><strong>Dosing:</strong> Weight-based IV loading dose, then 90mg SC every 8 or 12 weeks</p>
            <p><strong>FDA:</strong> Plaque psoriasis, PsA, Crohn&rsquo;s, UC.</p>
            <p><strong>Pearl:</strong> Works for IBD! (Unlike IL-17 inhibitors). Excellent safety profile.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Guselkumab (Tremfya)</h4>
            <p><strong>Mechanism:</strong> Monoclonal antibody against p19 (IL-23 selective).</p>
            <p><strong>Dosing:</strong> 100mg SC at weeks 0 and 4, then every 8 weeks</p>
            <p><strong>FDA:</strong> Plaque psoriasis, PsA.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Risankizumab (Skyrizi)</h4>
            <p><strong>Mechanism:</strong> Monoclonal antibody against p19 (IL-23 selective).</p>
            <p><strong>Dosing:</strong> 150mg SC at weeks 0 and 4, then every 12 weeks (psoriasis); IV loading for Crohn&rsquo;s</p>
            <p><strong>FDA:</strong> Plaque psoriasis, PsA, Crohn&rsquo;s.</p>
          </div>
        </div>

        {/* --- TNF: Kitchen Freezer --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">❄️ The Kitchen Freezer &mdash; TNF Inhibitors</h3>
          <p>
            TNF is the biggest source of flooding &mdash; the most water, the most damage.
            Five drugs stop it. Keep them <strong>on ICE in the freezer.</strong>
          </p>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Adalimumab (Humira)</h4>
            <p><strong>Mechanism:</strong> Fully human monoclonal antibody against TNF-alpha.</p>
            <p><strong>Name cheat:</strong> HUMIRA = HUman Monoclonal antibody in Rheumatoid Arthritis.</p>
            <p><strong>Dosing:</strong> 40mg SC every 2 weeks</p>
            <p><strong>FDA:</strong> RA, JIA, PsA, AS, plaque psoriasis, Crohn&rsquo;s, UC, uveitis, HS.</p>
            <p><strong>Pearl:</strong> Most indications of any biologic. Now has biosimilars galore.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Infliximab (Remicade)</h4>
            <p><strong>Mechanism:</strong> Chimeric monoclonal antibody. Given IV.</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;INFLIXI-mab &mdash; INFusion of a miXed-up creature.&rdquo;</em></p>
            <p><strong>Dosing:</strong> 3–10mg/kg IV; induction at weeks 0, 2, 6, then every 4–8 weeks (varies by indication)</p>
            <p><strong>FDA:</strong> RA, Crohn&rsquo;s, UC, AS, PsA, plaque psoriasis.</p>
            <p><strong>Pearls:</strong> Chimeric = higher immunogenicity → consider pairing with methotrexate. IV only. Check for latent TB before ALL TNF inhibitors. Can trigger drug-induced lupus.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Etanercept (Enbrel)</h4>
            <p><strong>Mechanism:</strong> Soluble TNF receptor fusion protein (decoy receptor). The ONLY &ldquo;-cept&rdquo; among the TNF blockers.</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;The CEPT can CATCH but can&rsquo;t CROHN&rsquo;s &mdash; leave granulomas alone.&rdquo;</em></p>
            <p><strong>Dosing:</strong> 50mg SC weekly</p>
            <p><strong>FDA:</strong> RA, JIA, PsA, AS, plaque psoriasis.</p>
            <p><strong>Pearl:</strong> Does NOT work for IBD, granulomatous diseases, or uveitis. Shorter half-life.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Certolizumab Pegol (Cimzia)</h4>
            <p><strong>Mechanism:</strong> PEGylated Fab fragment &mdash; NO Fc portion. Cannot cross the placenta.</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;CERTolizumab is CERTified PEG-nant friendly.&rdquo;</em></p>
            <p><strong>Dosing:</strong> 400mg SC at weeks 0, 2, 4, then 200mg every 2 weeks (or 400mg every 4 weeks)</p>
            <p><strong>FDA:</strong> RA, Crohn&rsquo;s, PsA, AS, nr-axSpA, plaque psoriasis.</p>
            <p><strong>Pearl:</strong> <strong>Pregnancy safe</strong> &mdash; the only TNF inhibitor that does NOT cross the placenta. #1 tested fact.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Golimumab (Simponi)</h4>
            <p><strong>Mechanism:</strong> Fully human monoclonal antibody. Monthly dosing.</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;GOLImumab &mdash; GO once a month, Live your life.&rdquo;</em></p>
            <p><strong>Dosing:</strong> Simponi 50mg SC monthly; Simponi Aria 2mg/kg IV every 8 weeks</p>
            <p><strong>FDA:</strong> RA, PsA, AS, UC.</p>
          </div>
        </div>

        {/* --- B Cells: Laundry Room --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">🧹 The Laundry Room &mdash; B-Cell Targeting</h3>
          <p>Two ways to deal with B cells: rituximab clears them out, belimumab starves the survivors.</p>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Rituximab (Rituxan)</h4>
            <p><strong>Mechanism:</strong> Anti-CD20 monoclonal antibody. Depletes B cells.</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;RITUximaB &mdash; a RITUAL sacrifice of older B cells.&rdquo;</em></p>
            <p><strong>Dosing:</strong> 1000mg IV on days 1 and 15; repeat every 6 months (500mg for vasculitis maintenance)</p>
            <p><strong>FDA:</strong> RA, GPA, MPA (ANCA vasculitis), pemphigus vulgaris.</p>
            <p><strong>Pearls:</strong> Check Hep B before starting (&ldquo;Before the RITUAL, check the liver&rdquo;). Pre-medicate with methylpred, acetaminophen, diphenhydramine. PML risk (rare). RAVE trial: non-inferior to cyclophosphamide for ANCA vasculitis. Depletes CD20+ B cells but NOT plasma cells.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Belimumab (Benlysta)</h4>
            <p><strong>Mechanism:</strong> Monoclonal antibody against BLyS (B-Lymphocyte Stimulator). Blocks BLyS &mdash; the survival signal B cells need to stay alive. Without it, B cells slowly starve.</p>
            <p><strong>Dosing:</strong> 10mg/kg IV every 2 weeks x3, then every 4 weeks; or 200mg SC weekly</p>
            <p><strong>FDA:</strong> SLE (BLISS-52, BLISS-76 trials) and lupus nephritis (BLISS-LN).</p>
            <p><strong>Pearl:</strong> Add-on therapy. Takes months to see full effect (B cell starvation is slow).</p>
          </div>
        </div>

        {/* --- Other: Abatacept, Anifrolumab, Avacopan --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">Other Key Players</h3>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Abatacept (Orencia) &mdash; T-Cell Co-Stimulation Blocker</h4>
            <p><strong>Mechanism:</strong> CTLA-4-Ig fusion protein. Blocks Signal 2 (the co-stimulatory handshake).</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;ABATE the handshake &mdash; T cells won&rsquo;t awake.&rdquo;</em></p>
            <p><strong>Dosing:</strong> Weight-based IV monthly; or 125mg SC weekly</p>
            <p><strong>FDA:</strong> RA, JIA, PsA.</p>
            <p><strong>Pearl:</strong> It&rsquo;s a -CEPT (receptor fusion protein). DO NOT combine with TNF inhibitors.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Anifrolumab (Saphnelo) &mdash; Type I Interferon Blocker</h4>
            <p><strong>Mechanism:</strong> Monoclonal antibody against type I interferon receptor (IFNAR1).</p>
            <p><strong>Name cheat:</strong> AN-ti-interFRO-n-lu-mab &mdash; the target is in the name.</p>
            <p><strong>Dosing:</strong> 300mg IV every 4 weeks</p>
            <p><strong>FDA:</strong> Moderate-to-severe SLE (TULIP-1, TULIP-2 trials).</p>
            <p><strong>Pearl:</strong> Increased risk of herpes zoster (IFN is critical for antiviral defense).</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Avacopan (Tavneos) &mdash; Complement Inhibitor</h4>
            <p><strong>Mechanism:</strong> Oral C5a receptor antagonist.</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;AVA-copan is the ORAL ADVOCATE &mdash; no steroids needed, C5a can&rsquo;t communicate.&rdquo;</em></p>
            <p><strong>Dosing:</strong> 30mg PO twice daily</p>
            <p><strong>FDA:</strong> Adjunctive treatment for ANCA vasculitis (GPA and MPA).</p>
            <p><strong>Pearl:</strong> ORAL medication. ADVOCATE trial: non-inferior to prednisone taper. Steroid-sparing.</p>
          </div>
        </div>

        {/* --- JAK: Garage --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">⚡ The Garage &mdash; JAK Inhibitors (The Electrical Panel)</h3>
          <p>
            JAK inhibitors sneak into the electrical panel and cut the wiring &mdash; the signaling system that
            tells everything to turn on.
          </p>
          <div style={{margin: '2rem 0', textAlign: 'center'}}>
            <img src="/images/biologics/jak-electrical-panel.svg" alt="JAK Inhibitors Electrical Panel - breaker switches showing selectivity" style={{width: '100%', maxWidth: '800px', borderRadius: '12px'}} />
          </div>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;TOFA&rsquo;s a TOTAL blackout, BARI BARS the first two, UPA blocks just one &mdash; JAK1, that&rsquo;s you.&rdquo;
          </blockquote>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Tofacitinib (Xeljanz)</h4>
            <p><strong>Selectivity:</strong> JAK1 + JAK3 (&gt; JAK2). TOFA = TOTAL blackout.</p>
            <p><strong>Dosing:</strong> 5mg PO twice daily (or 11mg XR once daily)</p>
            <p><strong>FDA:</strong> RA, PsA, UC, JIA, AS.</p>
            <p><strong>Pearl:</strong> First FDA-approved JAK inhibitor (2012). Boxed warning: increased risk of MACE, VTE, malignancy (ORAL Surveillance trial). Applies to ALL JAKi as a class.</p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Baricitinib (Olumiant)</h4>
            <p><strong>Selectivity:</strong> JAK1 + JAK2. BARI BARS the first two.</p>
            <p><strong>Dosing:</strong> 2mg PO once daily</p>
            <p><strong>FDA:</strong> RA, alopecia areata.</p>
            <p><strong>Pearl:</strong> <em>&ldquo;BARI builds a BARRIER &mdash; JAK 1 and 2, plus it regrows your HAIR-i.&rdquo;</em></p>
          </div>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Upadacitinib (Rinvoq)</h4>
            <p><strong>Selectivity:</strong> JAK1 selective. UPA = just U &mdash; JAK1 only.</p>
            <p><strong>Dosing:</strong> 15mg PO once daily (RA, PsA, AS); 30–45mg for IBD induction</p>
            <p><strong>FDA:</strong> RA, PsA, AS, nr-axSpA, GCA, atopic dermatitis, UC, Crohn&rsquo;s.</p>
            <p><strong>Pearl:</strong> Most JAK1-selective. Broadest indication list of the JAKi class.</p>
          </div>
        </div>

        {/* --- TYK2: Smart Thermostat --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">🌡️ The Smart Thermostat &mdash; TYK2 Inhibitor</h3>
          <p>
            Same garage, gentler touch, different wiring. Deucravacitinib binds allosterically
            (at the regulatory domain, not the active site) &mdash; a fundamentally different mechanism.
          </p>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Deucravacitinib (Sotyktu)</h4>
            <p><strong>Mechanism:</strong> Selective TYK2 inhibitor. Oral. Allosteric binding.</p>
            <p><strong>Mnemonic:</strong> <em>&ldquo;DEUCE hits TYK-TWO &mdash; a different circuit, nothing new to review.&rdquo;</em></p>
            <p><strong>Dosing:</strong> 6mg PO once daily</p>
            <p><strong>FDA:</strong> Plaque psoriasis, PsA (first TYK2 inhibitor for PsA).</p>
            <p><strong>Pearls:</strong> TYK2 mediates IL-23, IL-12, and type I IFN signaling. Does NOT carry the JAK inhibitor class boxed warning (different binding mechanism). POETYK PsA-1 and PsA-2 trials.</p>
          </div>
        </div>

        {/* --- PDE4: Backyard --- */}
        <div className="analogy-setup-card" style={{marginTop: '2rem'}}>
          <h3 className="section-title">⛺ The Backyard &mdash; PDE4 Inhibitor</h3>
          <p>
            Picture kids camping in the backyard &mdash; tents up, everything calm. <strong>cAMP = the CAMP.</strong> PDE4
            normally breaks down cAMP (tears down the tents). Apremilast blocks PDE4 &mdash; the kids keep
            camping, everything stays calm.
          </p>
          <blockquote className="key-mnemonic" style={{borderLeft: '4px solid #64b5f6', padding: '1rem', margin: '1.5rem 0', fontStyle: 'italic', fontSize: '1.1em'}}>
            &ldquo;Block PDE, let cAMP stay &mdash; APREMILAST saves the day.&rdquo;
          </blockquote>

          <div className="references-card" style={{marginTop: '1rem'}}>
            <h4>Apremilast (Otezla)</h4>
            <p><strong>Mechanism:</strong> PDE4 inhibitor. Oral. Raises intracellular cAMP.</p>
            <p><strong>Dosing:</strong> Titrate over 6 days to 30mg PO twice daily</p>
            <p><strong>FDA:</strong> PsA, plaque psoriasis, oral ulcers in Behçet&rsquo;s disease.</p>
            <p><strong>Pearls:</strong> Oral, no lab monitoring required. Side effects: diarrhea, nausea, weight loss, headache, depression. Less efficacious than biologics but easiest to start. Behçet&rsquo;s oral ulcers = unique niche indication.</p>
          </div>
        </div>
      </section>

      {/* ===== SUMMARY ===== */}
      <section className="aps-references">
        <h2 className="section-title">The Whole House at a Glance</h2>
        <div className="references-card">
          <ul className="references-list">
            <li>
              <strong>Garden Hose:</strong> MABs go straight for the source, CEPTs catch the runoff,
              INIBs clog the course.
            </li>
            <li>
              <strong>Front Door (IL-1):</strong> ANA blocks ALL IL-ONE at the door. CANA? CAN only
              block beta, nothing more.
            </li>
            <li>
              <strong>Thermostat (IL-6):</strong> TOCI TOUCHES the SIX receptor &mdash; Giant Cell&rsquo;s
              protector. CRP goes silent, but infection still burns.
            </li>
            <li>
              <strong>TV (IL-17):</strong> SECU-rity checks IDs at SEVENTEEN &mdash; Crohn&rsquo;s gets
              cancelled from the screen.
            </li>
            <li>
              <strong>IL-12/23:</strong> USTE blocks the USUAL TWO. GUSEL and RISAN are precise &mdash;
              only twenty-three, that&rsquo;s their device.
            </li>
            <li>
              <strong>Kitchen Freezer (TNF):</strong> Five drugs on ICE. CERTified PEG-nant friendly.
              The CEPT can CATCH but can&rsquo;t CROHN&rsquo;s.
            </li>
            <li>
              <strong>Laundry Room (B cells):</strong> RITUAL sacrifice (rituximab). Starve the
              survivors (belimumab).
            </li>
            <li>
              <strong>Abatacept:</strong> ABATE the handshake &mdash; T cells won&rsquo;t awake.
            </li>
            <li>
              <strong>Anifrolumab:</strong> AN-ti-interFRO-n &mdash; the target is in the name.
            </li>
            <li>
              <strong>Avacopan:</strong> The ORAL ADVOCATE &mdash; no steroids needed.
            </li>
            <li>
              <strong>Garage (JAK):</strong> TOFA&rsquo;s a TOTAL blackout, BARI BARS the first two,
              UPA blocks just one. Smart thermostat: DEUCE hits TYK-TWO.
            </li>
            <li>
              <strong>Backyard (PDE4):</strong> Block PDE, let cAMP stay &mdash; APREMILAST saves the day.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
