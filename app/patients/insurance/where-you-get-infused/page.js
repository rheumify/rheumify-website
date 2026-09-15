import ReadingControls from '../ReadingControls';

export const metadata = {
  title: 'Why the Same Infusion Costs More at a Hospital: Medicare Site of Care (2026)',
  description:
    'Medicare pays a hospital three to four times what it pays a doctor’s office for the same infusion, and you owe 20% of the larger number. Why that happens, the drug bill Medicare does not cover, and what to ask first. Written by a rheumatologist.',
  keywords: [
    'hospital outpatient infusion costs more medicare',
    'facility fee infusion medicare',
    'provider based billing infusion',
    'self administered drug exclusion hospital bill',
    'medicare advantage site of care infusion',
    'why did my infusion cost more this year',
  ],
};

export default function WhereYouGetInfusedPage() {
  return (
    <div className="page-container">
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Where you get infused
      </p>

      <div className="page-header">
        <h1>Where you get infused changes the bill</h1>
        <p>
          Same medicine. Same dose. Same nurse. But the bill can be several times larger. What
          decides it is how the building is registered with Medicare.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <p>
          Medicare pays two very different rates for an infusion. The rate depends on how the place
          you sit is billed. It can be billed as a <strong>hospital outpatient department</strong>{' '}
          or as a <strong>doctor&rsquo;s office</strong>. Medicare&rsquo;s own math shows the gap. The
          office rate for giving an infusion is only <strong>about a quarter to a third</strong> of
          the hospital rate. The hospital rate is roughly three to four times higher for the same
          service.
        </p>
        <p style={{ marginTop: '1rem' }}>
          You pay <strong>20% of whichever number applies</strong>. So the setting does not just
          change what Medicare spends. It changes what you owe. That happens at every infusion, for
          as long as you are on the drug.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Nothing about your medical care is different. This is a billing category.
        </p>
      </div>

      <div className="content-card">
        <h2>Why does the hospital cost more for the same infusion?</h2>
        <p>
          Because a hospital bills for the room as well as the care.
        </p>
        <ul>
          <li>
            <strong>In a doctor&rsquo;s office</strong>, there is one bill. Medicare pays a set
            amount for giving the infusion. It pays a set amount for the drug itself.
          </li>
          <li>
            <strong>In a hospital outpatient department</strong>, there are two bills. One comes
            from the doctor. One comes from the hospital. That second bill is called a{' '}
            <strong>facility fee</strong>. It is a second bill from the hospital for the room. It
            is meant to cover the building, the equipment and the overhead.{' '}
            <strong>Each bill carries its own 20%.</strong>
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Independent analysis looked at Medicare claims for the same drug administration. It found
          hospital outpatient departments were paid roughly <strong>two to three times</strong> the
          office rate. Medicare&rsquo;s own advisory commission has told Congress for years that
          this gap has no clinical reason. It also says the gap has pushed infusions out of offices
          and into hospitals. Between 2015 and 2021, chemotherapy administration fell 14% in
          offices. It rose 21% in hospital outpatient departments.
        </p>
      </div>

      <div className="content-card">
        <h2>Why did my costs go up when nothing changed?</h2>
        <p>
          Your infusion may suddenly cost more. You are in the same chair with the same nurse.
          There is a specific and very common reason: <strong>a hospital bought the
          practice.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          This is called <strong>provider-based billing</strong>. It means the clinic is now billed
          as part of a hospital. Nothing physical has to change. The clinic is re-registered as a
          department of the hospital. From that day, the same visit creates a hospital facility
          bill on top of the doctor&rsquo;s bill. Same room, same people, two bills.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Do you have a right to be warned?</strong> Partly. Federal rules require written
          notice before your visit. The notice must say you will owe a hospital coinsurance (your
          20%) you would not otherwise owe. But this applies{' '}
          <strong>only when the clinic is off the hospital&rsquo;s main campus.</strong> The
          department may sit on the main campus, or within about 250 yards of it. If so, there is
          no federal notice requirement at all.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Washington State goes further than federal law here.</strong> Some provider-based
          clinics in Washington charge a facility fee. Those clinics must tell you before
          non-emergency care that they are licensed as part of a hospital. They must also tell you
          that you may get a separate facility charge. That charge can mean higher out-of-pocket
          costs. The clinic must post that same statement prominently, including on its website. If
          you were never told, you can raise that.
        </p>
      </div>

      <div className="content-card">
        <h2>Did the 2026 rule change fix this?</h2>
        <p>
          <strong>For most people, no.</strong> A real change did happen. But it is narrower than
          it sounds, and some recent coverage is misleading.
        </p>
        <p style={{ marginTop: '1rem' }}>
          On <strong>January 1, 2026</strong>, Medicare began paying the lower office-equivalent
          rate for drug administration at some hospital departments. Those departments sit{' '}
          <strong>off the main campus</strong> and had been billing before November 2015. CMS
          estimated it would save patients about $70 million a year in coinsurance.
        </p>
        <p style={{ marginTop: '1rem' }}>
          But <strong>infusions given on a hospital&rsquo;s main campus were not included</strong>.
          About <strong>seven-eighths</strong> of Medicare&rsquo;s hospital outpatient spending
          happens on main campuses. So if you are infused at the hospital itself, the 2026 change
          does not reach you. The proposed rule for 2027 extends this idea to some imaging. It does
          not extend it to more drug administration.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>A hospital bill Medicare does not cover</h2>
        <p>
          Read this one even if the rest of the page does not apply to you. This bill arrives with
          no warning and looks like a mistake.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Medicare Part B does not pay for some drugs given in a hospital outpatient setting. These
          are drugs it considers{' '}
          <strong>&ldquo;usually self-administered&rdquo;</strong>. Each region&rsquo;s Medicare
          contractor keeps its own list of these drugs. The contractor is the company that handles
          Medicare bills in your region. If a drug you were given is on that list,{' '}
          <strong>the hospital bills you directly</strong>. It bills at the hospital&rsquo;s own
          charges, which are not the Medicare rate.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Here is why there is no warning. Sometimes Medicare denies something as{' '}
          <em>not medically necessary</em>. Then you must be warned in advance and asked to sign.
          This is a different kind of denial. The drug is simply outside the benefit. So{' '}
          <strong>no advance notice is required and none is given.</strong> The first you hear of
          it is the bill.
        </p>
        <p style={{ marginTop: '1rem' }}>
          In rheumatology, the pattern is clear. The <strong>self-injected</strong> versions appear
          on these lists. The infused versions do not. In Washington the list includes methotrexate
          auto-injectors, adalimumab and etanercept. It also includes the abatacept and golimumab
          self-injections, secukinumab, ustekinumab, anakinra and others. Lists differ by region.
          They are revised several times a year.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>What to do about it:</strong>
        </p>
        <ul>
          <li>
            <strong>Ask before, not after.</strong> &ldquo;Is anything I am getting on the Medicare
            self-administered drug list?&rdquo; If the answer is yes, ask if you can bring your own
            from your pharmacy instead.
          </li>
          <li>
            <strong>Try your drug plan.</strong> Your Part D plan may cover it. You may have to pay
            first and then submit for reimbursement. The drug may not be on the formulary, the
            plan&rsquo;s drug list. If so, you can request an exception.
          </li>
          <li>
            <strong>Do not just pay a chargemaster bill.</strong> That is the hospital&rsquo;s list
            price. If the hospital is a nonprofit, it must have a written financial assistance
            policy. It must publicize that policy. If you qualify, it may charge you no more than
            the amount generally billed to insured patients. It cannot charge you its list price.
            That applies to people on Medicare too. Ask for the policy and the application by name.
          </li>
        </ul>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Patient advocates asked Medicare to fix the lack of notice here in 2023. As of this
          writing, the policy has not changed.
        </p>
      </div>

      <div className="content-card">
        <h2>Can my plan make me move somewhere else?</h2>
        <p>
          <strong>Original Medicare cannot.</strong> You have a legal right to get services from any
          qualified provider. A short list of hospital outpatient services needs advance approval
          under Original Medicare. That list does not include drug administration or any infused
          biologic. No one can redirect you.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>This is mostly a commercial insurance practice. That is good news if you are on
          Medicare.</strong> Insurers run what they call &ldquo;site of care&rdquo; review. This
          review approves an infusion at a hospital only when specific conditions are met.
          Otherwise it directs you somewhere cheaper. Nearly every such policy published in writing
          applies to employer and individual commercial plans. Several say plainly that they do{' '}
          <strong>not</strong> apply to Medicare Advantage.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>So people on Medicare Advantage are less likely to run into this.</strong> People
          on commercial insurance are more likely to. Less likely is not never. One large
          insurer&rsquo;s policy says it may also apply to Medicare Advantage in certain cases.
          That policy caps ongoing hospital-based infusion at{' '}
          <strong>six months</strong> before it requires reassessment. After that, you are expected
          to move. The only way to know is to ask your own plan.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>If it does apply, there are exceptions. They are written down.</strong> Plan
          policies generally let you stay at a hospital site when at least one of these is
          documented. These are the words to use:
        </p>
        <ul>
          <li>It is your <strong>first infusion</strong>, or your first after a break of six months or more</li>
          <li>
            You have had a <strong>severe or potentially life-threatening reaction</strong> to an
            infusion before
          </li>
          <li>
            You are <strong>medically unstable</strong>. Or you have a heart, lung or kidney
            condition. That condition means you could need services only a hospital has
          </li>
          <li>
            You have <strong>difficult vein access</strong>
          </li>
          <li>
            A physical or cognitive impairment makes another setting unsafe for you
          </li>
          <li>There is no suitable alternative you can actually get to</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          If one of those is true of you, tell your doctor&rsquo;s office. Ask them to document it
          in the request. A plan is far more likely to approve an exception that names its own
          criteria. It is less likely to approve a letter that argues in general terms.
        </p>
        <p style={{ marginTop: '1rem' }}>
          And if you are turned down, <strong>appeal</strong>. In 2025, Medicare Advantage plans
          denied about 12% of standard prior authorization requests. Prior authorization is approval
          before you can get a drug. And{' '}
          <strong>67% of denied requests were overturned when someone appealed.</strong>
        </p>
      </div>

      <div className="content-card">
        <h2>What to ask, and when</h2>
        <p>
          Almost all of the damage here is preventable. Ask four questions before the first
          infusion at a new place. Or ask as soon as you hear your practice has been bought.
        </p>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.9 }}>
          <li>
            <strong>&ldquo;Is this billed as a hospital outpatient department or as a
            doctor&rsquo;s office?&rdquo;</strong> This one question decides most of the bill.
          </li>
          <li>
            <strong>&ldquo;Will I get one bill or two?&rdquo;</strong> Two means there is a facility
            fee. You owe 20% of that as well.
          </li>
          <li>
            <strong>&ldquo;Is anything I am receiving on the Medicare self-administered drug
            list?&rdquo;</strong> Ask the infusion pharmacy or your rheumatologist&rsquo;s office.
            Do not ask the front desk.
          </li>
          <li>
            <strong>&ldquo;Does my authorization say where I can be infused, and when does it
            run out?&rdquo;</strong> Ask your plan if you have Medicare Advantage. An authorization
            is often permission to be infused <em>at a named place</em>. Moving can require a new
            one. An infusion given under an authorization that names the wrong location can be
            denied afterwards.
          </li>
        </ol>
      </div>

      <div className="content-card">
        <h2>Can I get a price before I agree to it?</h2>
        <p>
          Partly. Here is what does and does not apply to you.
        </p>
        <ul>
          <li>
            <strong>The &ldquo;good faith estimate&rdquo; you may have read about does not apply to
            you.</strong> That right comes from the No Surprises Act. The Act clearly does not
            cover people on Medicare, Medicaid, VA or TRICARE. A similar protection for insured
            patients has not been put in place. Do not spend a week trying to use it.
          </li>
          <li>
            <strong>Hospital price transparency is real and enforceable.</strong> Every hospital must
            publish its prices. It must also offer either a list of shoppable services or an{' '}
            <strong>online price estimator tool</strong>. The tool must be free and prominently
            displayed. The estimator is the practical route. Ask the billing office where it is.
            Ask for an estimate for the infusion codes plus the drug.
          </li>
          <li>
            <strong>Medicare has no tool that compares a hospital to a doctor&rsquo;s office for an
            infusion.</strong>
          </li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--blue-accent)' }}>
        <h2>Free help</h2>
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
            <strong>Medicare</strong> &mdash; 1-800-MEDICARE (1-800-633-4227)
          </li>
          <li>
            <strong>Check what Washington excludes</strong> &mdash;{' '}
            <a
              href="https://med.noridianmedicare.com/web/jfa/policies/sads"
              target="_blank"
              rel="noopener noreferrer"
            >
              the self-administered drug list for Washington and nine other western states
            </a>
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
            <a href="/patients/insurance/help-paying">Help paying for your medication</a> &mdash; the
            program that eliminates the 20% entirely
          </li>
          <li>
            <a href="/patients/insurance/prior-authorization">
              Why your medicine needs permission first
            </a>
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
            Physician office infusions are paid under the Medicare Physician Fee Schedule and
            hospital outpatient infusions under the Outpatient Prospective Payment System, with a
            separate facility charge. Part B drugs are generally paid at the average sales price plus
            6% &mdash; Social Security Act §1847A; CMS, &ldquo;Part B Drug Payment Limits
            Overview,&rdquo; March 2026.
          </li>
          <li>
            CMS calculated that the volume-weighted Physician Fee Schedule payment for the drug
            administration payment groups was 24% to 33% of the outpatient payment &mdash; cited in
            Adler L and Fiedler M, Brookings Institution, comment on the CY2026 OPPS proposed rule,
            September 22, 2025.
          </li>
          <li>
            Hospital outpatient departments paid approximately 200% to 300% of the physician office
            rate for the same drug administration, using the 2021 Medicare 5% Limited Data Set
            &mdash; Actuarial Research Corporation, October 18, 2023.
          </li>
          <li>
            Chemotherapy administration volume fell 14.2% in freestanding clinician offices and rose
            21.0% in hospital outpatient departments between 2015 and 2021 &mdash; Medicare Payment
            Advisory Commission, Report to the Congress, June 2023, Chapter 8.
          </li>
          <li>
            Written notice of potential facility-fee liability is required before services at an
            off-campus provider-based department &mdash; 42 CFR §413.65(g)(7). &ldquo;Campus&rdquo;
            is defined as the main buildings and areas within 250 yards &mdash; 42 CFR §413.65(a)(2).
            There is no equivalent federal notice requirement for on-campus departments.
          </li>
          <li>
            Washington State requires provider-based clinics charging a facility fee to give notice
            before non-emergency services and to post the same statement prominently, including on
            the clinic&rsquo;s website &mdash; RCW 70.01.040.
          </li>
          <li>
            Drug administration in excepted off-campus provider-based departments is paid at the
            Physician Fee Schedule equivalent rate effective January 1, 2026, with an estimated $70
            million in reduced beneficiary coinsurance &mdash; CMS, CY2026 Hospital Outpatient
            Prospective Payment System final rule (CMS-1834-FC), 90 Fed. Reg., November 25, 2025, and
            CMS fact sheet, November 21, 2025. Rural sole community hospitals are exempt. On-campus
            hospital outpatient departments are not included.
          </li>
          <li>
            87.4% of Medicare hospital outpatient spending occurred at on-campus hospital outpatient
            departments in 2022 &mdash; Avalere Health, January 10, 2024.
          </li>
          <li>
            Medicare Part B does not cover drugs usually self-administered by the patient &mdash;
            Social Security Act §1861(s)(2), as amended by §112 of the Benefits Improvement and
            Protection Act of 2000; CMS Medicare Benefit Policy Manual, Chapter 15, §50.2.
            &ldquo;Usually&rdquo; means more than 50% of the time across all Medicare beneficiaries
            using the drug.
          </li>
          <li>
            Because this is a benefit category denial rather than a medical necessity denial, an
            Advance Beneficiary Notice is not required and the provider may charge the beneficiary
            &mdash; Noridian Healthcare Solutions, Self-Administered Drug Exclusion List, article
            A53033, current revision effective August 29, 2026. Washington is in Noridian
            Jurisdiction F. Lists are maintained separately by each Medicare Administrative
            Contractor and differ by region.
          </li>
          <li>
            Coverage of self-administered drugs through a Part D plan, including paying up front and
            submitting for reimbursement and requesting a formulary exception &mdash; CMS, &ldquo;How
            Medicare Covers Self-Administered Drugs Given in Hospital Outpatient Settings,&rdquo;
            Product No. 11333.
          </li>
          <li>
            Nonprofit hospitals must maintain and widely publicize a written financial assistance
            policy covering all medically necessary care, and may not charge a person eligible under
            it more than the amount generally billed to insured patients &mdash; Internal Revenue
            Code §501(r)(4) and §501(r)(5). This applies to Medicare beneficiaries; it does not apply
            to for-profit or government hospitals.
          </li>
          <li>
            Medicare beneficiaries have a statutory right to obtain services from any qualified
            provider &mdash; 42 U.S.C. §1395a(a). The hospital outpatient services requiring prior
            authorization under Original Medicare are an enumerated list that does not include drug
            administration &mdash; 42 CFR §419.83. The 2026 WISeR pilot covers procedures and
            devices only; no medications are included.
          </li>
          <li>
            Site-of-care policies limiting hospital-based infusion, including a six-month duration
            limit before reassessment and the clinical exception criteria quoted here &mdash;
            UnitedHealthcare, &ldquo;Provider Administered Drugs &mdash; Site of Care,&rdquo;
            effective September 1, 2026, which states it may also be applied to Medicare Advantage
            plans in certain instances; Cigna Coverage Policy 1605, effective June 15, 2026;
            Anthem/Elevance Clinical UM Guideline CG-MED-83. Several published site-of-care
            policies, including Regence dru408 and Kaiser Permanente Washington&rsquo;s, state that
            they do not apply to Medicare plans. Site-of-care review is predominantly a commercial
            insurance practice; application to Medicare Advantage varies by plan and is less common.
          </li>
          <li>
            Medicare Advantage plans denied 12% of standard and 10% of expedited prior authorization
            requests in 2025, and 67% of denied requests were overturned on appeal &mdash; KFF
            analysis of CMS prior authorization transparency data, August 13, 2026.
          </li>
          <li>
            No Surprises Act good faith estimate requirements do not apply to people enrolled in
            Medicare, Medicaid, Indian Health Services, Veterans Affairs health care or TRICARE
            &mdash; CMS, Good Faith Estimate and Patient-Provider Dispute Resolution guidance. The
            advanced explanation of benefits for insured patients remains unimplemented.
          </li>
          <li>
            Hospitals must publish standard charges and must provide either a consumer-friendly list
            of at least 300 shoppable services or an internet-based price estimator tool, free and
            prominently displayed &mdash; 45 CFR §§180.50, 180.60. Additional requirements took
            effect January 1, 2026, with enforcement from April 1, 2026 &mdash; CMS fact sheet,
            CY2026 hospital price transparency policy changes.
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
          or the hospital&rsquo;s billing office. Nothing is sold here. No insurance is sold here, no
          plan, hospital or infusion provider is recommended, and neither this page nor its author is
          paid by any insurance company, plan, hospital, pharmaceutical manufacturer or broker. This
          page is not affiliated with, endorsed by, or connected to Medicare, the Centers for
          Medicare &amp; Medicaid Services, or any government agency.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20site%20of%20care%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
