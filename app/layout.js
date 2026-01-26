import './globals.css';

export const metadata = {
  metadataBase: new URL('https://rheumify.org'),
  title: {
    default: 'Rheumify | Master Rheumatology',
    template: '%s | Rheumify'
  },
  description: 'The most comprehensive web-based platform for rheumatology education - from preparing fellows for board exams to helping researchers organize their manuscripts.',
  keywords: ['rheumatology', 'board prep', 'ABIM', 'rheumatology fellowship', 'medical education', 'question bank', 'flashcards'],
  authors: [{ name: 'Rheumify' }],
  creator: 'Rheumify',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rheumify.org',
    siteName: 'Rheumify',
    title: 'Rheumify | Master Rheumatology',
    description: 'The most comprehensive web-based platform for rheumatology education.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rheumify - Master Rheumatology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rheumify | Master Rheumatology',
    description: 'The most comprehensive web-based platform for rheumatology education.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rheumify",
              "url": "https://rheumify.org",
              "description": "Comprehensive rheumatology education platform",
              "sameAs": [
                "https://soundcloud.com/rheumify",
                "https://www.notion.com/templates/scriptcycle"
              ]
            })
          }}
        />
      </head>
      <body>
        <nav className="navbar">
          <a href="/" className="nav-brand">
            Rheum<span>ify</span>
          </a>
          <ul className="nav-links">
            <li><a href="/rheumatologists">Rheumatologists</a></li>
            <li><a href="/fellows">Fellows</a></li>
            <li><a href="/residents">Residents</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/patients">Patient Resources</a></li>
            <li><a href="/tools/scriptswap">Tools</a></li>
          </ul>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">Rheum<span>ify</span></div>
            <div className="footer-links">
              <a href="/rheumatologists">For Rheumatologists</a>
              <a href="/fellows">For Fellows</a>
              <a href="/patients">Patient Resources</a>
              <a href="/gca-fast-track">GCA Fast Track</a>
              <a href="/tools/scriptswap">ScriptSwap</a>
              <a href="https://soundcloud.com/rheumify" target="_blank" rel="noopener noreferrer">Podcast</a>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Rheumify. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
