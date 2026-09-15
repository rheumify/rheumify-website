import MedicationCostTool from './MedicationCostTool';
import { GUIDES } from './guides';
import ReadingControls from './ReadingControls';

export const metadata = {
  title: 'Medicare and Your Medication — What It Costs and Whether You Can Get It',
  description:
    'A free tool for people on Medicare taking a rheumatology medication. See what a year would cost under each kind of Medicare, why infusions and pills are treated differently, and where prior authorization actually applies. Nothing collected.',
  keywords: [
    'Medicare biologic cost',
    'Medicare Part B vs Part D drugs',
    'does Medicare cover infusions',
    'Medicare Advantage prior authorization infusion',
    'Medigap biologic',
    'Medicare drug cost calculator',
  ],
};

export default function InsurancePage() {
  return (
    <div className="page-container">
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo; Medicare and your medication
      </p>

      <div className="page-header">
        <h1>Medicare and your medication</h1>
        <p>
          See what a year of your medication would cost you under each kind of Medicare. And see
          whether you would be able to get it at all.
        </p>
      </div>

      <div className="content-card">
        <h2>Start here</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          This page covers <strong>Medicare</strong> only. You may have insurance through a job,
          coverage bought on healthcare.gov, or Medicaid. If so, the explanations below still help.
          But the numbers will not apply to you.
        </p>
        <MedicationCostTool />
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Open Enrollment starts October 15. What changes for 2027</h2>
        <ul>
          <li>
            <strong>Part D cap: now $2,400.</strong> It was $2,100 in 2026. The Part D deductible
            can now be up to $700. It was $615. Infusions are still outside the cap.
          </li>
          <li>
            <strong>Stand-alone drug plan premiums are likely to rise.</strong> The federal program
            that held them down in 2025 and 2026 ends this year. Check yours in the Annual Notice of
            Change. It arrives by September 30.
          </li>
          <li>
            <strong>Some Advantage plans are leaving for 2027.</strong> If yours is leaving, you
            have a guaranteed right to buy a supplement policy. There is a deadline.
          </li>
          <li>
            <strong>Part B premium and deductible for 2027</strong> are announced in mid-November.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <a href="/patients/insurance/switching-plans" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>
            Switching plans: the dates, the rules, and the order to do it in &rarr;
          </a>
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>Guides</h2>
        <p>
          Some subjects need their own page. One is how the approval process works. Others are
          single medications that come in more than one form. Medicare pays for those forms in
          very different ways.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', marginLeft: 0 }}>
          {GUIDES.map((g) => (
            <li key={g.slug} style={{ marginBottom: '1rem' }}>
              <a
                href={'/patients/insurance/' + g.slug}
                style={{ color: 'var(--purple-light)', fontWeight: 600 }}
              >
                {g.title} &rarr;
              </a>
              <br />
              <span style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}>{g.blurb}</span>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          More medications are being added.
        </p>
      </div>

      <div className="content-card">
        <h2>Why infusions and pills are treated completely differently</h2>
        <p>
          Medicare sorts medications by <strong>who puts them in you</strong>. It does not sort
          them by what they are or what they cost.
        </p>
        <ul>
          <li>
            <strong>Part B</strong> covers medications a nurse or doctor gives you. That means
            infusions and most office injections. You pay <strong>20% of the cost, every time,
            with no yearly ceiling.</strong>
          </li>
          <li>
            <strong>Part D</strong> covers medications you take yourself. That means pills and
            injections you do at home. Since 2025, Part D has a hard cap on what you can be charged
            in a year:{' '}
            <strong>$2,100 in 2026</strong>. It rises to $2,400 in 2027. The cap holds no matter
            how expensive the medication is.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Take abatacept. Given as an infusion in the office, it is Part B. It has no ceiling. The
          same medicine as a self-injection at home is Part D. It stops at $2,100. Same drug, same
          disease. The difference can run to thousands of dollars a year. Where the medicine goes
          in decides it.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Ask your rheumatologist about this. Whether a home version is right for you is a medical
          question, not a money one.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Why isn&rsquo;t my infusion covered by the $2,100 cap?</h2>
        <p>
          <strong>The $2,100 cap only applies to Part D. An infusion is paid by Part B.</strong> The
          cap Congress created covers drugs you pick up and take yourself. A medication a nurse or
          doctor gives you is paid under Part B instead. There, you owe 20% of the cost every time.
          And <strong>there is no yearly ceiling at all</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          It is the same Medicare. It is often the same drug and the same disease. Who puts the
          medicine in you picks the rule book. The cap and the Part B coinsurance (your 20%) are
          two separate rules. News about one does not change the other.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Here is an example. Say Medicare&rsquo;s approved amount for a year of your infusions is
          $18,000. You owe about <strong>$3,600</strong>. That is this year, next year, and every
          year you stay on it. The $2,100 cap does not apply to any of it.
        </p>
        <p style={{ marginTop: '1rem' }}>Four things do put a ceiling on Part B costs:</p>
        <ul>
          <li>
            <strong>A Medicare supplement (Medigap) policy</strong>, which pays the 20% for you.
            This is the main one. In most states, the window to buy one closes six months after
            you enroll in Part B.
          </li>
          <li>
            <strong>A Medicare Advantage plan&rsquo;s yearly out-of-pocket maximum</strong>. That
            is the most you pay in a year. It applies to everything the plan covers. But it comes
            with prior authorization attached. That means the plan must approve a medication
            before you can get it.
          </li>
          <li>
            <strong>QMB</strong>, a Medicare Savings Program. It removes the 20% entirely.{' '}
            <a href="/patients/insurance/help-paying">QMB and Extra Help are different programs</a>.
            Extra Help applies to Part D drugs only. It does nothing for a Part B drug.
          </li>
          <li>
            <strong>Full Medicaid</strong>, or retiree coverage that pays after Medicare.
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where prior authorization actually applies</h2>
        <p>
          <strong>Original Medicare does not require prior authorization for a medication given in
          a doctor&rsquo;s office.</strong> It also may not make you try and fail a cheaper
          medication first. There is nothing to approve. Your rheumatologist decides, and the
          infusion happens.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Medicare Advantage plans may do both, and they do.{' '}
          <strong>94% of Advantage enrollees are in a plan that requires prior authorization for
          medications like these.</strong> Most of those plans also use step therapy. That means
          trying a cheaper drug first. In 2024, Advantage plans made 52.8 million prior
          authorization decisions. They denied 4.1 million of them. Only about one in nine denials
          was appealed. And{' '}
          <strong>81% of the appeals succeeded.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          That gap is the real cost of an Advantage plan for someone on an infused biologic. It
          never appears in a price comparison. If your medication is turned down, appeal. The odds
          are good, and few people appeal.
        </p>
      </div>

      <div className="content-card">
        <h2>One 2026 change, and what it does not affect</h2>
        <p>
          As of January 2026, CMS is running a pilot called <strong>WISeR</strong>. It brings
          prior authorization into Original Medicare for the first time. It uses automated review.
          It runs in six states: New Jersey, Ohio, Oklahoma, Texas, Arizona and{' '}
          <strong>Washington</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Here is what it covers.{' '}
          <strong>WISeR does not apply to any medication.</strong> It applies to a short list of
          procedures and devices. The list includes spinal cord stimulators, cervical fusion, and
          certain knee procedures. It also includes vertebral augmentation, nerve stimulators,
          epidural steroid injections for pain, and a few others. No infusion, no biologic, and no
          rheumatology drug is on the list. Skin and tissue substitutes are the one biological
          product included. They are excluded in Washington and Arizona.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So the statement above still holds. It holds for people in Washington too. Say you are
          on Original Medicare. Your medication is given in a doctor&rsquo;s office. Then no one
          has to approve it in advance.
        </p>
      </div>

      <div className="content-card">
        <h2>Buying a Medicare supplement: the six-month window</h2>
        <p>
          You get six months after you turn 65 and enroll in Part B. In that window, any company{' '}
          <strong>must</strong> sell you a Medicare supplement policy at the standard price. It
          does not matter what conditions you have. After the window closes, most states let
          insurers ask health questions and refuse you. Someone taking a biologic is exactly who
          gets refused.
        </p>
        <p style={{ marginTop: '1rem' }}>
          You can change Advantage plans every year. You may not be able to get a supplement later
          at all. This is the key point for anyone turning 65 right now.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Washington is the most protective state in the country on this.</strong> You can
          move between supplement policies at any time of year. No health questions are asked.
          Insurers may not price by age. Connecticut, Massachusetts, New York and Maine have their
          own versions. Most other states do not.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Your window may have closed. Even then, in some situations an insurer must still sell
          you a policy. One is your plan leaving your county. Another is your first year in an
          Advantage plan. There is also a right order to do things in.{' '}
          <a href="/patients/insurance/switching-plans">The switching guide</a> lists them.
        </p>
      </div>

      <div className="content-card">
        <h2>Talk to a counselor before you talk to anyone selling you something</h2>
        <p>
          Every state funds trained volunteer counselors. They go through your real options with
          you, free. They are paid nothing no matter what you choose. That is not true of the
          companies that advertise Medicare plans. CMS caps what a Medicare Advantage plan may pay
          a broker for signing you up. For 2026 that is $694 nationally for a new enrollment. It is
          $347 for each year you stay. A stand-alone drug plan pays $114. Medigap commissions are
          not set by CMS at all. Each state regulates them. They are usually a percentage of your
          premium. So there is no national figure to compare against. Nobody is paid anything for
          helping you stay in Original Medicare.
        </p>
        <ul>
          <li>
            <strong>In Washington: SHIBA</strong> —{' '}
            <a href="https://www.insurance.wa.gov/shiba" target="_blank" rel="noopener noreferrer">
              insurance.wa.gov/shiba
            </a>{' '}
            or 1-800-562-6900
          </li>
          <li>
            <strong>Everywhere else: SHIP</strong> —{' '}
            <a href="https://www.shiphelp.org" target="_blank" rel="noopener noreferrer">
              shiphelp.org
            </a>
          </li>
          <li>
            <strong>Confirm your medication is covered</strong> —{' '}
            <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer">
              medicare.gov/plan-compare
            </a>{' '}
            is the only place that shows a specific plan&rsquo;s drug list
          </li>
          <li>
            <strong>Help paying</strong> — if money is tight, look up Extra Help through{' '}
            <a href="https://www.ssa.gov/medicare/part-d-extra-help" target="_blank" rel="noopener noreferrer">
              Social Security
            </a>
            . Few people who qualify use it. The income limits are higher than many people expect.
          </li>
          <li>
            <strong>Medicare directly</strong> — 1-800-MEDICARE (1-800-633-4227), any hour
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>What this page cannot tell you</h2>
        <p>
          This page has limits. A confident wrong number is worse than no number.
        </p>
        <ul>
          <li>
            <strong>Most drug prices here are estimates.</strong> They are the least reliable
            figures on the page. Some medications have their own guide above. For those, the
            figures were checked against Medicare&rsquo;s published payment rates and the
            manufacturer&rsquo;s published price. Everywhere else they are rough estimates.
          </li>
          <li>
            <strong>It does not know your plan.</strong> It cannot see your deductible or what you
            have already spent this year. It cannot see whether your medication is on your
            plan&rsquo;s list.
          </li>
          <li>
            <strong>Supplement prices vary a lot</strong> by state, age and company. The figures
            offered are placeholders, not quotes.
          </li>
          <li>
            <strong>Everything here is for 2026</strong> and changes every January.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          The purpose is not to hand you an exact number. It is to show you which questions to ask.
          It shows which direction the money runs. Those parts are solid.
        </p>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <li>
            Part B standard premium ($202.90/month) and annual deductible ($283) for 2026 — CMS,
            &ldquo;2026 Medicare Parts A &amp; B Premiums and Deductibles,&rdquo; November 14, 2025.
          </li>
          <li>
            Part B coinsurance of 20% with no annual out-of-pocket limit — Social Security Act
            §1833(a); CMS, <em>Medicare &amp; You 2026</em>.
          </li>
          <li>
            Part D annual out-of-pocket cap ($2,100 in 2026; $2,400 in 2027) and deductible ($615) —
            CMS Final CY2026 Part D Redesign Program Instructions and the CY2027 Rate Announcement,
            April 2026. Cap established by the Inflation Reduction Act of 2022.
          </li>
          <li>
            Part D base beneficiary premium ($38.99 for 2026) — CMS Part D national average monthly
            bid announcement, July 2025. Actual plan premiums vary widely.
          </li>
          <li>
            Maximum permissible in-network cost sharing for Part B drugs in Medicare Advantage for
            2026: 20% coinsurance, or a copayment no greater than $340 for the &ldquo;Part B Drugs
            &mdash; Other&rdquo; service category ($395 for chemotherapy and radiation drugs). Plan
            bids may not exceed these amounts &mdash; CMS, &ldquo;Final Contract Year 2026 Standards
            for Part C Benefits, Bid Review and Evaluation,&rdquo; HPMS memorandum, April 16, 2025,
            Table 4; 42 CFR §422.100(f). The same memorandum sets the 2026 maximum out-of-pocket
            limits at $9,250 in-network and, for PPO plans, $13,900 combined (Table 3).
          </li>
          <li>
            Average in-network out-of-pocket limit among Medicare Advantage enrollees ($5,421 for
            2026) — KFF, &ldquo;Medicare Advantage in 2026,&rdquo; 2026. This is an average, not a
            legal limit; plans may set limits up to $9,250 in-network.
          </li>
          <li>
            94% of Medicare Advantage enrollees in plans requiring prior authorization for Part B
            drugs; step therapy permitted in Medicare Advantage and not in Original Medicare — KFF,
            &ldquo;Medicare Advantage in 2026&rdquo;; 42 CFR §422.136.
          </li>
          <li>
            52.8 million prior authorization determinations, 4.1 million denials, 11.5% appeal rate
            and 80.7% of appeals overturned in 2024 — KFF analysis of CMS data, 2026.
          </li>
          <li>
            Medigap six-month open enrollment period and medical underwriting after it — Social
            Security Act §1882(s)(2)(A); CMS, <em>Choosing a Medigap Policy</em>.
          </li>
          <li>
            Washington State continuous Medigap open enrollment and community rating — RCW 48.66.045
            and RCW 48.66.130.
          </li>
          <li>
            WISeR model states, covered services and model period — CMS Innovation Center, WISeR
            Model, and the WISeR Provider and Supplier Operational Guide, July 2026.
          </li>
          <li>
            Extra Help / Part D Low-Income Subsidy — Social Security Administration; CMS CY2026 LIS
            resource limits memorandum, October 2025.
          </li>
          <li>
            Medicare Advantage and Part D broker compensation for 2026 ($694 initial and $347
            renewal nationally for Medicare Advantage; $114 and $57 for a stand-alone Part D plan)
            &mdash; CMS, &ldquo;Contract Year 2026 Agent and Broker Compensation Rates,
            Referral/Finder&rsquo;s Fees, Submissions, and Training and Testing Requirements,&rdquo;
            HPMS memorandum, June 18, 2025; 42 CFR §422.2274(d). Medicare supplement commissions are
            set by carriers and regulated by the states; no national figure is published.
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
          this page nor its author is paid by any insurance company, plan or broker. This page is
          not affiliated with, endorsed by, or connected to Medicare, the Centers for Medicare &amp;
          Medicaid Services, or any government agency.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Nothing you enter is collected, stored, or transmitted. There is no form, no account and
          no tracking of what you type.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20Medicare%20and%20your%20medication">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
