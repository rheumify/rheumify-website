export const metadata = {
  title: 'Does Medicare Cover Orencia (Abatacept)? What It Costs in 2026',
  description:
    'Orencia comes as an infusion and as a weekly shot. The shot looks far cheaper under Medicare — but most drug plans do not cover it. What that actually means for what you pay. Written by a rheumatologist.',
  keywords: [
    'does medicare cover orencia',
    'is orencia covered by medicare part b',
    'does medicare part d cover orencia',
    'abatacept medicare cost',
    'orencia clickject medicare',
    'orencia infusion cost medicare',
  ],
};

export default function AbataceptPage() {
  return (
    <div className="page-container">
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Abatacept
      </p>

      <div className="page-header">
        <h1>Abatacept (Orencia) and Medicare</h1>
        <p>
          The infusion and the weekly shot are the same medicine. Medicare pays for them under two
          different programs, and the gap between what you pay is close to $7,000 a year.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <ul>
          <li>
            <strong>The infusion</strong> is covered by Part B. You pay 20% of the cost with{' '}
            <strong>no yearly limit</strong> — roughly <strong>$8,900 a year</strong> for a
            mid-weight adult. A Medicare supplement policy covers that 20% and brings it down to
            almost nothing.
          </li>
          <li>
            <strong>The weekly shot</strong> is covered by Part D. Your costs stop at{' '}
            <strong>$2,100 for the whole year</strong> in 2026, whatever the medication costs.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          So on paper the shot wins by a wide margin. <strong>The problem is getting a plan that
          covers it</strong> — and that is the part of this page worth reading carefully.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Most drug plans do not cover the self-injection</h2>
        <p>
          We went through the drug plan formularies CMS published for 2026 and counted. Of 5,490
          Medicare drug plans, <strong>only about 23% cover Orencia&rsquo;s self-injection at
          all.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          And it is much worse in the place most people look. Among <strong>standalone drug plans</strong>{' '}
          — the kind you buy alongside Original Medicare — <strong>5 out of 367 cover it. That is
          1.4%.</strong> The plans that do cover it are overwhelmingly Medicare Advantage plans.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Which produces a genuinely awkward situation. The cheaper route is the shot. But the
          coverage that makes the infusion affordable — Original Medicare plus a supplement — comes
          with a standalone drug plan that almost certainly will not pay for the shot. And the plans
          that do cover the shot are the ones that make you get permission before every infusion and
          limit which doctors you can see.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>What to do about it:</strong> do not assume. Put &ldquo;Orencia&rdquo; into{' '}
          <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer">
            Medicare&rsquo;s plan finder
          </a>{' '}
          with the exact form you take, and see which plans in your area actually list it. If none
          do, the infusion is your route, and then a supplement policy matters enormously.
        </p>
      </div>

      <div className="content-card">
        <h2>The two forms, side by side</h2>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Weekly shot (125 mg)</th>
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
                <td>Once a week, at home</td>
                <td>Every 4 weeks, after the first month</td>
              </tr>
              <tr>
                <td><strong>Cost before insurance</strong></td>
                <td>About $79,000 a year at list price</td>
                <td>About $45,000 a year at Medicare&rsquo;s rate</td>
              </tr>
              <tr>
                <td><strong>What you pay</strong></td>
                <td>
                  Capped at <strong>$2,100 for the year</strong>
                </td>
                <td>
                  $283 deductible, then 20% of every infusion —{' '}
                  <strong>about $8,900 a year, with no ceiling</strong>
                </td>
              </tr>
              <tr>
                <td><strong>With a Medicare supplement</strong></td>
                <td>No change — still $2,100</td>
                <td>The supplement covers the 20%. Often about $283.</td>
              </tr>
              <tr>
                <td><strong>Will a plan cover it?</strong></td>
                <td>
                  <strong>Usually not</strong> — about 23% of plans, 1.4% of standalone drug plans
                </td>
                <td>Yes — Part B covers it</td>
              </tr>
              <tr>
                <td><strong>Does someone approve it first?</strong></td>
                <td>Yes, on 92% of the plans that cover it</td>
                <td>
                  <strong>No</strong>, under Original Medicare
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Infusion figures use Medicare&rsquo;s published payment rate and the 750 mg dose, which is
          what an adult between 60 and 100 kg receives. Under 60 kg the dose is 500 mg and your 20%
          is closer to $6,000; over 100 kg it is 1,000 mg and closer to $11,900. The first year has
          two extra doses. The infusion visit itself is billed separately, and you pay 20% of that
          too.
        </p>
      </div>

      <div className="content-card">
        <h2>Which is cheaper for you</h2>
        <ul>
          <li>
            <strong>Original Medicare, no supplement, and you can find a plan covering the shot:</strong>{' '}
            the shot, by roughly $6,800 a year. This is the best outcome and the hardest to arrange.
          </li>
          <li>
            <strong>Original Medicare with a supplement policy:</strong> the infusion, by roughly
            $1,800 a year. The supplement absorbs the 20%, so you are left with about the Part B
            deductible — while the shot would still cost you the full $2,100.
          </li>
          <li>
            <strong>Original Medicare, no supplement, no plan covering the shot:</strong> the
            infusion, and about $8,900 a year with nothing stopping it if your weight or dose
            changes. This is the situation to actively avoid, and the way to avoid it is a
            supplement policy.
          </li>
          <li>
            <strong>Medicare Advantage:</strong> the plan sets its own charges and everything stops
            at the plan&rsquo;s yearly limit. But read the next section, because with Advantage the
            price is not the problem.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <strong>Whether the shot or the infusion is right for you is a medical question.</strong>{' '}
          They are not identical in practice — the infusion is given by a nurse who is watching you,
          the shot is weekly and you do it yourself. But if money is the only thing pushing you one
          way, say so at your next appointment.
        </p>
      </div>

      <div className="content-card">
        <h2>Nobody has to approve the infusion — under Original Medicare</h2>
        <p>
          If you are on Original Medicare and you get abatacept as an infusion,{' '}
          <strong>there is no prior authorization.</strong> Nothing to submit, nothing to wait for,
          and nobody can require you to fail a different medication first. Original Medicare is not
          permitted to do either.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans are permitted to do both.</strong> This is not
          theoretical — one large national insurer&rsquo;s 2026 policy lists Orencia infusion as
          &ldquo;non-preferred&rdquo; and requires members to try one of six other infused
          medications first. Your rheumatologist may have chosen abatacept for a specific reason,
          and the plan can still require the other drug first.
        </p>
        <p style={{ marginTop: '1rem' }}>
          For the shot, approval is nearly universal — required by 92% of the plans that cover it at
          all, and nine in ten put it on the specialty tier. That is not a reason to pick one drug
          plan over another. It is a reason to start the paperwork early and never assume a renewal
          is automatic.
        </p>
        <p style={{ marginTop: '1rem' }}>
          If you are turned down, <strong>appeal.</strong> Across Medicare Advantage in 2024 only
          about one denial in nine was appealed — and 81% of those appeals succeeded.
        </p>
      </div>

      <div className="content-card">
        <h2>There is no cheaper version yet</h2>
        <p>
          Some biologics now have biosimilars — the same medicine from a different company, at a
          lower price. Abatacept does not. <strong>As of August 2026 the FDA has not approved any
          abatacept biosimilar.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          One is in the pipeline: the FDA accepted an application in February 2026. Accepted is not
          approved, and there is no date. So unlike some other infusions, there is currently no
          cheaper version to ask your doctor about — which makes the coverage decisions above matter
          more, not less.
        </p>
      </div>

      <div className="content-card">
        <h2>Things that surprise people</h2>
        <ul>
          <li>
            <strong>The Orencia copay card does not work if you have Medicare.</strong> Federal law
            prohibits it, and that includes Medicare Advantage and Medigap. It is not the plan being
            difficult.
          </li>
          <li>
            <strong>But the manufacturer&rsquo;s foundation is a different thing, and it does help
            Medicare patients.</strong> The Bristol Myers Squibb Patient Assistance Foundation can
            supply the medication free if your income is below their limit, you have spent at least
            3% of your household income on prescriptions this year, and you have applied for Extra
            Help and been turned down. That last requirement trips people up — apply for Extra Help
            first, and keep the denial letter.
          </li>
          <li>
            <strong>Where you get infused changes what you pay.</strong> A hospital outpatient
            department adds a facility fee that a doctor&rsquo;s office does not. If your bill feels
            higher than it should, ask where the infusion is being billed from.
          </li>
          <li>
            <strong>The whole $2,100 can land in January.</strong> Medicare has a program that
            spreads it across twelve months instead, interest-free — but you have to sign up. It is
            called the Medicare Prescription Payment Plan.
          </li>
          <li>
            <strong>Your dose depends on your weight.</strong> If your weight crosses 60 kg or 100
            kg, your dose changes and so does your 20%. This surprises people mid-year.
          </li>
          <li>
            <strong>Extra Help.</strong> If your income is modest it can bring Part D costs to
            nearly nothing, and it is the gateway to the manufacturer foundation above. Badly
            underused.
          </li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Free help, from someone who is not paid a commission</h2>
        <p>
          Given how few drug plans cover the self-injection, this is a medication where sitting down
          with a counselor and checking your actual local plans is worth real money. It is free, and
          they earn nothing whichever plan you choose.
        </p>
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
            <strong>Check which plans cover it where you live</strong> —{' '}
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
            <a
              href="https://www.ssa.gov/medicare/part-d-extra-help"
              target="_blank"
              rel="noopener noreferrer"
            >
              ssa.gov/medicare/part-d-extra-help
            </a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Related</h2>
        <ul>
          <li>
            <a href="/patients/insurance">Medicare and your medication</a> — look up any other
            medication and compare your coverage options
          </li>
          <li>
            <a href="/patients/insurance/prior-authorization">
              Why your medication needs permission first
            </a>
          </li>
          <li>
            <a href="/patients/insurance/tocilizumab">Tocilizumab (Actemra) and Medicare</a> — the
            same infusion-versus-shot question, with a different answer
          </li>
          <li>
            <a href="/patients/conditions/rheumatoid-arthritis">Rheumatoid arthritis guide</a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol
          style={{
            color: 'var(--gray-light)',
            marginLeft: '1.5rem',
            lineHeight: 1.8,
            fontSize: '0.95rem',
          }}
        >
          <li>
            Orencia prescribing information — FDA, via DailyMed. Adult rheumatoid arthritis dosing:
            intravenously by weight (500 mg under 60 kg, 750 mg for 60&ndash;100 kg, 1,000 mg over
            100 kg) at weeks 0, 2 and 4, then every 4 weeks; or 125 mg subcutaneously once weekly,
            with the intravenous loading dose optional.
          </li>
          <li>
            Medicare payment limit for abatacept (HCPCS J0129): $45.859 per 10 mg — CMS Part B ASP
            pricing file effective July 1 &ndash; September 30, 2026. A 750 mg dose is 75 units, so
            $3,439 per infusion; 13 maintenance infusions is $44,713 allowed, of which your 20% is
            about $8,943.
          </li>
          <li>
            Orencia 125 mg prefilled syringe and ClickJect wholesale acquisition cost of $1,517.65
            each — Bristol Myers Squibb published pricing disclosure. Weekly dosing gives an annual
            list cost of about $78,900.
          </li>
          <li>
            Part D annual out-of-pocket cap of $2,100 and deductible of $615 for 2026 — CMS Final
            CY2026 Part D Redesign Program Instructions. Cap established by the Inflation Reduction
            Act of 2022. The 2027 cap is $2,400.
          </li>
          <li>
            Part B annual deductible of $283 and 20% coinsurance with no annual limit for 2026 —
            CMS, &ldquo;2026 Medicare Parts A &amp; B Premiums and Deductibles,&rdquo; November 2025;
            Social Security Act §1833(a).
          </li>
          <li>
            Formulary coverage of Orencia 125 mg: on formulary for 1,245 of 5,490 plans (22.7%), of
            which 92.0% require prior authorization and 90.5% place it on the specialty tier; 5 of
            367 standalone prescription drug plans (1.4%) cover it — analysis of the CMS Monthly
            Prescription Drug Plan Formulary File, released July 29, 2026. Counted by plan, not
            weighted by how many people are enrolled in each.
          </li>
          <li>
            Orencia subcutaneous listed as a self-administered drug and therefore excluded from Part
            B — Medicare Administrative Contractor self-administered drug exclusion articles,
            including Noridian JF (A53033, which covers Washington State), Noridian JE (A53032),
            Novitas (A53127), First Coast (A52571), Palmetto (A53066) and WPS (A52800).
          </li>
          <li>
            Step therapy permitted for Medicare Advantage Part B drugs, and not permitted in
            Original Medicare — 42 CFR §422.136. The 2026 step therapy example is drawn from a
            national insurer&rsquo;s published Part B step therapy preferred drug list, revised July
            2026.
          </li>
          <li>
            No prior authorization program in Original Medicare covers physician-administered drugs
            — CMS, Prior Authorization and Pre-Claim Review Initiatives.
          </li>
          <li>
            No FDA-approved abatacept biosimilar as of August 2026 — FDA biosimilar product
            information, current as of August 4, 2026. One application was accepted for review in
            February 2026; acceptance is not approval.
          </li>
          <li>
            Medicare Advantage appeal rates and outcomes for 2024 (11.5% of denials appealed, 80.7%
            of appeals overturned) — KFF analysis of CMS data, 2026.
          </li>
          <li>
            Copay card exclusion for federal healthcare program beneficiaries — Orencia copay
            program terms and conditions; federal Anti-Kickback Statute, 42 U.S.C. §1320a-7b.
            Manufacturer foundation eligibility — Bristol Myers Squibb Patient Assistance Foundation
            application.
          </li>
          <li>
            Medicare spending: abatacept under Part B, $930 million across 33,154 beneficiaries in
            2024; Orencia under Part D, $754 million across 17,660 beneficiaries — CMS Medicare drug
            spending dashboards, updated June 2026.
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
