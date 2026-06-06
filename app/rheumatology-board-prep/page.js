export const metadata = {
  title: 'How to Study for the ABIM Rheumatology Board Exam',
  description:
    'A rheumatologist’s honest guide to the ABIM rheumatology boards: what is on the exam, how to study, and current first-time pass rates.',
  keywords: [
    'rheumatology boards',
    'rheumatology board review',
    'ABIM rheumatology board exam',
    'how to study for rheumatology boards',
    'rheumatology board prep',
    'rheumatology certification',
    'spaced repetition',
    'rheumatology pass rate',
  ],
  alternates: { canonical: 'https://www.rheumify.org/rheumatology-board-prep' },
  openGraph: {
    title: 'How to Study for the ABIM Rheumatology Board Exam',
    description:
      'What is on the exam, how to study, and why starting early beats cramming — from academic rheumatologist Dr. Alison Bays, MD, MPH&TM.',
    url: 'https://www.rheumify.org/rheumatology-board-prep',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Study for the ABIM Rheumatology Board Exam',
    description:
      'A rheumatologist’s honest guide to the ABIM rheumatology boards — exam content, study strategy, and current pass rates.',
  },
};

const bylineText = 'By Alison Bays, MD, MPH&TM — academic rheumatologist';

const introText =
  'Most people pass the rheumatology boards with steady, consistent study, a good question bank worked twice, and one solid review text. Read the current ACR guidelines — all of them. They are the backbone of the exam, and there is no shortcut around them. Beyond that, you need to recognize patterns, know where the lines are drawn, and not panic when a vignette describes something you have only seen once in fellowship.';

const sections = [
  {
    h2: 'What is actually on the ABIM rheumatology board exam?',
    paras: [
      'The exam is a single-day, multiple-choice test built around the ABIM rheumatology blueprint. The blueprint weights toward the things you see most: rheumatoid arthritis, spondyloarthritis, lupus and other connective tissue diseases, vasculitis, crystal arthropathies, and osteoarthritis. Smaller slices cover bone disease, pediatric-to-adult transition conditions, basic science, and the things rheumatologists are quietly expected to manage — infections that mimic flares, drug toxicities, and the occasional malignancy hiding behind a flare.',
      'Most questions are clinical vignettes. You are given a patient, a few labs, sometimes an image, and asked for the next best step. The exam rewards the person who can tell apart two conditions that look identical in the first sentence and diverge by the third.',
    ],
  },
  {
    h2: 'How long should I study for the rheumatology boards?',
    paras: [
      'Longer than you would like, and starting earlier than feels necessary. The honest answer is that it depends on you. If standardized tests have always been hard for you — or if the internal medicine ABIM exam was a struggle — give yourself more time and start well ahead. There is no prize for finishing the runway early.',
      'Take the exam seriously. It is your certification, and it deserves real preparation, not a frantic stretch at the end.',
      'The pattern that works is not a heroic push in the final weeks. It is regular, repeated practice spread over time: sign up early, do questions consistently, and let the material accumulate. The single most common mistake is reading passively until the last minute and never practicing the actual skill the exam tests — answering questions quickly, under pressure, with incomplete information.',
    ],
  },
  {
    h2: 'Does spaced repetition actually work for board prep?',
    paras: [
      'Yes — it is one of the most reliable findings in learning science. Spreading study out over time, called distributed practice, produces far stronger long-term retention than cramming it into a few intense sessions, an effect documented for over a century and confirmed across hundreds of studies. Pair it with retrieval practice — actively recalling an answer instead of rereading it — and the gains compound. That is exactly what flashcards and question banks are: repeated, spaced retrieval.',
      'The practical takeaway is simple. Start your flashcards early and review them regularly, well before you feel ready to study in earnest. Knowledge you lay down in small, spaced doses months out is knowledge you still have on exam day.',
    ],
  },
  {
    h2: 'What are the best rheumatology board review resources?',
    paras: [
      'There is a loose core set most people converge on: a question bank, a review text like Rheumatology Secrets, the ACR image library, and the ACR CARE questions. Each does one job.',
      'Question banks teach you to take the test. A review text gives you the connective tissue between facts. The image bank matters because rheumatology is a visual specialty — crystals under polarized light, a malar rash, capillaroscopy, a classic radiograph. CARE questions are well-written but limited in number; a hundred-odd questions will not carry you alone.',
    ],
  },
  {
    h2: 'Should I worry about the pass rate?',
    paras: [
      'Less than you probably are. First-time pass rates for the ABIM rheumatology certification exam run high — 92% of first-time takers passed in 2025, and the rate has sat in the high-80s to low-90s for years. The people who struggle are usually the ones who never practiced under timed conditions, or who studied breadth without ever drilling the high-yield decision points. Both are fixable with how you study, not how much.',
    ],
  },
  {
    h2: 'A study plan that actually works',
    paras: [
      'Start early and build in three overlapping phases.',
      'Learn first. Work through your review text by blueprint domain, one major topic at a time, with untimed tutor-mode questions alongside each topic so the reading sticks. Run flashcards daily from the beginning — this is where spaced repetition does its quiet work.',
      'Then drill. Shift toward timed, mixed-topic question blocks. Review every question you got wrong and every one you got right for the wrong reason — those are the dangerous ones. Feed your weak domains back into your reading and your flashcard deck.',
      'Finally, simulate. Full-length timed sessions, then targeted cleanup on whatever is still soft. Stop adding new material in the last few days. Sleep matters more than one more block of questions.',
    ],
  },
];

