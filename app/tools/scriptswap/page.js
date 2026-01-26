'use client';

import { useState } from 'react';

// Citation formatting functions for different styles
const formatAuthors = (authors, style, maxAuthors = 6) => {
  if (!authors || authors.length === 0) return '';

  const formatName = (author, style) => {
    const lastName = author.lastName || author.family || '';
    const firstName = author.firstName || author.given || '';
    const initials = firstName.split(' ').map(n => n[0]).join('');

    switch (style) {
      case 'vancouver':
        return `${lastName} ${initials}`;
      case 'apa':
        return `${lastName}, ${initials.split('').join('. ')}.`;
      case 'ama':
        return `${lastName} ${initials}`;
      case 'harvard':
        return `${lastName}, ${initials.split('').join('.')}`;
      case 'chicago':
        return `${lastName}, ${firstName}`;
      case 'mla':
        return `${lastName}, ${firstName}`;
      default:
        return `${lastName} ${initials}`;
    }
  };

  const formatted = authors.slice(0, maxAuthors).map(a => formatName(a, style));

  if (authors.length > maxAuthors) {
    if (style === 'vancouver' || style === 'ama') {
      return formatted.join(', ') + ', et al';
    } else if (style === 'apa') {
      return formatted.join(', ') + ', ... et al.';
    } else {
      return formatted.join(', ') + ', et al.';
    }
  }

  if (style === 'apa' && formatted.length > 1) {
    return formatted.slice(0, -1).join(', ') + ', & ' + formatted[formatted.length - 1];
  }

  return formatted.join(', ');
};

const formatCitation = (article, style) => {
  const {
    title = '',
    authors = [],
    journal = '',
    year = '',
    volume = '',
    issue = '',
    pages = '',
    doi = '',
    pmid = ''
  } = article;

  const authorStr = formatAuthors(authors, style);
  const doiStr = doi ? `https://doi.org/${doi}` : '';

  switch (style) {
    case 'vancouver':
      // Vancouver (ICMJE) - used by most medical journals
      return `${authorStr}. ${title}. ${journal}. ${year}${volume ? `;${volume}` : ''}${issue ? `(${issue})` : ''}${pages ? `:${pages}` : ''}.${doi ? ` doi:${doi}` : ''}${pmid ? ` PMID: ${pmid}` : ''}`;

    case 'apa':
      // APA 7th Edition
      return `${authorStr} (${year}). ${title}. ${journal}${volume ? `, ${volume}` : ''}${issue ? `(${issue})` : ''}${pages ? `, ${pages}` : ''}.${doiStr ? ` ${doiStr}` : ''}`;

    case 'ama':
      // AMA (American Medical Association)
      return `${authorStr}. ${title}. ${journal}. ${year}${volume ? `;${volume}` : ''}${issue ? `(${issue})` : ''}${pages ? `:${pages}` : ''}.${doi ? ` doi:${doi}` : ''}`;

    case 'harvard':
      // Harvard style
      return `${authorStr} (${year}) '${title}', ${journal}${volume ? `, vol. ${volume}` : ''}${issue ? `, no. ${issue}` : ''}${pages ? `, pp. ${pages}` : ''}.${doiStr ? ` Available at: ${doiStr}` : ''}`;

    case 'chicago':
      // Chicago Author-Date
      return `${authorStr}. ${year}. "${title}." ${journal}${volume ? ` ${volume}` : ''}${issue ? `, no. ${issue}` : ''}${pages ? `: ${pages}` : ''}.${doiStr ? ` ${doiStr}` : ''}`;

    case 'mla':
      // MLA 9th Edition
      return `${authorStr}. "${title}." ${journal}${volume ? `, vol. ${volume}` : ''}${issue ? `, no. ${issue}` : ''}, ${year}${pages ? `, pp. ${pages}` : ''}.${doiStr ? ` ${doiStr}` : ''}`;

    default:
      return `${authorStr}. ${title}. ${journal}. ${year};${volume}(${issue}):${pages}.`;
  }
};

