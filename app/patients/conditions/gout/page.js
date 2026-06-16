import PatientPageActions from '../../../components/PatientPageActions';

export const metadata = {
  title: 'Gout: Symptoms, Flares, Uric Acid & Treatment',
  description:
    'A patient guide to gout from board-certified rheumatologist Dr. Alison Bays — what causes flares, how it is diagnosed, treating attacks vs. lowering uric acid with allopurinol, and living well with gout.',
  keywords: ['gout', 'gout flare', 'uric acid', 'allopurinol', 'colchicine', 'urate-lowering therapy', 'patient education'],
  alternates: { canonical: 'https://www.rheumify.org/patients/conditions/gout' },
};

const AVS_TEXT =
  "Gout is a form of arthritis caused by uric acid crystals forming in a joint, leading to sudden attacks of severe pain, swelling, and redness - often in the big toe. There are two separate goals: (1) treat the flare with an anti-inflammatory medicine such as an NSAID, colchicine, or a steroid; and (2) lower uric acid for the long term with a daily medicine such as allopurinol, aiming for a level below 6 mg/dL to prevent future flares. When you first start allopurinol, flares can briefly increase as old crystals dissolve - keep taking it and treat the flare separately; do not stop it. Stay well hydrated, limit alcohol (especially beer) and sugary drinks, and work toward a healthy weight. Call your rheumatology team if a flare won't settle, if a hot swollen joint comes with a fever, or for a rash after starting allopurinol. This is general education and is not a substitute for advice from your own rheumatologist.";

const printCSS = `
@media print {
  .navbar, .footer, .pp-actions, .pp-no-print, .breadcrumb { display: none !important; }
  body { background: #fff !important; color: #111 !important; }
  .page-container { padding-top: 0 !important; }
  .content-card { background: #fff !important; border: none !important; box-shadow: none !important; color: #111 !important; padding: 0.4rem 0 !important; margin-bottom: 0.8rem !important; }
  .content-card h2 { color: #5E4F87 !important; }
  .content-card p, .content-card li, .page-header p { color: #111 !important; }
  .page-header h1 { color: #111 !important; }
  a { color: #111 !important; text-decoration: none !important; }
}
`;

