import ReadingControls from '../ReadingControls';

export const metadata = {
  title: 'Help Paying for a Biologic on Medicare: QMB, Extra Help and Grants (2026)',
  description:
    'Extra Help does nothing for an infusion. QMB does. The programs are different, they cover different drugs, and most people are told about the wrong one. Written by a rheumatologist. Nothing collected, nothing sold.',
  keywords: [
    'extra help does not cover part b',
    'qmb medicare infusion coinsurance',
    'help paying for biologic on medicare',
    'medicare copay card not accepted biologic',
    'pan foundation infusion medicare',
    'cant afford my biologic medicare',
  ],
};

export default function HelpPayingPage() {
  return (
    <div className="page-container">
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Help paying
      </p>

      <div className="page-header">
        <h1>Help paying for your medication</h1>
        <p>
          There are four kinds of help. They do not do the same thing. The one you hear about
          most will not help with an infusion bill.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>Which program helps you depends on how you get your medicine</h2>
        <p>
          This is the main point of this page:
        </p>
        <ul>
          <li>
            <strong>If your medicine is an infusion or an office injection</strong> (Part B), the
            program that helps is <strong>QMB</strong>. Extra Help does nothing for it.
          </li>
          <li>
            <strong>If you inject yourself at home or take a pill</strong> (Part D), the program
            that helps is <strong>Extra Help</strong>.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Many people get an Extra Help application. They get approved. They are told they are
          all set. Then the bill for 20% of their infliximab arrives anyway. That is not a mistake
          by the plan. It is not a mistake on your bill. Extra Help is a Part D program. It cannot
          pay for a Part B drug.
        </p>
      </div>

      <div className="content-card">
        <h2>What is QMB, and why does it matter for an infusion?</h2>
        <p>
          <strong>QMB is the program that pays your 20%.</strong> Its full name is the Qualified
          Medicare Beneficiary program. It is one of the Medicare Savings Programs. Your state runs
          it. It covers your Part B premium and your Part B deductible. It also covers the{' '}
          <strong>20% coinsurance on every Part B drug</strong>. Coinsurance is your share of the
          bill. For someone on an infused biologic, that is the whole bill.
        </p>
        <p style={{ marginTop: '1rem' }}>
          QMB also comes with a second protection. It is often ignored.{' '}
          <strong>Providers are not allowed to bill you</strong> for Medicare cost-sharing if you
          are in QMB. That is the law. It applies with Original Medicare or Medicare Advantage. It
          applies whether or not the provider takes Medicaid. If a bill comes anyway, they must
          withdraw it. That includes a bill from a collection agency. They must also refund
          anything you already paid.
        </p>

        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>2026 limits</th>
                <th>Monthly income</th>
                <th>Savings and assets</th>
                <th>What it covers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>QMB</strong> &mdash; one person
                </td>
                <td>$1,350</td>
                <td>$9,950</td>
                <td>
                  Part B premium, deductible <strong>and the 20%</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>QMB</strong> &mdash; married couple
                </td>
                <td>$1,824</td>
                <td>$14,910</td>
                <td>Same</td>
              </tr>
              <tr>
                <td>SLMB &mdash; one person</td>
                <td>$1,616</td>
                <td>$9,950</td>
                <td>Part B premium only</td>
              </tr>
              <tr>
                <td>QI &mdash; one person</td>
                <td>$1,816</td>
                <td>$9,950</td>
                <td>Part B premium only</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '1rem' }}>
          <strong>Two things about that table.</strong> First, only QMB pays the 20%. SLMB and QI
          pay your Part B premium and stop there. That is real money. But it does nothing about an
          infusion. Second, <strong>those are the federal minimums, and many states are more
          generous</strong>. Some states have raised the income limits. Some have removed the
          savings test entirely. If you are close, apply. Medicare&rsquo;s own guidance says to
          apply even if your income or savings look too high.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>And all three of them get you Extra Help automatically.</strong> QMB, SLMB and QI
          each put you into full Extra Help. You do not need a separate application. So apply for
          the Medicare Savings Program first. It is the only one that reaches a Part B drug. It
          also gives you the Part D help.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          One more note. QMB removes what you owe completely. But states settle up with Medicare
          in their own way. An infusion practice may collect little or nothing for the 20%. Some
          practices are reluctant to schedule QMB patients for very expensive infusions for that
          reason. It is a known access problem. It is not a reason to doubt the benefit or to skip
          applying. If you meet resistance, that is probably the cause. Your state counselor has
          seen it before.
        </p>
      </div>

      <div className="content-card">
        <h2>What is Extra Help, and what does it do?</h2>
        <p>
          <strong>Extra Help pays for the drugs you pick up yourself.</strong> It is the Part D
          Low-Income Subsidy. It brings your drug plan premium to zero. It brings your $615
          deductible to zero. It also caps what you pay per prescription. Since 2024 there is no
          partial version. You either get full Extra Help or you do not.
        </p>
        <p style={{ marginTop: '1rem' }}>
          In 2026 the income limits are about <strong>$23,940 a year for one person</strong> and{' '}
          <strong>$32,460 for a couple</strong>. Your savings must be under{' '}
          <strong>$18,090</strong> (or $36,100 for a couple). Your home and your car do not count.
          Some income does not get counted either. So the real cutoff is a little higher than
          those numbers. <strong>Apply even if you are slightly over.</strong> The limits are
          higher than most people assume. This is one of the most under-used programs in Medicare.
        </p>
        <p style={{ marginTop: '1rem' }}>
          With Extra Help, a brand-name drug costs you <strong>$12.65 or less</strong> per
          prescription in 2026. Once you reach the $2,100 ceiling, you pay nothing for the rest of
          the year. A self-injected biologic can otherwise cost tens of thousands of dollars. That
          is the difference between taking it and not.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Apply through Social Security. Call 1-800-772-1213 or go to{' '}
          <a
            href="https://www.ssa.gov/medicare/part-d-extra-help"
            target="_blank"
            rel="noopener noreferrer"
          >
            ssa.gov/medicare/part-d-extra-help
          </a>
          . It is free to apply. There is no penalty for being turned down.
        </p>
      </div>

      <div className="content-card">
        <h2>Why your copay card stopped working</h2>
        <p>
          Maybe you used a drug maker&rsquo;s copay card before you turned 65. Then it stopped
          working the month you went on Medicare. Nothing is wrong with your card. Nothing is
          wrong with you.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Manufacturer copay cards cannot be used by anyone on Medicare.</strong> Under
          federal law, a drug company cannot pay down your share of a federally covered
          prescription. The law treats that as an illegal inducement. So every card excludes
          Medicare, Medicaid and other government coverage. Your plan is not being difficult. An
          appeal cannot fix it.
        </p>
        <p style={{ marginTop: '1rem' }}>
          This is where many people stop looking. <strong>That is the mistake.</strong> Two other
          kinds of help exist. Both are open to people on Medicare. They are not the same thing as
          a copay card.
        </p>
      </div>

      <div className="content-card">
        <h2>The two kinds of help that do work on Medicare</h2>

        <h3 style={{ marginTop: '1rem' }}>1. Independent charitable foundations</h3>
        <p>
          These are separate charities, not drug companies. They are independent of their donors.
          Because of that, federal regulators let them help people on Medicare. And they do.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>First, check whether the fund pays medical claims or only pharmacy
          claims.</strong> This decides everything for an infusion.
        </p>
        <ul>
          <li>
            <strong>PAN Foundation</strong> accepts claims from your doctor&rsquo;s office for
            drugs given in a clinic. It also accepts pharmacy claims. It can pay you back directly.{' '}
            <strong>For an infused biologic, this is the first place to look.</strong>{' '}
            <a href="https://www.panfoundation.org" target="_blank" rel="noopener noreferrer">
              panfoundation.org
            </a>{' '}
            or 1-866-316-7263.
          </li>
          <li>
            <strong>HealthWell Foundation</strong> runs autoimmune and vasculitis funds. That
            includes a giant cell arteritis fund. It requires Part B. Its autoimmune help comes as
            a <em>pharmacy</em> card. So it fits a self-injected drug better than an infusion.{' '}
            <a
              href="https://www.healthwellfoundation.org/disease-funds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              healthwellfoundation.org
            </a>{' '}
            or 1-800-675-8416.
          </li>
          <li>
            <strong>Patient Advocate Foundation Co-Pay Relief</strong> has rheumatoid arthritis and
            Sj&ouml;gren&rsquo;s funds. It serves people on Medicare.{' '}
            <a href="https://copays.org" target="_blank" rel="noopener noreferrer">
              copays.org
            </a>
            . Ask whether the fund you need covers a drug given in a clinic.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Income limits are generous. They are commonly three to five times the federal poverty
          level. They are adjusted for household size. So being turned away from something else
          does not mean you will be turned away here.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Timing matters most.</strong> These funds open and close as money runs out.
          Sometimes that happens within weeks. You cannot apply to a closed fund. But you can join
          its wait list. <strong>Your place in line is set by the day you signed up.</strong> It
          is not set by how fast you answer when it reopens. When PAN reopens a fund, it emails
          you a link. You have{' '}
          <strong>two business days</strong> to use it before it expires.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So <strong>join the wait list the day you find out a fund is closed</strong>. Do not wait
          until the day you need the money. Use an email address you check daily. This one step
          matters more than anything else on this page.
        </p>

        <h3 style={{ marginTop: '2rem' }}>2. The drug maker&rsquo;s own assistance foundation</h3>
        <p>
          The copay card is one program. Most drug makers also run a foundation. The foundation
          gives the medicine itself at no charge to people who qualify.{' '}
          <strong>These generally do serve people on Medicare.</strong> The card and the
          foundation are different programs run by the same company. So &ldquo;not valid with
          Medicare&rdquo; on the card does not mean the foundation is closed to you.
        </p>
        <ul>
          <li>
            <strong>Infliximab, golimumab</strong> &mdash; Johnson &amp; Johnson Patient Assistance
            Foundation,{' '}
            <a href="https://www.jjpaf.org" target="_blank" rel="noopener noreferrer">
              jjpaf.org
            </a>
          </li>
          <li>
            <strong>Rituximab, tocilizumab</strong> &mdash; Genentech Patient Foundation,
            (888) 941-3331
          </li>
          <li>
            <strong>Abatacept</strong> &mdash; Bristol Myers Squibb Patient Assistance Foundation,{' '}
            <a href="https://www.bmspaf.org" target="_blank" rel="noopener noreferrer">
              bmspaf.org
            </a>
          </li>
          <li>
            <strong>Secukinumab</strong> &mdash; Novartis Patient Assistance Foundation,{' '}
            <a href="https://pap.novartis.com" target="_blank" rel="noopener noreferrer">
              pap.novartis.com
            </a>
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Two practical notes. For an infusion, the free drug is usually shipped to your
          doctor&rsquo;s office, not to you. So{' '}
          <strong>the office has to take part. You cannot do this one alone.</strong> Ask them.
          Also, several of these programs want to see what you have already spent on medicines. So
          keep your pharmacy receipts.
        </p>
      </div>

      <div className="content-card">
        <h2>Spread the January bill instead of paying it all at once</h2>
        <p>
          This applies to Part D drugs. Most of your $2,100 lands on the first fill or two of the
          year. Medicare has a program that spreads it across the remaining months of the year.
          There is no interest. It is called the <strong>Medicare Prescription Payment Plan</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Know what it does and does not do. <strong>It does not reduce what you owe.</strong>{' '}
          It changes when you pay it. The bill comes from your plan rather than the pharmacy. If
          you qualify for Extra Help, take Extra Help instead. That lowers the amount. Sign up in{' '}
          <strong>December</strong> if you can. Enrolling in February does nothing about the charge
          you already paid in January.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <a
            href="https://www.medicare.gov/prescription-payment-plan"
            target="_blank"
            rel="noopener noreferrer"
          >
            medicare.gov/prescription-payment-plan
          </a>
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>If you have been making the medicine last longer</h2>
        <p>
          Some people space their infusions out. Some skip a dose in January when the bill is worst.
          Some split tablets that were not meant to be split. Most do not mention it at the
          appointment.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>If that is you, you are not unusual. You are not doing something shameful.</strong>{' '}
          A national study looked at older adults with rheumatoid arthritis. About{' '}
          <strong>one in five</strong> reported skipping or reducing doses because of cost. That is
          roughly three and a half times the rate of people without a chronic condition. Some were
          also cutting back on food or heat to afford the prescription.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Say it out loud. The reason is not confession. The reason is that{' '}
          <strong>stretching some of these drugs makes them stop working.</strong> Infliximab is the
          clearest example. Say you get it on and off instead of on schedule. Then your body is far
          more likely to build antibodies against it. A trial measured this. Antibodies appeared in{' '}
          <strong>30% of patients treated on and off, against 10% on a regular schedule</strong>.
          Those antibodies mean more infusion reactions. They also mean the drug slowly stops
          helping. The label warns about gaps longer than 16 weeks. So a gap taken to save money
          can cost you the medication for good. And then the next one is harder to get approved.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Here is one more survey finding. Canadian researchers asked both sides.{' '}
          <strong>Not one rheumatologist said they never discussed cost with patients</strong>.
          But 22% of the patients said they never had. Both groups thought it mattered. It just was
          not getting said. The authors concluded that patients may have to be the ones to start
          it.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So start it. Five words is enough:{' '}
          <strong>&ldquo;I can&rsquo;t afford this &mdash; what are my options?&rdquo;</strong>{' '}
          There is usually more than one option. None of them work if nobody knows.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Who will help you apply, for free</h2>
        <p>
          These applications are not hard. But they are tedious. A trained counselor will do them
          with you at no cost. They are paid nothing no matter what you qualify for.
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
            <strong>Medicare Savings Programs</strong> &mdash;{' '}
            <a
              href="https://www.medicare.gov/basics/costs/help/medicare-savings-programs"
              target="_blank"
              rel="noopener noreferrer"
            >
              medicare.gov/basics/costs/help/medicare-savings-programs
            </a>
            , or apply through your state Medicaid office
          </li>
          <li>
            <strong>If you are in QMB and a provider bills you anyway</strong> &mdash; call
            1-800-MEDICARE. If a collection agency is involved, file a complaint with the Consumer
            Financial Protection Bureau at{' '}
            <a
              href="https://www.consumerfinance.gov/complaint"
              target="_blank"
              rel="noopener noreferrer"
            >
              consumerfinance.gov/complaint
            </a>{' '}
            or 1-855-411-2372. You have a right to a refund of anything you already paid.
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Related</h2>
        <ul>
          <li>
            <a href="/patients/insurance">Medicare and your medication</a> &mdash; what your medicine
            costs under each kind of Medicare
          </li>
          <li>
            <a href="/patients/insurance/prior-authorization">
              Why your medicine needs permission first
            </a>
          </li>
          <li>
            <a href="/patients/insurance/helping-a-parent">Helping a parent with all of this</a>
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
            2026 Medicare Savings Program income and resource limits &mdash; Medicare.gov,
            &ldquo;Medicare Savings Programs&rdquo;; National Council on Aging, 2026 MSP eligibility
            chart, March 2026. These are federal minimums; states may use more generous criteria.
          </li>
          <li>
            QMB covers the Part B premium, deductible and coinsurance &mdash; Social Security Act
            §1905(p)(3), 42 U.S.C. §1396d(p)(3). Subparagraph (D) defines the benefit as the
            difference between payment at 80% and payment at 100% under §1833(a), which is the Part B
            coinsurance exactly.
          </li>
          <li>
            Prohibition on billing QMB enrollees for Medicare cost-sharing, the duty to recall
            charges and refund payments, and the complaint routes &mdash; CMS, MLN7936176,
            &ldquo;Prohibition on Billing Dually Eligible Individuals Enrolled in the QMB
            Program,&rdquo; September 2025; CMS Product No. 12039, &ldquo;3 Tips for People in the
            QMB Program,&rdquo; revised May 2025. Statutory basis: Social Security Act §§1902(n)(3)(B)
            and (C), 1905(p)(3), 1866(a)(1)(A), 1848(g)(3)(A).
          </li>
          <li>
            States may limit what they pay providers for QMB cost-sharing &mdash; Social Security Act
            §1902(n) as amended by §4714 of the Balanced Budget Act of 1997; Center for Medicare
            Advocacy analysis. The beneficiary owes nothing regardless.
          </li>
          <li>
            QMB, SLMB and QI enrollees are deemed eligible for the full Part D low-income subsidy
            without applying &mdash; 42 CFR §423.773(c).
          </li>
          <li>
            2026 Extra Help resource limits ($18,090 individual, $36,100 married, including the
            burial exclusion) and 2026 cost-sharing ($5.10 generic / $12.65 brand for most
            applicants; $0 above the $2,100 threshold) &mdash; CMS, &ldquo;Resource Limits for the
            Medicare Part D Low-Income Subsidy: Annual Adjustment for CY 2026,&rdquo; October 31,
            2025. Income limits of $23,940 and $32,460 are 150% of the 2026 federal poverty
            guidelines &mdash; Medicare.gov; 91 FR 1797, January 15, 2026. Some income is
            disregarded, so the effective limit is slightly higher.
          </li>
          <li>
            Extra Help is a Part D benefit only and does not apply to drugs covered under Part B
            &mdash; Social Security Act §1860D-14; 42 CFR Part 423, Subpart P. The partial subsidy
            was eliminated for plan years beginning January 1, 2024 &mdash; 42 CFR §423.773(b).
          </li>
          <li>
            Manufacturer copayment coupons may not be used by federal healthcare program
            beneficiaries &mdash; HHS Office of Inspector General, &ldquo;Special Advisory Bulletin:
            Pharmaceutical Manufacturer Copayment Coupons,&rdquo; September 2014; Anti-Kickback
            Statute, 42 U.S.C. §1320a-7b(b); Beneficiary Inducements CMP, 42 U.S.C. §1320a-7a(a)(5).
          </li>
          <li>
            Independent charitable patient assistance programs may serve Medicare beneficiaries when
            genuinely independent of donors &mdash; HHS Office of Inspector General,
            &ldquo;Supplemental Special Advisory Bulletin: Independent Charity Patient Assistance
            Programs,&rdquo; May 2014, supplementing the November 2005 bulletin.
          </li>
          <li>
            PAN Foundation accepts provider-submitted claims for physician-administered drugs; wait
            list queue position is set by original signup date and applicants have two business days
            to respond when a fund reopens &mdash; PAN Foundation, &ldquo;Submitting claims&rdquo;
            and &ldquo;Wait lists.&rdquo; HealthWell&rsquo;s autoimmune Medicare access fund provides
            a pharmacy card &mdash; HealthWell Foundation disease fund pages. Fund status changes
            frequently; check before relying on it.
          </li>
          <li>
            Cost-related medication nonadherence in older adults with rheumatoid arthritis (18.4% to
            20.7% prevalence; odds ratio 3.52 versus people with no chronic condition; odds ratio
            2.41 for spending less on basic needs) &mdash; Harrold LR, Briesacher BA, Peterson D, et
            al., <em>Journal of Rheumatology</em> 2013;40(2):137&ndash;43, using Medicare Current
            Beneficiary Survey data from 2004&ndash;2008 (n=1,100 with rheumatoid arthritis). These
            data predate the Part D out-of-pocket cap.
          </li>
          <li>
            Antibodies to infliximab in 30% of patients given episodic treatment versus 10% on
            scheduled maintenance &mdash; Hanauer SB, Wagner CL, Bala M, et al.,{' '}
            <em>Clinical Gastroenterology and Hepatology</em> 2004;2(7):542&ndash;53. Higher rates of
            antibodies after drug-free intervals longer than 16 weeks, and their association with
            reduced efficacy and infusion reactions &mdash; Remicade prescribing information,
            revised February 2025. Both describe Crohn&rsquo;s disease populations; the mechanism is
            a property of the drug.
          </li>
          <li>
            Patient and rheumatologist reporting on cost conversations (22% of patients reported
            never discussing cost; no rheumatologist reported never discussing it) &mdash; Kaal KJ,
            Bansback N, Hudson M, Anis A, Koehn C, Harrison M,{' '}
            <em>Clinical Rheumatology</em> 2020;40(1):93&ndash;100. A Canadian online survey of 78
            patients and 64 rheumatologists, not a population estimate.
          </li>
          <li>
            Medicare Prescription Payment Plan &mdash; CMS,
            medicare.gov/prescription-payment-plan.
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
          financial or insurance advice, and not a substitute for talking to your doctor, your plan,
          or a benefits counselor. Nothing is sold here. No insurance is sold here, no plan is
          recommended, and neither this page nor its author is paid by any insurance company, plan,
          pharmaceutical manufacturer, foundation or broker. This page is not affiliated with,
          endorsed by, or connected to Medicare, the Centers for Medicare &amp; Medicaid Services, or
          any government agency.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Nothing you enter anywhere on this site is collected, stored, or transmitted.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20help%20paying%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
