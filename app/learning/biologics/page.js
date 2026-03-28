export const metadata = {
  title: 'Rheumatology Biologics \u2014 The Memory Palace',
  description: 'Master every biologic mechanism through a house memory palace. Drug suffixes, naming codes, mnemonics, dosing, and FDA indications \u2014 room by room, drug by drug. By Dr. Alison Bays.',
};

export default function BiologicsOverviewPage() {
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

        <div className="module-overview-card">
          <div className="module-overview-number">1</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Drug Suffixes</span>
            </div>
            <h3>The Garden Hose</h3>
            <p className="topic-card-analogy">&ldquo;What Kind of Fix Is It?&rdquo;</p>
            <p className="topic-card-description">
              Three ways to stop the water: MABs soak up the stream (monoclonal antibodies), CEPTs
              catch the runoff (receptor fusion proteins), and INIBs clog the hose from inside (small
              molecule inhibitors). &ldquo;MABs go straight for the source, CEPTs catch the runoff,
              INIBs clog the course.&rdquo;
            </p>
          </div>
        </div>

        <div className="module-overview-card">
          <div className="module-overview-number">2</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">WHO Naming</span>
            </div>
            <h3>The Labeling System</h3>
            <p className="topic-card-analogy">&ldquo;Read the Name, Know the Fix&rdquo;</p>
            <p className="topic-card-description">
              Every biologic has a name stamped on it by the WHO. The ending tells you how human it is:
              &ldquo;O is mOuse, X is miXed, ZU is humanized betwixt, U is hUman &mdash; least
              immunogenic in the mix.&rdquo; More mouse = more problems.
            </p>
          </div>
        </div>

        <div className="module-overview-card">
          <div className="module-overview-number">3</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Name Cheat Codes</span>
            </div>
            <h3>Hidden Gems &amp; the -KIN- Family</h3>
            <p className="topic-card-analogy">&ldquo;Free Points in the Syllables&rdquo;</p>
            <p className="topic-card-description">
              HUMIRA spells out its mechanism. ABATE is in abatacept. -FRO- means interferon. And every
              drug with -KIN- in the name hunts an interleuKIN &mdash; but which one? CANA fires at ONE,
              USTE blocks the USUAL TWO, SECU-rity guards SEVENTEEN.
            </p>
          </div>
        </div>

        <div className="module-overview-card">
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
              &rarr; Laundry room (B cells) &rarr; Garage electrical panel (JAK) &rarr; Smart thermostat
              (TYK2) &rarr; Backyard (PDE4). Every drug with its mechanism, mnemonic, dosing, and
              FDA indications. Includes deucravacitinib (2026).
            </p>
          </div>
        </div>
      </section>

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
              <strong>Kitchen Freezer (TNF):</strong> Five drugs on ICE. CERTified PEG-nant friendly.
              The CEPT can CATCH but can&rsquo;t CROHN&rsquo;s.
            </li>
            <li>
              <strong>Laundry Room (B cells):</strong> RITUAL sacrifice (rituximab). Starve the
              survivors (belimumab).
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

