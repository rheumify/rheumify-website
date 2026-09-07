'use client';

import { useEffect, useState } from 'react';

/**
 * Reading controls for the patient guides.
 *
 * Writes two attributes on <html>:
 *   data-theme  'dark' (default) | 'light'
 *   data-text   unset (browser default) | 'l' | 'xl'
 *
 * The choice is remembered in this browser only. Nothing is sent anywhere,
 * which is the same promise the rest of these pages make.
 *
 * app/layout.js carries a tiny inline script that applies the saved values
 * before the first paint, so a reader who has chosen light mode never sees
 * a flash of the dark theme.
 */

const SIZES = [
  { key: '', label: 'A', title: 'Normal text size' },
  { key: 'l', label: 'A', title: 'Larger text' },
  { key: 'xl', label: 'A', title: 'Largest text' },
];

export default function ReadingControls() {
  const [theme, setTheme] = useState('dark');
  const [text, setText] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
    setText(root.getAttribute('data-text') || '');
    setReady(true);
  }, []);

  function applyTheme(next) {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('rheumify-theme', next);
    } catch (e) {
      /* private browsing, blocked storage — the choice just won't persist */
    }
  }

  function applyText(next) {
    setText(next);
    const root = document.documentElement;
    if (next) root.setAttribute('data-text', next);
    else root.removeAttribute('data-text');
    try {
      if (next) localStorage.setItem('rheumify-text', next);
      else localStorage.removeItem('rheumify-text');
    } catch (e) {
      /* as above */
    }
  }

  return (
    <div className="reading-controls" role="group" aria-label="Reading controls">
      <span className="reading-controls-label">Text size</span>
      {SIZES.map((s, i) => (
        <button
          key={s.key || 'base'}
          type="button"
          className={`reading-btn reading-btn-a${i + 1}`}
          aria-pressed={ready ? text === s.key : undefined}
          aria-label={s.title}
          title={s.title}
          onClick={() => applyText(s.key)}
        >
          {s.label}
        </button>
      ))}

      <span className="reading-controls-label" style={{ marginLeft: '0.75rem' }}>
        Background
      </span>
      <button
        type="button"
        className="reading-btn"
        aria-pressed={ready ? theme === 'dark' : undefined}
        onClick={() => applyTheme('dark')}
      >
        Dark
      </button>
      <button
        type="button"
        className="reading-btn"
        aria-pressed={ready ? theme === 'light' : undefined}
        onClick={() => applyTheme('light')}
      >
        Light
      </button>
    </div>
  );
}