const rheumifyText =
  'I built Rheumify because when I was certifying ten years ago, there were so few resources for rheumatology — and the ones that existed were expensive. I have kept pricing deliberately low — $15 a month or $119 a year — because fellow salaries are what they are and board prep should not cost a paycheck. The question bank and flashcards are written and clinically reviewed by me, a practicing academic rheumatologist with my name attached, mapped to the ABIM blueprint and built around spaced repetition so you can start solidifying knowledge well in advance instead of grinding through everything at the end.';

const bioText =
  'Alison Bays, MD, MPH&TM, is an academic rheumatologist with more than a decade in clinical practice, medical education, and research. She created Rheumify to make rheumatology board prep affordable, current, and clear.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': 'https://www.rheumify.org/rheumatology-board-prep/#webpage',
      url: 'https://www.rheumify.org/rheumatology-board-prep',
      name: 'How to Study for the ABIM Rheumatology Board Exam',
      headline: 'How to Study for the ABIM Rheumatology Board Exam',
      description:
        'A practical guide to preparing for the ABIM rheumatology board exam: exam content, study timing, spaced repetition, recommended resources, and current first-time pass rates.',
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://www.rheumify.org/#website' },
      about: 'ABIM Rheumatology Certification Examination',
      lastReviewed: '2026-06-06',
      author: { '@id': 'https://www.rheumify.org/#author' },
      reviewedBy: { '@id': 'https://www.rheumify.org/#author' },
      publisher: { '@id': 'https://www.rheumify.org/#organization' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.rheumify.org/#author',
      name: 'Dr. Alison Bays',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'MD, MPH&TM',
      jobTitle: 'Academic Rheumatologist',
      description:
        'Academic rheumatologist (MD, MPH&TM) with more than a decade in clinical practice, medical education, and research.',
      knowsAbout: [
        'Rheumatology',
        'ABIM Board Preparation',
        'Vasculitis',
        'Giant Cell Arteritis',
        'Medical Education',
      ],
    },
  ],
};

export default function RheumatologyBoardPrepPage() {
  return (
    <div className="page-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="page-header">
        <h1>
          How to Study for the{' '}
          <span style={{ color: 'var(--purple-light)' }}>ABIM Rheumatology Board Exam</span>
        </h1>
        <p style={{ fontStyle: 'italic', opacity: 0.85, marginBottom: '1rem' }}>{bylineText}</p>
        <p>{introText}</p>
      </div>

      {sections.map((s, i) => (
        <div className="content-card" key={i}>
          <h2 style={{ color: 'var(--purple-light)' }}>{s.h2}</h2>
          {s.paras.map((p, j) => (
            <p key={j} style={{ lineHeight: '1.8', marginTop: j === 0 ? 0 : '1rem' }}>
              {p}
            </p>
          ))}
        </div>
      ))}

      {/* Where Rheumify fits + CTA */}
      <div
        className="content-card"
        style={{ borderLeft: '4px solid var(--purple-light)' }}
      >
        <h2 style={{ color: 'var(--purple-light)' }}>Where Rheumify fits</h2>
        <p style={{ lineHeight: '1.8' }}>{rheumifyText}</p>
        <div
          className="product-buttons"
          style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="https://buy.stripe.com/dRmeVc49F0ct9xVcMJc3m03"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'var(--purple-medium)', borderColor: 'var(--purple-medium)' }}
          >
            Sign up: $15/month
          </a>
          <a
            href="https://buy.stripe.com/14A14mdKf2kB5hFbIFc3m04"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderColor: 'var(--purple-light)', color: 'var(--purple-light)' }}
          >
            Sign up: $119/year (Save $61)
          </a>
          <a
            href="/fellows"
            className="btn btn-secondary"
            style={{ borderColor: 'var(--purple-light)', color: 'var(--purple-light)' }}
          >
            More board-prep resources
          </a>
        </div>
      </div>

      {/* Author bio for E-E-A-T */}
      <div
        className="content-card"
        style={{ background: 'rgba(196, 181, 224, 0.1)' }}
      >
        <h2 style={{ color: 'var(--purple-light)', fontSize: '1.1rem' }}>About the author</h2>
        <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.7' }}>{bioText}</p>
      </div>
    </div>
  );
}
