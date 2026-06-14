export const metadata = {
  title: 'ScriptSwap (Retired)',
  description: 'The ScriptSwap citation tool has been retired.',
  robots: { index: false, follow: true },
};

export default function ScriptSwapRetired() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>ScriptSwap has been retired</h1>
        <p>
          Thanks to everyone who used ScriptSwap. This tool is no longer available, but the rest of Rheumify is still here to help.
        </p>
      </div>

      <div className="content-card" style={{ textAlign: 'center' }}>
        <p style={{ lineHeight: '1.9' }}>
          <a href="/fellows">For Rheumatologists &amp; Fellows</a>
          {'  ·  '}
          <a href="/learning">Learning Modules</a>
          {'  ·  '}
          <a href="https://app.rheumify.org" target="_blank" rel="noopener noreferrer">Study App →</a>
        </p>
      </div>
    </div>
  );
}
