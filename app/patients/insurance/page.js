import MedicationCostTool from './MedicationCostTool';
import { GUIDES } from './guides';

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
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo; Medicare and your medication
      </p>

      <div className="page-header">
        <h1>Medicare and your medication</h1>
        <p>
          What a year of your medication would actually cost you under each kind of Medicare — and,
          just as important, whether you would be able to get it at all.
        </p>
      </div>

      <div className="content-card">
        <h2>Start here</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          This covers <strong>Medicare</strong> only. If you have insurance through a job, coverage
          bought on healthcare.gov, or Medicaid, the explanations below are still useful but the
          numbers will not apply to you.
        </p>
        <MedicationCostTool />
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>Guides to specific medications</h2>
        <p>
          Some medications have enough going on that they deserve their own page — usually because
          they come in more than one form, and Medicare pays for those forms in completely different
          ways.
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
          Medicare splits medications by <strong>who puts them in you</strong>, not by what they
          are or what they cost.
        </p>
        <ul>
          <li>
            <strong>Part B</strong> covers medications a nurse or doctor gives you — infusions and
            most office injections. You pay <strong>20% of the cost, every time, with no yearly
            ceiling.</strong>
          </li>
          <li>
            <strong>Part D</strong> covers medications you take yourself — pills and injections you
            do at home. Since 2025, Part D has a hard cap on what you can be charged in a year:{' '}
            <strong>$2,100 in 2026</strong>, rising to $2,400 in 2027, no matter how expensive the
            medication is.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          The consequence catches people out. Abatacept given as an infusion in the office is Part B
          and has no ceiling. The same medicine as a self-injection at home is Part D and stops at
          $2,100. Same drug, same disease, and the difference can run to thousands of dollars a year
          — decided entirely by where it goes in.
        </p>
        <p style={{ marginTop: '1rem' }}>
          This is worth raising with your rheumatologist. Whether a home version is right for you is
          a medical question, not a money one — but it is a question worth asking out loud.
        </p>
      </div>

      <div className="content-card">
        <h2>The thing almost nobody is told about prior authorization</h2>
        <p>
          <strong>Original Medicare does not require prior authorization for a medication given in
          a doctor&rsquo;s office</strong>, and it is not permitted to make you try and fail a
          cheaper medication first. There is nothing to approve. Your rheumatologist decides, and
          the infusion happens.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Medicare Advantage plans are permitted to do both, and they do.{' '}
          <strong>94% of Advantage enrollees are in a plan that requires prior authorization for
          medications like these</strong>, and most of those plans also apply step therapy. In 2024
          Advantage plans made 52.8 million prior authorization decisions and denied 4.1 million of
          them. Only about one in nine denials was appealed — and{' '}
          <strong>81% of the appeals succeeded.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          That gap is the real cost of an Advantage plan for someone on an infused biologic, and it
          never appears in a price comparison. If your medication is turned down, appeal. The odds
          are good and most people never try.
        </p>
      </div>

      <div className="content-card">
        <h2>One 2026 change, and what it does not affect</h2>
        <p>
          As of January 2026, CMS is running a pilot called <strong>WISeR</strong> that brings
          prior authorization into Original Medicare for the first time, using automated review, in
          six states — New Jersey, Ohio, Oklahoma, Texas, Arizona and{' '}
          <strong>Washington</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          It is worth knowing about, and it is worth being precise about what it covers.{' '}
          <strong>WISeR does not apply to any medication.</strong> It applies to a short list of
          procedures and devices — spinal cord stimulators, cervical fusion, certain knee
          procedures, vertebral augmentation, nerve stimulators, epidural steroid injections for
          pain, and a few others. No infusion, no biologic, and no rheumatology drug is on the list.
          Skin and tissue substitutes are the one biological product included, and they are
          specifically excluded in Washington and Arizona.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So the statement above still holds, including for people in Washington: if you are on
          Original Medicare and your medication is given in a doctor&rsquo;s office, no one has to
          approve it in advance.
        </p>
      </div>

      <div className="content-card">
        <h2>The decision you can only make once</h2>
        <p>
          For six months after you turn 65 and enroll in Part B, any company{' '}
          <strong>must</strong> sell you a Medicare supplement policy at the standard price, no
          matter what conditions you have. Once that window closes, in most states insurers can
          review your health and refuse you — and someone taking a biologic is precisely who gets
          refused.
        </p>
        <p style={{ marginTop: '1rem' }}>
          You can change Advantage plans every single year. Getting a supplement later, you may not
          be able to at all. That asymmetry is the single most important thing on this page for
          anyone turning 65 right now.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Washington is the most protective state in the country on this.</strong> You can
          move between supplement policies at any time of year, no health questions asked, and
          insurers may not price by age. Connecticut, Massachusetts, New York and Maine have their
          own versions. Most other states do not.
        </p>
      </div>

      <div className="content-card">
        <h2>Talk to a counselor before you talk to anyone selling you something</h2>
        <p>
          Every state funds trained volunteer counselors who will go through your actual options
          with you, free, and who are paid nothing regardless of what you choose. That is not true
          of the companies that advertise Medicare plans — brokers are paid roughly twice as much
          for enrolling you in an Advantage plan as for a supplement, and that commission renews
          every year you stay.
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
            . It is widely underused, and the income limits are higher than most people assume.
          </li>
          <li>
            <strong>Medicare directly</strong> — 1-800-MEDICARE (1-800-633-4227), any hour
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>What this page cannot tell you</h2>
        <p>
          It is worth being clear about the limits, because a confident wrong number is worse than
          no number.
        </p>
        <ul>
          <li>
            <strong>Most drug prices here are estimates.</strong> They are the least reliable
            figures on the page. Where a medication has its own guide above, the figures have been
            checked against Medicare&rsquo;s published payment rates and the manufacturer&rsquo;s
            published price; everywhere else they are approximations.
          </li>
          <li>
            <strong>It does not know your plan.</strong> It cannot see your deductible, what you
            have already spent this year, or whether your medication is on your plan&rsquo;s list.
          </li>
          <li>
            <strong>Supplement prices vary enormously</strong> by state, age and company. The
            figures offered are placeholders, not quotes.
          </li>
          <li>
            <strong>Everything here is for 2026</strong> and changes every January.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          The purpose is not to hand you an exact number. It is to show you which questions to ask
          and which direction the money runs — and those parts are solid.
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
            Maximum Medicare Advantage copay per Part B drug administration ($340) and the 2026
            in-network out-of-pocket maximum limits — CMS Final CY2026 Part C Bid Review
            Memorandum, April 2025.
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
          Found something wrong? Please tell us — accuracy matters more than being finished.
        </p>
      </div>
    </div>
  );
}
