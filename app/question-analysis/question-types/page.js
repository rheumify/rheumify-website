import Link from 'next/link';

export const metadata = {
  title: 'Question Pattern Types | Rheumify',
  description: 'The 12 patterns of how rheumatology board questions are structured — what each is asking, the trap, and how to work it.',
  keywords: ['ABIM question types', 'board exam patterns', 'rheumatology board prep'],
};

// Kept in lockstep with the study app's coaching library so the website and app teach the same thing.
const TYPES = [
  {
    name: 'Differential Diagnosis',
    asks: 'Which condition best fits ALL the findings — not just the loudest one?',
    trap: 'Anchoring on the most memorable feature and ignoring the discriminators.',
    work: 'List 2–3 differentials in your head before reading the options, then look in the stem for the one feature that breaks the tie.',
    also: ['SLE vs MCTD vs UCTD by antibody pattern', 'GPA vs MPA vs EGPA by ANCA + clinical features', 'PMR vs late-onset RA vs RS3PE'],
  },
  {
    name: 'Most Specific Test / Finding',
    asks: 'You already have a diagnosis in mind — what would PROVE it?',
    trap: 'Choosing a sensitive but non-specific test that only raises suspicion, instead of the finding specific enough to confirm the diagnosis.',
    work: 'Name the diagnosis you suspect, then pick the option most specific FOR it — the test that nails it down, not the one that merely screens or suggests.',
    also: ['suspected APS → confirmatory antiphospholipid panel timing', 'amyloid → tissue biopsy with Congo red, not just SPEP', 'SLE → anti-dsDNA/anti-Sm over a sensitive but nonspecific ANA'],
  },
  {
    name: 'Mechanism / Pathophysiology',
    asks: 'Not what the diagnosis is — WHY it is happening.',
    trap: 'Picking a real mechanism that belongs to a different disease.',
    work: 'Name the mechanism in your own words before you read the options, then find the one that matches.',
    also: ['gout flare → urate-driven NLRP3 inflammasome activation', 'scleroderma renal crisis → renin–angiotensin activation', 'sarcoid hypercalcemia → PTH-independent 1,25-OH vitamin D'],
  },
  {
    name: 'Lab Interpretation',
    asks: 'You are handed labs or serologies and asked what they mean for this patient.',
    trap: 'Latching onto the single most striking value — or a familiar one-test association — and picking the interpretation that fits it, not the whole panel.',
    work: 'Read every result as one pattern and pick the interpretation that fits all of them. Then ask whether a confounder is inflating one value — an ESR raised by anemia or age, or a CK bumped by a statin or recent exercise.',
    also: ['low C3/C4 + anti-dsDNA + proteinuria → lupus nephritis flare', 'high CK + aldolase + anti-Jo-1 → antisynthetase', 'high ferritin + LFTs + cytopenias → MAS/HLH'],
  },
  {
    name: 'Complication Recognition',
    asks: 'A patient on a known disease or drug has a new symptom. Connect them.',
    trap: 'Treating the new symptom as a fresh diagnosis rather than a known complication of the disease or the medication used to treat it.',
    work: 'Re-read the medication list and the diagnosis, then ask: is this new symptom a known consequence of either?',
    also: ['SSc + new dyspnea + low DLCO → PAH', 'long-term steroids + bone pain → AVN or insufficiency fracture', 'TNF inhibitor + new neurological symptoms → demyelination'],
  },
  {
    name: 'Next Best Step',
    asks: 'Of all the right things, which one comes FIRST?',
    trap: 'Picking the most thorough option instead of the most immediate one.',
    work: 'Ask what you would do in the next five minutes for this patient. The "complete workup" option is usually the trap.',
    also: ['acute monoarthritis → arthrocentesis before MRI', 'suspected GCA → start steroids before biopsy', 'septic joint → tap and culture before broad imaging'],
  },
  {
    name: 'Treatment Escalation',
    asks: 'Current therapy is working but not enough. What is the next rung?',
    trap: 'Under-escalating (just maximizing the current agent) or over-escalating (jumping to the most aggressive option) instead of the specific next step the guideline names.',
    work: 'Confirm the current therapy got a fair trial, then follow the ACR/EULAR algorithm to the exact next step it names — usually a defined add-on or switch, not the strongest drug. (If first-line never worked at all, that is a Next Best Step question.)',
    also: ['RA: methotrexate inadequate at target dose → add a biologic', 'axSpA: NSAID failure → TNFi or IL-17i, not a csDMARD', 'lupus nephritis: follow the induction sequence'],
  },
  {
    name: 'Treatment Contraindication',
    asks: 'The standard answer is in the options — but is it dangerous for THIS patient?',
    trap: 'Picking the textbook answer without checking the comorbidities.',
    work: 'On every option ask: why might this be wrong for THIS patient? Pregnancy, renal or hepatic failure, infection, another drug — the footnote is in the stem.',
    also: ['NSAIDs in lupus nephritis or CKD', 'TNF inhibitor in MS or untreated TB', 'methotrexate in pregnancy or significant liver disease'],
  },
  {
    name: 'Timing / Urgency Decision',
    asks: 'The same intervention appears in several options — the question is WHEN, not what.',
    trap: 'Reading the options as different choices when they differ only on timing.',
    work: 'Scan similar-looking options for timing words — now, weekly, baseline, after 5 years — and pick the timing that matches guidelines. (This is about scheduling, not acuity.)',
    also: ['HCQ retinal screening — baseline vs annual after 5 years', 'TB screening before TNF inhibitor initiation', 'DXA monitoring intervals on bisphosphonates'],
  },
  {
    name: 'Red Flag Emergency',
    asks: 'Is this patient about to crash? Then ACT — do not investigate.',
    trap: 'Ordering more tests when the answer is to intervene now.',
    work: 'Watch for vision loss, cord signs, rapidly progressive paresis, hypotension, or airway compromise. When you see them, intervene now and ask questions later. (Distinct from Timing: this is about acuity.)',
    also: ['GCA with vision symptoms → IV steroids before biopsy', 'cord compression in axSpA → emergent imaging + steroids', 'scleroderma renal crisis → ACE inhibitor now'],
  },
  {
    name: 'Exception to Rule',
    asks: 'The rule applies — except here. Find the footnote in the stem.',
    trap: 'Applying the guideline you correctly memorized and missing the one detail that changes it.',
    work: 'After you land on the textbook answer, pause and ask what is unusual about THIS patient — age, pregnancy, comorbidity, organ function, prior failure.',
    also: ['HCQ continued in pregnancy despite "minimize immunosuppression"', 'denosumab cannot simply be stopped', 'baseline DXA threshold shifts with glucocorticoid-induced osteoporosis'],
  },
  {
    name: 'Recall / Knowledge',
    asks: 'A direct knowledge check — name the gene, criterion, association, or number.',
    trap: 'A close, familiar-sounding fact that belongs to a related disease or the wrong criterion.',
    work: 'You know it or you do not. Eliminate what you can, commit, and turn it into a flashcard — do not overthink a recall item into a reasoning question.',
    also: ['VEXAS → UBA1 mutation', 'CDAI components', 'antibody–disease associations (anti-Mi-2, anti-cN1A)'],
  },
];