export default function GoutPage() {
  return (
    <div className="page-container">
      <style dangerouslySetInnerHTML={{ __html: printCSS }} />

      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo; Gout
      </p>

      <div className="page-header" style={{ marginBottom: '1.25rem' }}>
        <h1>Gout</h1>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <p style={{ margin: 0 }}>
          &#8505;&#65039; This information is for general education and is <strong>not medical advice</strong>. Always talk with
          your own rheumatologist about your diagnosis and treatment.
        </p>
      </div>

      <PatientPageActions avsText={AVS_TEXT} />

      <div className="content-card">
        <p>
          Gout is a common form of arthritis caused by <strong>uric acid</strong>. When there is too much uric acid in the
          blood, it can form tiny, sharp crystals in a joint that trigger sudden, intense inflammation &mdash; a &ldquo;gout
          attack&rdquo; or <strong>flare</strong>. Gout is very treatable, and with the right medicine most people can stop
          flares from happening at all.
        </p>
        <h2 style={{ marginTop: '1.25rem' }}>Who gets it</h2>
        <p>
          Gout is more common in men and after middle age, though it also affects women, especially after menopause. Uric
          acid can be raised by certain foods and drinks (red meat, shellfish, alcohol &mdash; especially beer &mdash; and
          drinks with high-fructose corn syrup), excess weight, some medicines (such as certain water pills), kidney
          disease, and family history.
        </p>
      </div>

      <div className="content-card">
        <h2>Signs and symptoms</h2>
        <ul>
          <li>A sudden attack of <strong>severe pain, swelling, redness, and warmth</strong> &mdash; often the big toe, but also the foot, ankle, or knee</li>
          <li>Pain that often starts at night and can be so intense that even a bedsheet hurts</li>
          <li>Flares that build over hours then settle over days to a couple of weeks</li>
          <li>Over years, untreated gout can form lumps of crystals under the skin (<strong>tophi</strong>) and damage joints</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>How it&rsquo;s diagnosed</h2>
        <p>
          A rheumatologist diagnoses gout from your symptoms and exam. The most certain way to confirm it is to take a
          small sample of fluid from the joint and look for uric acid crystals under a microscope. Blood uric acid helps,
          but it can be normal during a flare, so a normal result does not rule gout out.
        </p>
      </div>

      <div className="content-card">
        <h2>Common treatments</h2>
        <p>There are two separate goals &mdash; and this is the part that&rsquo;s often misunderstood:</p>
        <p>
          <strong>1. Treating the flare (fast relief).</strong> Anti-inflammatory medicines such as <strong>NSAIDs</strong>,
          <strong> colchicine</strong>, or <strong>steroids</strong>. These calm the attack but do not lower uric acid.
        </p>
        <p>
          <strong>2. Lowering uric acid long-term (preventing flares).</strong> This is <strong>urate-lowering therapy</strong>,
          most commonly <strong>allopurinol</strong> (or febuxostat). Taken daily, it dissolves the crystals so flares stop.
          Your rheumatologist aims for a uric acid level <strong>below 6 mg/dL</strong>.
        </p>
        <div style={{ background: 'rgba(249,168,212,0.10)', borderLeft: '4px solid var(--pink-accent)', borderRadius: '8px', padding: '1rem 1.25rem', marginTop: '1rem' }}>
          <p style={{ margin: 0 }}>
            <strong>Important:</strong> when you first start urate-lowering medicine, flares can briefly become <em>more</em>
            common as old crystals dissolve. This is expected &mdash; don&rsquo;t stop it during a flare; keep taking it and
            treat the flare separately.
          </p>
        </div>
      </div>

      <div className="content-card">
        <h2>Living well with gout</h2>
        <ul>
          <li>Take your urate-lowering medicine <strong>every day, long-term</strong> &mdash; it only works if you stay on it.</li>
          <li>Stay well hydrated.</li>
          <li>Cut back on alcohol (especially beer), sugary drinks, and large amounts of red meat and shellfish.</li>
          <li>Work toward a healthy weight; review other medicines that can raise uric acid with your doctor.</li>
        </ul>
        <h2 style={{ marginTop: '1.25rem' }}>Questions to ask your rheumatologist</h2>
        <ul>
          <li>What is my uric acid level, and what number are we aiming for?</li>
          <li>Should I be on a daily medicine to prevent flares, not just treat them?</li>
          <li>What do I do if I flare while taking my daily medicine?</li>
          <li>How often do I need my uric acid checked?</li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>When to call your doctor</h2>
        <p>
          Call if a flare doesn&rsquo;t improve with treatment, if a hot swollen joint comes with a <strong>fever</strong>
          (this can look like a joint infection &mdash; an emergency), or if you have side effects from a new medicine
          &mdash; especially any <strong>rash</strong> after starting allopurinol.
        </p>
      </div>

      <div className="content-card">
        <h2>Medications commonly used to treat gout</h2>
        <p style={{ marginBottom: '0.5rem' }}>
          Allopurinol &middot; Febuxostat &middot; Colchicine &middot; NSAIDs &middot; Prednisone
        </p>
        <p style={{ color: 'var(--gray-medium)', fontStyle: 'italic', fontSize: '0.9rem', margin: 0 }}>
          Detailed medication pages are coming soon.
        </p>
      </div>

      <div className="content-card">
        <h2>Patient support &amp; community</h2>
        <ul>
          <li><a href="https://www.arthritis.org/" target="_blank" rel="noopener noreferrer">Arthritis Foundation</a></li>
          <li><a href="https://gouteducation.org/" target="_blank" rel="noopener noreferrer">Gout Education Society</a></li>
        </ul>
      </div>

      <div className="content-card" style={{ background: 'transparent', border: 'none', padding: '0.5rem 0' }}>
        <p style={{ color: 'var(--gray-medium)', fontStyle: 'italic', fontSize: '0.9rem' }}>
          Reviewed by Alison Bays, MD &mdash; June 15, 2026. This information is for general education only and is not a
          substitute for advice from your own health care provider.
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          <strong>Learn more:</strong>{' '}
          <a href="https://rheumatology.org/patients/gout" target="_blank" rel="noopener noreferrer">
            ACR Gout fact sheet
          </a>{' '}
          (English &amp; Spanish).
        </p>
      </div>
    </div>
  );
}
