export const metadata = {
  title: 'Does Medicare Cover Cosentyx (Secukinumab)? What It Costs in 2026',
  description:
    'Cosentyx now comes as a pen you use at home and as an infusion. Medicare treats them as two different benefits, and for most people the pen costs far less. Written by a rheumatologist.',
  keywords: [
    'does medicare cover cosentyx',
    'is cosentyx covered by medicare part d',
    'cosentyx iv medicare part b',
    'secukinumab medicare cost',
    'cosentyx cost with medicare',
  ],
};

export default function SecukinumabPage() {
  return (
    <div className="page-container">
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Secukinumab
      </p>

      <div className="page-header">
        <h1>Secukinumab (Cosentyx) and Medicare</h1>
        <p>
          Since 2023 Cosentyx comes two ways: the pen you use at home, and an infusion. Medicare pays
          for them out of two different pockets, and the difference to you is large.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <ul>
          <li>
            <strong>The pen or syringe you use at home</strong> is covered by your Part D drug plan.
            Your costs stop at <strong>$2,100 for the whole year</strong> in 2026.
          </li>
          <li>
            <strong>The infusion</strong> is covered by Part B. You pay 20% of the cost with{' '}
            <strong>no yearly limit</strong> — somewhere around <strong>$6,600 or more</strong>,
            depending on your weight and how the infusion center bills the leftover medication in
            the vial.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <strong>
            For most people on Medicare, the pen is the cheaper option by thousands of dollars.
          </strong>{' '}
          That flips only if you have a Medicare supplement policy, which covers the 20% and leaves
          you paying almost nothing for the infusion.
        </p>
        <p style={{ marginTop: '1rem' }}>
          One thing to know before you consider switching: the infusion is{' '}
          <strong>not approved for plaque psoriasis</strong>. It is approved for psoriatic arthritis,
          ankylosing spondylitis and non-radiographic axial spondyloarthritis only.
        </p>
      </div>

      <div className="content-card">
        <h2>Side by side</h2>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Pen or syringe at home</th>
                <th>Infusion at a clinic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Which part of Medicare</strong></td>
                <td>Part D — your drug plan</td>
                <td>Part B — regular Medicare</td>
              </tr>
              <tr>
                <td><strong>How often</strong></td>
                <td>Once a month, after the loading doses</td>
                <td>Every 4 weeks</td>
              </tr>
              <tr>
                <td><strong>Which conditions</strong></td>
                <td>
                  Psoriatic arthritis, ankylosing spondylitis, axial spondyloarthritis, plaque
                  psoriasis
                </td>
                <td>
                  Psoriatic arthritis, ankylosing spondylitis, axial spondyloarthritis —{' '}
                  <strong>not psoriasis</strong>
                </td>
              </tr>
              <tr>
                <td><strong>Cost before insurance</strong></td>
                <td>About $102,000 a year at list price</td>
                <td>About $33,000 a year at Medicare&rsquo;s rate</td>
              </tr>
              <tr>
                <td><strong>What you pay</strong></td>
                <td><strong>Capped at $2,100</strong></td>
                <td><strong>About $6,600, no ceiling</strong></td>
              </tr>
              <tr>
                <td><strong>With a Medicare supplement</strong></td>
                <td>No change — still $2,100</td>
                <td>The supplement pays the 20%. Often about $283.</td>
              </tr>
              <tr>
                <td><strong>Will a plan cover it?</strong></td>
                <td>Yes — about 76% of plans, and 90% of standalone drug plans</td>
                <td>Yes — Part B covers it</td>
              </tr>
              <tr>
                <td><strong>Approval needed first?</strong></td>
                <td>Yes, on virtually every plan</td>
                <td><strong>No</strong>, under Original Medicare</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          The infusion is dosed by weight, so a heavier person pays more. Cosentyx comes in 125 mg
          vials, and if your dose does not divide neatly into whole vials, Medicare is billed for the
          leftover too — which can push your 20% substantially higher than the figure above. It is a
          fair question to ask your infusion center.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid #7FBF9B' }}>
        <h2>Good news: this one is usually covered</h2>
        <p>
          Some biologics are technically capped under Part D but almost impossible to find a plan
          that covers them. Cosentyx is not one of them. We went through the 2026 formularies CMS
          published:{' '}
          <strong>
            about 76% of all Medicare drug plans cover the pen, and nearly 90% of standalone drug
            plans do.
          </strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          The catch is milder but real:{' '}
          <strong>virtually every plan that covers it requires approval first</strong>, and nearly
          all of them put it on the specialty tier. That is universal, so it is not a reason to pick
          one plan over another. It is a reason to start the paperwork early and to watch for the
          renewal each January.
        </p>
      </div>

      <div className="content-card">
        <h2>Approvals and being made to try something else first</h2>
        <p>
          <strong>Original Medicare requires no prior authorization</strong> for the infusion given
          in a doctor&rsquo;s office, and cannot require you to fail a different medication first.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans can require both.</strong> One 2026 plan policy requires
          patients to try and fail two other infused biologics <em>and</em> — for members with drug
          coverage — adalimumab and the Cosentyx pen, before it will pay for the Cosentyx infusion.
          That is four medications ahead of the one your rheumatologist chose.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Policies vary a lot between plans, which is exactly why it is worth checking the specific
          plan rather than assuming. If a request is denied, appeal — across Medicare Advantage in
          2024, 81% of the denials that were appealed were overturned, and only about one in nine was
          ever appealed.
        </p>
      </div>

      <div className="content-card">
        <h2>Things that catch people out</h2>
        <ul>
          <li>
            <strong>There is no cheaper version.</strong> Secukinumab has no biosimilars, and none
            are close. So the usual &ldquo;ask about the biosimilar&rdquo; advice does not apply
            here.
          </li>
          <li>
            <strong>The Cosentyx copay card does not work if you have Medicare.</strong> Federal law
            prohibits it. The Novartis patient assistance foundation does serve Medicare patients,
            and is worth applying to if the $2,100 is out of reach.
          </li>
          <li>
            <strong>The whole $2,100 can land in January.</strong> Medicare has a program that
            spreads it across twelve interest-free monthly payments, but you have to sign up for it.
          </li>
          <li>
            <strong>
              Switching from the pen to the infusion moves you out of a capped benefit into an
              uncapped one.
            </strong>{' '}
            That is only a good trade if you have a supplement policy.
          </li>
          <li>
            <strong>Extra Help</strong> can bring the specialty-tier cost down to a few dollars if
            your income is modest. Check before you assume you do not qualify.
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
            <strong>Check your plan covers it</strong> —{' '}
            <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer">
              medicare.gov/plan-compare
            </a>
          </li>
          <li>
            <strong>Spread the January cost</strong> —{' '}
            <a
              href="https://www.medicare.gov/prescription-payment-plan"
              target="_blank"
              rel="noopener noreferrer"
            >
              medicare.gov/prescription-payment-plan
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
            <a href="/patients/insurance/golimumab">Golimumab (Simponi) and Medicare</a> — the same
            two-route question with the opposite answer
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <li>
            Cosentyx prescribing information — FDA. Subcutaneous: 150 mg at weeks 0, 1, 2, 3 and 4
            then every 4 weeks for psoriatic arthritis and spondyloarthritis, with escalation to
            300 mg permitted; 300 mg loading and maintenance for plaque psoriasis. Intravenous:
            6 mg/kg at week 0 then 1.75 mg/kg every 4 weeks, capped at 300 mg per dose, supplied in
            125 mg vials. The intravenous form was approved in October 2023 for psoriatic arthritis,
            ankylosing spondylitis and non-radiographic axial spondyloarthritis; it is not approved
            for plaque psoriasis.
          </li>
          <li>
            Medicare payment limit for intravenous secukinumab (J3247): $18.233 per mg — CMS Part B
            ASP pricing file effective July 1 &ndash; September 30, 2026. Annual figure assumes an
            80 kg adult on maintenance dosing; billing for discarded medication in partially used
            vials can raise it substantially.
          </li>
          <li>
            Novartis published list price, January 2026: $8,492.03 per monthly subcutaneous package,
            about $101,900 a year; $4,489.34 per intravenous infusion.
          </li>
          <li>
            Part D annual out-of-pocket cap $2,100 and deductible $615 for 2026 — CMS Final CY2026
            Part D Redesign Program Instructions. Part B annual deductible $283 and 20% coinsurance
            with no annual limit — CMS, &ldquo;2026 Medicare Parts A &amp; B Premiums and
            Deductibles.&rdquo;
          </li>
          <li>
            Formulary coverage of subcutaneous Cosentyx: 4,151 of 5,490 plans (75.6%), of which 97.5%
            require prior authorization and 95.6% place it on the specialty tier; 330 of 367
            standalone prescription drug plans (89.9%) — analysis of the CMS Basic Drugs Formulary
            File, released July 31, 2026. Counted by plan, not weighted by enrolment.
          </li>
          <li>
            No FDA-approved secukinumab biosimilar exists as of August 2026 — FDA Drugs@FDA; no
            biosimilar code appears on the Part B ASP file.
          </li>
          <li>
            Step therapy permitted for Medicare Advantage Part B drugs and not in Original Medicare —
            42 CFR §422.136. The step therapy example is taken from a regional Medicare Advantage
            plan&rsquo;s published medical drug prior authorization list, revised August 2026.
          </li>
          <li>
            Medicare Advantage appeal rates and outcomes for 2024 (11.5% of denials appealed, 80.7%
            overturned) — KFF analysis of CMS data, 2026.
          </li>
          <li>
            Copay assistance is prohibited for federal healthcare program beneficiaries — federal
            Anti-Kickback Statute, 42 U.S.C. §1320a-7b; Cosentyx Co-Pay Plus program terms.
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
