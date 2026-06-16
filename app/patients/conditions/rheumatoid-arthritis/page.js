import PatientPageActions from '../../../components/PatientPageActions';

export const metadata = {
  title: 'Rheumatoid Arthritis (RA): Symptoms, Diagnosis & Treatment',
  description:
    'A patient guide to rheumatoid arthritis (RA) from board-certified rheumatologist Dr. Alison Bays — symptoms, how it is diagnosed, common treatments, and living well with RA.',
  keywords: ['rheumatoid arthritis', 'RA symptoms', 'RA treatment', 'methotrexate', 'DMARD', 'patient education', 'rheumatology'],
  alternates: { canonical: 'https://www.rheumify.org/patients/conditions/rheumatoid-arthritis' },
};

const COPY_TEXT = `RHEUMATOID ARTHRITIS
Patient information from Rheumify - reviewed by Alison Bays, MD (June 15, 2026)

This information is for general education and is not medical advice. Always talk with your own rheumatologist about your diagnosis and treatment.

WHAT IT IS
Rheumatoid arthritis (RA) is an autoimmune disease. Your immune system, which normally fights infections, mistakenly attacks your own body - mainly the lining of your joints. This causes inflammation, leading to pain, swelling, and stiffness, and over time can damage the joint. RA can also affect the eyes, lungs, and heart. It is a long-term condition, but with today's treatments most people control it well and live full, active lives.

WHO GETS IT
RA can start at any age but most often begins between 30 and 60, and is more common in women. Smoking and a family history raise your risk. RA is not contagious, and it is not caused by anything you did.

SIGNS AND SYMPTOMS
- Pain, swelling, and tenderness in joints, often the small joints of the hands, wrists, and feet
- Symptoms that affect the same joints on both sides of the body
- Morning stiffness lasting more than an hour that improves as you move
- Feeling tired or low on energy
- Symptoms lasting more than six weeks

HOW IT'S DIAGNOSED
There is no single test. A rheumatologist combines your symptoms, a physical exam, blood tests (rheumatoid factor, anti-CCP antibodies, and inflammation markers like ESR and CRP), and sometimes imaging such as X-rays or ultrasound. Getting diagnosed and treated early gives the best chance of preventing joint damage.

COMMON TREATMENTS
The goal is to calm inflammation, ease symptoms, and protect your joints, ideally reaching low disease activity or remission.
- DMARDs are the foundation. Methotrexate is the most common first choice; others include hydroxychloroquine, sulfasalazine, and leflunomide.
- If DMARDs aren't enough, a biologic (such as a TNF inhibitor, abatacept, or rituximab) or a JAK inhibitor (tofacitinib, upadacitinib) may be added.
- Short courses of low-dose steroids may settle a flare while other medicines take effect.

LIVING WELL WITH RA
- Keep follow-up visits even when you feel well; controlling inflammation protects your joints.
- Take medicines as prescribed; tell your rheumatologist about side effects rather than stopping on your own.
- Stay active with low-impact exercise like walking, swimming, or cycling.
- If you smoke, quitting is one of the most important things you can do.
- Stay up to date on recommended vaccines (ask before any live vaccines).

QUESTIONS TO ASK YOUR RHEUMATOLOGIST
- How active is my RA right now, and what are we aiming for?
- What does each medicine do, and what side effects should I watch for?
- What bloodwork do I need, and how often?
- Which symptoms mean I should call sooner?

WHEN TO CALL YOUR DOCTOR
Call for a fever or signs of infection (especially on immune-suppressing medicine), a new or rapidly worsening joint, chest pain or shortness of breath, or any symptom that worries you.

Medications commonly used to treat RA: methotrexate, hydroxychloroquine, sulfasalazine, leflunomide, prednisone, TNF inhibitors, JAK inhibitors.

Learn more: ACR Rheumatoid Arthritis fact sheet - https://rheumatology.org/patients/rheumatoid-arthritis

Reviewed by Alison Bays, MD - June 15, 2026. For general education only; not a substitute for advice from your own health care provider.`;

const printCSS = `
@media print {
  .navbar, .footer, .pp-actions, .pp-no-print, .breadcrumb { display: none !important; }
  body { background: #fff !important; color: #111 !important; }
  .page-container { padding-top: 0 !important; }
  .content-card { background: #fff !important; border: none !important; box-shadow: none !important; color: #111 !important; padding: 0.2rem 0 !important; margin-bottom: 0.6rem !important; }
  .content-card h2 { color: #5E4F87 !important; }
  .content-card p, .content-card li, .page-header p { color: #111 !important; }
  .page-header h1 { color: #111 !important; }
  a { color: #111 !important; text-decoration: none !important; }
}
`;