// Parse input to extract PMIDs and DOIs
const parseInput = (text) => {
  const lines = text.split(/[\n,]/).map(l => l.trim()).filter(l => l);
  const pmids = [];
  const dois = [];

  lines.forEach(item => {
    // Check if it's a DOI (starts with 10. or contains doi.org)
    if (item.match(/^10\.\d+\//) || item.includes('doi.org/')) {
      const doi = item.replace(/.*doi\.org\//, '').replace(/^https?:\/\//, '');
      dois.push(doi);
    }
    // Check if it's a PMID (numeric, 1-8 digits typically)
    else if (item.match(/^\d{1,8}$/)) {
      pmids.push(item);
    }
    // Check if it's a URL containing a PMID
    else if (item.includes('pubmed.ncbi.nlm.nih.gov')) {
      const match = item.match(/\/(\d+)/);
      if (match) pmids.push(match[1]);
    }
  });

  return { pmids, dois };
};

// Fetch article data from PubMed
const fetchFromPubMed = async (pmids) => {
  if (pmids.length === 0) return [];

  const pmidString = pmids.join(',');

  try {
    // Use NCBI E-utilities API (free, no API key required for low volume)
    const response = await fetch(
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmidString}&retmode=json`
    );

    if (!response.ok) throw new Error('PubMed API request failed');

    const data = await response.json();
    const articles = [];

    for (const pmid of pmids) {
      const result = data.result?.[pmid];
      if (result && !result.error) {
        articles.push({
          pmid,
          title: result.title || '',
          authors: (result.authors || []).map(a => ({
            lastName: a.name?.split(' ').slice(0, -1).join(' ') || a.name,
            firstName: a.name?.split(' ').slice(-1)[0] || ''
          })),
          journal: result.source || result.fulljournalname || '',
          year: result.pubdate?.split(' ')[0] || '',
          volume: result.volume || '',
          issue: result.issue || '',
          pages: result.pages || '',
          doi: result.elocationid?.replace('doi: ', '') ||
               result.articleids?.find(id => id.idtype === 'doi')?.value || ''
        });
      } else {
        articles.push({
          pmid,
          error: `PMID ${pmid} not found`
        });
      }
    }

    return articles;
  } catch (error) {
    console.error('PubMed fetch error:', error);
    return pmids.map(pmid => ({ pmid, error: 'Failed to fetch from PubMed' }));
  }
};

// Fetch article data from CrossRef (for DOIs)
const fetchFromCrossRef = async (dois) => {
  if (dois.length === 0) return [];

  const articles = [];

  for (const doi of dois) {
    try {
      const response = await fetch(
        `https://api.crossref.org/works/${encodeURIComponent(doi)}`,
        {
          headers: {
            'User-Agent': 'Rheumify-ScriptSwap/1.0 (https://rheumify.org; mailto:contact@rheumify.org)'
          }
        }
      );

      if (!response.ok) {
        articles.push({ doi, error: `DOI ${doi} not found` });
        continue;
      }

      const data = await response.json();
      const work = data.message;

      articles.push({
        doi,
        title: work.title?.[0] || '',
        authors: (work.author || []).map(a => ({
          lastName: a.family || '',
          firstName: a.given || ''
        })),
        journal: work['container-title']?.[0] || work['short-container-title']?.[0] || '',
        year: work.published?.['date-parts']?.[0]?.[0]?.toString() ||
              work['published-print']?.['date-parts']?.[0]?.[0]?.toString() ||
              work['published-online']?.['date-parts']?.[0]?.[0]?.toString() || '',
        volume: work.volume || '',
        issue: work.issue || '',
        pages: work.page || ''
      });
    } catch (error) {
      console.error('CrossRef fetch error:', error);
      articles.push({ doi, error: 'Failed to fetch from CrossRef' });
    }
  }

  return articles;
};

