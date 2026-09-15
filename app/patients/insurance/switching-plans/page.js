import ReadingControls from '../ReadingControls';

export const metadata = {
  title: 'Switching Medicare Plans With a Biologic: Dates, Rules, and the Order to Do It In',
  description:
    'When you can change Medicare plans, when an insurer must sell you a supplement policy, the order to do things in so you are not left without coverage, and what changes on January 1, 2027. Written by a rheumatologist.',
  keywords: [
    'Medicare open enrollment 2027 biologic',
    'switch from Medicare Advantage to Original Medicare Medigap',
    'Medigap guaranteed issue rights leaving Medicare Advantage',
    'Medicare Advantage trial right 12 months',
    'Medicare Advantage plan leaving 2027 what to do',
    'Part D cap 2027 $2,400',
  ],
};

export default function SwitchingPlansPage() {
  return (
    <div className="page-container">
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Switching plans
      </p>

      <div className="page-header">
        <h1>Switching plans: the dates, the rules, and the order to do it in</h1>
        <p>
          You can change your Medicare plan every year. The hard part is the supplement policy.
          An insurer can say no to that. This page tells you when you can change, when an insurer
          has to say yes, and what to do first so you are never left without coverage.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <p>
          You can change any Medicare coverage between <strong>October 15 and December 7</strong>.
          The change starts January 1.
        </p>
        <p style={{ marginTop: '1rem' }}>
          If you are leaving Medicare Advantage for Original Medicare, one step can go wrong. You
          will want a supplement policy (also called Medigap) to pay your 20%. In most states, the
          insurer can ask about your health and turn you down. A biologic is a common reason for
          a no.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So do things in this order. <strong>First, find out if the insurer has to accept you.
          Second, apply for the supplement. Third, get a yes in writing. Only then leave the
          Advantage plan.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          If you do it the other way round, you can end up in Original Medicare with no
          supplement. Then you pay 20% of every infusion, with no ceiling.
        </p>
      </div>

      <div className="content-card">
        <h2>When you can change</h2>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>What</th>
                <th>When</th>
                <th>What you can do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your plan mails its Annual Notice of Change</td>
                <td>By September 30</td>
                <td>
                  Read it. It says what changes on January 1. Look for your medication and what
                  it will cost.
                </td>
              </tr>
              <tr>
                <td>Open Enrollment</td>
                <td>October 15 &ndash; December 7</td>
                <td>
                  Any change. Advantage to Original Medicare. Original Medicare to Advantage. One
                  plan to another. Starts January 1.
                </td>
              </tr>
              <tr>
                <td>Advantage Open Enrollment</td>
                <td>January 1 &ndash; March 31</td>
                <td>
                  Only if you are already in an Advantage plan. One change: to another Advantage
                  plan, or back to Original Medicare plus a drug plan.
                </td>
              </tr>
              <tr>
                <td>Your plan leaves Medicare or leaves your area</td>
                <td>December 8 &ndash; end of February</td>
                <td>
                  Join another plan, or go back to Original Medicare. You also get a guaranteed
                  right to a supplement. See below.
                </td>
              </tr>
              <tr>
                <td>Five-star plan</td>
                <td>Once a year, December 8 &ndash; November 30</td>
                <td>
                  Medicare grades every Advantage plan and drug plan from 1 to 5 stars each year.
                  The grade is for quality, such as customer service and how well the plan handles
                  care. If a plan rated 5 stars serves your area, you can move into it once a year
                  outside the normal windows.
                </td>
              </tr>
              <tr>
                <td>You have Extra Help or Medicaid</td>
                <td>Once a quarter, January &ndash; September</td>
                <td>Change drug plans or Advantage plans.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem' }}>
          Two things the table does not say. A supplement policy is not on this calendar. You
          apply to the insurance company at any time of year. The question is whether it has to
          take you. And none of these dates make you do anything. If your plan still works for
          you, staying put is fine.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Leaving Advantage for Original Medicare: the supplement is the hard part</h2>
        <p>
          Original Medicare will take you back. There are no health questions. The hard part is
          the supplement policy that pays your 20%.
        </p>
        <p style={{ marginTop: '1rem' }}>
          For six months after you start Part B, any company must sell you one. After that, in
          most states, the company can look at your health and say no. Someone on a biologic is
          often told no.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Federal law lists a few times when the company <strong>must</strong> say yes, no matter
          what your health is. These are the ones that matter if you are leaving an Advantage
          plan:
        </p>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Your situation</th>
                <th>What they must sell you</th>
                <th>When to apply</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  You joined an Advantage plan when you first got Medicare at 65. You have been in
                  it less than 12 months.
                </td>
                <td>Any Plan A, B, D, G, K or L sold in your state.</td>
                <td>Up to 60 days before your plan ends. No later than 63 days after.</td>
              </tr>
              <tr>
                <td>
                  You dropped a supplement to try Advantage for the first time. You have been in
                  it less than 12 months.
                </td>
                <td>
                  The policy you had before, if the same company still sells it. If not, any Plan
                  A, B, D, G, K or L.
                </td>
                <td>Up to 60 days before your plan ends. No later than 63 days after.</td>
              </tr>
              <tr>
                <td>Your Advantage plan is leaving Medicare, or leaving your county.</td>
                <td>Any Plan A, B, D, G, K or L.</td>
                <td>Up to 60 days before your plan ends. No later than 63 days after.</td>
              </tr>
              <tr>
                <td>You move out of your Advantage plan&rsquo;s area.</td>
                <td>Any Plan A, B, D, G, K or L.</td>
                <td>Up to 60 days before your plan ends. No later than 63 days after.</td>
              </tr>
              <tr>
                <td>
                  Your job or retiree coverage that paid after Medicare is ending. (This one
                  applies whether or not you were in Advantage.)
                </td>
                <td>Any Plan A, B, D, G, K or L.</td>
                <td>No later than 63 days after that coverage ends.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem' }}>
          If you got Medicare before January 1, 2020, Plans C and F are on the list too. In all
          of these cases, the company cannot charge you more for your health. It cannot make you
          wait for coverage of a condition you already have.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The two &ldquo;less than 12 months&rdquo; rows are called <strong>trial rights</strong>.
          During that first year, Medicare also lets you leave the Advantage plan without waiting
          for October.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Not on the list:</strong> wanting to leave after more than a year. Being unhappy
          with the plan. A denied prior authorization. Higher costs. Those are good reasons to
          switch. But they do not give you a guaranteed supplement. This is where people get
          stuck.
        </p>
      </div>

      <div className="content-card">
        <h2>If none of those apply to you</h2>
        <p>
          You can still apply. Some companies do accept people on a biologic. Each company has
          its own rules. Here is what helps:
        </p>
        <ul>
          <li>
            <strong>Your state may protect you.</strong> In Washington, if you already have a
            supplement, you can switch to another one any time of year with no health questions.
            Connecticut, Massachusetts and New York make companies sell to anyone on Medicare, any
            time. Maine has a short yearly window. About sixteen other states have a
            &ldquo;birthday rule.&rdquo; It lets you change supplement companies near your
            birthday with no health questions. But it only works if you already have a
            supplement. It does not help if you are coming from Advantage.
          </li>
          <li>
            <strong>Ask a state counselor which companies are easier.</strong> SHIBA and SHIP
            counselors see the applications and the answers. They can tell you which companies in
            your state have said yes to people like you. That is a question they can answer. A
            broker paid on commission may not.
          </li>
          <li>
            <strong>Ask about high-deductible Plan G.</strong> It works like Plan G after you pay
            the first $2,950 of the year yourself (the 2026 amount). Some companies are easier
            about this one. And $2,950 is still a ceiling. Original Medicare alone has none.
          </li>
          <li>
            <strong>Apply to more than one company.</strong> A no from one is not a no from all.
            Applying does not lock you in to anything.
          </li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid #7FBF9B' }}>
        <h2>The order to do it in</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.9 }}>
          <li>
            <strong>Check the table above.</strong> If a row fits you, write down the day your
            Advantage plan ends. Count 63 days forward. That is your deadline.
          </li>
          <li>
            <strong>Apply for the supplement first.</strong> Ask for a January 1 start date. If
            you have a guaranteed right, tell the company which one. Send proof, such as the
            letter saying your plan is leaving. If you do not have a guaranteed right, this is the
            application with health questions.
          </li>
          <li>
            <strong>Wait for a yes in writing.</strong> Do not leave the Advantage plan on a
            phone call.
          </li>
          <li>
            <strong>Then join a stand-alone drug plan.</strong> A supplement covers no
            medications. You need a Part D plan for anything you take at home. Joining a
            stand-alone drug plan during Open Enrollment ends your Advantage plan on December 31.
            (This works if your Advantage plan includes drug coverage. Nearly all do.) You do not
            have to cancel it separately. Before you choose, put your exact medication and dose
            into{' '}
            <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer">
              medicare.gov/plan-compare
            </a>
            .
          </li>
          <li>
            <strong>Do not leave a gap in drug coverage.</strong> More than 63 days without drug
            coverage adds a penalty to every future Part D premium. It is permanent.
          </li>
          <li>
            <strong>Check that your rheumatologist and infusion center take Original Medicare.</strong>{' '}
            Almost all do. There is no network to worry about. Ask anyway.
          </li>
          <li>
            <strong>If the supplement says no, you still have options.</strong> Stay in Advantage
            for January 1. Then use January 1 to March 31 to move to a different Advantage plan
            if the current one is the problem. Before you pick one, find out what it charges for
            Part B drugs. That is in its Evidence of Coverage. Also check that your infusion
            center is in its network.
          </li>
        </ol>
      </div>

      <div className="content-card">
        <h2>Going the other way: Original Medicare to Advantage</h2>
        <p>
          This direction is open every year from October 15 to December 7. There are no health
          questions. Settle three things before you do it:
        </p>
        <ul>
          <li>
            <strong>What the plan charges for your medication.</strong> For an infused biologic,
            Medicare&rsquo;s plan finder cannot tell you. It only compares drugs you pick up at a
            pharmacy. The plan&rsquo;s <strong>Evidence of Coverage</strong> has a line for
            &ldquo;Part B drugs.&rdquo; It will say 20%, or a set amount per treatment. It also
            lists the yearly out-of-pocket limit. Ask the plan to show you that page.
          </li>
          <li>
            <strong>Whether your infusion center and rheumatologist are in the network.</strong>{' '}
            On a PPO, ask what an out-of-network infusion costs. Some plans charge more than 20%
            for that. An HMO usually pays nothing out of network.
          </li>
          <li>
            <strong>Whether you can get your supplement back.</strong> If this is your first time
            in Advantage, and you leave within 12 months, you can. See the trial right above.
            After that, you are back to the health questions.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Nearly every Advantage plan requires approval before a Part B drug. Many also make you
          try a cheaper drug first. The{' '}
          <a href="/patients/insurance/prior-authorization">prior authorization guide</a> explains
          what that means.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>What changes on January 1, 2027</h2>
        <ul>
          <li>
            <strong>The Part D cap is now $2,400.</strong> It was $2,100 in 2026. The Part D
            deductible can now be up to $700. It was $615. The cap still covers only medications
            you take yourself. It does not cover infusions.
          </li>
          <li>
            <strong>Stand-alone drug plan premiums will likely go up.</strong> The base premium
            goes from $38.99 to $41.33. A federal program that held down these premiums in 2025
            and 2026 ends this year. There may also be fewer plans to choose from. Check the price
            of yours in the Annual Notice of Change.
          </li>
          <li>
            <strong>Some Advantage plans are leaving.</strong> Insurers have announced plan exits
            and benefit cuts for 2027. One national insurer is dropping about 13% of its plans in
            18 states. Another expects about 600,000 members to lose their plan. If yours is
            leaving, the Annual Notice of Change will say so. You then have the guaranteed
            supplement right in the table above.
          </li>
          <li>
            <strong>The Part B premium and deductible for 2027</strong> come out in mid-November.
            Every number on this site will be checked again then.
          </li>
          <li>
            <strong>Approvals run out.</strong> Most prior authorizations last a year. Many end on
            December 31. If you change plans, the new plan starts from zero. Ask your
            rheumatologist&rsquo;s office to send the request to the new plan in December.
          </li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Free help, from someone who is not paid a commission</h2>
        <p>
          A state counselor will go through the rules for your exact situation. They can tell
          you which companies to try in your state. They will help with the forms. It is free.
          They earn nothing whichever plan you choose.
        </p>
        <ul>
          <li>
            <strong>Washington: SHIBA</strong> &mdash;{' '}
            <a href="https://www.insurance.wa.gov/shiba" target="_blank" rel="noopener noreferrer">
              insurance.wa.gov/shiba
            </a>{' '}
            or 1-800-562-6900
          </li>
          <li>
            <strong>Any other state: SHIP</strong> &mdash;{' '}
            <a href="https://www.shiphelp.org" target="_blank" rel="noopener noreferrer">
              shiphelp.org
            </a>
          </li>
          <li>
            <strong>Medicare</strong> &mdash; 1-800-MEDICARE (1-800-633-4227), any hour
          </li>
          <li>
            <strong>Medicare&rsquo;s plan finder</strong> &mdash;{' '}
            <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer">
              medicare.gov/plan-compare
            </a>
            . Use it for drug plans and pharmacy medications. It cannot compare what plans charge
            for an infusion.
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Related</h2>
        <ul>
          <li>
            <a href="/patients/insurance">Medicare and your medication</a> &mdash; what your
            medicine costs under each kind of Medicare
          </li>
          <li>
            <a href="/patients/insurance/prior-authorization">Why your medicine needs permission first</a>
          </li>
          <li>
            <a href="/patients/insurance/help-paying">Help paying for your medication</a>
          </li>
          <li>
            <a href="/patients/insurance/helping-a-parent">Helping a parent with all of this</a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <li>
            Annual election period of October 15 to December 7, effective January 1 &mdash; 42
            CFR &sect;422.62(a)(3) and &sect;423.38(b); Medicare.gov, &ldquo;Joining a plan.&rdquo;
          </li>
          <li>
            Medicare Advantage open enrollment period of January 1 to March 31, limited to one
            election by people enrolled in a Medicare Advantage plan &mdash; 42 CFR
            &sect;422.62(a)(3)(ii); Medicare.gov, &ldquo;Special Enrollment Periods.&rdquo;
          </li>
          <li>
            Annual Notice of Change to be provided at least 15 days before the annual election
            period, which CMS implements as receipt by September 30 &mdash; 42 CFR
            &sect;422.111(a)(3) and &sect;423.128(a)(3).
          </li>
          <li>
            Special enrollment period when a plan terminates or leaves the service area
            (December 8 through the last day of February for non-renewals), the five-star special
            enrollment period (December 8 to November 30, once), and the quarterly election for
            people with Extra Help or Medicaid &mdash; 42 CFR &sect;422.62(b)(1),
            &sect;422.62(b)(15), &sect;423.38(c)(4); Medicare.gov, &ldquo;Special Enrollment
            Periods.&rdquo;
          </li>
          <li>
            Federal Medigap guaranteed issue situations, the plans that must be offered (A, B, D,
            G, K, L for people first eligible on or after January 1, 2020; C and F also for people
            eligible earlier), the prohibition on health-based pricing and pre-existing condition
            waiting periods, and the application window of up to 60 days before and no later than
            63 days after coverage ends &mdash; Social Security Act &sect;1882(s)(3); CMS,{' '}
            <em>Choosing a Medigap Policy</em>, Product No. 02110, revised March 2026.
          </li>
          <li>
            Special enrollment period to leave a Medicare Advantage plan during the first 12 months
            for people using a trial right &mdash; 42 CFR &sect;422.62(b); Medicare.gov,
            &ldquo;Special Enrollment Periods.&rdquo;
          </li>
          <li>
            Medical underwriting after the open enrollment period and refusals of people leaving
            Medicare Advantage; year-round guaranteed issue in Connecticut, Massachusetts and New
            York and a limited window in Maine &mdash; KFF Health News, &ldquo;In Switching to
            Original Medicare, Beware of Medigap Plan Refusals,&rdquo; March 16, 2026.
          </li>
          <li>
            Washington State continuous open enrollment for people who already hold a Medigap
            policy and community rating &mdash; RCW 48.66.045 and RCW 48.66.130.
          </li>
          <li>
            State birthday and anniversary rules (California, Delaware, Idaho, Illinois, Indiana,
            Kentucky, Louisiana, Maryland, Nevada, New Mexico from 2027, Oklahoma, Oregon, Utah,
            Virginia, West Virginia, Wyoming), all requiring an existing Medigap policy &mdash;
            state insurance codes as summarized by medicareresources.org, July 2026. Windows and
            conditions differ by state; confirm with your state insurance department.
          </li>
          <li>
            High-deductible Plan G deductible of $2,950 for 2026 &mdash; CMS, Medigap
            high-deductible amount announcement for 2026.
          </li>
          <li>
            Enrollment in a stand-alone prescription drug plan disenrolls a person from a Medicare
            Advantage plan that includes drug coverage &mdash; Medicare.gov, &ldquo;Special
            Enrollment Periods&rdquo;; CMS, <em>Medicare Advantage and Part D Enrollment and
            Disenrollment Guidance</em>.
          </li>
          <li>
            Part D late enrollment penalty after 63 or more continuous days without creditable
            drug coverage &mdash; 42 CFR &sect;423.46.
          </li>
          <li>
            Medicare Advantage in-network cost sharing for Part B drugs limited to 20% coinsurance
            or an equivalent copayment; out-of-network cost sharing on PPO plans of 20% to 50% and
            no out-of-network coverage on most HMOs &mdash; CMS, Final Contract Year 2026
            Standards for Part C Benefits, Bid Review and Evaluation, April 16, 2025; KFF,
            &ldquo;Medicare Part B Drugs: Cost Implications for Beneficiaries in Traditional
            Medicare and Medicare Advantage,&rdquo; March 2022.
          </li>
          <li>
            Part D 2027 out-of-pocket cap of $2,400 and maximum deductible of $700 &mdash; CMS,
            Final CY2027 Part D Redesign Program Instructions, April 2026.
          </li>
          <li>
            Part D base beneficiary premium of $41.33 for 2027 (from $38.99 in 2026) and the end
            of the Part D Premium Stabilization Demonstration after 2026 &mdash; CMS announcement
            of the CY2027 national average monthly bid amount, July 28, 2026.
          </li>
          <li>
            Medicare Advantage plan exits and benefit reductions for 2027, including
            UnitedHealthcare dropping about 13% of plans across 18 states and Humana estimating
            about 600,000 members affected &mdash; Axios, &ldquo;Medicare Advantage plans appear
            to be cutting benefits in 2027,&rdquo; September 10, 2026.
          </li>
          <li>
            Part B premium and deductible for the coming year are announced by CMS each November
            &mdash; CMS, &ldquo;2026 Medicare Parts A &amp; B Premiums and Deductibles,&rdquo;
            November 14, 2025.
          </li>
        </ol>
      </div>

      <div className="content-card">
        <h2>About this page</h2>
        <p>
          Written and reviewed by <strong>Alison Bays, MD, MPH</strong>, board-certified
          rheumatologist. Figures are current for <strong>2026</strong>. The 2027 changes are
          included where they have been published. Last checked in September 2026.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>This is educational information, not advice</strong> &mdash; not medical, legal,
          financial or insurance advice, and not a substitute for talking to your doctor, your
          plan, or a benefits counselor. Nothing is sold here. No insurance is sold here, no plan
          is recommended, and neither this page nor its author is paid by any insurance company,
          plan, pharmaceutical manufacturer or broker. This page is not affiliated with, endorsed
          by, or connected to Medicare, the Centers for Medicare &amp; Medicaid Services, or any
          government agency.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Nothing you enter anywhere on this site is collected, stored, or transmitted.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20switching%20plans%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