function Section({ label, text }) {
  return (
    <p style={{ marginBottom: '0.6rem', lineHeight: '1.65', fontSize: '0.95rem' }}>
      <strong style={{ color: 'var(--purple-light)' }}>{label}:</strong> {text}
    </p>
  );
}

export default function QuestionTypesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Question <span style={{ color: 'var(--purple-light)' }}>Pattern Types</span></h1>
        <p>
          Board-style questions follow predictable patterns. Recognizing what a question is <em>asking</em> — paired with
          the kind of clinical reasoning it tests — helps you focus on the right move.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        {TYPES.map((t, i) => (
          <div key={t.name} style={{
            marginBottom: i === TYPES.length - 1 ? 0 : '1.5rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)',
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>{i + 1}. {t.name}</h3>
            <Section label="What it's asking" text={t.asks} />
            <Section label="The trap" text={t.trap} />
            <Section label="How to work it" text={t.work} />
            <p style={{ marginTop: '0.75rem', marginBottom: '0.4rem', fontWeight: 500, fontSize: '0.9rem' }}>Also shows up in:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '1.7', fontSize: '0.9rem', opacity: 0.9 }}>
              {t.also.map((ex, j) => <li key={j}>{ex}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/question-analysis" style={{ color: 'var(--purple-light)' }}>
          ← Back to Question Analysis
        </Link>
      </div>
    </div>
  );
}
