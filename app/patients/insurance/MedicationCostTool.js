'use client';

import { useState, useMemo } from 'react';
import { GUIDE_BY_GENERIC } from './guides';

// ---------------------------------------------------------------------------
// 2026 figures. Every one of these comes from a dated CMS publication — see the
// numbered sources on the page. Update once a year; nothing else needs to change.
// ---------------------------------------------------------------------------
const Y = {
  partBDeductible: 283,        // [1]
  partBPremiumYr: 202.90 * 12, // [1]
  partBCoins: 0.20,            // [2]
  partDDeductible: 615,        // [3]
  partDCap: 2100,              // [3]
  partDPremiumYr: 38.99 * 12,  // [4] national average, not a fixed price
  specialtyCoins: 0.25,
  maDrugCopayCap: 340,         // [5] most a plan may charge per administration
  maTypicalMoop: 5421,         // [6] average in-network limit across MA enrollees
  maMaxMoop: 9250,             // [5] the most a plan is allowed to set for 2026
};

// t: "b" = given by a nurse or doctor (Part B). "d" = you take it yourself (Part D).
// c: cost per year. n: treatments per year. bio: biosimilars exist.
//
// Entries marked SOURCED are checked against the quarterly CMS Part B ASP pricing
// file (for infusions) or the manufacturer's published list price (for
// self-administered drugs), at the dose stated. Everything else is an estimate and
// is the least reliable number here. The goal is to move every Part B entry onto
// the ASP file.
const MEDS = [
  { b: 'Ilaris — for periodic fever syndromes (FMF, TRAPS, HIDS)', g: 'canakinumab', t: 'b', c: 290000, n: 13 },
  { b: 'Ilaris — for Still’s disease', g: 'canakinumab', t: 'b', c: 560000, n: 13 },
  { b: 'Ilaris — for CAPS', g: 'canakinumab', t: 'b', c: 146000, n: 7 },
  { b: 'Ilaris — for gout flares', g: 'canakinumab', t: 'b', c: 46000, n: 2 },
  { b: 'Arcalyst', g: 'rilonacept', t: 'd', c: 295000 },
  { b: 'Kineret', g: 'anakinra', t: 'd', c: 80000 },
  { b: 'Kevzara', g: 'sarilumab', t: 'd', c: 57000 },
  // SOURCED: ASP Jul–Sep 2026, J0129 $45.859/10mg; 750 mg q4w (60–100 kg), 13 doses.
  { b: 'Orencia (infusion)', g: 'abatacept', t: 'b', c: 44700, n: 13 },
  // SOURCED: BMS published WAC $1,517.65 per 125 mg syringe/ClickJect, weekly.
  { b: 'Orencia ClickJect (self-injection)', g: 'abatacept', t: 'd', c: 78900 },
  // SOURCED: ASP Jul–Sep 2026, J3262 $5.408/mg; 6 mg/kg q4w (GCA dose), 70–80 kg.
  { b: 'Actemra (infusion)', g: 'tocilizumab', t: 'b', c: 33700, n: 13, bio: 1 },
  // SOURCED: Genentech published WAC $1,174.81 per 162 mg, weekly.
  { b: 'Actemra (self-injection)', g: 'tocilizumab', t: 'd', c: 61100, bio: 1 },
  // SOURCED: ASP Jul–Sep 2026, J1745 $31.479/10mg; 3 mg/kg q8w (RA dose), 70 kg,
  // 300 mg billed per infusion, 6.5 infusions.
  { b: 'Remicade, Inflectra, Avsola, Renflexis', g: 'infliximab', t: 'b', c: 6100, n: 7, bio: 1 },
  // SOURCED: ASP Jul–Sep 2026, J9312 $73.278/10mg; RA course of two 1,000 mg doses.
  { b: 'Rituxan, Truxima, Ruxience, Riabni', g: 'rituximab', t: 'b', c: 14700, n: 2, bio: 1 },
  // SOURCED: ASP Jul–Sep 2026, J1602 $11.035/mg; 2 mg/kg q8w, 75 kg, 6.5 infusions.
  { b: 'Simponi Aria (infusion)', g: 'golimumab', t: 'b', c: 10800, n: 7 },
  // SOURCED: CMS Part D dashboard average, 50 mg monthly.
  { b: 'Simponi (self-injection)', g: 'golimumab', t: 'd', c: 68000 },
  // SOURCED: ASP Jul–Sep 2026, J3247 $18.233/mg; 1.75 mg/kg q4w, 80 kg, 13 doses.
  { b: 'Cosentyx (infusion)', g: 'secukinumab', t: 'b', c: 33200, n: 13 },
  // SOURCED: Novartis published list price $8,492.03 per month, January 2026.
  { b: 'Cosentyx (self-injection)', g: 'secukinumab', t: 'd', c: 101900 },
  { b: 'Entyvio', g: 'vedolizumab', t: 'b', c: 38000, n: 7 },
  { b: 'Krystexxa', g: 'pegloticase', t: 'b', c: 75000, n: 26 },
  { b: 'Benlysta (infusion)', g: 'belimumab', t: 'b', c: 38000, n: 13 },
  { b: 'Benlysta (self-injection)', g: 'belimumab', t: 'd', c: 40000 },
  { b: 'Saphnelo', g: 'anifrolumab', t: 'b', c: 44000, n: 13 },
  { b: 'Immune globulin (Octagam, Gamunex and others)', g: 'IVIG', t: 'b', c: 158000, n: 12 },
  { b: 'Prolia', g: 'denosumab', t: 'b', c: 2900, n: 2, bio: 1 },
  { b: 'Reclast', g: 'zoledronic acid', t: 'b', c: 1100, n: 1 },
  { b: 'Evenity', g: 'romosozumab', t: 'b', c: 26000, n: 12 },
  { b: 'Cyclophosphamide (infusion)', g: 'cyclophosphamide', t: 'b', c: 4000, n: 8 },
  { b: 'Solu-Medrol (infusion)', g: 'methylprednisolone', t: 'b', c: 600, n: 6 },
  { b: 'Knee injections (Synvisc, Euflexxa and others)', g: 'hyaluronic acid', t: 'b', c: 1400, n: 2 },
  { b: 'Humira, Amjevita, Hyrimoz, Yuflyma, Hadlima, Simlandi', g: 'adalimumab', t: 'd', c: 35000, bio: 2 },
  { b: 'Enbrel', g: 'etanercept', t: 'd', c: 28260 },
  { b: 'Stelara, Wezlana, Selarsdi, Otulfi', g: 'ustekinumab', t: 'd', c: 56340, bio: 2 },
  { b: 'Taltz', g: 'ixekizumab', t: 'd', c: 42000 },
  { b: 'Skyrizi', g: 'risankizumab', t: 'd', c: 60000 },
  { b: 'Bimzelx', g: 'bimekizumab', t: 'd', c: 90000 },
  { b: 'Siliq', g: 'brodalumab', t: 'd', c: 55000 },
  { b: 'Cimzia', g: 'certolizumab', t: 'd', c: 38000 },
  { b: 'Tremfya', g: 'guselkumab', t: 'd', c: 48000 },
  { b: 'Xeljanz, Xeljanz XR', g: 'tofacitinib', t: 'd', c: 45000 },
  { b: 'Rinvoq', g: 'upadacitinib', t: 'd', c: 48000 },
  { b: 'Olumiant', g: 'baricitinib', t: 'd', c: 40000 },
  { b: 'Sotyktu', g: 'deucravacitinib', t: 'd', c: 85000 },
  { b: 'Otezla', g: 'apremilast', t: 'd', c: 19800 },
  { b: 'Lupkynis', g: 'voclosporin', t: 'd', c: 150000 },
  { b: 'Tavneos', g: 'avacopan', t: 'd', c: 190000 },
  { b: 'Forteo', g: 'teriparatide', t: 'd', c: 30000 },
  { b: 'Tymlos', g: 'abaloparatide', t: 'd', c: 32000 },
  { b: 'Methotrexate (tablets)', g: 'methotrexate', t: 'd', c: 400 },
  { b: 'Otrexup, Rasuvo (methotrexate self-injection)', g: 'methotrexate', t: 'd', c: 3600 },
  { b: 'Plaquenil', g: 'hydroxychloroquine', t: 'd', c: 300 },
  { b: 'Prednisone', g: 'prednisone', t: 'd', c: 100 },
  { b: 'Colcrys, Mitigare', g: 'colchicine', t: 'd', c: 1400 },
  { b: 'Uloric', g: 'febuxostat', t: 'd', c: 900 },
  { b: 'Allopurinol', g: 'allopurinol', t: 'd', c: 150 },
  { b: 'CellCept', g: 'mycophenolate', t: 'd', c: 1200 },
  { b: 'Prograf', g: 'tacrolimus', t: 'd', c: 2400 },
  { b: 'Neoral, Sandimmune', g: 'cyclosporine', t: 'd', c: 2000 },
  { b: 'Imuran', g: 'azathioprine', t: 'd', c: 400 },
  { b: 'Arava', g: 'leflunomide', t: 'd', c: 600 },
];

