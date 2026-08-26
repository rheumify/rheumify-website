export const metadata = {
  title: 'Does Medicare Cover Simponi and Simponi Aria (Golimumab)? 2026 Costs',
  description:
    'Simponi and Simponi Aria are the same medicine by different routes. Under Medicare the self-injection is capped at $2,100 — but almost no Medicare drug plan covers it. What that means for you. Written by a rheumatologist.',
  keywords: [
    'does medicare cover simponi',
    'simponi aria medicare cost',
    'golimumab medicare part b',
    'is simponi covered by medicare part d',
    'simponi aria infusion cost',
  ],
};

export default function GolimumabPage() {
  return (
    <div className="page-container">
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Golimumab
      </p>

      <div className="page-header">
        <h1>Golimumab (Simponi and Simponi Aria) and Medicare</h1>
        <p>
          Two brand names, one medicine. Simponi is the shot you give yourself; Simponi Aria is the
          infusion. On paper the shot is capped and the infusion is not — but for almost everyone on
          Medicare, the shot is not actually available.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Start with the finding that matters</h2>
        <p>
          We went through every 2026 Medicare drug plan formulary CMS publishes and counted.{' '}
          <strong>
            Simponi, the self-injection, is covered by 45 of 5,518 plans — under 1%. Among
            standalone drug plans, the number is zero.
          </strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          So the $2,100 Part D cap, which sounds like it protects you, is theoretical for nearly
          every Medicare patient on this medication. The real-world numbers agree: about 33,000
          Medicare beneficiaries get Simponi Aria through Part B, and only about 3,700 get Simponi
          through Part D.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>
            In practice, if you are on Medicare and taking golimumab, you are almost certainly on the
            infusion
          </strong>{' '}
          — and the rest of this page is about making that as affordable as possible.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>What the infusion costs</h2>
        <p>
          Simponi Aria is covered by <strong>Part B</strong>. You pay 20% with{' '}
          <strong>no yearly limit.</strong> The dose depends on your weight, and it is given every
          eight weeks after the first two doses.
        </p>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>If you weigh about</th>
                <th>Your 20%, a maintenance year</th>
                <th>Your 20%, the first year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>70&ndash;75 kg (155&ndash;165 lb)</td>
                <td>about $2,150</td>
                <td>about $2,650</td>
              </tr>
              <tr>
                <td>80 kg (175 lb)</td>
                <td>about $2,870</td>
                <td>about $3,530</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <strong>A Medicare supplement policy changes this completely.</strong> It covers the 20%,
          so you pay the $283 Part B deductible and then nothing. For someone on this medication,
          that is worth well over $2,000 a year.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Simponi Aria comes in 50 mg vials. If your dose does not divide evenly into whole vials,
          Medicare is billed for the remainder — which is why 80 kg costs noticeably more than 75 kg.
          The infusion visit is billed separately and you pay 20% of that too.
        </p>
      </div>

      <div className="content-card">
        <h2>Which route is approved for what</h2>
        <p>The two forms are not interchangeable on paper, and the differences are easy to miss:</p>
        <ul>
          <li>
            <strong>Ulcerative colitis is the shot only.</strong> Simponi Aria is not approved for
            it, so someone with UC cannot move to the infusion.
          </li>
          <li>
            <strong>Juvenile arthritis is the infusion only.</strong> Simponi Aria is approved from
            age 2; the shot is not approved for it.
          </li>
          <li>
            Rheumatoid arthritis, psoriatic arthritis and ankylosing spondylitis are approved for
            both.
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Cheaper versions are approved but not yet on sale</h2>
        <p>
          In May 2026 the FDA approved the first golimumab biosimilars — one for the shot and one for
          the infusion — and both were approved as <strong>interchangeable</strong>, which is the
          strongest designation the FDA gives.
        </p>
        <p style={{ marginTop: '1rem' }}>
          They are not on the market yet, no price has been published, and there is a legal dispute
          over the launch. Their approved conditions are also narrower than the originals. So this is
          worth knowing about and not worth planning around. If your infusion is expensive, ask again
          in a year.
        </p>
      </div>

      <div className="content-card">
        <h2>Approvals and being made to try something else first</h2>
        <p>
          <strong>Original Medicare requires no prior authorization</strong> for Simponi Aria given
          in a doctor&rsquo;s office, and cannot require you to fail a different medication first.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans vary wildly on this one</strong>, more than for any other
          drug on this site. One national insurer&rsquo;s 2026 policy lists Simponi Aria as
          non-preferred for rheumatoid arthritis and requires you to try a long list of
          self-injectable medications first. Another plan lists it as a <em>preferred</em> first-line
          option.
        </p>
        <p style={{ marginTop: '1rem' }}>
          That difference is worth real money and real delay, and it is not visible from the plan
          brochure. If you are choosing an Advantage plan and you are on this medication, this is the
          specific thing to ask about by name.
        </p>
        <p style={{ marginTop: '1rem' }}>
          If a request is denied, <strong>appeal.</strong> Across Medicare Advantage in 2024, 81% of
          appealed denials were overturned, and only about one in nine was ever appealed.
        </p>
      </div>

      <div className="content-card">
        <h2>Things that surprise people</h2>
        <ul>
          <li>
            <strong>The names are confusingly similar.</strong> Simponi and Simponi Aria are billed
            through completely different parts of Medicare. If someone quotes you a price, check
            which one they mean.
          </li>
          <li>
            <strong>The copay card does not work if you have Medicare.</strong> Federal law prohibits
            it, and that includes Medicare Advantage and Medigap.
          </li>
          <li>
            <strong>The manufacturer&rsquo;s foundation does serve Medicare patients</strong>, for
            both products, based on income. For someone facing $2,800 a year with no supplement, this
            is the first call to make.
          </li>
          <li>
            <strong>Where you get infused changes the price.</strong> A hospital outpatient
            department adds a facility fee that an office or independent infusion suite does not.
          </li>
          <li>
            <strong>Your dose follows your weight.</strong> Gaining or losing enough to cross a vial
            boundary changes what you pay.
          </li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Free help, from someone who is not paid a commission</h2>
        <ul>
          <li>
            <strong>Washington: SHIBA</strong> —{' '}
            <a href="https://www.insurance.wa.gov/shiba" target="_blank" rel="noopener noreferrer">
              insurance.wa.gov/shiba
            </a>{' '}
            or 1-800-562-6900
          </li>
          <li>
            <strong>Any other state: SHIP</strong> —{' '}
            <a href="https://www.shiphelp.org" target="_blank" rel="noopener noreferrer">
              shiphelp.org
            </a>
          </li>
          <li>
            <strong>Compare plans</strong> —{' '}
            <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer">
              medicare.gov/plan-compare
            </a>
          </li>
          <li>
            <strong>Extra Help</strong> —{' '}
            <a href="https://www.ssa.gov/medicare/part-d-extra-help" target="_blank" rel="noopener noreferrer">
              ssa.gov/medicare/part-d-extra-help
            </a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Related</h2>
        <ul>
          <li>
            <a href="/patients/insurance">Medicare and your medication</a>
          </li>
          <li>
            <a href="/patients/insurance/prior-authorization">
              Why your medication needs permission first
            </a>
          </li>
          <li>
            <a href="/patients/insurance/secukinumab">Secukinumab (Cosentyx) and Medicare</a> — the
            same two-route question, where the home version <em>is</em> widely covered
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <li>
            Simponi and Simponi Aria prescribing information — FDA, via DailyMed. Simponi: 50 mg
            subcutaneously once monthly for rheumatoid arthritis, psoriatic arthritis and ankylosing
            spondylitis; separate regimen for ulcerative colitis. Simponi Aria: 2 mg/kg intravenously
            at weeks 0 and 4, then every 8 weeks; supplied in 50 mg vials. Ulcerative colitis is
            approved for the subcutaneous form only; polyarticular juvenile idiopathic arthritis for
            the intravenous form only.
          </li>
          <li>
            Medicare payment limit for intravenous golimumab (J1602): $11.035 per mg — CMS Part B ASP
            pricing file effective July 1 &ndash; September 30, 2026. Annual figures assume 6.5
            maintenance infusions, or 8 infusions in the first year, with billing for medication
            discarded from partially used vials.
          </li>
          <li>
            Part B annual deductible $283 and 20% coinsurance with no annual limit for 2026 — CMS,
            &ldquo;2026 Medicare Parts A &amp; B Premiums and Deductibles&rdquo;; Social Security Act
            §1833(a). Part D annual out-of-pocket cap $2,100 — CMS Final CY2026 Part D Redesign
            Program Instructions.
          </li>
          <li>
            Formulary coverage of Simponi 50 mg: 45 of 5,518 plans (0.8%), and 0 of 367 standalone
            prescription drug plans — analysis of the CMS Basic Drugs Formulary File, released
            July 31, 2026. Of the plans that do cover it, 97.8% require prior authorization and 40 of
            45 place it on the specialty tier. Method checked against Enbrel and Humira, both covered
            by over 99% of plans.
          </li>
          <li>
            Medicare spending 2024: Simponi Aria (J1602) $330 million across 33,452 beneficiaries
            under Part B; Simponi $185 million across 3,667 beneficiaries under Part D — CMS Medicare
            drug spending dashboards.
          </li>
          <li>
            First golimumab biosimilars approved May 15, 2026, both as interchangeable products, with
            narrower approved conditions than the originals — FDA. Launch timing, price and the
            related litigation were unresolved at the time of writing.
          </li>
          <li>
            No prior authorization program in Original Medicare covers physician-administered drugs —
            CMS, Prior Authorization and Pre-Claim Review Initiatives. Step therapy permitted for
            Medicare Advantage Part B drugs — 42 CFR §422.136. The contrasting preferred and
            non-preferred examples are taken from two insurers&rsquo; published 2026 Part B drug
            lists.
          </li>
          <li>
            Medicare Advantage appeal rates and outcomes for 2024 (11.5% of denials appealed, 80.7%
            overturned) — KFF analysis of CMS data, 2026.
          </li>
          <li>
            Copay assistance is prohibited for federal healthcare program beneficiaries — federal
            Anti-Kickback Statute, 42 U.S.C. §1320a-7b; Janssen CarePath program terms. The Johnson
            &amp; Johnson Patient Assistance Foundation accepts Medicare beneficiaries subject to
            income limits.
          </li>
        </ol>
      </div>

      <div className="content-card">
        <h2>About this page</h2>
        <p>
          Written and reviewed by <strong>Alison Bays, MD, MPH</strong>, board-certified
          rheumatologist. Figures are current for <strong>2026</strong> and were last checked in
          August 2026.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>This is educational information, not advice</strong> — not medical, legal,
          financial or insurance advice, and not a substitute for talking to your doctor or your
          plan. Nothing is sold here. No insurance is sold here, no plan is recommended, and neither
          this page nor its author is paid by any insurance company, plan, pharmaceutical
          manufacturer or broker. This page is not affiliated with, endorsed by, or connected to
          Medicare, the Centers for Medicare &amp; Medicaid Services, or any government agency.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Found something wrong? Please tell us — accuracy matters more than being finished.
        </p>
      </div>
    </div>
  );
}
