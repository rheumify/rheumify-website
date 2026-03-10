'use client';

import { useState, useEffect, useRef } from 'react';

// ─── Tab definitions ───────────────────────────────────────────────────────
const TABS = [
  { id: 'articles',  label: '📄 Articles' },
  { id: 'websites',  label: '🌐 Websites' },
  { id: 'abstracts', label: '📝 Abstracts' },
  { id: 'reformat',  label: '🔄 Reformat' },
];

const CITATION_STYLES = [
  { value: 'vancouver',                    label: 'Vancouver (ICMJE)' },
  { value: 'american-medical-association', label: 'AMA' },
  { value: 'nature',                       label: 'Nature' },
  { value: 'cell',                         label: 'Cell' },
  { value: 'the-lancet',                   label: 'The Lancet' },
  { value: 'bmj',                          label: 'BMJ' },
  { value: 'plos',                         label: 'PLOS' },
  { value: 'apa',                          label: 'APA 7th Edition' },
  { value: 'chicago-author-date',          label: 'Chicago (Author-Date)' },
  { value: 'harvard-cite-them-right',      label: 'Harvard' },
  { value: 'ieee',                         label: 'IEEE' },
  { value: 'mla',                          label: 'MLA 9th Edition' },
];

const JOURNAL_LIST = [
  'Annals of the Rheumatic Diseases',
  'The Lancet Rheumatology',
  'Arthritis & Rheumatology',
  'Rheumatology (Oxford)',
  'RMD Open',
  'Arthritis Research & Therapy',
  'Lupus Science & Medicine',
  'Clinical and Experimental Rheumatology',
  'The Journal of Rheumatology',
  'ACR Open Rheumatology',
  'Seminars in Arthritis and Rheumatism',
  'Clinical Rheumatology',
  'Frontiers in Immunology',
  'Joint Bone Spine',
  'Modern Rheumatology',
  'Rheumatology International',
  'BMC Rheumatology',
  'Pediatric Rheumatology',
  'Lupus',
];

const ARTICLE_TYPES = [
  'Original Article',
  'Brief Report / Communication',
  'Review Article',
  'Systematic Review / Meta-analysis',
  'Case Report',
  'Letter to the Editor',
  'Concise Report',
];

// ─── Identifier extraction helpers ────────────────────────────────────────
function extractAllIdentifiers(value) {
  value = value.trim();
  if (!value) return [];
  const identifiers = [];
  const seen = new Set();

  // PubMed URLs
  for (const m of value.matchAll(/(?:pubmed\.ncbi\.nlm\.nih\.gov|\/pubmed)\/(\d{7,9})/gi)) {
    if (!seen.has(m[1])) { seen.add(m[1]); identifiers.push({ type: 'pmid', value: m[1] }); }
  }
  // PMID: prefix
  for (const m of value.matchAll(/PMID[:\s]*(\d{7,9})/gi)) {
    if (!seen.has(m[1])) { seen.add(m[1]); identifiers.push({ type: 'pmid', value: m[1] }); }
  }
  // Standalone PMIDs
  for (const chunk of value.split(/[\n,;]+/)) {
    const c = chunk.trim().replace(/^[\d.\-•*)\]]+\s*/, '').trim();
    if (/^\d{7,9}$/.test(c) && !seen.has(c)) { seen.add(c); identifiers.push({ type: 'pmid', value: c }); }
  }
  // Remaining PMIDs
  for (const m of value.matchAll(/(?<![\/\d])(\d{7,9})(?!\d)/g)) {
    if (!seen.has(m[1])) { seen.add(m[1]); identifiers.push({ type: 'pmid', value: m[1] }); }
  }
  // DOIs
  for (const m of value.matchAll(/(?:doi[:\s]*|(?:https?:\/\/)?doi\.org\/)?(10\.\d{4,}\/[^\s;,\]\)"']+)/gi)) {
    let doi = m[1].replace(/[.\s]+$/, '').replace(/[)\]]+$/, '');
    if (!seen.has(doi)) { seen.add(doi); identifiers.push({ type: 'doi', value: doi }); }
  }
  return identifiers;
}