const SUPPLEMENTS = [
  { v: 1236, label: 'About $103 a month — around the cheapest available' },
  { v: 1968, label: 'About $164 a month — typical' },
  { v: 2640, label: 'About $220 a month — common at older ages' },
  { v: 4200, label: 'About $350 a month — higher end' },
  { v: 0, label: 'I do not know yet' },
];

function money(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function partDCost(cost) {
  const ded = Math.min(Y.partDDeductible, cost);
  const raw = ded + Math.max(0, cost - ded) * Y.specialtyCoins;
  return Math.min(raw, Y.partDCap);
}

function Card({ tone, badge, title, amount, sub, lines, access }) {
  return (
    <div className={'mcc-opt mcc-' + tone}>
      <div className="mcc-opt-head">
        <h3>{title}</h3>
        {badge ? <span className="mcc-badge">{badge}</span> : null}
      </div>
      <p className="mcc-amount">{amount}</p>
      <p className="mcc-sub">{sub}</p>
      <ul className="mcc-lines">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <div className="mcc-access">{access}</div>
    </div>
  );
}

export default function MedicationCostTool() {
  const [query, setQuery] = useState('');
  const [chosen, setChosen] = useState(null);
  const [cost, setCost] = useState('');
  const [supYr, setSupYr] = useState(1968);

  const matches = useMemo(() => {
    const s = query.trim().toLowerCase();
    if (s.length < 2 || chosen) return [];
    return MEDS.filter(
      (m) => m.b.toLowerCase().includes(s) || m.g.toLowerCase().includes(s)
    ).slice(0, 8);
  }, [query, chosen]);

  function choose(m) {
    setChosen(m);
    setQuery(m.b);
    setCost(String(m.c));
  }

  function reset() {
    setChosen(null);
    setQuery('');
    setCost('');
  }

  const c = Number(cost) || 0;
  const clinic = chosen ? chosen.t === 'b' : false;
  const pricey = c >= 5000;
  const deepLink = chosen ? GUIDE_BY_GENERIC[chosen.g] : null;

  let body = null;

  if (chosen && c > 0) {
    // What the medication alone costs you for a year, under each route.
    const drugA = clinic ? Y.partBDeductible : partDCost(c);
    const drugB = clinic ? Y.partBDeductible + c * Y.partBCoins : partDCost(c);

    let mcLo, mcHi;
    if (clinic) {
      const coins = Math.min(c * Y.partBCoins, Y.maTypicalMoop);
      const copay = Math.min((chosen.n || 12) * Y.maDrugCopayCap, Y.maTypicalMoop);
      mcLo = Math.min(coins, copay);
      mcHi = Math.max(coins, copay);
    } else {
      mcLo = mcHi = partDCost(c);
    }

    const premA = Y.partBPremiumYr + (supYr || 0) + Y.partDPremiumYr;
    const premB = Y.partBPremiumYr + Y.partDPremiumYr;
    const premC = Y.partBPremiumYr;

    const spread = Math.max(drugA, drugB, mcHi) - Math.min(drugA, drugB, mcLo);
    const cheap = spread < 600 && Math.max(drugA, drugB, mcHi) < 1200;

    const maRange = mcLo === mcHi ? money(mcLo) : money(mcLo) + '–' + money(mcHi);

    body = (
      <div className="mcc-results">
        {deepLink ? (
          <div className="mcc-box mcc-help">
            <h3>There is a full guide to this medication</h3>
            <p>
              <a href={deepLink}>Read the detailed page on {chosen.g} &rarr;</a> — it covers both
              forms of the medication, whether plans actually cover them, how long approval takes,
              and which route is cheaper depending on the coverage you have.
            </p>
          </div>
        ) : null}

        {clinic ? (
          <div className="mcc-box mcc-accent">
            <h3>This one is given to you by a nurse or a doctor</h3>
            <p>
              That puts it under <strong>Part B</strong>, and two things follow. First, you pay
              20% of the cost with <strong>no yearly ceiling</strong> unless you add a supplement
              policy or choose an Advantage plan. Second — and this is the part most people never
              hear — under Original Medicare <strong>nobody has to approve it first</strong>, and
              no one can require you to fail a cheaper medication first. Original Medicare is not
              allowed to do either. Medicare Advantage is, and does.
            </p>
          </div>
        ) : (
          <div className="mcc-box mcc-accent">
            <h3>This one is a medication you take yourself</h3>
            <p>
              That puts it under <strong>Part D</strong>, which since 2025 has a firm ceiling —{' '}
              <strong>{money(Y.partDCap)} in 2026</strong>, however expensive the medication is.
              That ceiling applies whichever kind of Medicare you pick.
              {pricey
                ? ' At this price, expect to need your plan’s approval before you can start, and again each year to keep going. That is true under every drug plan, so it is not a reason to choose one over another — but it is a reason to start the paperwork early.'
                : ' A medication at this price is usually covered without anyone having to approve it first. Every plan keeps its own list, though, so check that yours is on it before you pick a plan.'}
            </p>
          </div>
        )}

        <h3 className="mcc-h">What you would pay for this medication</h3>
        <p className="mcc-note">
          The big number is <strong>this medication only</strong>, for a year. Underneath each one
          are the premiums you would pay for that kind of coverage anyway, whether or not you took
          it.
        </p>

        <Card
          tone={cheap ? 'mid' : clinic ? 'good' : 'mid'}
          badge={cheap ? '' : clinic ? 'Usually the safest' : ''}
          title="Original Medicare + a supplement policy + a drug plan"
          amount={money(drugA)}
          sub="for this medication, for the year"
          lines={[
            clinic
              ? 'Your supplement pays the 20%. This is just the yearly Part B deductible.'
              : 'You pay this through your drug plan.',
            'Premiums you pay anyway: ' + money(premA) + ' a year',
            'Everything together: ' + money(premA + drugA),
          ]}
          access={
            clinic ? (
              <span>
                <strong className="mcc-yes">Nobody has to approve it first</strong>, and there is
                no list of doctors you are limited to. Any doctor or hospital in the country that
                takes Medicare will see you, and almost all of them do.
              </span>
            ) : (
              <span>
                <strong className="mcc-yes">There is no list of doctors you are limited to</strong>{' '}
                — any doctor in the country who takes Medicare will see you.
                {pricey
                  ? ' Your drug plan does have to agree before it will pay for something this expensive, and that approval has to be renewed. That part is the same whichever route you take.'
                  : ' Just check that your medication is on the drug plan’s list before you pick the plan.'}
              </span>
            )
          }
        />

        <Card
          tone={cheap ? 'mid' : clinic ? 'bad' : 'good'}
          badge={cheap ? '' : clinic ? 'Risky if you take this' : 'Lowest cost'}
          title="Original Medicare with no supplement + a drug plan"
          amount={money(drugB)}
          sub={
            clinic
              ? 'for this medication — and nothing stops it going higher'
              : 'for this medication, for the year'
          }
          lines={[
            clinic
              ? 'The Part B deductible, then 20% of the cost, with no ceiling at all.'
              : 'You pay this through your drug plan.',
            'Premiums you pay anyway: ' + money(premB) + ' a year',
            'Everything together: ' + money(premB + drugB),
          ]}
          access={
            clinic ? (
              <span>
                <strong className="mcc-yes">Nobody has to approve it first</strong>, and you can
                see any doctor who takes Medicare — but if your dose rises or you need a second
                infusion, your share keeps climbing with nothing to stop it.
              </span>
            ) : (
              <span>
                <strong className="mcc-yes">There is no list of doctors you are limited to.</strong>{' '}
                What you save here is the supplement premium; what you give up is protection
                against anything that lands under Part B later.
              </span>
            )
          }
        />

        <Card
          tone="mid"
          badge={cheap ? '' : 'Read this carefully'}
          title="Medicare Advantage (all-in-one)"
          amount={maRange}
          sub="for this medication, for the year"
          lines={[
            clinic
              ? 'Plans may charge 20%, or a flat amount per treatment capped at ' +
                money(Y.maDrugCopayCap) +
                ' — and everything stops at your plan’s yearly limit.'
              : 'You pay this through the plan’s drug coverage.',
            'Premiums you pay anyway: ' +
              money(premC) +
              ' a year, and most plans charge nothing on top',
            'Everything together: ' +
              (mcLo === mcHi
                ? money(premC + mcLo)
                : money(premC + mcLo) + '–' + money(premC + mcHi)),
          ]}
          access={
            clinic ? (
              <span>
                <strong className="mcc-no">The plan has to agree before you can start.</strong> 94%
                of Advantage members are in plans that require this for medications like yours, and
                most also require you to try a cheaper one first. You are also limited to doctors on
                the plan&rsquo;s list — check that yours, and your infusion center, are on it.
              </span>
            ) : (
              <span>
                <strong className="mcc-no">You are limited to doctors on the plan&rsquo;s list.</strong>{' '}
                Go outside it and you pay much more, or the plan pays nothing.
                {pricey
                  ? ' The plan also has to agree before it will pay, and that approval has to be renewed, usually every year.'
                  : ''}
              </span>
            )
          }
        />

        {cheap ? (
          <div className="mcc-box mcc-good">
            <h3>Good news — this medication is not the expensive part</h3>
            <p>
              Whichever kind of Medicare you choose, this one costs you roughly the same, and it is
              not much. <strong>So do not let this medication decide your coverage.</strong> Choose
              on the things that actually differ: whether you want to be able to see any doctor
              anywhere, whether you might need an expensive infused medication later, and what a
              supplement costs where you live.
            </p>
          </div>
        ) : null}

        {clinic ? (
          <div className="mcc-box mcc-danger">
            <h3>The cheapest option on paper may be the one where you don&rsquo;t get the medication</h3>
            <p>
              This is the part a price comparison never shows. With an Advantage plan, before you
              can start an infusion <strong>the plan has to agree to pay</strong> — and it may first
              require you to try and fail a cheaper medication, even one your doctor didn&rsquo;t
              choose.
            </p>
            <p>
              In 2024, Advantage plans made 52.8 million prior authorization decisions and turned
              down 4.1 million of them. Only about one in nine people appealed — and{' '}
              <strong>81% of those who did, won</strong>. Which tells you a great many of those
              refusals should not have happened, and that almost nobody challenges them.
            </p>
            <p>
              <strong>Original Medicare simply does not work this way</strong> for a medication given
              in a doctor&rsquo;s office. There is nothing to approve and no cheaper drug you must
              fail first. If you take an expensive infused medication, that difference is worth more
              than the money.
            </p>
          </div>
        ) : null}

        <div className="mcc-box mcc-warn">
          <h3>The part you cannot undo</h3>
          <p>
            For six months after you turn 65 and sign up for Part B, a company{' '}
            <strong>must</strong> sell you a supplement policy at the normal price regardless of
            your health. After that window closes, most states let them review your health and turn
            you down — and someone on a medication like this is exactly who gets declined.
          </p>
          <p>
            You can change Advantage plans every year. Getting a supplement later, you may not be
            able to. <strong>If you are inside that window now, this is the most important decision
            on this page.</strong>
          </p>
          <p>
            A few states are kinder. <strong>Washington is the most generous in the country</strong>:
            you can switch supplement policies any time of year with no health questions, and
            companies may not charge you more because of your age. Connecticut, Massachusetts, New
            York and Maine have their own protections.
          </p>
        </div>

        {chosen.bio ? (
          <div className="mcc-box">
            <h3>There are biosimilars of this one</h3>
            <p>
              A biosimilar is the same medicine made by a different company, usually cheaper. That
              is genuinely good — but each plan covers different ones, and the version your plan
              covers is not always the version your pharmacy stocks. People do get switched back and
              forth. If your plan makes you change, ask your doctor&rsquo;s office to confirm the
              exact product and the pharmacy before the first fill.
            </p>
          </div>
        ) : null}

        <div className="mcc-box mcc-help">
          <h3>Free help from someone who is not paid on commission</h3>
          <p>
            Every state runs a program of trained volunteers who will talk through your specific
            plans with you. It is free, it is funded by the federal government, and{' '}
            <strong>they earn nothing whichever plan you choose</strong> — which is not true of
            anyone who advertises to you. In Washington it is called SHIBA. Elsewhere it is called
            SHIP.
          </p>
          <ul>
            <li>
              <a href="https://www.insurance.wa.gov/shiba" target="_blank" rel="noopener noreferrer">
                Washington: SHIBA
              </a>{' '}
              — or call 1-800-562-6900
            </li>
            <li>
              <a href="https://www.shiphelp.org" target="_blank" rel="noopener noreferrer">
                Any other state: find your local SHIP
              </a>
            </li>
            <li>
              <a
                href="https://www.medicare.gov/plan-compare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medicare&rsquo;s own plan finder
              </a>{' '}
              — the only place to confirm your medication is on a specific plan&rsquo;s list
            </li>
            <li>1-800-MEDICARE (1-800-633-4227), 24 hours a day</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="mcc">
      <style
        dangerouslySetInnerHTML={{
          __html: `
.mcc { font-size: 1.05rem; line-height: 1.7; }
.mcc label { display:block; font-weight:600; color:var(--white); margin-bottom:.5rem; }
.mcc input[type=text], .mcc input[type=number], .mcc select {
  width:100%; padding:.85rem 1rem; background:var(--navy-dark);
  border:1px solid rgba(107,139,184,.35); border-radius:8px; color:var(--white);
  font-size:1.05rem; font-family:inherit;
}
.mcc input::placeholder { color:var(--gray-medium); }
.mcc-hint { color:var(--gray-medium); font-size:.92rem; margin-top:.45rem; }
.mcc-privacy { color:var(--gray-light); font-size:.92rem; margin-top:.6rem;
  padding:.6rem .85rem; background:rgba(107,139,184,.1);
  border-left:3px solid var(--blue-accent); border-radius:6px; }
.mcc-sugg { list-style:none; margin:.75rem 0 0; padding:0; border:1px solid rgba(107,139,184,.35);
  border-radius:8px; overflow:hidden; }
.mcc-sugg li { margin:0; }
.mcc-sugg button { display:block; width:100%; text-align:left; padding:.7rem 1rem; background:var(--navy-dark);
  border:none; border-bottom:1px solid rgba(107,139,184,.15); color:var(--gray-light);
  font-size:1rem; font-family:inherit; cursor:pointer; }
.mcc-sugg button:hover, .mcc-sugg button:focus { background:rgba(107,139,184,.18); color:var(--white); }
.mcc-sugg .mcc-gen { color:var(--gray-medium); font-size:.85rem; }
.mcc-chosen { display:flex; flex-wrap:wrap; align-items:baseline; gap:.75rem; margin-top:1rem;
  padding:.85rem 1rem; background:rgba(107,139,184,.12); border-radius:8px; }
.mcc-chosen strong { color:var(--white); }
.mcc-chosen button { background:none; border:none; color:var(--blue-accent); cursor:pointer;
  font-size:.92rem; font-family:inherit; text-decoration:underline; padding:0; }
.mcc-row { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1.25rem; margin-top:1.5rem; }
.mcc-results { margin-top:2rem; }
.mcc-h { color:var(--blue-accent); font-size:1.3rem; margin:2rem 0 .5rem; }
.mcc-note { color:var(--gray-light); margin-bottom:1.25rem; }
.mcc-opt { background:var(--navy-dark); border:1px solid rgba(107,139,184,.25);
  border-left:4px solid var(--gray-medium); border-radius:10px; padding:1.5rem; margin-bottom:1.25rem; }
.mcc-opt.mcc-good { border-left-color:#7FBF9B; }
.mcc-opt.mcc-bad  { border-left-color:#E88B84; }
.mcc-opt.mcc-mid  { border-left-color:var(--blue-accent); }
.mcc-opt-head { display:flex; flex-wrap:wrap; align-items:baseline; gap:.6rem 1rem; }
.mcc-opt-head h3 { color:var(--white); font-size:1.1rem; flex:1 1 auto; }
.mcc-badge { font-size:.72rem; letter-spacing:.08em; text-transform:uppercase; font-weight:700;
  padding:.25rem .6rem; border-radius:20px; background:rgba(107,139,184,.2); color:var(--blue-light); white-space:nowrap; }
.mcc-amount { font-size:2.2rem; font-weight:700; color:var(--white); margin:.75rem 0 .1rem; line-height:1.1; }
.mcc-sub { color:var(--gray-medium); font-size:.92rem; margin-bottom:1rem; }
.mcc-lines { list-style:none; margin:0 0 1rem; padding:0; }
.mcc-lines li { color:var(--gray-light); font-size:.95rem; padding:.3rem 0;
  border-bottom:1px solid rgba(107,139,184,.12); }
.mcc-lines li:last-child { border-bottom:none; }
.mcc-access { color:var(--gray-light); font-size:.97rem; padding-top:.9rem;
  border-top:1px solid rgba(107,139,184,.18); }
.mcc-yes { color:#7FBF9B; }
.mcc-no  { color:#E88B84; }
.mcc-box { background:var(--navy-dark); border:1px solid rgba(107,139,184,.25); border-radius:10px;
  padding:1.5rem; margin-bottom:1.25rem; }
.mcc-box h3 { color:var(--blue-accent); font-size:1.05rem; margin-bottom:.6rem; }
.mcc-box p { color:var(--gray-light); margin-bottom:.75rem; }
.mcc-box p:last-child { margin-bottom:0; }
.mcc-box ul { color:var(--gray-light); margin:.5rem 0 0 1.25rem; }
.mcc-box ul li { margin-bottom:.4rem; }
.mcc-box.mcc-accent { border-left:4px solid var(--purple-light); }
.mcc-box.mcc-warn   { border-left:4px solid var(--pink-accent); }
.mcc-box.mcc-danger { border-left:4px solid #E88B84; }
.mcc-box.mcc-good   { border-left:4px solid #7FBF9B; }
.mcc-box.mcc-help   { border-left:4px solid var(--blue-accent); }
`,
        }}
      />

      <label htmlFor="mcc-q">Type the name of your medication</label>
      <input
        id="mcc-q"
        type="text"
        autoComplete="off"
        spellCheck="false"
        placeholder="For example: Humira, Remicade, methotrexate"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (chosen) setChosen(null);
        }}
      />
      <p className="mcc-hint">
        Brand name or generic name both work. If yours is not listed, the explanations further down
        still apply.
      </p>
      <p className="mcc-privacy">
        Nothing you type here is saved, sent anywhere, or seen by anyone — including us. It stays in
        your browser.
      </p>

      {matches.length > 0 ? (
        <ul className="mcc-sugg">
          {matches.map((m, i) => (
            <li key={i}>
              <button type="button" onClick={() => choose(m)}>
                {m.b} <span className="mcc-gen">{m.g}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {chosen ? (
        <>
          <div className="mcc-chosen">
            <strong>{chosen.b}</strong>
            <span className="mcc-hint" style={{ margin: 0 }}>
              {clinic ? 'given by a nurse or doctor' : 'you take it yourself'}
            </span>
            <button type="button" onClick={reset}>
              start over
            </button>
          </div>

          <div className="mcc-row">
            <div>
              <label htmlFor="mcc-cost">Roughly what does it cost per year?</label>
              <input
                id="mcc-cost"
                type="number"
                min="0"
                step="100"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
              <p className="mcc-hint">
                A rough figure to start with. Ask the office that fills your prescription for a real
                one.
              </p>
            </div>
            <div>
              <label htmlFor="mcc-sup">A supplement policy would cost you</label>
              <select
                id="mcc-sup"
                value={supYr}
                onChange={(e) => setSupYr(Number(e.target.value))}
              >
                {SUPPLEMENTS.map((s) => (
                  <option key={s.v} value={s.v}>
                    {s.label}
                  </option>
                ))}
              </select>
              <p className="mcc-hint">
                Prices vary a lot by state and age. Any figure here is a placeholder until you get a
                real quote.
              </p>
            </div>
          </div>
        </>
      ) : null}

      {body}
    </div>
  );
}
