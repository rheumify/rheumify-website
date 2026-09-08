import ReadingControls from '../ReadingControls';

export const metadata = {
  title: 'Helping a Parent With Medicare and a Biologic: The Forms You Need (2026)',
  description:
    'You cannot call Medicare on your parent’s behalf without a form, and a healthcare power of attorney is not enough. The four authorizations, what to gather, and what changes when a spouse dies. Written by a rheumatologist.',
  keywords: [
    'talk to medicare on behalf of parent',
    'cms 10106 authorization to disclose',
    'appointment of representative medicare cms 1696',
    'power of attorney medicare not enough',
    'medicare after spouse dies',
    'helping parent with medicare drug costs',
  ],
};

export default function HelpingAParentPage() {
  return (
    <div className="page-container">
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Helping a parent
      </p>

      <div className="page-header">
        <h1>Helping a parent with all of this</h1>
        <p>
          If you have flown in to sort out your mother&rsquo;s infusion coverage and spent the first
          morning being told nobody can speak to you, this page is the reason why and what to do
          about it.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short version</h2>
        <p>
          There is no single permission that covers all of this. You need{' '}
          <strong>four separate authorizations</strong>, held by four different organizations, and
          the paperwork you probably already have &mdash; a healthcare power of attorney &mdash;
          does not by itself get you any of them.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>The good news:</strong> if your parent can still sign their name, all four are
          straightforward and most can be done in an afternoon. The one that takes longest is the
          Medicare one, so do that first.
        </p>
      </div>

      <div className="content-card">
        <h2>Does a power of attorney let me call Medicare?</h2>
        <p>
          <strong>Not on its own, no</strong> &mdash; and this catches almost everybody, because it
          sounds like exactly the thing a power of attorney should do.
        </p>
        <p style={{ marginTop: '1rem' }}>
          A healthcare power of attorney is a state document about{' '}
          <strong>medical decisions</strong>. It says who decides about treatment. It is not an
          authorization on file with Medicare, and the person answering at 1-800-MEDICARE has no way
          to see it and will not take your word for it.
        </p>
        <p style={{ marginTop: '1rem' }}>
          But do not go and hire a lawyer over this. The power of attorney is not useless here
          &mdash; <strong>it is the thing that lets you sign the Medicare form on your
          parent&rsquo;s behalf</strong> if they cannot sign it themselves. You attach a copy to the
          form. If your parent can still sign, you do not need it at all for this purpose; they sign,
          and you are done in one step.
        </p>
        <p style={{ marginTop: '1rem' }}>Three documents, three different jobs:</p>
        <ul>
          <li>
            <strong>Healthcare power of attorney</strong> &mdash; medical decisions. Does not give
            you administrative access.
          </li>
          <li>
            <strong>Durable or financial power of attorney</strong> &mdash; the paperwork you attach
            when signing forms for someone who cannot sign.
          </li>
          <li>
            <strong>Appointment of Representative</strong> &mdash; the only thing that lets you file
            and argue an appeal with a plan.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          And a fourth that trips people up: being your parent&rsquo;s{' '}
          <strong>Social Security representative payee</strong> is separate again, and does not give
          you Medicare access either.
        </p>
      </div>

      <div className="content-card">
        <h2>The four authorizations</h2>

        <h3 style={{ marginTop: '1rem' }}>1. To talk to Medicare itself</h3>
        <p>
          <strong>Form CMS-10106</strong>, the &ldquo;1-800-MEDICARE Authorization to Disclose
          Personal Health Information.&rdquo; This is what lets a Medicare representative discuss
          your parent&rsquo;s Original Medicare claims, coverage and bills with you.
        </p>
        <ul>
          <li>
            Your parent can choose to authorize you <strong>indefinitely</strong> or only for a set
            period. Choose indefinitely unless there is a reason not to.
          </li>
          <li>
            <strong>Submit it online</strong> through your parent&rsquo;s secure Medicare.gov
            account. CMS itself flags this as the faster route. Mailing it works but takes
            considerably longer, and there is no published processing time either way.
          </li>
          <li>
            If your parent cannot sign, you sign as their personal representative, tick that box, and
            attach the power of attorney.
          </li>
          <li>
            <a
              href="https://www.cms.gov/medicare/cms-forms/cms-forms/downloads/cms10106.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CMS-10106
            </a>
          </li>
        </ul>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Do this one first. It is the only one where you may be waiting on the mail.
        </p>

        <h3 style={{ marginTop: '2rem' }}>2. To act for them with their plan</h3>
        <p>
          If your parent has Medicare Advantage or a Part D drug plan, the plan is a separate
          organization from Medicare and needs its own permission. For anything that is an{' '}
          <strong>appeal</strong>, the form is <strong>CMS-1696, Appointment of Representative</strong>.
        </p>
        <ul>
          <li>
            It is <strong>valid for one year</strong> from the date both of you sign it. But once it
            has been filed with an appeal, it stays valid{' '}
            <strong>for the whole of that appeal</strong> &mdash; families often panic about this
            unnecessarily when the year rolls over mid-case.
          </li>
          <li>
            Many plans have their own version. <strong>Use the CMS-1696 anyway</strong> &mdash; it is
            accepted everywhere, and a plan&rsquo;s own form is not accepted by anyone else.
          </li>
          <li>
            If something is missing, the appointment can be fixed rather than restarted, and the
            clock pauses while you fix it &mdash; but until it is fixed, you cannot act.
          </li>
          <li>
            <a
              href="https://www.cms.gov/medicare/cms-forms/cms-forms/downloads/cms1696.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CMS-1696
            </a>
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          For routine questions that are not an appeal, most plans will also let your parent add you
          as an authorized contact with a phone call. Do both.
        </p>

        <h3 style={{ marginTop: '2rem' }}>3. At each doctor&rsquo;s office</h3>
        <p>
          A <strong>HIPAA authorization</strong>. There is no national form and no form number
          &mdash; every practice uses its own, and it takes two minutes at the front desk.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>The part people miss: it only covers that one practice.</strong> Signing one at the
          rheumatology office does nothing at the infusion center, the lab, or the hospital. Sign one
          at every place your parent gets care, and sign a new one if the practice changes its
          computer system or patient portal.
        </p>

        <h3 style={{ marginTop: '2rem' }}>4. At the specialty pharmacy</h3>
        <p>
          Call the specialty pharmacy and ask to be added as an{' '}
          <strong>authorized contact</strong> on the account. Each pharmacy has its own form. This is
          the one that lets you handle refills, delivery scheduling and prior authorization calls
          &mdash; which in practice is most of the phone time.
        </p>
      </div>

      <div className="content-card">
        <h2>What to write down before you start calling</h2>
        <p>
          Every organization will ask for some subset of this, and hunting for it mid-call is where
          the afternoon goes. One sheet of paper, kept where you can both find it:
        </p>
        <ul>
          <li>Full legal name, date of birth, and address as it appears on the Medicare card</li>
          <li>
            <strong>Medicare number</strong> from the red, white and blue card
          </li>
          <li>
            <strong>Plan name and member ID</strong> for the Medicare Advantage or Part D plan, and
            the phone number on the back of that card
          </li>
          <li>Medigap company and policy number, if there is one</li>
          <li>
            <strong>Medication name, dose, and how it is given</strong> &mdash; infusion, office
            injection, or self-injection at home. This one determines almost everything else.
          </li>
          <li>
            <strong>The date the current approval expires.</strong> Ask the office; it is rarely
            volunteered, and it is the thing that causes a January crisis.
          </li>
          <li>Where the infusion happens, and whether it is billed as a hospital outpatient department or a doctor&rsquo;s office</li>
          <li>The specialty pharmacy&rsquo;s name and account number</li>
          <li>
            The name of the billing company on the statements &mdash; it is often a vendor nobody
            recognizes, and knowing it saves an argument
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Keep a running log of every call: date, who you spoke to, and any reference number they
          gave you. A reference number is the difference between &ldquo;we have no record of
          that&rdquo; and a resolved problem.
        </p>
      </div>

      <div className="content-card">
        <h2>What arrives in the mail, and what to do with it</h2>
        <p>
          A parent on a biologic gets a lot of official-looking envelopes in a year. Most are not
          bills. Two of them are urgent.
        </p>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>What arrives</th>
                <th>Is it a bill?</th>
                <th>What to do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Medicare Summary Notice</strong> or plan Explanation of Benefits, showing a
                  large charge and stamped &ldquo;this is not a bill&rdquo;
                </td>
                <td>No</td>
                <td>File it. Check the amounts match what actually happened.</td>
              </tr>
              <tr>
                <td>
                  <strong>Annual Notice of Change</strong>, arrives every September
                </td>
                <td>No</td>
                <td>
                  <strong>Read this one.</strong> It says what the plan is changing on January 1
                  &mdash; including whether it still covers the medication.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>A prior authorization approval letter</strong>
                </td>
                <td>No</td>
                <td>
                  Find the <strong>expiry date</strong> and put it in a calendar 60 days early.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>A denial notice</strong>
                </td>
                <td>No</td>
                <td>
                  <strong>Urgent.</strong> There are 65 days to appeal. Call the doctor&rsquo;s
                  office the same week.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>A statement from a company you do not recognize</strong>
                </td>
                <td>Usually yes</td>
                <td>
                  It is often the infusion center&rsquo;s billing vendor. Match it against the
                  Summary Notice before paying anything.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>When a parent&rsquo;s spouse dies</h2>
        <p>
          Several things change at once, in the worst possible month, and there are deadlines
          attached to some of them. This is the checklist nobody hands you.
        </p>
        <ul>
          <li>
            <strong>Their Medicare premium may go up sharply, for no reason they did anything about.</strong>{' '}
            The higher-income surcharge uses income thresholds for a married couple that are double
            those for one person. A survivor whose household income barely changes can jump several
            tiers purely because the tax filing status changed &mdash; while also losing one Social
            Security check.
          </li>
          <li>
            <strong>There is a form for that.</strong> Death of a spouse is one of eight recognized
            life-changing events on <strong>form SSA-44</strong>, which asks Social Security to use
            current income instead of the two-year-old tax return. You need a death certificate and
            an estimate of this year&rsquo;s income. File it as soon as the income change is known
            &mdash; do not wait for the bill.{' '}
            <a href="https://www.ssa.gov/forms/ssa-44.pdf" target="_blank" rel="noopener noreferrer">
              Download SSA-44
            </a>
          </li>
          <li>
            <strong>They may now qualify for help they did not qualify for before &mdash; and this
            is the one most often missed.</strong> Extra Help and the Medicare Savings Programs are
            assessed on household size. A survivor is now a one-person household with one fewer
            income. Many people become eligible the month their spouse dies and never apply because
            they were told no as a couple years earlier.{' '}
            <a href="/patients/insurance/help-paying">Re-check both programs</a>.
          </li>
          <li>
            <strong>There is a window to change drug plans.</strong> Gaining or losing Extra Help or
            Medicaid opens a special enrollment period of three months.
          </li>
          <li>
            <strong>Medigap is the hard one.</strong> Losing a spouse is <em>not</em> on the federal
            list of situations where a company must sell you a supplement policy. A survivor applying
            fresh can be medically underwritten and turned down &mdash; and someone on a biologic is
            exactly who gets turned down.{' '}
            <strong>But there is an important exception:</strong> if they had coverage through the
            deceased spouse&rsquo;s <strong>retiree or employer plan</strong> and that coverage is
            now ending, that <em>does</em> give a guaranteed right to buy, and it is time-limited.
            Act on it immediately rather than assuming they are stuck. Washington State is more
            generous than federal law here and allows switching supplement policies year-round
            without health questions.
          </li>
          <li>
            The Medigap premium may also rise because many insurers give a household discount that
            the survivor loses.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          A free counselor will go through all of this with you and is used to doing it for families
          rather than the patient. That is the call to make first.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Free help, for you as well as for them</h2>
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
            . Find the program in <em>your parent&rsquo;s</em> state, not yours.
          </li>
          <li>
            <strong>Medicare</strong> &mdash; 1-800-MEDICARE (1-800-633-4227), any hour
          </li>
          <li>
            <strong>Social Security</strong> &mdash; 1-800-772-1213, for Extra Help and the SSA-44
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Related</h2>
        <ul>
          <li>
            <a href="/patients/insurance/help-paying">Help paying for your medication</a> &mdash;
            which program covers which kind of drug
          </li>
          <li>
            <a href="/patients/insurance/prior-authorization">
              Why your medicine needs permission first
            </a>
          </li>
          <li>
            <a href="/patients/insurance">Medicare and your medication</a> &mdash; what it costs
            under each kind of Medicare
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
            Form CMS-10106, &ldquo;1-800-MEDICARE Authorization to Disclose Personal Health
            Information,&rdquo; revised March 2026, OMB No. 0938-0930. The form provides for
            indefinite or time-limited authorization, flags online submission through a secure
            Medicare.gov account as faster, and instructs a personal representative signing on
            someone&rsquo;s behalf to attach documentation such as a power of attorney. CMS publishes
            no processing time for mailed forms.
          </li>
          <li>
            Form CMS-1696, &ldquo;Appointment of Representative,&rdquo; OMB No. 0938-0950. Validity
            of one year from the date both parties sign; continuation for the duration of an appeal
            once filed; the option to use another conforming written instrument; and the process for
            curing a defective appointment &mdash; 42 CFR §405.910(d), (e).
          </li>
          <li>
            HIPAA authorizations are governed by 45 CFR §164.508 and are specific to the entity that
            obtains them. There is no national form.
          </li>
          <li>
            2026 Part B standard premium of $202.90 per month, the annual deductible of $283, and the
            income-related monthly adjustment amount brackets, in which married-filing-jointly
            thresholds are double the individual thresholds below the top tier &mdash; CMS,
            &ldquo;2026 Medicare Parts A &amp; B Premiums and Deductibles,&rdquo; November 14, 2025.
          </li>
          <li>
            Death of a spouse is a qualifying life-changing event for an income-related adjustment
            reconsideration &mdash; Social Security Administration form SSA-44, revised December 2025,
            OMB No. 0960-0784; SSA Program Operations Manual System HI 01120.010.
          </li>
          <li>
            Special enrollment period of three months following a gain, loss or change in Medicaid or
            low-income subsidy eligibility, and the monthly election available to subsidy-eligible
            individuals &mdash; 42 CFR §423.38(c)(9), (c)(4)(i).
          </li>
          <li>
            Death of a spouse is not among the federal Medigap guaranteed issue rights; loss of an
            employer group health plan, including retiree coverage, that pays after Medicare is a
            guaranteed issue right &mdash; CMS, <em>Choosing a Medigap Policy</em>, Product No. 02110,
            revised March 2026. Washington State continuous open enrollment and community rating
            &mdash; RCW 48.66.045, RCW 48.66.130.
          </li>
          <li>
            Medicare Advantage appeal deadline of 65 days from the date on the denial notice, being
            60 days from receipt with receipt presumed five days after the notice date &mdash; 42 CFR
            §422.582(b), §422.584(b); CMS Parts C &amp; D appeals guidance, §50.3.
          </li>
        </ol>
      </div>

      <div className="content-card">
        <h2>About this page</h2>
        <p>
          Written and reviewed by <strong>Alison Bays, MD, MPH</strong>, board-certified
          rheumatologist. Figures are current for <strong>2026</strong> and were last checked in
          September 2026.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>This is educational information, not advice</strong> &mdash; not medical, legal,
          financial or insurance advice, and not a substitute for talking to your parent&rsquo;s
          doctor, their plan, or a benefits counselor. Nothing is sold here. No insurance is sold
          here, no plan is recommended, and neither this page nor its author is paid by any insurance
          company, plan, pharmaceutical manufacturer or broker. This page is not affiliated with,
          endorsed by, or connected to Medicare, the Centers for Medicare &amp; Medicaid Services, or
          any government agency.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20helping%20a%20parent%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
