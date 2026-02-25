export const metadata = {
  title: 'Antiphospholipid Syndrome — Your Blood Is a Bank',
  description: 'Master APS through a banking analogy: labs, clinical manifestations, and management in three 5-minute modules. 2023 ACR/EULAR criteria, TRAPS trial, and catastrophic APS.',
};

export default function APSOverviewPage() {
  return (
    <main className="main">
      <div className="learning-hero">
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/learning">Learning</a> &gt; APS
        </p>
        <h1 className="page-title">Antiphospholipid Syndrome</h1>
        <p className="learning-subtitle">&ldquo;Your Blood Is a Bank&rdquo;</p>
      </div>

      <section className="aps-intro">
        <div className="analogy-setup-card">
          <h2 className="section-title">The Analogy</h2>
          <p>
            Imagine a massive bank — not your neighborhood branch, but a 24/7 financial network
            where trillions of transactions flow every second. This bank is your <strong>bloodstream</strong>.
          </p>
          <p>
            Red blood cells are the <strong>armored trucks</strong> carrying oxygen-cash to every organ.
            Platelets are the <strong>security team</strong>, rushing to seal any breach in the vault walls
            (your blood vessels). And the coagulation cascade? That&rsquo;s the bank&rsquo;s <strong>fraud
            detection system</strong> — a sophisticated network of checkpoints designed to stop unauthorized
            withdrawals (bleeding).
          </p>
          <p>
            Now imagine something goes wrong. The fraud detection system <em>goes rogue</em>. It starts
            flagging legitimate transactions as suspicious. Accounts get frozen. Money stops flowing to
            critical branches. Some customers lose their checking accounts. Others lose their investments.
            In the worst cases, the entire system crashes.
          </p>
          <p>
            That&rsquo;s <strong>Antiphospholipid Syndrome</strong> — and the rogue fraud detectors are
            the <strong>antiphospholipid antibodies</strong>.
          </p>
          <p>
            This three-part series walks you through the investigation: how to identify which fraud
            departments are malfunctioning (labs), what happens when they freeze accounts across the bank
            (clinical manifestations), and how to override the system and keep the money flowing (management).
          </p>
        </div>
      </section>

      <section className="learning-topics">
        <h2 className="section-title">Modules</h2>

        <a href="/learning/aps/labs" className="module-overview-card">
          <div className="module-overview-number">1</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Lab Interpretation</span>
            </div>
            <h3>Decoding the Labs</h3>
            <p className="topic-card-analogy">&ldquo;The Three Fraud Departments&rdquo;</p>
            <p className="topic-card-description">
              Meet the three departments responsible for the chaos: the Transaction Speed Monitor
              (Lupus Anticoagulant), the Pattern Scanner (Anticardiolipin), and the Identity
              Investigator (Anti-β2GPI). Learn how each is detected, why LA is an &ldquo;in vitro
              anticoagulant but in vivo procoagulant,&rdquo; and what triple positivity means for your patient.
            </p>
            <span className="topic-card-cta">Start Module →</span>
          </div>
        </a>

        <a href="/learning/aps/clinical" className="module-overview-card">
          <div className="module-overview-number">2</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Clinical Manifestations</span>
            </div>
            <h3>When Accounts Get Frozen</h3>
            <p className="topic-card-analogy">&ldquo;The Six Clinical Domains&rdquo;</p>
            <p className="topic-card-description">
              The fraud system has started freezing accounts. Checking accounts (venous thrombosis),
              investment accounts (arterial), ATMs (microvascular), wire transfers (obstetric),
              vault doors (cardiac valves), and even the bank&rsquo;s own employees (hematologic).
              Master the 2023 ACR/EULAR scoring framework and catastrophic APS.
            </p>
            <span className="topic-card-cta">Start Module →</span>
          </div>
        </a>

        <a href="/learning/aps/management" className="module-overview-card">
          <div className="module-overview-number">3</div>
          <div className="module-overview-content">
            <div className="topic-card-tags">
              <span className="topic-tag">5 min</span>
              <span className="topic-tag">Management & Treatment</span>
            </div>
            <h3>Unfreezing the Accounts</h3>
            <p className="topic-card-analogy">&ldquo;The Override Playbook&rdquo;</p>
            <p className="topic-card-description">
              Four tiers of crisis management: basic safeguards for at-risk customers (aspirin),
              the manual override team (warfarin — and why the automated app DOACs failed),
              security escorts for the construction project (obstetric management), and the
              emergency response protocol (CAPS). Includes the TRAPS trial and why warfarin still wins.
            </p>
            <span className="topic-card-cta">Start Module →</span>
          </div>
        </a>
      </section>

      <section className="aps-references">
        <h2 className="section-title">Key References</h2>
        <div className="references-card">
          <ul className="references-list">
            <li>
              Barbhaiya M, Zuily S, Naden R, et al. The 2023 ACR/EULAR Antiphospholipid Syndrome
              Classification Criteria. <em>Arthritis Rheumatol</em>. 2023;75(10):1687-1702.
            </li>
            <li>
              Tektonidou MG, Andreoli L, Limper M, et al. EULAR recommendations for the management
              of antiphospholipid syndrome in adults. <em>Ann Rheum Dis</em>. 2019;78(10):1296-1304.
            </li>
            <li>
              Pengo V, Denas G, Zoppellaro G, et al. Rivaroxaban vs warfarin in high-risk patients
              with antiphospholipid syndrome (TRAPS). <em>Blood</em>. 2018;132(13):1365-1371.
            </li>
            <li>
              Patriarcheas V, Tsamos G, Vasdeki D, et al. Antiphospholipid Syndrome: A Comprehensive
              Clinical Review. <em>J Clin Med</em>. 2025;14(3):733.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
