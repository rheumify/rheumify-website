export const metadata = {
  title: 'Does Medicare Cover Remicade (Infliximab)? What It Costs in 2026',
  description:
    'Infliximab comes as Remicade and four other versions. Medicare covers all of them, and your plan may make you switch between them — but the switch saves you far less than you would think. Written by a rheumatologist.',
  keywords: [
    'does medicare cover remicade infusions',
    'infliximab medicare cost',
    'remicade biosimilar medicare',
    'inflectra avsola renflexis medicare',
    'medicare advantage remicade step therapy',
  ],
};

export default function InfliximabPage() {
  return (
    <div className="page-container">
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Infliximab
      </p>

      <div className="page-header">
        <h1>Infliximab (Remicade) and Medicare</h1>
        <p>
          Medicare covers the infusion. What surprises people is being told to switch to a different
          version of it — and how little that switch actually saves them.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <p>
          Infliximab is given as an infusion, so it is covered by <strong>Part B</strong>. You pay
          20% of the cost, and <strong>there is no yearly limit on that 20%</strong> unless you have
          a Medicare supplement policy or an Advantage plan.
        </p>
        <p style={{ marginTop: '1rem' }}>
          At the usual rheumatoid arthritis dose, that works out to roughly{' '}
          <strong>$1,200 to $1,450 a year</strong> for a mid-sized adult — less than most biologics,
          because infliximab is dosed every eight weeks rather than monthly. Go up in dose or
          frequency and it climbs; there is nothing stopping it.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>There is no version you can take at home.</strong> A subcutaneous infliximab
          called Zymfentra exists, but it is approved only for Crohn&rsquo;s disease and ulcerative
          colitis, not for any rheumatology condition. So unlike some other biologics, there is no
          Part D route and no $2,100 cap available to you.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>The biosimilar switch, and what it really saves you</h2>
        <p>
          There are four infliximab products on the US market: <strong>Remicade</strong>, the
          original, and three biosimilars — <strong>Inflectra</strong>, <strong>Renflexis</strong>{' '}
          and <strong>Avsola</strong>. A biosimilar is the same medicine made by a different
          company, approved by the FDA on the same evidence standard.
        </p>
        <p style={{ marginTop: '1rem' }}>
          You will read that biosimilars are dramatically cheaper. For infliximab under Medicare in
          2026, <strong>that is not true.</strong> Here is what Medicare actually pays per 10 mg:
        </p>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Medicare pays</th>
                <th>Cheaper than Remicade by</th>
                <th>Your 20%, per year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Remicade</strong></td>
                <td>$31.48</td>
                <td>&mdash;</td>
                <td>about $1,440</td>
              </tr>
              <tr>
                <td>Avsola</td>
                <td>$30.83</td>
                <td>2%</td>
                <td>about $1,415</td>
              </tr>
              <tr>
                <td>Inflectra</td>
                <td>$27.71</td>
                <td>12%</td>
                <td>about $1,290</td>
              </tr>
              <tr>
                <td><strong>Renflexis</strong></td>
                <td>$26.62</td>
                <td>16%</td>
                <td>about $1,250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <strong>
            Best case, switching to the cheapest biosimilar saves you about $190 a year.
          </strong>{' '}
          Not nothing, but not what the word &ldquo;biosimilar&rdquo; suggests. Compare rituximab,
          where the cheapest version costs a quarter of the original.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Which raises the obvious question: if the saving is small, why do plans push it so hard?
          Because the plan&rsquo;s saving is not the same as yours. Your share is 20%; the plan pays
          the other 80%, and across thousands of members that 16% adds up to real money for them.
        </p>
      </div>

      <div className="content-card">
        <h2>Your plan can make you switch. It can also make you switch again.</h2>
        <p>
          Under <strong>Original Medicare, nobody can make you switch products</strong> and nobody
          has to approve the infusion in advance. Your rheumatologist decides.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans are allowed to require it</strong>, and the large ones do.
          One national insurer&rsquo;s 2026 policy requires <em>at least 14 weeks</em> on a
          biosimilar with minimal response before it will pay for Remicade. Another lists Remicade
          as non-preferred outright. And nothing in the rules stops a plan from preferring a
          different product next year, and a third one the year after.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The American College of Rheumatology has taken a position on this:{' '}
          <em>
            &ldquo;The ACR opposes insurer-mandated switching to biosimilars and is concerned over
            frequent non-medical switching&hellip; which may harm patients and lead to disease
            relapse.&rdquo;
          </em>
        </p>
      </div>

      <div className="content-card">
        <h2>What the evidence says about switching</h2>
        <p>
          It is worth separating two things: whether the medicine works the same, and whether people
          do well when they are switched.
        </p>
        <ul>
          <li>
            <strong>The medicine works the same.</strong> The NOR-SWITCH trial randomised 482
            patients and found no meaningful difference between the original and the biosimilar.
          </li>
          <li>
            <strong>But switching itself can go badly.</strong> In one real-world study,{' '}
            <strong>24% of patients stopped the biosimilar within six months</strong> — mostly for
            subjective symptoms, with no change in their blood markers or disease scores. This is
            called the nocebo effect: expecting a worse result makes people feel worse.
          </li>
          <li>
            <strong>How it is explained matters enormously.</strong> When the same switch was done
            with structured explanation from the clinical team, the drop-out rate fell from 24% to{' '}
            <strong>6.6%</strong>.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Practical version: if your plan makes you change products, that is not a reason to panic,
          and it is a very good reason to ask your rheumatology team to walk you through it properly
          before the first infusion.
        </p>
      </div>

      <div className="content-card">
        <h2>The problem nobody sees coming: the stocking mismatch</h2>
        <p>
          Infusion medications are bought by the practice and billed afterwards. So the infusion
          center keeps a stock of one or two infliximab products.
        </p>
        <p style={{ marginTop: '1rem' }}>
          If your plan prefers a product your infusion center does not stock, somebody has to fix it
          — the center orders it in, your doctor files an exception, or you move to a different
          infusion site. None of that is your fault, all of it takes time, and it is the most common
          reason an infusion gets pushed back.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Worth asking, before January:</strong> which infliximab product does my plan
          prefer next year, and does my infusion center carry it?
        </p>
      </div>

      <div className="content-card">
        <h2>Things that surprise people</h2>
        <ul>
          <li>
            <strong>The infusion visit is billed separately.</strong> On top of 20% of the drug, you
            pay 20% of the charge for the infusion itself.
          </li>
          <li>
            <strong>Where you get infused changes the price.</strong> A hospital outpatient
            department adds a facility fee. A doctor&rsquo;s office or an independent infusion suite
            usually costs you less for exactly the same medication.
          </li>
          <li>
            <strong>The Remicade copay card does not work if you have Medicare.</strong> Federal law
            prohibits it. Independent charitable foundations and the manufacturer&rsquo;s
            income-based assistance program are the routes that do work.
          </li>
          <li>
            <strong>None of these products is legally &ldquo;interchangeable.&rdquo;</strong> A
            pharmacy cannot swap one for another on its own — your doctor has to write for the
            specific one. That is a protection, and it is also why switching creates paperwork.
          </li>
          <li>
            <strong>Dose increases raise your 20%.</strong> Going from 3 mg/kg every 8 weeks to
            5 mg/kg every 6 weeks roughly doubles what you pay, to around $2,100&ndash;$2,500 a year.
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
            <strong>Compare plans</strong> —{' '}
            <a href="https://www.medicare.gov/plan-compare" target="_blank" rel="noopener noreferrer">
              medicare.gov/plan-compare
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

      <div className="content-card">
        <h2>Related</h2>
        <ul>
          <li>
            <a href="/patients/insurance">Medicare and your medication</a>
          </li>
          <li>
            <a href="/patients/insurance/prior-authorization">
              Why your medication needs permission first
            </a>{' '}
            — how prior authorization works and what to do when it goes wrong
          </li>
          <li>
            <a href="/patients/insurance/rituximab">Rituximab and Medicare</a> — where the
            biosimilar saving is genuinely large
          </li>
          <li>
            <a href="/patients/conditions/rheumatoid-arthritis">Rheumatoid arthritis guide</a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <li>
            Medicare payment limits per 10 mg, CMS Part B ASP pricing file effective July 1 &ndash;
            September 30, 2026: infliximab (J1745) $31.479; Avsola (Q5121) $30.830; Inflectra
            (Q5103) $27.710; Renflexis (Q5104) $26.615.
          </li>
          <li>
            Remicade prescribing information — FDA. Rheumatoid arthritis: 3 mg/kg at weeks 0, 2 and
            6, then every 8 weeks, with methotrexate; may be increased to 10 mg/kg or given as often
            as every 4 weeks. Ankylosing spondylitis 5 mg/kg every 6 weeks; psoriatic arthritis
            5 mg/kg every 8 weeks. Supplied in 100 mg vials.
          </li>
          <li>
            Annual figures assume a 70 kg adult at 3 mg/kg every 8 weeks (6.5 infusions, 300 mg
            billed per infusion), plus the infusion administration charge at CY2026 physician fee
            schedule rates. Your weight, dose and interval change the number.
          </li>
          <li>
            Part B annual deductible $283 and 20% coinsurance with no annual limit for 2026 — CMS,
            &ldquo;2026 Medicare Parts A &amp; B Premiums and Deductibles&rdquo;; Social Security Act
            §1833(a).
          </li>
          <li>
            Approved infliximab products and interchangeability status — FDA Purple Book, July 2026.
            Zymfentra (subcutaneous infliximab) is approved for maintenance of ulcerative colitis and
            Crohn&rsquo;s disease in adults only; it carries no rheumatology indication.
          </li>
          <li>
            Step therapy permitted for Medicare Advantage Part B drugs and not in Original Medicare —
            42 CFR §422.136. The 14-week biosimilar trial requirement and the non-preferred listing
            are taken from two national insurers&rsquo; published 2026 Part B step therapy and
            preferred drug lists.
          </li>
          <li>
            No prior authorization program in Original Medicare covers physician-administered drugs —
            CMS, Prior Authorization and Pre-Claim Review Initiatives.
          </li>
          <li>American College of Rheumatology Position Statement on Biosimilars, August 2024.</li>
          <li>
            NOR-SWITCH: Jørgensen et al., <em>The Lancet</em> 2017;389:2304&ndash;16 (n=482,
            non-inferiority confirmed). Nocebo discontinuation: Tweehuysen et al.,{' '}
            <em>Arthritis &amp; Rheumatology</em> 2018;70:60&ndash;68 (24% discontinued at 6 months
            with unchanged objective measures). Improved outcome with structured communication:
            Petit et al., <em>RMD Open</em> 2021;7:e001396 (6.6% at 12 months).
          </li>
          <li>
            Medicare Part B spending 2024: reference infliximab $367 million across 36,967
            beneficiaries; biosimilars a further $97 million across roughly 16,600 beneficiaries —
            CMS Medicare Part B drug spending dashboard.
          </li>
          <li>
            Copay assistance is prohibited for federal healthcare program beneficiaries — federal
            Anti-Kickback Statute, 42 U.S.C. §1320a-7b; Janssen Remicade savings program terms.
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
