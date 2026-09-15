import ReadingControls from '../ReadingControls';

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
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Secukinumab
      </p>

      <div className="page-header">
        <h1>Secukinumab (Cosentyx) and Medicare</h1>
        <p>
          Since 2023 Cosentyx comes two ways. There is a pen you use at home. There is also an
          infusion given at a clinic. Medicare pays for them out of two different pockets. The
          difference to you is large.
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
            <strong>The infusion</strong> is covered by Part B. You pay 20% of the cost. There is{' '}
            <strong>no yearly limit</strong>. That comes to about <strong>$6,600 or more</strong>.
            The exact amount depends on your weight. It also depends on how the infusion center
            bills the leftover medicine in the vial.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <strong>
            For most people on Medicare, the pen is cheaper by thousands of dollars.
          </strong>{' '}
          That changes only if you have a Medicare supplement policy. A supplement policy covers
          the 20%. Then you pay almost nothing for the infusion.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Know this before you think about switching. The infusion is{' '}
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
          The infusion is dosed by weight. So a heavier person pays more. Cosentyx comes in 125 mg
          vials. Your dose may not divide neatly into whole vials. If so, Medicare is billed for the
          leftover too. That can push your 20% well above the figure above. It is a fair question
          to ask your infusion center.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid #7FBF9B' }}>
        <h2>Good news: this one is usually covered</h2>
        <p>
          Some biologics are capped under Part D on paper. But it is almost impossible to find a
          plan that covers them. Cosentyx is not one of them. We went through the 2026 formularies
          CMS published. A formulary is the plan&rsquo;s drug list.{' '}
          <strong>
            About 76% of all Medicare drug plans cover the pen. Nearly 90% of standalone drug plans
            do.
          </strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          There is a catch, but it is a mild one.{' '}
          <strong>Almost every plan that covers it requires approval first</strong>. This is called
          prior authorization. Nearly all plans also put it on the specialty tier. That is the
          highest-cost group of drugs. This is true on every plan. So it is not a reason to pick
          one plan over another. It is a reason to start the paperwork early. Also watch for the
          renewal each January.
        </p>
      </div>

      <div className="content-card">
        <h2>Approvals and being made to try something else first</h2>
        <p>
          <strong>Original Medicare requires no prior authorization</strong> for the infusion given
          in a doctor&rsquo;s office. It also cannot make you fail a different medication first.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans can require both.</strong> Here is one 2026 plan policy.
          Before it pays for the Cosentyx infusion, you must try and fail two other infused
          biologics. If you have drug coverage, you must <em>also</em> try and fail adalimumab and
          the Cosentyx pen. That is four medications ahead of the one your rheumatologist chose.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Policies vary a lot between plans. So check your specific plan. Do not assume. If a
          request is denied, appeal. In 2024, 81% of Medicare Advantage denials that were appealed
          were overturned. Only about one in nine was ever appealed.
        </p>
      </div>

      <div className="content-card">
        <h2>Things to know</h2>
        <ul>
          <li>
            <strong>There is no cheaper version.</strong> Secukinumab has no biosimilars. A
            biosimilar is the same medicine made by a different company. None are close. So the
            usual &ldquo;ask about the biosimilar&rdquo; advice does not apply here.
          </li>
          <li>
            <strong>The Cosentyx copay card does not work if you have Medicare.</strong> Federal law
            prohibits it. The Novartis patient assistance foundation does serve Medicare patients.
            Apply there if the $2,100 is out of reach.
          </li>
          <li>
            <strong>The whole $2,100 can land in January.</strong> Medicare has a program that
            spreads it across twelve interest-free monthly payments. But you have to sign up for it.
          </li>
          <li>
            <strong>
              Switching from the pen to the infusion moves you from a capped benefit to an uncapped
              one.
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

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Why isn&rsquo;t my infusion covered by the $2,100 cap?</h2>
        <p>
          <strong>Because the $2,100 cap only applies to Part D. An infusion is paid by Part
          B.</strong> The cap Congress created covers drugs you pick up and take yourself. A
          medicine a nurse or doctor gives you is paid under Part B instead. There you owe 20% of
          the cost every time. And <strong>there is no annual ceiling at all</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          It is the same Medicare. It is often the same drug. It is often the same disease. The
          rulebook depends on who puts the medicine in you. The cap and the Part B coinsurance
          (your 20%) are two separate rules. News about one does not change the other.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Here is an example. If Medicare&rsquo;s approved amount for a year of your infusions is
          $18,000, you owe about <strong>$3,600</strong>. That is true this year, next year, and
          every year you stay on it. The $2,100 cap does not apply to any of it.
        </p>
        <p style={{ marginTop: '1rem' }}>Four things do put a ceiling on Part B costs:</p>
        <ul>
          <li>
            <strong>A Medicare supplement (Medigap) policy</strong>, which pays the 20% for you. This
            is the main one. The{' '}
            <a href="/patients/insurance">window to buy one closes</a> six months after you enroll in
            Part B in most states.
          </li>
          <li>
            <strong>A Medicare Advantage plan&rsquo;s yearly out-of-pocket maximum</strong>. This is
            the most you pay in a year. It applies to everything the plan covers. But it comes with
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
            <a href="/patients/insurance/golimumab">Golimumab (Simponi) and Medicare</a> — the same
            two-route question with the opposite answer
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
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20secukinumab%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
