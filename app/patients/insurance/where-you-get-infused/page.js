import ReadingControls from '../ReadingControls';

export const metadata = {
  title: 'Why the Same Infusion Costs More at a Hospital: Medicare Site of Care (2026)',
  description:
    'Medicare pays a hospital three to four times what it pays a doctor’s office for the same infusion, and you owe 20% of the larger number. Why that happens, the surprise drug bill nobody warns you about, and what to ask first. Written by a rheumatologist.',
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
          The same medicine, the same dose, the same nurse &mdash; and a bill that can be several
          times larger, decided by how the building is registered with Medicare.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <p>
          Medicare pays two completely different rates for an infusion depending on whether the place
          you sit is billed as a <strong>hospital outpatient department</strong> or as a{' '}
          <strong>doctor&rsquo;s office</strong>. By Medicare&rsquo;s own arithmetic, the office rate
          for giving an infusion is only <strong>about a quarter to a third</strong> of the hospital
          rate. The hospital rate is roughly three to four times higher for the identical service.
        </p>
        <p style={{ marginTop: '1rem' }}>
          You pay <strong>20% of whichever number applies</strong>. So the setting does not just
          change what Medicare spends. It changes what you owe, every single infusion, for as long as
          you are on the drug.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Nothing about your medical care is different. This is a billing category, and most people
          never find out it exists until the first bill arrives.
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
            amount for giving the infusion and a set amount for the drug itself.
          </li>
          <li>
            <strong>In a hospital outpatient department</strong>, there are two bills &mdash; one
            from the doctor and one from the hospital, called a <strong>facility fee</strong>. The
            facility fee is meant to cover the building, the equipment and the overhead.{' '}
            <strong>Each bill carries its own 20%.</strong>
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Independent analysis of Medicare claims found hospital outpatient departments being paid
          roughly <strong>two to three times</strong> the office rate for the same drug
          administration. Medicare&rsquo;s own advisory commission has been telling Congress for
          years that this gap has no clinical justification, and that it has pushed infusions out of
          offices and into hospitals &mdash; between 2015 and 2021 the volume of chemotherapy
          administration fell 14% in offices and rose 21% in hospital outpatient departments.
        </p>
      </div>

      <div className="content-card">
        <h2>Why did my costs go up when nothing changed?</h2>
        <p>
          If your infusion suddenly costs more and you are in the same chair with the same nurse,
          there is a specific and very common explanation: <strong>a hospital bought the
          practice.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          This is called <strong>provider-based billing</strong>. Nothing physical has to change. The
          clinic is re-registered as a department of the hospital, and from that day the same visit
          generates a hospital facility bill on top of the doctor&rsquo;s bill. Same room, same
          people, two bills.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Are you entitled to be warned?</strong> Partly, and the gap is worth knowing.
          Federal rules require written notice before your visit &mdash; telling you that you will
          owe a hospital coinsurance you would not otherwise owe &mdash; but{' '}
          <strong>only when the clinic is off the hospital&rsquo;s main campus.</strong> If the
          department sits on the main campus, or within about 250 yards of it, there is no federal
          notice requirement at all.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Washington State goes further than federal law here.</strong> A provider-based
          clinic in Washington that charges a facility fee must tell you before non-emergency care
          that it is licensed as part of a hospital and that you may get a separate facility charge
          resulting in higher out-of-pocket costs &mdash; and it must post that same statement
          prominently, including on its website. If you were never told, that is worth raising.
        </p>
      </div>

      <div className="content-card">
        <h2>Did the 2026 rule change fix this?</h2>
        <p>
          <strong>For most people, no</strong> &mdash; and this is where recent coverage is
          misleading, because a real change did happen and it is narrower than it sounds.
        </p>
        <p style={{ marginTop: '1rem' }}>
          On <strong>January 1, 2026</strong>, Medicare began paying the lower office-equivalent rate
          for drug administration at hospital departments that sit{' '}
          <strong>off the main campus</strong> and had been billing before November 2015. CMS
          estimated it would save patients about $70 million a year in coinsurance.
        </p>
        <p style={{ marginTop: '1rem' }}>
          But <strong>infusions given on a hospital&rsquo;s main campus were not included</strong>,
          and about <strong>seven-eighths</strong> of Medicare&rsquo;s hospital outpatient spending
          happens on main campuses. So if you are infused at the hospital itself, the 2026 change
          does not reach you. The proposed rule for 2027 extends this idea to some imaging, not to
          more drug administration.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>The hospital bill nobody warns you about</h2>
        <p>
          This one is worth reading even if the rest of the page does not apply to you, because it
          arrives with no warning and looks like a mistake.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Medicare Part B does not pay for drugs it considers{' '}
          <strong>&ldquo;usually self-administered&rdquo;</strong> when they are given in a hospital
          outpatient setting. Each region&rsquo;s Medicare contractor keeps its own list of which
          drugs those are. If something you were given is on that list,{' '}
          <strong>the hospital bills you directly</strong> &mdash; at the hospital&rsquo;s own
          charges, which are not the Medicare rate.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Here is why it blindsides people. When Medicare denies something as{' '}
          <em>not medically necessary</em>, you have to be warned in advance and asked to sign. This
          is a different kind of denial &mdash; the drug is simply outside the benefit &mdash; so{' '}
          <strong>no advance notice is required and none is given.</strong> The first you hear of it
          is the bill.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The pattern in rheumatology is that the <strong>self-injected</strong> versions appear on
          these lists while the infused versions do not. In our region the list includes
          methotrexate auto-injectors, adalimumab, etanercept, the abatacept and golimumab
          self-injections, secukinumab, ustekinumab, anakinra and others. Lists differ by region and
          are revised several times a year.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>What to do about it:</strong>
        </p>
        <ul>
          <li>
            <strong>Ask before, not after.</strong> &ldquo;Is anything I am getting on the Medicare
            self-administered drug list?&rdquo; If the answer is yes, ask whether you can bring your
            own from your pharmacy instead.
          </li>
          <li>
            <strong>Try your drug plan.</strong> Your Part D plan may cover it. You may have to pay
            first and submit for reimbursement, and you can request an exception if it is not on the
            formulary.
          </li>
          <li>
            <strong>Do not just pay a chargemaster bill.</strong> If the hospital is a nonprofit, it
            is required to have a written financial assistance policy, to publicize it, and &mdash;
            if you qualify &mdash; to charge you no more than the amount generally billed to insured
            patients rather than its list price. That applies to people on Medicare too. Ask for the
            policy and the application by name.
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
          <strong>Original Medicare cannot.</strong> You have a statutory right to obtain services
          from any qualified provider, and the short list of hospital outpatient services that
          require advance approval under Original Medicare does not include drug administration or
          any infused biologic. Nobody can redirect you.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>This is mostly a commercial insurance practice, and that is good news if you are
          on Medicare.</strong> Insurers run what they call &ldquo;site of care&rdquo; review, which
          approves an infusion at a hospital only when specific conditions are met and otherwise
          directs you somewhere cheaper. Nearly every such policy published in writing applies to
          employer and individual commercial plans &mdash; and several say plainly that they do{' '}
          <strong>not</strong> apply to Medicare Advantage.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>So if you are on Medicare Advantage, you are less likely to run into this than
          someone on commercial insurance.</strong> Less likely is not never. One large
          insurer&rsquo;s policy says it may also be applied to Medicare Advantage in certain
          instances, and that policy caps ongoing hospital-based infusion at{' '}
          <strong>six months</strong> before requiring reassessment, after which you are expected to
          move. The only way to know is to ask your own plan.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>If it does apply, there are exceptions, and they are written down.</strong> Plan
          policies generally allow you to stay at a hospital site when at least one of these is
          documented &mdash; and these are the words to use:
        </p>
        <ul>
          <li>It is your <strong>first infusion</strong>, or your first after a break of six months or more</li>
          <li>
            You have had a <strong>severe or potentially life-threatening reaction</strong> to an
            infusion before
          </li>
          <li>
            You are <strong>medically unstable</strong>, or have a heart, lung or kidney condition
            that means you could need services only a hospital has
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
          If one of those is true of you, say so to your doctor&rsquo;s office and ask them to
          document it in the request. A plan is far more likely to approve an exception that names
          its own criteria than a letter that argues generally.
        </p>
        <p style={{ marginTop: '1rem' }}>
          And if you are turned down, <strong>appeal</strong>. In 2025, Medicare Advantage plans
          denied about 12% of standard prior authorization requests &mdash; and{' '}
          <strong>67% of denied requests were overturned when someone appealed.</strong>
        </p>
      </div>

      <div className="content-card">
        <h2>What to ask, and when</h2>
        <p>
          Almost all of the damage here is preventable with four questions asked before the first
          infusion at a new place &mdash; or as soon as you hear your practice has been bought.
        </p>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.9 }}>
          <li>
            <strong>&ldquo;Is this billed as a hospital outpatient department or as a
            doctor&rsquo;s office?&rdquo;</strong> This one question determines most of the bill.
          </li>
          <li>
            <strong>&ldquo;Will I get one bill or two?&rdquo;</strong> Two means there is a facility
            fee, and you owe 20% of that as well.
          </li>
          <li>
            <strong>&ldquo;Is anything I am receiving on the Medicare self-administered drug
            list?&rdquo;</strong> Ask the infusion pharmacy or your rheumatologist&rsquo;s office,
            not the front desk.
          </li>
          <li>
            <strong>&ldquo;Does my authorization say where I can be infused, and when does it
            run out?&rdquo;</strong> Ask your plan if you have Medicare Advantage. An authorization
            is often permission to be infused <em>at a named place</em>, and moving can require a new
            one. An infusion given under an authorization that names the wrong location can be
            denied afterwards.
          </li>
        </ol>
      </div>

      <div className="content-card">
        <h2>Can I get a price before I agree to it?</h2>
        <p>
          Partly, and there is a widely repeated claim here that is wrong, so it is worth being
          precise.
        </p>
        <ul>
          <li>
            <strong>The &ldquo;good faith estimate&rdquo; you may have read about does not apply to
            you.</strong> That right comes from the No Surprises Act, and it explicitly does not
            cover people on Medicare, Medicaid, VA or TRICARE. The equivalent protection for insured
            patients has not been implemented. Do not spend a week trying to invoke it.
          </li>
          <li>
            <strong>Hospital price transparency is real and enforceable.</strong> Every hospital must
            publish its prices and must offer either a list of shoppable services or an{' '}
            <strong>online price estimator tool</strong>, free and prominently displayed. The
            estimator is the practical route. Ask the billing office where it is, and ask for an
            estimate for the infusion codes plus the drug.
          </li>
          <li>
            <strong>Medicare has no tool that compares a hospital to a doctor&rsquo;s office for an
            infusion.</strong> That absence is worth naming. The comparison you most want to make is
            the one nobody has built.
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
            <strong>Check what your region excludes</strong> &mdash;{' '}
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
            administration &mdash; 42 CFR §419.83. The 2026 WISeR pilot covers thirteen procedures
            and devices and no medications.
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
