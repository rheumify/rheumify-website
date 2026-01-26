'use client';

import { useState } from 'react';

export default function ScriptSwapPage() {
  const [activeTab, setActiveTab] = useState('articles');
  const [inputText, setInputText] = useState('');
  const [citationStyle, setCitationStyle] = useState('vancouver');
  const [numbered, setNumbered] = useState(false);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormat = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    // In production, this would call an API
    // For now, show a demo message
    setTimeout(() => {
      setOutput(`Citations formatted in ${citationStyle.toUpperCase()} style:\n\n` +
        inputText.split('\n').filter(l => l.trim()).map((line, i) =>
          `${numbered ? (i + 1) + '. ' : ''}[Citation for: ${line.trim()}]`
        ).join('\n\n'));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h1>Script<span>Swap</span></h1>
        <p style={{ color: 'var(--gray-light)' }}>Format citations & reformat manuscripts</p>
      </div>

      <div className="tool-tabs">
        <button
          className={`tool-tab ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          📄 Articles
        </button>
        <button
          className={`tool-tab ${activeTab === 'websites' ? 'active' : ''}`}
          onClick={() => setActiveTab('websites')}
        >
          🌐 Websites
        </button>
        <button
          className={`tool-tab ${activeTab === 'abstracts' ? 'active' : ''}`}
          onClick={() => setActiveTab('abstracts')}
        >
          📝 Abstracts
        </button>
        <button
          className={`tool-tab ${activeTab === 'reformat' ? 'active' : ''}`}
          onClick={() => setActiveTab('reformat')}
        >
          🔄 Reformat
        </button>
      </div>

      <div className="tool-input-area">
        {activeTab === 'articles' && (
          <>
            <label>PMIDs OR DOIs</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Paste PMIDs or DOIs (one per line or comma-separated)

Examples:
33782619, 35925154
10.1038/s41591-021-01316-7`}
            />
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-medium)', marginTop: '0.5rem' }}>
              💡 Accepts PubMed IDs (8 digits) and DOIs (10.xxxx/...)
            </p>
          </>
        )}

        {activeTab === 'websites' && (
          <>
            <label>Website URLs</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Paste website URLs (one per line)

Example:
https://www.rheumatology.org/guidelines`}
            />
          </>
        )}

        {activeTab === 'abstracts' && (
          <>
            <label>Abstract Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your abstract text here to extract and format any citations mentioned..."
            />
          </>
        )}

        {activeTab === 'reformat' && (
          <>
            <label>Existing Citations</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your existing citations to convert them to a different style..."
            />
          </>
        )}

        <div style={{ marginTop: '1rem' }}>
          <label>Citation Style</label>
          <select value={citationStyle} onChange={(e) => setCitationStyle(e.target.value)}>
            <option value="vancouver">Vancouver (ICMJE)</option>
            <option value="apa">APA 7th Edition</option>
            <option value="ama">AMA</option>
            <option value="harvard">Harvard</option>
            <option value="chicago">Chicago</option>
            <option value="mla">MLA</option>
          </select>
        </div>

        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <input
            type="checkbox"
            id="numbered"
            checked={numbered}
            onChange={(e) => setNumbered(e.target.checked)}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <label htmlFor="numbered" style={{ cursor: 'pointer', margin: 0 }}>
            Numbered citations (1. 2. 3.)
          </label>
        </div>

        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '1.5rem', padding: '1rem' }}
          onClick={handleFormat}
          disabled={loading}
        >
          {loading ? 'Formatting...' : 'Format Citations'}
        </button>

        {output && (
          <div style={{
            marginTop: '1.5rem',
            background: 'var(--navy-dark)',
            borderRadius: '8px',
            padding: '1rem',
            border: '1px solid rgba(107, 139, 184, 0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <label style={{ margin: 0 }}>Output</label>
              <button
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                onClick={() => navigator.clipboard.writeText(output)}
              >
                Copy
              </button>
            </div>
            <pre style={{
              whiteSpace: 'pre-wrap',
              color: 'var(--gray-light)',
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              {output}
            </pre>
          </div>
        )}
      </div>

      <div className="content-card" style={{ marginTop: '2rem' }}>
        <h2>About ScriptSwap</h2>
        <p>
          ScriptSwap is a free tool for researchers and clinicians to quickly format citations from
          PubMed IDs (PMIDs), DOIs, or URLs. Convert between citation styles instantly without
          manual reformatting.
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li>Batch process multiple references at once</li>
          <li>Supports Vancouver (ICMJE), APA, AMA, Harvard, Chicago, and MLA styles</li>
          <li>Works with PubMed, CrossRef DOIs, and web URLs</li>
          <li>Export formatted bibliography ready for your manuscript</li>
        </ul>
      </div>
    </div>
  );
}
