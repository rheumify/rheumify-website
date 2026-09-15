import ReadingControls from '../ReadingControls';

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
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Golimumab
      </p>

      <div className="page-header">
        <h1>Golimumab (Simponi and Simponi Aria) and Medicare</h1>
        <p>
          Two brand names, one medicine. Simponi is the shot you give yourself. Simponi Aria is the
          infusion. On paper the shot is capped and the infusion is not. But for almost everyone on
          Medicare, the shot is not available in practice.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Start with the finding that matters</h2>
        <p>
          CMS publishes a formulary, or drug list, for every 2026 Medicare drug plan. We went through
          all of them and counted.{' '}
          <strong>
            Simponi, the shot, is covered by 45 of 5,518 plans. That is under 1%. Among standalone
            drug plans, the number is zero.
          </strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          The $2,100 Part D cap sounds like it protects you. But for nearly every Medicare patient on
          this drug, it does not apply in real life. The real-world numbers agree. About 33,000
          people on Medicare get Simponi Aria through Part B. Only about 3,700 get Simponi through
          Part D.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>
            If you are on Medicare and take golimumab, you are almost certainly on the infusion.
          </strong>{' '}
          The rest of this page is about keeping that cost as low as possible.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>What the infusion costs</h2>
        <p>
          Simponi Aria is covered by <strong>Part B</strong>. You pay 20% with{' '}
          <strong>no yearly limit.</strong> The dose depends on your weight. After the first two
          doses, you get it every eight weeks.
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
          <strong>A Medicare supplement policy changes this completely.</strong> It covers the 20%.
          You pay the $283 Part B deductible and then nothing. For someone on this drug, that is
          worth well over $2,000 a year.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Simponi Aria comes in 50 mg vials. Your dose may not divide evenly into whole vials. If
          so, Medicare is billed for the leftover. That is why 80 kg costs noticeably more than 75
          kg. The infusion visit is billed separately. You pay 20% of that too.
        </p>
      </div>

      <div className="content-card">
        <h2>Which route is approved for what</h2>
        <p>On paper, the two forms are not approved for the same uses. The differences are easy to miss:</p>
        <ul>
          <li>
            <strong>Ulcerative colitis is the shot only.</strong> Simponi Aria is not approved for
            it. So someone with UC cannot move to the infusion.
          </li>
          <li>
            <strong>Juvenile arthritis is the infusion only.</strong> Simponi Aria is approved from
            age 2. The shot is not approved for it.
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
          In May 2026 the FDA approved the first golimumab biosimilars. A biosimilar is the same
          medicine made by a different company. One is for the shot and one is for the infusion.
          Both were approved as <strong>interchangeable</strong>. That is the strongest label the
          FDA gives.
        </p>
        <p style={{ marginTop: '1rem' }}>
          They are not on sale yet. No price has been published. There is a legal dispute over the
          launch. They are also approved for fewer conditions than the originals. So do not plan
          around them yet. If your infusion is expensive, ask again in a year.
        </p>
      </div>

      <div className="content-card">
        <h2>Approvals and trying other drugs first</h2>
        <p>
          <strong>Original Medicare requires no prior authorization</strong> for Simponi Aria given
          in a doctor&rsquo;s office. That means no approval is needed before you can get it.
          Original Medicare also cannot make you fail a different drug first.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans vary wildly on this</strong>, more than for any other
          drug on this site. One national insurer&rsquo;s 2026 policy lists Simponi Aria as
          non-preferred for rheumatoid arthritis. It requires you to try a long list of
          self-injected drugs first. Another plan lists it as a <em>preferred</em> first-line
          option.
        </p>
        <p style={{ marginTop: '1rem' }}>
          That difference means real money and real delay. You cannot see it in the plan brochure.
          If you are on this drug and choosing an Advantage plan, ask about this by name.
        </p>
        <p style={{ marginTop: '1rem' }}>
          If a request is denied, <strong>appeal.</strong> In 2024, 81% of appealed Medicare
          Advantage denials were overturned. Only about one in nine denials was ever appealed.
        </p>
      </div>

      <div className="content-card">
        <h2>Five things to check</h2>
        <ul>
          <li>
            <strong>The names are easy to mix up.</strong> Simponi and Simponi Aria are billed
            through completely different parts of Medicare. If someone quotes you a price, check
            which one they mean.
          </li>
          <li>
            <strong>The copay card does not work if you have Medicare.</strong> Federal law bans
            it. That includes Medicare Advantage and Medigap, the supplement policy.
          </li>
          <li>
            <strong>The drug maker&rsquo;s foundation does serve Medicare patients</strong>, for
            both products, based on income. Say you face $2,800 a year with no supplement. This is
            the first call to make.
          </li>
          <li>
            <strong>Where you get infused changes the price.</strong> A hospital outpatient
            department adds a facility fee. That is a second bill from the hospital for the room.
            An office or independent infusion suite does not add one.
          </li>
          <li>
            <strong>Your dose follows your weight.</strong> If you gain or lose enough to need a
            different number of vials, what you pay changes.
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

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Why isn&rsquo;t my infusion covered by the $2,100 cap?</h2>
        <p>
          <strong>Because the $2,100 cap only applies to Part D. An infusion is paid by Part
          B.</strong> The cap Congress created covers drugs you pick up and take yourself. A drug a
          nurse or doctor gives you is paid under Part B instead. There you owe 20% of the cost
          every time. And <strong>there is no yearly ceiling at all</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          It is the same Medicare. It is often the same drug, and often the same disease. The rule
          book depends on who puts the medicine in you. The cap and the Part B coinsurance, your
          20%, are two separate rules. News about one does not change the other.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Here is an example. If Medicare&rsquo;s approved amount for a year of your infusions is
          $18,000, you owe about <strong>$3,600</strong>. That is this year, next year, and every
          year you stay on it. The $2,100 cap does not apply to any of it.
        </p>
        <p style={{ marginTop: '1rem' }}>Four things do put a ceiling on Part B costs:</p>
        <ul>
          <li>
            <strong>A Medicare supplement (Medigap) policy</strong>, which pays the 20% for you. This
            is the main one. In most states, the{' '}
            <a href="/patients/insurance">window to buy one closes</a> six months after you enroll in
            Part B.
          </li>
          <li>
            <strong>A Medicare Advantage plan&rsquo;s yearly out-of-pocket maximum</strong>, the
            most you pay in a year. It applies to everything the plan covers. But it comes with
            prior authorization attached.
          </li>
          <li>
            <strong>QMB</strong>, a Medicare Savings Program that removes the 20% entirely.{' '}
            <a href="/patients/insurance/help-paying">QMB and Extra Help are different programs</a>.
            Extra Help applies to Part D drugs only. It does nothing for a Part B drug.
          </li>
          <li>
            <strong>Full Medicaid</strong>, or retiree coverage that pays after Medicare.
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
          <li>
            <a href="/patients/insurance/where-you-get-infused">
              Where you get infused changes the bill
            </a>{' '}
            &mdash; the same infusion costs more at a hospital, and the drug bill Medicare does not cover
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
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20golimumab%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
