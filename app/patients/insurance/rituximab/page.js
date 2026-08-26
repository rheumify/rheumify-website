export const metadata = {
  title: 'Does Medicare Cover Rituxan (Rituximab)? What It Costs in 2026',
  description:
    'Rituximab under Medicare comes in a few very large bills rather than a steady drip, and there is no yearly limit on what you pay. The cheaper versions cost a quarter as much. Written by a rheumatologist.',
  keywords: [
    'does medicare cover rituxan',
    'rituximab medicare cost',
    'rituxan biosimilar medicare',
    'truxima ruxience riabni medicare',
    'rituximab vasculitis medicare',
    'rituxan GPA MPA cost',
  ],
};

export default function RituximabPage() {
  return (
    <div className="page-container">
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Rituximab
      </p>

      <div className="page-header">
        <h1>Rituximab (Rituxan) and Medicare</h1>
        <p>
          Two things make rituximab different from every other biologic on this site: the bills
          arrive in a few enormous lumps, and the cheaper versions are genuinely, dramatically
          cheaper.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short answer</h2>
        <p>
          Rituximab is an infusion, so <strong>Part B</strong> covers it. You pay 20%, and{' '}
          <strong>there is no yearly limit on that 20%.</strong> There is no pill, no home injection
          and no Part D version for rheumatology — so the $2,100 Part D cap you may have heard about
          does not apply to you at all.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The only things that cap it are a Medicare supplement policy, an Advantage plan&rsquo;s
          yearly limit, Medicaid, or a charitable foundation.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>Here the cheaper version really is much cheaper</h2>
        <p>
          There are three rituximab biosimilars on the market — <strong>Truxima</strong>,{' '}
          <strong>Ruxience</strong> and <strong>Riabni</strong>. Unlike infliximab, where switching
          saves almost nothing, the gap here is enormous. Medicare pays this much per 10 mg:
        </p>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Medicare pays</th>
                <th>Compared with Rituxan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rituxan</strong> (the original)</td>
                <td>$73.28</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td>Truxima</td>
                <td>$34.56</td>
                <td>less than half</td>
              </tr>
              <tr>
                <td>Riabni</td>
                <td>$18.53</td>
                <td>a quarter</td>
              </tr>
              <tr>
                <td><strong>Ruxience</strong></td>
                <td>$16.16</td>
                <td><strong>less than a quarter</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem' }}>
          Because you pay 20% of whichever one you get, that difference lands directly on you.{' '}
          <strong>
            All three biosimilars are approved for rheumatoid arthritis and for GPA and MPA
          </strong>{' '}
          — the two forms of ANCA-associated vasculitis — in adults. So for most rheumatology
          patients this is a real conversation to have.
        </p>
        <p style={{ marginTop: '1rem' }}>
          One thing to check rather than assume:{' '}
          <strong>make sure the product your plan prefers is approved for your condition.</strong>{' '}
          The adult labels line up today, but the biosimilars are approved for adults only, where the
          original also covers children. If you are on Medicare through a disability and were
          diagnosed young, that gap is worth raising.
        </p>
      </div>

      <div className="content-card">
        <h2>What a year actually costs</h2>
        <p>These are your 20%, after the $283 Part B deductible.</p>
        <div className="module-table-wrapper">
          <table className="module-table">
            <thead>
              <tr>
                <th>Situation</th>
                <th>On Rituxan</th>
                <th>On the cheapest biosimilar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Rheumatoid arthritis</strong>
                  <br />
                  two 1,000 mg infusions, once a year
                </td>
                <td><strong>about $2,930</strong></td>
                <td><strong>about $650</strong></td>
              </tr>
              <tr>
                <td>
                  <strong>Vasculitis, maintenance</strong>
                  <br />
                  500 mg every 6 months
                </td>
                <td>about $1,470</td>
                <td>about $320</td>
              </tr>
              <tr>
                <td>
                  <strong>Vasculitis, the first year</strong>
                  <br />
                  four weekly doses, then two more
                </td>
                <td>about $5,570</td>
                <td>about $1,230</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Vasculitis induction doses depend on your height and weight, so that row is an estimate for
          an average-sized adult. If rheumatoid arthritis is re-treated more than once a year, the
          cost multiplies accordingly. The infusion visit is billed separately on top.
        </p>
      </div>

      <div className="content-card">
        <h2>Why the bills feel so brutal</h2>
        <p>
          Someone on a monthly infusion pays a little every month. Rituximab is given two or three
          times a year, so the same annual cost arrives as a few very large bills.
        </p>
        <p style={{ marginTop: '1rem' }}>
          A single 1,000 mg Rituxan infusion is about <strong>$1,470 to you</strong>. For rheumatoid
          arthritis you get two of those <em>two weeks apart</em> — roughly{' '}
          <strong>$2,900 inside a fortnight</strong>, and then nothing for months.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Two things follow from that. First, ask what product you are getting <em>before</em> the
          first infusion, not after the bill. Second, remember the Part B deductible resets every
          January — if the timing of the first infusion of the year is flexible at all, it is worth a
          conversation.
        </p>
      </div>

      <div className="content-card">
        <h2>If you have vasculitis, read this part</h2>
        <p>
          Maintenance for GPA or MPA is often{' '}
          <strong>500 mg every six months, indefinitely.</strong> That is around $1,470 a year on
          Rituxan, or around $320 on Ruxience — every year, with no cap, for as long as you stay on
          it.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Over ten years that difference is more than $11,000. It is the single largest lever you
          have on this medication, and it costs nothing to ask about.
        </p>
        <p style={{ marginTop: '1rem' }}>
          A few other things specific to vasculitis care that affect timing rather than cost: your
          response to vaccines is blunted after an infusion, so vaccines are best timed beforehand;
          hepatitis B screening is required before starting; and preventive antibiotics are standard
          during induction. Your rheumatologist will handle all of it — it is worth knowing so the
          scheduling makes sense.
        </p>
      </div>

      <div className="content-card">
        <h2>Approvals: none under Original Medicare</h2>
        <p>
          <strong>Original Medicare requires no prior authorization</strong> for rituximab given in a
          doctor&rsquo;s office or infusion suite, and cannot require you to try something else
          first.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Medicare Advantage plans routinely require a biosimilar first.</strong> One
          national insurer&rsquo;s 2026 policy lists Riabni, Ruxience and Truxima as the preferred
          products, with Rituxan available only if you have failed or cannot take one of them. Many
          plans grandfather you in if you have had a paid claim in the past year — so if you are
          switching plans, that is worth asking about specifically.
        </p>
        <p style={{ marginTop: '1rem' }}>
          If a request is denied, <strong>appeal.</strong> Across Medicare Advantage in 2024, only
          about one denial in nine was appealed — and 81% of those appeals succeeded.
        </p>
      </div>

      <div className="content-card">
        <h2>Things that surprise people</h2>
        <ul>
          <li>
            <strong>The Rituxan copay card does not work if you have Medicare.</strong> Federal law
            prohibits it, and that includes Medicare Advantage and Medigap.
          </li>
          <li>
            <strong>Charitable foundations do work</strong> — Good Days, the HealthWell Foundation
            and the PAN Foundation among them. Their disease funds open and close through the year,
            so if one is closed, check again in a month. The manufacturer&rsquo;s own foundation can
            also supply the drug free if your out-of-pocket costs exceed a share of your income.
          </li>
          <li>
            <strong>Rituximab infusions are long</strong> — often four to six hours — and you pay 20%
            of that infusion charge too.
          </li>
          <li>
            <strong>Hospital outpatient departments cost you more</strong> than a doctor&rsquo;s
            office or an independent infusion suite for the identical medication, because of the
            facility fee.
          </li>
          <li>
            <strong>Truxima became the first interchangeable rituximab in 2026.</strong> That is a
            technical designation about pharmacy substitution; it does not change what your doctor
            can prescribe.
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
            </a>
          </li>
          <li>
            <a href="/patients/insurance/infliximab">Infliximab and Medicare</a> — where switching
            to a biosimilar saves you almost nothing
          </li>
          <li>
            <a href="/patients/insurance/tocilizumab">Tocilizumab and Medicare</a>
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <li>
            Medicare payment limits per 10 mg, CMS Part B ASP pricing file effective July 1 &ndash;
            September 30, 2026: Rituxan (J9312) $73.278; Truxima (Q5115) $34.563; Riabni (Q5123)
            $18.533; Ruxience (Q5119) $16.160.
          </li>
          <li>
            Rituxan prescribing information — FDA. Rheumatoid arthritis: two 1,000 mg infusions two
            weeks apart, repeated every 24 weeks or based on clinical evaluation but not sooner than
            every 16 weeks. GPA and MPA induction: 375 mg/m² weekly for 4 weeks with glucocorticoids;
            follow-up treatment: two 500 mg infusions two weeks apart, then 500 mg every 6 months.
          </li>
          <li>
            Part B annual deductible $283 and 20% coinsurance with no annual limit for 2026 — CMS,
            &ldquo;2026 Medicare Parts A &amp; B Premiums and Deductibles&rdquo;; Social Security Act
            §1833(a). Vasculitis induction figures assume a body surface area of 1.8 m².
          </li>
          <li>
            Rituximab biosimilar indications — product labels via DailyMed and the manufacturers.
            Truxima, Ruxience and Riabni each carry rheumatoid arthritis and GPA/MPA in adults;
            Rituxan additionally carries GPA/MPA from age 2. Rituxan Hycela, the subcutaneous form,
            is expressly not indicated for non-malignant conditions.
          </li>
          <li>
            Truxima interchangeability, July 2026 — reported by industry legal press; not confirmed
            on an FDA-hosted page at the time of writing. A further rituximab biosimilar was approved
            in August 2026 with no brand name or price published yet.
          </li>
          <li>
            No prior authorization program in Original Medicare covers physician-administered drugs —
            CMS, Prior Authorization and Pre-Claim Review Initiatives. Step therapy permitted for
            Medicare Advantage Part B drugs — 42 CFR §422.136; the preferred-product example is taken
            from a national insurer&rsquo;s published 2026 Part B step therapy program.
          </li>
          <li>
            Medicare Advantage appeal rates and outcomes for 2024 (11.5% of denials appealed, 80.7%
            overturned) — KFF analysis of CMS data, 2026.
          </li>
          <li>
            Medicare Part B spending 2024: Rituxan $437 million across 22,261 beneficiaries; Truxima
            $127 million across 15,052; Riabni $92 million across 8,580; Ruxience $81 million across
            15,510 — CMS Medicare Part B drug spending dashboard.
          </li>
          <li>
            Copay assistance is prohibited for federal healthcare program beneficiaries — federal
            Anti-Kickback Statute, 42 U.S.C. §1320a-7b; Genentech Rituxan financial support terms.
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