function detectInput(value) {
  value = value.trim();
  if (!value) return { type: null, hint: '', count: 0 };
  const ids = extractAllIdentifiers(value);
  if (ids.length > 1) {
    const p = ids.filter(i => i.type === 'pmid').length;
    const d = ids.filter(i => i.type === 'doi').length;
    let hint = `✓ Found ${ids.length} references`;
    if (p && d) hint += ` (${p} PMIDs, ${d} DOIs)`;
    return { type: 'bulk', identifiers: ids, hint, count: ids.length };
  }
  if (ids.length === 1) {
    return { type: ids[0].type, value: ids[0].value, hint: `✓ Found ${ids[0].type.toUpperCase()}: ${ids[0].value}`, count: 1 };
  }
  if (value.length > 50 && /\d{4}/.test(value) && /[A-Z][a-z]+/.test(value))
    return { type: null, hint: '⚠️ Citation found but no PMID/DOI detected', count: 0, warning: true };
  return { type: null, hint: '', count: 0 };
}

// ─── PubMed fetch ─────────────────────────────────────────────────────────
async function fetchFromPubMed(pmid) {
  const res = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`);
  const data = await res.json();
  if (!data.result?.[pmid]) throw new Error('PMID not found');
  const a = data.result[pmid];
  const csl = {
    type: 'article-journal', id: pmid,
    title: a.title,
    'container-title': a.fulljournalname || a.source,
    'container-title-short': a.source,
    volume: a.volume, issue: a.issue, page: a.pages,
    issued: { 'date-parts': [[parseInt(a.pubdate?.split(' ')[0]) || new Date().getFullYear()]] },
    PMID: pmid,
    author: (a.authors || []).map(au => { const p = au.name.split(' '); return { family: p[0], given: p.slice(1).join(' ') }; }),
  };
  const doi = a.articleids?.find(x => x.idtype === 'doi');
  if (doi) csl.DOI = doi.value;
  return csl;
}

// ─── Shared styles ────────────────────────────────────────────────────────
const S = {
  card: { background: 'var(--navy-medium, #111D32)', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(107,139,184,0.2)' },
  label: { display: 'block', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--white, #fff)', fontSize: '0.9rem' },
  textarea: { width: '100%', padding: '1rem', fontSize: '0.95rem', border: '1px solid rgba(107,139,184,0.3)', borderRadius: '8px', background: 'var(--navy-dark, #0A1628)', color: 'var(--gray-light, #CBD5E1)', fontFamily: 'inherit', resize: 'vertical', minHeight: '130px', outline: 'none' },
  select: { width: '100%', padding: '0.75rem 1rem', fontSize: '0.95rem', border: '1px solid rgba(107,139,184,0.3)', borderRadius: '8px', background: 'var(--navy-dark, #0A1628)', color: 'var(--gray-light, #CBD5E1)', fontFamily: 'inherit', cursor: 'pointer', outline: 'none' },
  input: { width: '100%', padding: '0.75rem 1rem', fontSize: '0.95rem', border: '1px solid rgba(107,139,184,0.3)', borderRadius: '8px', background: 'var(--navy-dark, #0A1628)', color: 'var(--gray-light, #CBD5E1)', fontFamily: 'inherit', outline: 'none' },
  hint: { fontSize: '0.82rem', color: '#6ee7b7', marginTop: '0.4rem', minHeight: '1.2rem', fontWeight: 500 },
  hintWarn: { fontSize: '0.82rem', color: '#fbbf24', marginTop: '0.4rem', minHeight: '1.2rem', fontWeight: 500 },
  outputBox: { background: 'var(--navy-dark, #0A1628)', borderRadius: '8px', padding: '1.25rem', border: '1px solid rgba(107,139,184,0.3)', marginTop: '1.5rem' },
  citationEntry: { paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid rgba(107,139,184,0.15)', lineHeight: '1.7', color: 'var(--gray-light, #CBD5E1)', fontSize: '0.92rem' },
};

// ─── Articles Tab ─────────────────────────────────────────────────────────
function ArticlesTab() {
  const [input, setInput] = useState('');
  const [style, setStyle] = useState('vancouver');
  const [numbered, setNumbered] = useState(true);
  const [hint, setHint] = useState({ text: '', warn: false });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [CitationJs, setCitationJs] = useState(null);

  // Load Citation.js from CDN on mount (client-only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.CitationJs) { setCitationJs(() => window.CitationJs); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/citation-js@0.7.14/build/citation.min.js';
    script.onload = () => setCitationJs(() => window.CitationJs);
    document.head.appendChild(script);
  }, []);

  const onInput = (v) => {
    setInput(v);
    const d = detectInput(v);
    setHint({ text: d.hint, warn: !!d.warning });
  };

  const format = async () => {
    if (!CitationJs) { setResult({ error: 'Citation library still loading, please try again.' }); return; }
    const detected = detectInput(input);
    if (!detected.type) { setResult({ error: 'No valid PMIDs or DOIs found. Please check your input.' }); return; }

    setLoading(true);
    setResult(null);
    try {
      let allCsl = [];
      const errors = [];
      const ids = detected.type === 'bulk' ? detected.identifiers : [{ type: detected.type, value: detected.value }];

      for (const id of ids) {
        try {
          if (id.type === 'pmid') {
            allCsl.push(await fetchFromPubMed(id.value));
          } else {
            const c = await CitationJs.async(id.value);
            if (c.data[0]) allCsl.push(c.data[0]);
            else throw new Error('No data');
          }
        } catch { errors.push(id.value); }
      }

      if (!allCsl.length) throw new Error('Could not fetch any references. Check your PMIDs/DOIs.');

      const cite = new CitationJs(allCsl);
      let html = cite.format('bibliography', { format: 'html', template: style, lang: 'en-US' });
      let text = cite.format('bibliography', { format: 'text', template: style, lang: 'en-US' }).trim();

      if (numbered && allCsl.length > 1) {
        let n = 1;
        html = html.replace(/<div class="csl-entry">/g, () => `<div class="csl-entry"><b style="color:#6B8BB8">${n++}.</b> `);
        text = text.split('\n').filter(l => l.trim()).map((l, i) => `${i + 1}. ${l}`).join('\n\n');
      }

      setResult({ html, text, count: allCsl.length, errors, styleName: CITATION_STYLES.find(s => s.value === style)?.label || style });
    } catch (e) {
      setResult({ error: e.message });
    }
    setLoading(false);
  };

  const copy = () => {
    if (result?.text) {
      navigator.clipboard.writeText(result.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      <div style={S.card}>
        <label style={S.label}>PMIDs or DOIs</label>
        <textarea style={S.textarea} value={input} onChange={e => onInput(e.target.value)}
          placeholder={`Paste anything — PMIDs, DOIs, or PubMed URLs\n\nExamples:\n  33782619, 35925154, 32644129\n  https://pubmed.ncbi.nlm.nih.gov/33782619/\n  10.1038/s41591-021-01316-7`} />
        <div style={hint.warn ? S.hintWarn : S.hint}>
          {hint.text || '💡 Accepts PubMed IDs (8 digits) and DOIs (10.xxxx/...)'}
        </div>

        <div style={{ marginTop: '1.25rem' }}>
          <label style={S.label}>Citation Style</label>
          <select style={S.select} value={style} onChange={e => setStyle(e.target.value)}>
            {CITATION_STYLES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>

        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <input type="checkbox" id="art-numbered" checked={numbered} onChange={e => setNumbered(e.target.checked)}
            style={{ width: 18, height: 18, cursor: 'pointer', accentColor: '#6B8BB8' }} />
          <label htmlFor="art-numbered" style={{ cursor: 'pointer', color: 'var(--gray-light,#CBD5E1)', fontSize: '0.9rem', margin: 0 }}>
            Numbered citations (1. 2. 3.)
          </label>
        </div>

        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem' }}
          onClick={format} disabled={loading || !input.trim()}>
          {loading ? 'Formatting...' : !CitationJs ? 'Loading library...' : 'Format Citations'}
        </button>

        {result && (
          <div style={S.outputBox}>
            {result.error ? (
              <p style={{ color: '#f87171' }}>❌ {result.error}</p>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--gray-light,#CBD5E1)', fontWeight: 600 }}>
                    📚 {result.styleName} — {result.count} reference{result.count !== 1 ? 's' : ''}
                  </span>
                  <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={copy}>
                    {copied ? '✅ Copied!' : '📋 Copy'}
                  </button>
                </div>
                <div dangerouslySetInnerHTML={{ __html: result.html }}
                  style={{ lineHeight: 1.7, color: 'var(--gray-light,#CBD5E1)', fontSize: '0.92rem' }} />
                {result.errors?.length > 0 && (
                  <p style={{ color: '#fbbf24', fontSize: '0.82rem', marginTop: '0.75rem' }}>
                    ⚠️ Could not fetch: {result.errors.join(', ')}
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Websites Tab ─────────────────────────────────────────────────────────
function WebsitesTab() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [style, setStyle] = useState('vancouver');
  const [numbered, setNumbered] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const format = () => {
    if (!url.trim()) return;
    const now = new Date();
    const accessed = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const year = now.getFullYear();
    const displayTitle = title.trim() || url;
    const displayAuthor = author.trim() || 'Author Unknown';

    let citation = '';
    if (style === 'vancouver' || style === 'american-medical-association') {
      citation = `${displayAuthor}. ${displayTitle}. Available from: ${url} [Accessed ${accessed}].`;
    } else if (style === 'apa') {
      citation = `${displayAuthor}. (${year}). ${displayTitle}. Retrieved ${accessed}, from ${url}`;
    } else if (style === 'harvard-cite-them-right') {
      citation = `${displayAuthor} (${year}) '${displayTitle}'. Available at: ${url} (Accessed: ${accessed}).`;
    } else if (style === 'mla') {
      citation = `"${displayTitle}." ${url}. Accessed ${accessed}.`;
    } else {
      citation = `${displayAuthor}. "${displayTitle}." ${url}. Accessed ${accessed}.`;
    }

    setResult(citation);
  };

  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={S.card}>
        <label style={S.label}>Website URL</label>
        <input style={S.input} type="url" value={url} onChange={e => setUrl(e.target.value)}
          placeholder="https://www.rheumatology.org/guidelines" />

        <div style={{ marginTop: '1rem' }}>
          <label style={S.label}>Page Title <span style={{ fontWeight: 400, color: 'var(--gray-medium,#94A3B8)' }}>(optional)</span></label>
          <input style={S.input} value={title} onChange={e => setTitle(e.target.value)}
            placeholder="ACR Guidelines for Rheumatoid Arthritis" />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label style={S.label}>Author / Organization <span style={{ fontWeight: 400, color: 'var(--gray-medium,#94A3B8)' }}>(optional)</span></label>
          <input style={S.input} value={author} onChange={e => setAuthor(e.target.value)}
            placeholder="American College of Rheumatology" />
        </div>

        <div style={{ marginTop: '1.25rem' }}>
          <label style={S.label}>Citation Style</label>
          <select style={S.select} value={style} onChange={e => setStyle(e.target.value)}>
            {CITATION_STYLES.slice(0, 8).map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </div>

        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem' }}
          onClick={format} disabled={!url.trim()}>
          Format Website Citation
        </button>

        {result && (
          <div style={S.outputBox}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--gray-light,#CBD5E1)', fontWeight: 600 }}>📋 Result</span>
              <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={copy}>
                {copied ? '✅ Copied!' : '📋 Copy'}
              </button>
            </div>
            <p style={{ lineHeight: 1.7, color: 'var(--gray-light,#CBD5E1)', fontSize: '0.92rem' }}>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Abstracts Tab ────────────────────────────────────────────────────────
function AbstractsTab() {
  const [mode, setMode] = useState('pubmed');
  const [pmids, setPmids] = useState('');
  const [abstracts, setAbstracts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [abstractType, setAbstractType] = useState('published');
  const [abTitle, setAbTitle] = useState('');
  const [abAuthors, setAbAuthors] = useState('');
  const [abConference, setAbConference] = useState('ACR Convergence');
  const [abYear, setAbYear] = useState(new Date().getFullYear().toString());
  const [abUrl, setAbUrl] = useState('');
  const [abPresType, setAbPresType] = useState('Abstract');
  const [meetingResult, setMeetingResult] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchAbstracts = async () => {
    const ids = pmids.split(/[\n,;]+/).map(s => s.trim()).filter(Boolean);
    if (!ids.length) return;
    setLoading(true);
    setAbstracts([]);
    const results = [];
    for (const pmid of ids) {
      try {
        const res = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${pmid}&retmode=xml`);
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const title = xml.querySelector('ArticleTitle')?.textContent || 'No title';
        const abstractTexts = xml.querySelectorAll('AbstractText');
        let abstract = '';
        abstractTexts.forEach(el => {
          const label = el.getAttribute('Label');
          abstract += (label ? `${label}: ` : '') + el.textContent + '\n\n';
        });
        results.push({ pmid, title, abstract: abstract.trim() || 'Abstract not available.' });
      } catch {
        results.push({ pmid, title: 'Error', abstract: 'Could not fetch this abstract.' });
      }
    }
    setAbstracts(results);
    setLoading(false);
  };

  const generateMeetingCitation = () => {
    const conf = abConference === 'Other' ? '' : abConference;
    let cite = '';
    if (abstractType === 'published') {
      const journalMap = {
        'ACR Convergence': 'Arthritis Rheumatol', 'EULAR': 'Ann Rheum Dis',
        'BSR Annual Conference': 'Rheumatology (Oxford)', 'ACR State-of-the-Art': 'Arthritis Rheumatol',
      };
      const journal = journalMap[abConference] || 'J Rheumatol';
      cite = `${abAuthors}. ${abTitle}. ${abPresType} presented at: ${conf}; ${abYear}. ${journal}. ${abYear};[suppl].${abUrl ? ` Available at: ${abUrl}` : ''}`;
    } else {
      cite = `${abAuthors}. ${abTitle}. ${abPresType} presented at: ${conf}; ${abYear}.${abUrl ? ` Available at: ${abUrl}` : ''}`;
    }
    setMeetingResult(cite);
  };

  const copy = (text) => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {['pubmed', 'meeting'].map(m => (
          <button key={m} onClick={() => setMode(m)}
            style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: `2px solid ${mode === m ? '#6B8BB8' : 'rgba(107,139,184,0.3)'}`, background: mode === m ? 'rgba(107,139,184,0.15)' : 'transparent', color: 'var(--gray-light,#CBD5E1)', cursor: 'pointer', fontWeight: mode === m ? 600 : 400, fontFamily: 'inherit', fontSize: '0.9rem' }}>
            {m === 'pubmed' ? '🔬 PubMed Abstract' : '🎤 Meeting Abstract'}
          </button>
        ))}
      </div>

      {mode === 'pubmed' && (
        <div style={S.card}>
          <label style={S.label}>PMIDs</label>
          <textarea style={S.textarea} value={pmids} onChange={e => setPmids(e.target.value)}
            placeholder="33782619, 35925154&#10;One per line or comma-separated" />
          <div style={S.hint}>💡 Fetches full abstracts directly from PubMed</div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.25rem', padding: '1rem' }}
            onClick={fetchAbstracts} disabled={loading || !pmids.trim()}>
            {loading ? 'Fetching...' : 'Fetch Abstracts'}
          </button>

          {abstracts.map((a, i) => (
            <div key={i} style={{ ...S.outputBox, marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div>
                  <p style={{ color: '#6B8BB8', fontWeight: 600, fontSize: '0.82rem', marginBottom: '0.25rem' }}>PMID {a.pmid}</p>
                  <p style={{ color: 'var(--gray-light,#CBD5E1)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.92rem' }}>{a.title}</p>
                </div>
                <button className="btn btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }} onClick={() => copy(a.abstract)}>
                  {copied ? '✅' : '📋 Copy'}
                </button>
              </div>
              <p style={{ lineHeight: 1.7, color: 'var(--gray-medium,#94A3B8)', fontSize: '0.88rem', whiteSpace: 'pre-line' }}>{a.abstract}</p>
            </div>
          ))}
        </div>
      )}

      {mode === 'meeting' && (
        <div style={S.card}>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {['published', 'unpublished'].map(t => (
              <button key={t} onClick={() => setAbstractType(t)}
                style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: `2px solid ${abstractType === t ? '#6B8BB8' : 'rgba(107,139,184,0.3)'}`, background: abstractType === t ? 'rgba(107,139,184,0.15)' : 'transparent', color: 'var(--gray-light,#CBD5E1)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.85rem' }}>
                {t === 'published' ? '📰 Published in journal supplement' : '🎯 Presented only'}
              </button>
            ))}
          </div>

          <label style={S.label}>Abstract Title</label>
          <input style={{ ...S.input, marginBottom: '1rem' }} value={abTitle} onChange={e => setAbTitle(e.target.value)} placeholder="Title of your abstract" />

          <label style={S.label}>Authors</label>
          <input style={{ ...S.input, marginBottom: '0.5rem' }} value={abAuthors} onChange={e => setAbAuthors(e.target.value)} placeholder="Smith A, Jones B, et al." />
          <div style={S.hint}>💡 Use "et al." after 3–6 authors</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <label style={S.label}>Conference</label>
              <select style={S.select} value={abConference} onChange={e => setAbConference(e.target.value)}>
                {['ACR Convergence','EULAR','BSR Annual Conference','APLAR','PANLAR','ACR State-of-the-Art','Other'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={S.label}>Year</label>
              <input style={S.input} value={abYear} onChange={e => setAbYear(e.target.value)} placeholder="2025" />
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <label style={S.label}>Presentation Type</label>
            <select style={S.select} value={abPresType} onChange={e => setAbPresType(e.target.value)}>
              {['Abstract','Poster','Oral Presentation'].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <label style={S.label}>Abstract URL <span style={{ fontWeight: 400, color: 'var(--gray-medium,#94A3B8)' }}>(optional)</span></label>
            <input style={S.input} type="url" value={abUrl} onChange={e => setAbUrl(e.target.value)} placeholder="https://..." />
          </div>

          <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem' }}
            onClick={generateMeetingCitation} disabled={!abTitle.trim() || !abAuthors.trim()}>
            Generate Citation
          </button>

          {meetingResult && (
            <div style={S.outputBox}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--gray-light,#CBD5E1)' }}>📋 Citation</span>
                <button className="btn btn-secondary" style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }} onClick={() => copy(meetingResult)}>
                  {copied ? '✅ Copied!' : '📋 Copy'}
                </button>
              </div>
              <p style={{ lineHeight: 1.7, color: 'var(--gray-light,#CBD5E1)', fontSize: '0.92rem' }}>{meetingResult}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Reformat Tab ─────────────────────────────────────────────────────────
function ReformatTab() {
  const [docUrl, setDocUrl] = useState('');
  const [journal, setJournal] = useState(JOURNAL_LIST[0]);
  const [articleType, setArticleType] = useState(ARTICLE_TYPES[0]);
  const [trackChanges, setTrackChanges] = useState('inline');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [progress, setProgress] = useState('');

  const WEBHOOK = 'https://rheumify.app.n8n.cloud/webhook/reformat-manuscript';

  const reformat = async () => {
    if (!docUrl.trim()) return;
    setLoading(true);
    setResult(null);
    setProgress('Sending to reformatter...');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 300000); // 5 min

    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docUrl: docUrl.trim(), targetJournal: journal, articleType, trackChanges }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();

      const link = data.documentUrl || data.docUrl || data.url || data.link;
      if (link) {
        setResult({ success: true, link });
      } else {
        setResult({ success: false, error: 'Reformatting complete but no document link returned. Check your n8n workflow.' });
      }
    } catch (e) {
      clearTimeout(timeout);
      if (e.name === 'AbortError') {
        setResult({ success: false, error: 'Request timed out after 5 minutes. The document may still be processing — check your Google Drive.' });
      } else {
        setResult({ success: false, error: e.message });
      }
    }
    setLoading(false);
    setProgress('');
  };

  return (
    <div>
      <div style={{ ...S.card, borderLeft: '4px solid #6B8BB8' }}>
        <h3 style={{ color: 'var(--white,#fff)', marginBottom: '0.5rem', fontSize: '1rem' }}>📄 How it works</h3>
        <p style={{ color: 'var(--gray-medium,#94A3B8)', fontSize: '0.88rem', lineHeight: 1.6 }}>
          Paste a Google Doc link below. ScriptSwap will read your manuscript, reformat citations, structure, and abstract to match your target journal's requirements. You'll get a new Google Doc with all changes plus a summary of what was modified.
        </p>
      </div>

      <div style={S.card}>
        <label style={S.label}>Google Doc URL</label>
        <input style={S.input} type="url" value={docUrl} onChange={e => setDocUrl(e.target.value)}
          placeholder="https://docs.google.com/document/d/..." />
        <div style={S.hint}>💡 Document must be shared with "Anyone with the link can view"</div>

        <div style={{ marginTop: '1.25rem' }}>
          <label style={S.label}>Target Journal</label>
          <select style={S.select} value={journal} onChange={e => setJournal(e.target.value)}>
            {JOURNAL_LIST.map(j => <option key={j} value={j}>{j}</option>)}
          </select>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label style={S.label}>Article Type</label>
          <select style={S.select} value={articleType} onChange={e => setArticleType(e.target.value)}>
            {ARTICLE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label style={S.label}>Track Changes</label>
          <select style={S.select} value={trackChanges} onChange={e => setTrackChanges(e.target.value)}>
            <option value="none">No tracking — clean document</option>
            <option value="inline">Inline markup</option>
            <option value="suggestions">Google Docs Suggestions (experimental)</option>
          </select>
          <div style={S.hint}>💡 Inline markup shows changes visually. Suggestions mode uses Google Docs' built-in review feature.</div>
        </div>

        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem', fontSize: '1.05rem' }}
          onClick={reformat} disabled={loading || !docUrl.trim()}>
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-block', width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
              Reformatting... (may take 2–3 minutes)
            </span>
          ) : '🔄 Reformat Manuscript'}
        </button>

        {result && (
          <div style={{ ...S.outputBox, marginTop: '1.5rem', borderLeft: `4px solid ${result.success ? '#6ee7b7' : '#f87171'}` }}>
            {result.success ? (
              <>
                <p style={{ color: '#6ee7b7', fontWeight: 600, marginBottom: '0.75rem' }}>✅ Reformatting complete!</p>
                <a href={result.link} target="_blank" rel="noopener noreferrer"
                  style={{ color: '#6B8BB8', textDecoration: 'underline', wordBreak: 'break-all', fontSize: '0.92rem' }}>
                  📄 Open your reformatted document →
                </a>
              </>
            ) : (
              <>
                <p style={{ color: '#f87171', fontWeight: 600, marginBottom: '0.5rem' }}>❌ Error</p>
                <p style={{ color: 'var(--gray-medium,#94A3B8)', fontSize: '0.88rem' }}>{result.error}</p>
              </>
            )}
          </div>
        )}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── Results section (shared) ─────────────────────────────────────────────

// ─── Main page component ─────────────────────────────────────────────────
export default function ScriptSwapPage() {
  const [activeTab, setActiveTab] = useState('articles');

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          Script<span style={{ color: '#6B8BB8' }}>Swap</span>
        </h1>
        <p style={{ color: 'var(--gray-medium,#94A3B8)' }}>Format citations & reformat manuscripts</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {['⚡ Instant', '📚 Bulk Import', '🎨 25+ Styles', '🔒 Private'].map(b => (
            <span key={b} style={{ background: 'rgba(107,139,184,0.15)', border: '1px solid rgba(107,139,184,0.3)', borderRadius: '20px', padding: '0.3rem 0.9rem', fontSize: '0.8rem', color: 'var(--gray-light,#CBD5E1)' }}>{b}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="tool-tabs" style={{ marginBottom: '1.5rem' }}>
        {TABS.map(t => (
          <button key={t.id} className={`tool-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'articles'  && <ArticlesTab />}
      {activeTab === 'websites'  && <WebsitesTab />}
      {activeTab === 'abstracts' && <AbstractsTab />}
      {activeTab === 'reformat'  && <ReformatTab />}

      {/* Footer note */}
      <p style={{ textAlign: 'center', color: 'var(--gray-medium,#94A3B8)', fontSize: '0.8rem', marginTop: '2rem' }}>
        Powered by Citation.js and PubMed · A <a href="https://rheumify.org" style={{ color: '#6B8BB8' }}>Rheumify</a> tool
      </p>
    </div>
  );
}
