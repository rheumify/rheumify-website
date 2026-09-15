import ReadingControls from '../ReadingControls';

export const metadata = {
  title: 'Does Medicare Cover Actemra (Tocilizumab)? What It Costs in 2026',
  description:
    'Tocilizumab comes as an infusion and as a shot you give yourself. Medicare treats them completely differently — one is capped at $2,100 a year, the other has no ceiling at all. Written by a rheumatologist. Nothing collected, nothing sold.',
  keywords: [
    'does medicare cover actemra',
    'is actemra covered by medicare part b',
    'does medicare part d cover actemra',
    'tocilizumab medicare cost',
    'actemra giant cell arteritis medicare',
    'tocilizumab biosimilar medicare',
  ],
};

export default function TocilizumabPage() {
  return (
    <div className="page-container">
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Tocilizumab
      </p>

      <div className="page-header">
        <h1>Tocilizumab (Actemra) and Medicare</h1>
        <p>
          It comes two ways. One is an infusion at a clinic. The other is a shot you give yourself
          at home. Medicare treats these as two different things. The difference can be thousands
          of dollars a year.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <p>
          <strong>Yes, Medicare covers tocilizumab both ways.</strong> Which part of Medicare pays
          depends on how you get it. So does how much you pay.
        </p>
        <ul>
          <li>
            <strong>The shot you give yourself at home</strong> is covered by your Part D drug plan.
            Your costs are capped. In 2026 you cannot pay more than <strong>$2,100</strong> for the
            whole year.
          </li>
          <li>
            <strong>The infusion at a clinic</strong> is covered by Part B. You pay 20% of the
            cost. <strong>There is no yearly ceiling at all.</strong> That comes to around{' '}
            <strong>$6,700 a year</strong>. A Medicare supplement policy changes this. With one,
            the infusion may cost you almost nothing.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          So the cheaper route depends on what other coverage you have. That is the whole decision.
          It deserves ten minutes of your time.
        </p>
      </div>

      <div className="content-card">
        <h2>The two forms, side by side</h2>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Shot at home (162 mg)</th>
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
                <td><strong>How often, for giant cell arteritis</strong></td>
                <td>Once a week; every other week is an option</td>
                <td>Once every 4 weeks</td>
              </tr>
              <tr>
                <td><strong>What it costs before insurance</strong></td>
                <td>About $61,000 a year at list price</td>
                <td>About $34,000 a year at Medicare&rsquo;s rate</td>
              </tr>
              <tr>
                <td><strong>What you pay</strong></td>
                <td>
                  $615 deductible, then 25% — but it all stops at <strong>$2,100 for the year</strong>
                </td>
                <td>
                  $283 deductible, then 20% of every dose &mdash; roughly <strong>$6,700 a year,
                  with nothing to stop it</strong>
                </td>
              </tr>
              <tr>
                <td><strong>With a Medicare supplement</strong></td>
                <td>No change — still $2,100</td>
                <td>The supplement pays the 20%. Often close to $0.</td>
              </tr>
              <tr>
                <td><strong>Does someone have to approve it first?</strong></td>
                <td>Yes, essentially always</td>
                <td>
                  <strong>No</strong>, under Original Medicare
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Infusion figures use Medicare&rsquo;s published payment rate for tocilizumab. They use
          the approved giant cell arteritis dose of 6 mg per kilogram every four weeks. They assume
          an adult of about 70&ndash;80 kg. Your dose and your weight change the number. The
          infusion also has a separate charge for the visit itself. That is extra.
        </p>
      </div>

      <div className="content-card">
        <h2>Which one is cheaper for you</h2>
        <p>
          This flipped recently. A lot of advice online has not caught up. Before 2025 there was
          no ceiling on Part D either. The shot could be very expensive. The Inflation Reduction
          Act put a hard cap on Part D. It is $2,000 in 2025, <strong>$2,100 in 2026</strong>, and
          $2,400 in 2027. Part B was left untouched.
        </p>
        <ul>
          <li>
            <strong>If you have Original Medicare and no supplement</strong>, the shot is much
            cheaper. It is $2,100 versus around $6,700. And the $6,700 has no upper limit if your
            dose or weight is higher.
          </li>
          <li>
            <strong>If you have a Medicare supplement policy</strong>, it flips. The supplement
            covers the 20% on the infusion. So the infusion may cost you almost nothing. The shot
            still costs you $2,100 through the drug plan.
          </li>
          <li>
            <strong>If you have Medicare Advantage</strong>, the plan sets its own charges for the
            infusion. It may charge 20%. Or it may charge a copayment. For 2026 that copayment
            cannot exceed $340 for an in-network Part B drug like this one. Everything stops at
            the plan&rsquo;s yearly limit. But see the section on approvals below. With Advantage
            the price is not the main issue.
          </li>
          <li>
            <strong>If you have Medicaid as well as Medicare</strong>, most of this disappears. The
            same is true if you qualify for a Medicare Savings Program. Ask.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <strong>Whether you get the shot or the infusion is a medical question, not a money
          one.</strong> Both are FDA-approved for giant cell arteritis. But if cost is the only
          thing pushing you one way, tell your rheumatologist. It may be an easy problem to solve.
        </p>
      </div>

      <div className="content-card">
        <h2>No approval needed for the infusion under Original Medicare</h2>
        <p>
          If you have Original Medicare, the infusion needs no approval first. You get tocilizumab
          in a doctor&rsquo;s office or clinic, and{' '}
          <strong>there is no prior authorization</strong>. Prior authorization means approval
          before you can get it. There is nothing to submit and nothing to wait for. No one can
          require you to fail a cheaper medication first. Original Medicare is not permitted to do
          either of those things.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans are permitted to do both</strong>, and routinely do.
          Since 2019 they have been allowed to use step therapy for medications given in a clinic.
          Step therapy means trying a cheaper drug first. Real 2026 Advantage policies require
          patients to try a biosimilar version before they will pay for Actemra itself. A
          biosimilar is the same medicine made by a different company.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>The shot always needs approval</strong>, whichever kind of Medicare you have. CMS
          published the drug plan formularies for 2026. A formulary is the plan&rsquo;s drug list.
          Every plan that covered tocilizumab 162 mg required prior authorization. About four in
          five put it on the specialty tier. That is the highest-cost group of drugs. This is not a
          reason to pick one drug plan over another. It is universal. It is a reason to start the
          paperwork early. Never assume a renewal is automatic.
        </p>
      </div>

      <div className="content-card">
        <h2>How long the approval takes</h2>
        <p>
          There is published evidence on this. A 2025 study in the{' '}
          <em>Journal of Rheumatology</em> followed 82 patients with giant cell arteritis at a
          single center. Prior authorization was required for 96% of them. The average time from
          the request to the first dose reaching the patient was <strong>43 days</strong>. That was
          about 17 days to get approved. Then it was another 30 days before treatment started.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>A disclosure:</strong> I am one of the authors of that study. It came out of our
          own clinic. That is why the number is on this page. We measured it because we kept
          watching it happen.{' '}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/40089304/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PubMed
          </a>
        </p>
        <p style={{ marginTop: '1rem' }}>
          Giant cell arteritis is treated urgently with steroids. Steroids are what protect your
          vision. Tocilizumab is added to
          bring the steroid dose down. So a delay in getting tocilizumab approved is not the same
          as going untreated. But it does mean longer on a higher steroid dose, with everything
          that comes with that.
        </p>
        <p style={{ marginTop: '1rem' }}>
          What you can do. Ask the office to start the paperwork the day it is decided. Ask them
          to tell you if anything is denied. And <strong>appeal if it is</strong>. Across Medicare
          Advantage in 2024, only about one denial in nine was ever appealed. And 81% of the
          appeals that were filed succeeded.
        </p>
      </div>

      <div className="content-card">
        <h2>There are now three cheaper versions</h2>
        <p>
          Tocilizumab has three biosimilars. The FDA approved them on the same evidence standard.
          All three are approved for giant cell arteritis:
        </p>
        <ul>
          <li>
            <strong>Tyenne</strong> (tocilizumab-aazg) — infusion and self-injection. It is about
            25% cheaper than Actemra at Medicare&rsquo;s rate. That makes it the biggest saving of
            the three on your 20%.
          </li>
          <li>
            <strong>Avtozma</strong> (tocilizumab-anoh) — infusion and self-injection.
          </li>
          <li>
            <strong>Tofidence</strong> (tocilizumab-bavi) — infusion only.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Two things to know. None of them is legally &ldquo;interchangeable.&rdquo; That means a
          pharmacy cannot swap one for another on its own. Your doctor has to prescribe the specific
          one. And your plan decides which one it covers. So the version your plan wants is not
          always the version your infusion center stocks. If your plan makes you switch, ask the
          office to confirm the exact product before your next appointment.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Say you are on the infusion and paying 20% of it. <strong>Asking about a biosimilar is
          the easiest way to lower that number.</strong>
        </p>
      </div>

      <div className="content-card">
        <h2>Other things to know</h2>
        <ul>
          <li>
            <strong>The whole $2,100 lands in January.</strong> At a weekly dose you hit the cap on
            the first or second fill of the year. Medicare has a program that spreads it across
            twelve months instead. It is interest-free, about $175 a month. But{' '}
            <strong>you have to sign up for it</strong>. It is called the Medicare Prescription
            Payment Plan.
          </li>
          <li>
            <strong>Manufacturer copay cards do not work if you have Medicare.</strong> Federal law
            prohibits it. That includes Medicare Advantage and Medigap supplement policies. It is
            not your plan being difficult. What <em>can</em> help is the manufacturer&rsquo;s
            patient assistance foundation. That is a different thing. It does cover people on
            Medicare. Independent charitable foundations that help with cost-sharing can also help.
          </li>
          <li>
            <strong>Where you get infused changes the price.</strong> A hospital outpatient
            department often costs you more than a doctor&rsquo;s office or a home infusion. The
            medication is identical. If your 20% feels higher than it should, this is often why.
          </li>
          <li>
            <strong>Approval expires.</strong> Plans approve expensive medications for a set period,
            usually a year. January is when plans change what they cover. If a letter arrives about
            your coverage changing, act on it that week. Do not wait for the pharmacy to say no.
          </li>
          <li>
            <strong>Extra Help.</strong> If your income is modest, Extra Help can reduce Part D
            costs to nearly nothing. The income limits are higher than you might think. The program
            is badly underused.
          </li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Free help from someone not paid a commission</h2>
        <p>
          Before you talk to anyone who advertises Medicare plans, talk to a state counselor. It is
          free and federally funded. They earn nothing whichever plan you pick.
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
            <strong>Check your plan&rsquo;s drug list</strong> —{' '}
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

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Why isn&rsquo;t my infusion covered by the $2,100 cap?</h2>
        <p>
          <strong>Because the $2,100 cap only applies to Part D, and an infusion is paid by Part
          B.</strong> The cap Congress created covers drugs you pick up and take yourself. A
          medication a nurse or doctor gives you is paid under Part B instead. There you owe 20%
          of the cost every time. And <strong>there is no annual ceiling at all</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          It is the same Medicare. It is often the same drug and the same disease. The rulebook is
          chosen by who puts the medicine in you. The cap and the Part B coinsurance (your 20%) are
          two separate rules. News about one does not change the other.
        </p>
        <p style={{ marginTop: '1rem' }}>
          A worked example. Say Medicare&rsquo;s approved amount for a year of your infusions is
          $18,000. You owe about <strong>$3,600</strong>. That is this year, next year, and every
          year you stay on it. The $2,100 cap does not apply to any of it.
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
            <strong>A Medicare Advantage plan&rsquo;s yearly out-of-pocket maximum</strong>, the
            most you pay in a year. It applies to everything the plan covers. But it comes with
            prior authorization attached.
          </li>
          <li>
            <strong>QMB</strong>, a Medicare Savings Program that eliminates the 20% entirely.{' '}
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
            <a href="/patients/insurance">Medicare and your medication</a> — look up any other
            medication and compare your coverage options
          </li>
          <li>
            <a href="/gca-fast-track">Giant cell arteritis fast track</a>
          </li>
          <li>
            <a href="/patients">All patient resources</a>
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
        <ol
          style={{
            color: 'var(--gray-light)',
            marginLeft: '1.5rem',
            lineHeight: 1.8,
            fontSize: '0.95rem',
          }}
        >
          <li>
            Actemra prescribing information, revised December 2025 — FDA. Giant cell arteritis
            dosing: 162 mg subcutaneously weekly, or every other week based on clinical
            considerations; 6 mg/kg intravenously every four weeks. Both routes are FDA-approved for
            giant cell arteritis.
          </li>
          <li>
            Medicare payment limit for tocilizumab (HCPCS J3262): $5.408 per mg, CMS Part B ASP
            pricing file effective July 1 &ndash; September 30, 2026.
          </li>
          <li>
            Actemra 162 mg wholesale acquisition cost of $1,174.81 per syringe or ACTPen, effective
            January 6, 2026 — Genentech published price list.
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
            Prior authorization and step therapy permitted for Medicare Advantage Part B drugs since
            2019, and not permitted in Original Medicare — CMS, &ldquo;Medicare Advantage Prior
            Authorization and Step Therapy for Part B Drugs&rdquo;; 42 CFR §422.136.
          </li>
          <li>
            Prior authorization required on 100% of 2026 Part D formularies covering tocilizumab
            162 mg, specialty tier on approximately 79% — analysis of the CMS Prescription Drug Plan
            Formulary File, July 2026 release.
          </li>
          <li>
            Time from prior authorization request to first tocilizumab dose in giant cell arteritis
            (mean 43 days; prior authorization required in 96% of cases) — Feterman Jimenez D,
            Thomason JL, Liew JW, Ferguson S, Hughes G, Bays AM,{' '}
            <em>Journal of Rheumatology</em>, 2025. PMID 40089304. The author of this page
            is a co-author of this study.
          </li>
          <li>
            Medicare Advantage appeal rates and outcomes for 2024 (11.5% of denials appealed, 80.7%
            of appeals overturned) — KFF analysis of CMS data, 2026.
          </li>
          <li>
            Tocilizumab biosimilars, indications and payment limits — FDA biosimilar product
            information; CMS Part B ASP pricing file, July 2026 (Tofidence Q5133, Tyenne Q5135,
            Avtozma Q5156).
          </li>
          <li>
            Prohibition on manufacturer copay assistance for federal healthcare program
            beneficiaries — federal Anti-Kickback Statute, 42 U.S.C. §1320a-7b.
          </li>
          <li>
            Medicare Prescription Payment Plan — CMS, medicare.gov/prescription-payment-plan.
          </li>
        </ol>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          One honest caveat about the infusion figure: whether a self-injection given in a
          clinic rather than at home is billed to Part B varies by region, because each Medicare
          contractor keeps its own list of drugs it considers self-administered. If you get your
          shot at the office rather than at home, ask the billing staff which way yours is being
          submitted.
        </p>
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
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20tocilizumab%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
