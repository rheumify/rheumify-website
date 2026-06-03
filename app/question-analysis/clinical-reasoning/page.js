import Link from 'next/link';

export const metadata = {
  title: 'Clinical Reasoning Frameworks | Rheumify',
  description: 'The six reasoning skills board questions test — what each is, the trap, and how to sharpen it.',
  keywords: ['clinical reasoning', 'diagnostic reasoning', 'rheumatology board prep', 'premature closure'],
};

// Kept in lockstep with the study app's coaching library.
const REASONING = [
  {
    name: 'Pattern Recognition',
    whatItIs: 'You match the case to an illness script you have seen before — fast, intuitive recognition.',
    trap: 'A close-but-wrong script: the classic presentation almost fits, so you stop looking.',
    sharpen: 'When recognition fires fast, slow down for one beat and find the single feature that would DISCONFIRM your first guess. If nothing disconfirms it, commit.',
    analogy: 'I Spy — match the picture you have seen before.',
  },
  {
    name: 'Guideline Application',
    whatItIs: 'You apply a known algorithm or recommendation to a fairly standard case.',
    trap: 'A reasonable action that is not the one the guideline actually specifies.',
    sharpen: 'Name the guideline and the exact step before you read the options. If you cannot name the current line (e.g., the ACR/EULAR recommendation), that gap is what to study.',
    analogy: 'Following a recipe — find the right step in a known sequence.',
  },
  {
    name: 'Risk-Benefit Analysis',
    whatItIs: 'You weigh competing trade-offs — efficacy vs harm, mother vs fetus, disease control vs drug toxicity.',
    trap: 'Picking the most effective option while ignoring the harm it carries for this patient.',
    sharpen: 'For each option, say the downside out loud. The answer is rarely the most aggressive or the most cautious — it is the best balance for THIS patient.',
    analogy: 'Packing for a trip — what trade-off are you making?',
  },
  {
    name: 'Exception / Nuance Recognition',
    whatItIs: 'The rule you know is correct, but one detail in this case overrides it.',
    trap: 'Applying the rule you correctly memorized and missing the footnote.',
    sharpen: 'After you land on the textbook answer, hunt for the one detail — age, pregnancy, organ function, prior failure — that makes this patient the exception.',
    analogy: 'Reading a contract — the rule has a footnote.',
  },
  {
    name: 'Integration of Multiple Findings',
    whatItIs: 'No single fact decides it; the answer emerges only when you combine several findings.',
    trap: 'Latching onto one striking result and answering from it alone.',
    sharpen: 'List every data point the stem gave you, then ask what single picture accounts for ALL of them together — not just the loudest one.',
    analogy: 'Jury deliberation — weigh all the evidence; no single fact decides it.',
  },
  {
    name: 'Multi-Step Problem Solving',
    whatItIs: 'The answer sits at the end of a short chain of inferences, and the order matters.',
    trap: 'Stopping at the first correct sub-step and choosing it as the answer.',
    sharpen: 'Work it forward one link at a time — A tells you B, B tells you C. The answer is usually C, not A.',
    analogy: 'A combination lock — the order matters as much as the numbers.',
  },
];

const REFERENCES = [
  { url: 'https://pubmed.ncbi.nlm.nih.gov/26140127/', cite: 'Heist BS, et al. Exploring Clinical Reasoning Strategies and Learner-Level Thinking. J Grad Med Educ. 2014.' },
  { url: 'https://pubmed.ncbi.nlm.nih.gov/16365605/', cite: 'Norman G. Research in clinical reasoning: past history and current trends. Med Educ. 2005.' },
  { url: 'https://pubmed.ncbi.nlm.nih.gov/21997584/', cite: 'Eva KW. What every teacher needs to know about clinical reasoning. Med Educ. 2005.' },
  { url: 'https://pubmed.ncbi.nlm.nih.gov/31290117/', cite: 'Costa Filho GB, et al. Effects of deliberate reflection on diagnostic accuracy and calibration. Perspect Med Educ. 2019.' },
  { url: 'https://pubmed.ncbi.nlm.nih.gov/40012058/', cite: 'Kojima T, et al. Reducing confirmation bias using the OMP model with verbalizing discordance. BMC Med Educ. 2025.' },
];

function Section({ label, text }) {
  return (
    <p style={{ marginBottom: '0.6rem', lineHeight: '1.65', fontSize: '0.95rem' }}>
      <strong style={{ color: 'var(--purple-light)' }}>{label}:</strong> {text}
    </p>
  );
}

export default function ClinicalReasoningPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Clinical Reasoning <span style={{ color: 'var(--purple-light)' }}>Frameworks</span></h1>
        <p>
          Every board question tests a specific cognitive skill — not just recall. Most diagnostic errors come from
          reasoning failures like premature closure, not knowledge gaps. Recognizing which kind of thinking a question
          demands lets you bring the right framework.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        {REASONING.map((r, i) => (
          <div key={r.name} style={{
            marginBottom: i === REASONING.length - 1 ? 0 : '1.5rem',
            padding: '1.5rem',
            background: 'rgba(196, 181, 224, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(196, 181, 224, 0.2)',
          }}>
            <h3 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>{i + 1}. {r.name}</h3>
            <Section label="What it is" text={r.whatItIs} />
            <Section label="The trap" text={r.trap} />
            <Section label="Sharpen it" text={r.sharpen} />
            <div style={{
              background: 'var(--navy-dark)',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              marginTop: '0.75rem',
              border: '1px solid var(--purple-light)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              opacity: 0.9,
            }}>
              Think of it like: {r.analogy}
            </div>
          </div>
        ))}

        {/* References */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(196, 181, 224, 0.3)' }}>
          <h4 style={{ color: 'var(--purple-light)', marginBottom: '1rem' }}>References</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '2', fontSize: '0.9rem' }}>
            {REFERENCES.map((ref) => (
              <li key={ref.url}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>
                  {ref.cite}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/question-analysis" style={{ color: 'var(--purple-light)' }}>
          ← Back to Question Analysis
        </Link>
      </div>
    </div>
  );
}
