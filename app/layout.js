import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  metadataBase: new URL('https://www.rheumify.org'),
  title: {
    default: 'Rheumatology Question Bank & ABIM Board Prep | Rheumify',
    template: '%s | Rheumify'
  },
  description: 'ABIM rheumatology board prep by a board-certified academic rheumatologist: 750+ board-style questions, 850+ flashcards, and free clinical tools.',
  keywords: [
    'rheumatology question bank', 'rheumatology qbank', 'ABIM rheumatology board prep',
    'rheumatology board review', 'rheumatology flashcards', 'rheumatology certification',
    'spaced repetition flashcards', 'rheumatology fellowship', 'rheumatology recertification', 'ACR guidelines', 'Dr. Alison Bays'
  ],
  authors: [{ name: 'Dr. Alison Bays, MD', url: 'https://www.rheumify.org/#about' }],
  creator: 'Dr. Alison Bays',
  publisher: 'Rheumify',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rheumify.org',
    siteName: 'Rheumify',
    title: 'Rheumatology Question Bank & ABIM Board Prep | Rheumify',
    description: 'ABIM rheumatology board prep by a board-certified academic rheumatologist: 750+ board-style questions, 850+ flashcards, and free clinical tools.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rheumify - Master Rheumatology with Dr. Alison Bays' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rheumatology Question Bank & ABIM Board Prep | Rheumify',
    description: 'ABIM rheumatology board prep by a board-certified academic rheumatologist: 750+ board-style questions, 850+ flashcards, and free clinical tools.',
    creator: '@Rheumify',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'Medical Education',
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": "https://www.rheumify.org/#organization",
      "name": "Rheumify",
      "url": "https://www.rheumify.org",
      "logo": { "@type": "ImageObject", "url": "https://www.rheumify.org/logo.png" },
      "description": "Rheumify is an ABIM rheumatology board-prep and clinical education platform created by Dr. Alison Bays, MD, MPH&TM, a board-certified academic rheumatologist. It offers a 750+ question board-style question bank, 850+ spaced-repetition flashcards, the RheumCast podcast, and free clinical tools for fellows and recertifying physicians.",
      "slogan": "Master rheumatology - board prep built by a rheumatologist.",
      "foundingDate": "2024",
      "founder": { "@id": "https://www.rheumify.org/#founder" },
      "knowsAbout": ["ABIM Rheumatology Board Preparation", "Rheumatology", "Vasculitis", "Spaced Repetition", "Medical Education"],
      "sameAs": ["https://soundcloud.com/rheumify", "https://www.tiktok.com/@rheumify", "https://rheumify.substack.com", "https://bsky.app/profile/rheumify.bsky.social"]
    },
    {
      "@type": "Person",
      "@id": "https://www.rheumify.org/#founder",
      "name": "Dr. Alison Bays",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "MD, MPH&TM",
      "jobTitle": "Board-Certified Academic Rheumatologist",
      "url": "https://www.rheumify.org/about",
      "description": "Board-certified academic rheumatologist (MD, MPH&TM) who completed rheumatology fellowship in 2015 and has worked as an academic rheumatologist ever since. Her work spans clinical practice, medical education, and research, with a focus on vasculitis, giant cell arteritis, autoimmune diseases, and medical technology in rheumatology.",
      "knowsAbout": ["Rheumatology", "Giant Cell Arteritis", "Vasculitis", "Autoimmune Diseases", "Medical Education", "ABIM Board Preparation"],
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Tulane University" },
        { "@type": "CollegeOrUniversity", "name": "University of Washington" },
        { "@type": "CollegeOrUniversity", "name": "University of California, San Francisco" }
      ],
      "worksFor": { "@id": "https://www.rheumify.org/#organization" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rheumify.org/#website",
      "url": "https://www.rheumify.org",
      "name": "Rheumify",
      "description": "Master Rheumatology - Board prep, education, and clinical resources",
      "publisher": { "@id": "https://www.rheumify.org/#organization" },
      "potentialAction": { "@type": "SearchAction", "target": "https://www.rheumify.org/search?q={search_term_string}", "query-input": "required name=search_term_string" }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="google-site-verification" content="hKtwRCtuiCHH_Du0HgMwI3Ebcg4NXQliRcyALl7fvlQ" />
        {/* Apply the reader's saved text size and light/dark choice before the
            first paint, so choosing light mode does not flash dark on reload.
            Reads localStorage only; nothing is sent anywhere. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var d=document.documentElement,t=localStorage.getItem('rheumify-theme'),s=localStorage.getItem('rheumify-text');if(t==='light')d.setAttribute('data-theme','light');if(s==='l'||s==='xl')d.setAttribute('data-text',s);}catch(e){}})();",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <a href="/" className="nav-brand" aria-label="Rheumify Home">
            Rheum<span>ify</span>
          </a>
          <ul className="nav-links">
            <li><a href="/rheumatology-board-prep">Board Prep</a></li>
            <li><a href="/fellows">Rheumatologists &amp; Fellows</a></li>
            <li><a href="/patients">Patient Resources</a></li>
            <li><a href="/learning">Learning</a></li>
          </ul>
          <a href="https://app.rheumify.org" className="nav-app-btn">
            Study App →
          </a>
        </nav>
        <main role="main">{children}</main>
        <footer className="footer" role="contentinfo">
          <div className="footer-content">
            <div className="footer-brand">Rheum<span>ify</span></div>
            <div className="footer-links">
              <a href="/about">About Dr. Bays</a>
              <a href="/rheumatology-board-prep">Rheumatology Board Prep</a>
              <a href="/fellows">For Rheumatologists &amp; Fellows</a>
              <a href="/patients">Patient Resources</a>
              <a href="/learning">Learning</a>
              <a href="https://soundcloud.com/rheumify" target="_blank" rel="noopener noreferrer">Podcast</a>
              <a href="https://rheumify.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
              <a href="https://bsky.app/profile/rheumify.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky</a>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Rheumify. Created by Dr. Alison Bays, MD. All rights reserved.
            </p>
            <p className="footer-photo-credit" style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem' }}>
              Photography by <a href="https://emazingphotography.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>Emazing Photography</a>
            </p>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
