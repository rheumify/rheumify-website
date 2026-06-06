import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.rheumify.org'),
  title: {
    default: 'Rheumatology Question Bank & ABIM Board Prep | Rheumify',
    template: '%s | Rheumify'
  },
  description: 'ABIM rheumatology board prep from a board-certified rheumatologist: 500+ board-style questions, 700+ spaced-repetition flashcards, and free clinical tools.',
  keywords: [
    'rheumatology question bank', 'rheumatology qbank', 'ABIM rheumatology board prep',
    'rheumatology board review', 'rheumatology flashcards', 'rheumatology certification',
    'spaced repetition flashcards', 'rheumatology fellowship', 'ACR guidelines', 'Dr. Alison Bays'
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
    description: 'ABIM rheumatology board prep from a board-certified rheumatologist: 500+ board-style questions, 700+ spaced-repetition flashcards, and free clinical tools.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rheumify - Master Rheumatology with Dr. Alison Bays' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rheumatology Question Bank & ABIM Board Prep | Rheumify',
    description: 'ABIM rheumatology board prep from a board-certified rheumatologist: 500+ board-style questions, 700+ spaced-repetition flashcards, and free clinical tools.',
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
      "@type": "Organization",
      "@id": "https://www.rheumify.org/#organization",
      "name": "Rheumify",
      "url": "https://www.rheumify.org",
      "logo": { "@type": "ImageObject", "url": "https://www.rheumify.org/logo.png" },
      "description": "Comprehensive rheumatology education platform for medical professionals and patients",
      "foundingDate": "2024",
      "founder": { "@type": "Person", "@id": "https://www.rheumify.org/#founder" },
      "sameAs": ["https://soundcloud.com/rheumify", "https://www.tiktok.com/@rheumify", "https://rheumify.substack.com"]
    },
    {
      "@type": "Person",
      "@id": "https://www.rheumify.org/#founder",
      "name": "Dr. Alison Bays",
      "jobTitle": "Board-Certified Rheumatologist",
      "description": "Academic rheumatologist with 10+ years of experience in clinical practice, medical education, and research. Specializes in vasculitis, autoimmune diseases, and medical technology in rheumatology.",
      "knowsAbout": ["Rheumatology", "Giant Cell Arteritis", "Vasculitis", "Autoimmune Diseases", "Medical Education", "ABIM Board Preparation"],
      "affiliation": { "@type": "Organization", "name": "University of Washington" },
      "worksFor": { "@type": "Organization", "@id": "https://www.rheumify.org/#organization" }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rheumify.org/#website",
      "url": "https://www.rheumify.org",
      "name": "Rheumify",
      "description": "Master Rheumatology - Board prep, education, and clinical resources",
      "publisher": { "@id": "https://www.rheumify.org/#organization" },
      "potentialAction": { "@type": "SearchAction", "target": "https://www.rheumify.org/search?q={search_term_string}", "query-input": "required name=search_term_string" }
    },
    {
      "@type": "Product",
      "name": "Rheumify Question Bank",
      "description": "Comprehensive ABIM rheumatology board preparation question bank with 500+ AI-generated questions validated by board-certified rheumatologists. Includes spaced repetition flashcards.",
      "brand": { "@id": "https://www.rheumify.org/#organization" },
      "category": "Medical Education Software",
      "offers": { "@type": "AggregateOffer", "lowPrice": "119", "highPrice": "180", "priceCurrency": "USD", "offerCount": "2" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "50" }
    },
    {
      "@type": "PodcastSeries",
      "name": "RheumCast",
      "description": "AI-generated podcast discussing ACR Clinical Practice Guidelines for rheumatic diseases. Free educational content for rheumatology professionals.",
      "url": "https://soundcloud.com/rheumify",
      "author": { "@id": "https://www.rheumify.org/#organization" },
      "genre": "Medical Education",
      "inLanguage": "en",
      "keywords": "rheumatology, ACR guidelines, medical education, giant cell arteritis, rheumatoid arthritis, lupus"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Rheumify?", "acceptedAnswer": { "@type": "Answer", "text": "Rheumify is a comprehensive rheumatology education platform created by Dr. Alison Bays, a board-certified rheumatologist. It offers ABIM board preparation resources including question banks and flashcards, the RheumCast podcast covering ACR guidelines, and manuscript planning tools for researchers." } },
        { "@type": "Question", "name": "How do I prepare for the ABIM rheumatology board exam?", "acceptedAnswer": { "@type": "Answer", "text": "Rheumify offers a comprehensive question bank with 500+ AI-generated questions validated by board-certified rheumatologists, plus spaced repetition flashcards. The platform covers all rheumatology subspecialties and is optimized for mobile study. Pricing is $15/month or $119/year." } },
        { "@type": "Question", "name": "What rheumatology resources are available for free?", "acceptedAnswer": { "@type": "Answer", "text": "Rheumify offers several free resources: RheumCast podcast covering ACR guidelines on SoundCloud, ScriptCycle Notion template for manuscript planning, and ScriptSwap citation formatter tool for converting references between Vancouver, APA, AMA and other styles." } }
      ]
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
            <li><a href="/fellows">Rheumatologists &amp; Fellows</a></li>
            <li><a href="/residents">Residents</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/patients">Patient Resources</a></li>
            <li><a href="/learning">Learning</a></li>
            <li><a href="/tools/scriptswap">Tools</a></li>
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
              <a href="/fellows">For Rheumatologists &amp; Fellows</a>
              <a href="/patients">Patient Resources</a>
              <a href="/learning">Learning</a>
              <a href="/tools/scriptswap">ScriptSwap</a>
              <a href="https://soundcloud.com/rheumify" target="_blank" rel="noopener noreferrer">Podcast</a>
              <a href="https://rheumify.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Rheumify. Created by Dr. Alison Bays, MD. All rights reserved.
            </p>
            <p className="footer-photo-credit" style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.5rem' }}>
              Photography by <a href="https://emazingphotography.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>Emazing Photography</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