// Format website citation
const formatWebsiteCitation = (url, style, accessDate) => {
  const dateStr = accessDate || new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const domain = url.replace(/^https?:\/\//, '').split('/')[0];

  switch (style) {
    case 'vancouver':
      return `${domain}. [Internet]. Available from: ${url}. Accessed ${dateStr}.`;
    case 'apa':
      return `${domain}. (n.d.). Retrieved ${dateStr}, from ${url}`;
    case 'ama':
      return `${domain}. Accessed ${dateStr}. ${url}`;
    case 'harvard':
      return `${domain} (n.d.) Available at: ${url} (Accessed: ${dateStr}).`;
    case 'chicago':
      return `${domain}. Accessed ${dateStr}. ${url}.`;
    case 'mla':
      return `${domain}. Web. ${dateStr}. <${url}>.`;
    default:
      return `${url}. Accessed ${dateStr}.`;
  }
};

export default function ScriptSwapPage() {
  const [activeTab, setActiveTab] = useState('articles');
  const [inputText, setInputText] = useState('');
  const [citationStyle, setCitationStyle] = useState('vancouver');
  const [numbered, setNumbered] = useState(false);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFormat = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setError('');
    setOutput('');

    try {
      if (activeTab === 'articles') {
        // Parse PMIDs and DOIs from input
        const { pmids, dois } = parseInput(inputText);

        if (pmids.length === 0 && dois.length === 0) {
          setError('No valid PMIDs or DOIs found. Please enter PMIDs (numbers like 33782619) or DOIs (like 10.1038/s41591-021-01316-7).');
          setLoading(false);
          return;
        }

        // Fetch articles from both sources in parallel
        const [pubmedArticles, crossrefArticles] = await Promise.all([
          fetchFromPubMed(pmids),
          fetchFromCrossRef(dois)
        ]);

        const allArticles = [...pubmedArticles, ...crossrefArticles];

        // Format citations
        const citations = allArticles.map((article, i) => {
          if (article.error) {
            return `[Error: ${article.error}]`;
          }
          const citation = formatCitation(article, citationStyle);
          return numbered ? `${i + 1}. ${citation}` : citation;
        });

        setOutput(citations.join('\n\n'));

      } else if (activeTab === 'websites') {
        // Format website URLs
        const urls = inputText.split('\n').map(l => l.trim()).filter(l => l && l.startsWith('http'));

        if (urls.length === 0) {
          setError('No valid URLs found. Please enter URLs starting with http:// or https://');
          setLoading(false);
          return;
        }

        const citations = urls.map((url, i) => {
          const citation = formatWebsiteCitation(url, citationStyle);
          return numbered ? `${i + 1}. ${citation}` : citation;
        });

        setOutput(citations.join('\n\n'));

      } else if (activeTab === 'abstracts') {
        // Extract PMIDs and DOIs from abstract text
        const pmidMatches = inputText.match(/\b\d{7,8}\b/g) || [];
        const doiMatches = inputText.match(/10\.\d{4,}\/[^\s]+/g) || [];

        if (pmidMatches.length === 0 && doiMatches.length === 0) {
          setError('No PMIDs or DOIs found in the text. PMIDs are 7-8 digit numbers, DOIs start with 10.xxxx/');
          setLoading(false);
          return;
        }

        const [pubmedArticles, crossrefArticles] = await Promise.all([
          fetchFromPubMed(pmidMatches),
          fetchFromCrossRef(doiMatches)
        ]);

        const allArticles = [...pubmedArticles, ...crossrefArticles];

        const citations = allArticles.map((article, i) => {
          if (article.error) {
            return `[Error: ${article.error}]`;
          }
          const citation = formatCitation(article, citationStyle);
          return numbered ? `${i + 1}. ${citation}` : citation;
        });

        setOutput(citations.join('\n\n'));

      } else if (activeTab === 'reformat') {
        // For reformat, try to extract DOIs from existing citations
        const doiMatches = inputText.match(/10\.\d{4,}\/[^\s\]]+/g) || [];
        const pmidMatches = inputText.match(/PMID:?\s*(\d{7,8})/gi) || [];
        const pmids = pmidMatches.map(m => m.replace(/PMID:?\s*/i, ''));

        if (doiMatches.length === 0 && pmids.length === 0) {
          setError('Could not extract DOIs or PMIDs from the citations. Try using the Articles tab with specific PMIDs or DOIs.');
          setLoading(false);
          return;
        }

        const [pubmedArticles, crossrefArticles] = await Promise.all([
          fetchFromPubMed(pmids),
          fetchFromCrossRef(doiMatches)
        ]);

        const allArticles = [...pubmedArticles, ...crossrefArticles];

        const citations = allArticles.map((article, i) => {
          if (article.error) {
            return `[Error: ${article.error}]`;
          }
          const citation = formatCitation(article, citationStyle);
          return numbered ? `${i + 1}. ${citation}` : citation;
        });

        setOutput(citations.join('\n\n'));
      }
    } catch (err) {
      setError('An error occurred while formatting citations. Please try again.');
      console.error(err);
    }

    setLoading(false);
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
          onClick={() => { setActiveTab('articles'); setOutput(''); setError(''); }}
        >
          📄 Articles
        </button>
        <button
          className={`tool-tab ${activeTab === 'websites' ? 'active' : ''}`}
          onClick={() => { setActiveTab('websites'); setOutput(''); setError(''); }}
        >
          🌐 Websites
        </button>
        <button
          className={`tool-tab ${activeTab === 'abstracts' ? 'active' : ''}`}
          onClick={() => { setActiveTab('abstracts'); setOutput(''); setError(''); }}
        >
          📝 Abstracts
        </button>
        <button
          className={`tool-tab ${activeTab === 'reformat' ? 'active' : ''}`}
          onClick={() => { setActiveTab('reformat'); setOutput(''); setError(''); }}
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
10.1038/s41591-021-01316-7
https://doi.org/10.1002/art.41752`}
            />
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-medium)', marginTop: '0.5rem' }}>
              💡 Accepts PubMed IDs (numbers like 33782619) and DOIs (10.xxxx/...). Fetches real data from PubMed and CrossRef.
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
https://www.rheumatology.org/Practice-Quality/Clinical-Support/Clinical-Practice-Guidelines
https://www.uptodate.com/contents/giant-cell-arteritis`}
            />
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-medium)', marginTop: '0.5rem' }}>
              💡 Enter complete URLs starting with https:// or http://
            </p>
          </>
        )}

        {activeTab === 'abstracts' && (
          <>
            <label>Abstract Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Paste your abstract or manuscript text here. ScriptSwap will automatically find and format any PMIDs (8-digit numbers) or DOIs mentioned in the text.

Example text:
"...as demonstrated by recent studies (PMID: 33782619) and confirmed by meta-analysis (doi: 10.1038/s41591-021-01316-7)..."`}
            />
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-medium)', marginTop: '0.5rem' }}>
              💡 Automatically extracts PMIDs and DOIs from text and fetches full citation data
            </p>
          </>
        )}

        {activeTab === 'reformat' && (
          <>
            <label>Existing Citations</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Paste your existing citations here. ScriptSwap will extract DOIs and PMIDs and reformat them in your chosen style.

Example:
Smith J, et al. A study on rheumatoid arthritis. Arthritis Rheumatol. 2023;75:123-130. doi:10.1002/art.41752`}
            />
            <p style={{ fontSize: '0.85rem', color: 'var(--gray-medium)', marginTop: '0.5rem' }}>
              💡 Works best when citations contain DOIs or PMIDs. Extracts identifiers and fetches fresh data.
            </p>
          </>
        )}

        <div style={{ marginTop: '1rem' }}>
          <label>Citation Style</label>
          <select value={citationStyle} onChange={(e) => setCitationStyle(e.target.value)}>
            <option value="vancouver">Vancouver (ICMJE) - Medical journals</option>
            <option value="apa">APA 7th Edition</option>
            <option value="ama">AMA (American Medical Association)</option>
            <option value="harvard">Harvard</option>
            <option value="chicago">Chicago Author-Date</option>
            <option value="mla">MLA 9th Edition</option>
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
          {loading ? '⏳ Fetching & Formatting...' : '🔄 Format Citations'}
        </button>

        {error && (
          <div style={{
            marginTop: '1rem',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '1rem',
            color: '#ef4444'
          }}>
            ⚠️ {error}
          </div>
        )}

        {output && (
          <div style={{
            marginTop: '1.5rem',
            background: 'var(--navy-dark)',
            borderRadius: '8px',
            padding: '1rem',
            border: '1px solid rgba(107, 139, 184, 0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <label style={{ margin: 0, color: 'var(--blue-accent)' }}>✅ Formatted Citations</label>
              <button
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                onClick={() => {
                  navigator.clipboard.writeText(output);
                  alert('Citations copied to clipboard!');
                }}
              >
                📋 Copy All
              </button>
            </div>
            <pre style={{
              whiteSpace: 'pre-wrap',
              color: 'var(--gray-light)',
              fontSize: '0.9rem',
              lineHeight: '1.8',
              fontFamily: 'inherit'
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
          PubMed IDs (PMIDs), DOIs, or URLs. It fetches real citation data from PubMed and CrossRef,
          then formats it in your chosen style.
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li><strong>Articles:</strong> Enter PMIDs or DOIs to fetch and format citations</li>
          <li><strong>Websites:</strong> Format URLs as web references with access dates</li>
          <li><strong>Abstracts:</strong> Paste text to automatically extract and format any PMIDs/DOIs</li>
          <li><strong>Reformat:</strong> Convert existing citations to a different style</li>
        </ul>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--gray-medium)' }}>
          Supports Vancouver (ICMJE), APA, AMA, Harvard, Chicago, and MLA citation styles.
          Data is fetched from NCBI PubMed and CrossRef APIs.
        </p>
      </div>
    </div>
  );
}