export default function RheumatoidArthritisPage() {
  return (
    <div className="page-container">
      <style dangerouslySetInnerHTML={{ __html: printCSS }} />

      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo; Rheumatoid Arthritis
      </p>

      <div className="page-header" style={{ marginBottom: '1.25rem' }}>
        <h1>Rheumatoid Arthritis</h1>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <p style={{ margin: 0 }}>
          &#8505;&#65039; This information is for general education and is <strong>not medical advice</strong>. Always talk with
          your own rheumatologist about your diagnosis and treatment.
        </p>
      </div>

      <PatientPageActions copyText={COPY_TEXT} />

      <div className="content-card">
        <p>
          Rheumatoid arthritis (RA) is an autoimmune disease. Your immune system, which normally fights infections,
          mistakenly attacks your own body &mdash; mainly the lining of your joints. This causes inflammation, leading to
          pain, swelling, and stiffness, and over time can damage the joint. RA can also affect the eyes, lungs, and
          heart. It is a long-term condition, but with today&rsquo;s treatments most people control it well and live full,
          active lives.
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>Who gets it</h2>
        <p>
          RA can start at any age but most often begins between 30 and 60, and is more common in women. Smoking and a
          family history raise your risk. RA is not contagious, and it is not caused by anything you did.
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>Signs and symptoms</h2>
        <ul>
          <li>Pain, swelling, and tenderness in joints &mdash; often the small joints of the hands, wrists, and feet</li>
          <li>Symptoms that affect the <strong>same joints on both sides</strong> of the body</li>
          <li><strong>Morning stiffness</strong> lasting more than an hour that improves as you move</li>
          <li>Feeling tired or low on energy</li>
          <li>Symptoms lasting more than six weeks</li>
        </ul>

        <h2 style={{ marginTop: '1.75rem' }}>How it&rsquo;s diagnosed</h2>
        <p>
          There is no single test. A rheumatologist combines your symptoms, a physical exam, blood tests (rheumatoid
          factor, anti-CCP antibodies, and inflammation markers like ESR and CRP), and sometimes imaging such as X-rays
          or ultrasound. Getting diagnosed and treated early gives the best chance of preventing joint damage.
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>Common treatments</h2>
        <p>
          The goal is to calm inflammation, ease symptoms, and protect your joints &mdash; ideally reaching <strong>low
          disease activity or remission</strong>.
        </p>
        <ul>
          <li><strong>DMARDs</strong> are the foundation. <strong>Methotrexate</strong> is the most common first choice; others include hydroxychloroquine, sulfasalazine, and leflunomide.</li>
          <li>If DMARDs aren&rsquo;t enough, a <strong>biologic</strong> (such as a TNF inhibitor, abatacept, or rituximab) or a <strong>JAK inhibitor</strong> (tofacitinib, upadacitinib) may be added.</li>
          <li>Short courses of low-dose <strong>steroids</strong> may settle a flare while other medicines take effect.</li>
        </ul>

        <h2 style={{ marginTop: '1.75rem' }}>Living well with RA</h2>
        <ul>
          <li>Keep follow-up visits even when you feel well &mdash; controlling inflammation protects your joints.</li>
          <li>Take medicines as prescribed; tell your rheumatologist about side effects rather than stopping on your own.</li>
          <li>Stay active with low-impact exercise like walking, swimming, or cycling.</li>
          <li>If you smoke, quitting is one of the most important things you can do.</li>
          <li>Stay up to date on recommended vaccines (ask before any live vaccines).</li>
        </ul>

        <h2 style={{ marginTop: '1.75rem' }}>Questions to ask your rheumatologist</h2>
        <ul>
          <li>How active is my RA right now, and what are we aiming for?</li>
          <li>What does each medicine do, and what side effects should I watch for?</li>
          <li>What bloodwork do I need, and how often?</li>
          <li>Which symptoms mean I should call sooner?</li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>When to call your doctor</h2>
        <p>
          Call for a fever or signs of infection (especially on immune-suppressing medicine), a new or rapidly worsening
          joint, chest pain or shortness of breath, or any symptom that worries you.
        </p>
      </div>

      <div className="content-card">
        <h2>Medications commonly used to treat rheumatoid arthritis</h2>
        <p style={{ marginBottom: '0.4rem' }}>
          Methotrexate &middot; Hydroxychloroquine &middot; Sulfasalazine &middot; Leflunomide &middot; Prednisone &middot; TNF inhibitors &middot; JAK inhibitors
        </p>
        <p style={{ color: 'var(--gray-medium)', fontStyle: 'italic', fontSize: '0.9rem', margin: 0 }}>
          Detailed medication pages are coming soon.
        </p>

        <h2 style={{ marginTop: '1.75rem' }}>Patient support &amp; community</h2>
        <ul>
          <li><a href="https://www.arthritis.org/" target="_blank" rel="noopener noreferrer">Arthritis Foundation</a></li>
          <li><a href="https://creakyjoints.org/" target="_blank" rel="noopener noreferrer">CreakyJoints</a></li>
        </ul>

        <p style={{ color: 'var(--gray-medium)', fontStyle: 'italic', fontSize: '0.9rem', marginTop: '1.75rem' }}>
          Reviewed by Alison Bays, MD &mdash; June 15, 2026. This information is for general education only and is not a
          substitute for advice from your own health care provider.
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          <strong>Learn more:</strong>{' '}
          <a href="https://rheumatology.org/patients/rheumatoid-arthritis" target="_blank" rel="noopener noreferrer">
            ACR Rheumatoid Arthritis fact sheet
          </a>{' '}
          (English &amp; Spanish).
        </p>
      </div>
    </div>
  );
}
