'use client';

import { useState } from 'react';

// Shared action bar for patient-education condition/medication pages.
// - Copy info: copies the FULL plain-text page (all sections) to the clipboard,
//   ready to paste into an after-visit summary (AVS)
// - Print / Save as PDF: opens the browser print dialog (a print stylesheet on each
//   page strips the nav/footer/buttons for a clean handout)
// - Language selector: English is live; other languages show a "coming soon" note,
//   labeled in English and in the language itself
export default function PatientPageActions({ copyText }) {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState('en');

  async function doCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
    } catch (e) {
      const t = document.createElement('textarea');
      t.value = copyText;
      document.body.appendChild(t);
      t.select();
      try { document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  const names = {
    es: 'Spanish (Español)',
    vi: 'Vietnamese (Tiếng Việt)',
    zh: 'Traditional Chinese (繁體中文)',
  };

  const btnPrimary = {
    background: 'var(--blue-accent)', color: 'var(--navy-dark)', border: 'none',
    padding: '0.7rem 1.1rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer',
    fontSize: '0.95rem',
  };
  const btnGhost = {
    background: 'transparent', color: 'var(--blue-accent)', border: '2px solid var(--blue-accent)',
    padding: '0.6rem 1.05rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer',
    fontSize: '0.95rem',
  };

  return (
    <div className="pp-actions" style={{ margin: '1.25rem 0 0.5rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'center' }}>
        <button type="button" onClick={doCopy} style={btnPrimary}>
          {copied ? '✓ Copied!' : '📋 Copy info for after-visit summary'}
        </button>
        <button type="button" onClick={() => window.print()} style={btnGhost}>
          🖨 Print / Save as PDF
        </button>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gray-medium)', fontSize: '0.9rem' }}>
          🌐
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            aria-label="Choose language"
            style={{
              background: 'var(--navy-dark)', color: 'var(--white)',
              border: '1px solid rgba(107,139,184,0.3)', borderRadius: '8px',
              padding: '0.5rem 0.6rem', fontSize: '0.9rem', cursor: 'pointer',
            }}
          >
            <option value="en">English</option>
            <option value="es">Spanish (Español)</option>
            <option value="vi">Vietnamese (Tiếng Việt)</option>
            <option value="zh">Traditional Chinese (繁體中文)</option>
          </select>
        </span>
      </div>
      {lang !== 'en' && (
        <p style={{ textAlign: 'center', color: 'var(--purple-light)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
          🌐 {names[lang]} translation is coming soon — this page is currently available in English.
        </p>
      )}
      {copied && (
        <p className="pp-no-print" style={{ textAlign: 'center', color: 'var(--blue-light)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          The full page text was copied — paste it into the after-visit summary.
        </p>
      )}
    </div>
  );
}
