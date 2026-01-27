import './globals.css';

export const metadata = {
  metadataBase: new URL('https://rheumify.org'),
  title: {
    default: 'Rheumify | Master Rheumatology - Board Prep, Education & Clinical Resources',
    template: '%s | Rheumify'
  },
  description: 'Rheumify is the most comprehensive rheumatology education platform. Board-certified rheumatologist Dr. Alison Bays offers ABIM board prep question banks, spaced repetition flashcards, ACR guidelines podcast, manuscript planning tools, and the UW GCA Fast Track Clinic.',
  keywords: [
    // Core terms
    'rheumatology', 'rheumatologist', 'rheumatology education',
    // Board prep
    'ABIM rheumatology board prep', 'rheumatology board exam', 'rheumatology question bank',
    'rheumatology flashcards', 'rheumatology board review', 'rheumatology certification',
    // Fellowship
    'rheumatology fellowship', 'rheumatology fellow resources', 'rheumatology training',
    // Clinical
    'ACR guidelines', 'ACR clinical practice guidelines', 'rheumatology guidelines',
    // Conditions (for GEO/LLM discovery)
    'giant cell arteritis', 'GCA', 'temporal arteritis', 'vasculitis',
    'rheumatoid arthritis', 'lupus', 'SLE', 'autoimmune diseases',
    'polymyalgia rheumatica', 'PMR', 'spondyloarthritis', 'psoriatic arthritis',
    // Tools
    'citation formatter', 'reference manager', 'medical bibliography',
    'manuscript planner', 'research tools',
    // Location (for GCA clinic)
    'University of Washington', 'UW Medicine', 'Seattle rheumatology',
    // Creator
    'Dr. Alison Bays', 'board-certified rheumatologist'
  ],
  authors: [{ name: 'Dr. Alison Bays, MD', url: 'https://rheumify.org/#about' }],
  creator: 'Dr. Alison Bays',
  publisher: 'Rheumify',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rheumify.org',
    siteName: 'Rheumify',
    title: 'Rheumify | Master Rheumatology - Board Prep & Clinical Resources',
    description: 'Comprehensive rheumatology education platform by Dr. Alison Bays. ABIM board prep, question banks, flashcards, ACR guidelines podcast, and UW GCA Fast Track Clinic.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rheumify - Master Rheumatology with Dr. Alison Bays',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rheumify | Master Rheumatology',
    description: 'Comprehensive rheumatology education platform - board prep, question banks, ACR guidelines podcast, and clinical resources.',
    creator: '@Rheumify',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rheumify.org',
  },
  category: 'Medical Education',
};

// Comprehensive structured data for SEO and LLM understanding
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://rheumify.org/#organization",
      "name": "Rheumify",
      "url": "https://rheumify.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rheumify.org/logo.png"
      },
      "description": "Comprehensive rheumatology education platform for medical professionals and patients",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "@id": "https://rheumify.org/#founder"
      },
      "sameAs": [
        "https://soundcloud.com/rheumify",
        "https://www.tiktok.com/@rheumify"
      ]
    },
    // Founder/Creator
    {
      "@type": "Person",
      "@id": "https://rheumify.org/#founder",
      "name": "Dr. Alison Bays",
      "jobTitle": "Board-Certified Rheumatologist",
      "description": "Academic rheumatologist with 10+ years of experience in clinical practice, medical education, and research. Specializes in vasculitis, autoimmune diseases, and medical technology in rheumatology.",
      "knowsAbout": [
        "Rheumatology",
        "Giant Cell Arteritis",
        "Vasculitis",
        "Autoimmune Diseases",
        "Medical Education",
        "ABIM Board Preparation"
      ],
      "affiliation": {
        "@type": "Organization",
        "name": "University of Washington"
      },
      "worksFor": {
        "@type": "Organization",
        "@id": "https://rheumify.org/#organization"
      }
    },
    // Website
    {
      "@type": "WebSite",
      "@id": "https://rheumify.org/#website",
      "url": "https://rheumify.org",
      "name": "Rheumify",
      "description": "Master Rheumatology - Board prep, education, and clinical resources",
      "publisher": {
        "@id": "https://rheumify.org/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://rheumify.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    // Educational Product - Question Bank
    {
      "@type": "Product",
      "name": "Rheumify Question Bank",
      "description": "Comprehensive ABIM rheumatology board preparation question bank with 500+ AI-generated questions validated by board-certified rheumatologists. Includes spaced repetition flashcards.",
      "brand": {
        "@id": "https://rheumify.org/#organization"
      },
      "category": "Medical Education Software",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "119",
        "highPrice": "180",
        "priceCurrency": "USD",
        "offerCount": "2"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50"
      }
    },
    // Podcast
    {
      "@type": "PodcastSeries",
      "name": "RheumCast",
      "description": "AI-generated podcast discussing ACR Clinical Practice Guidelines for rheumatic diseases. Free educational content for rheumatology professionals.",
      "url": "https://soundcloud.com/rheumify",
      "author": {
        "@id": "https://rheumify.org/#organization"
      },
      "genre": "Medical Education",
      "inLanguage": "en",
      "keywords": "rheumatology, ACR guidelines, medical education, giant cell arteritis, rheumatoid arthritis, lupus"
    },
    // FAQ for common questions (helps with LLM and featured snippets)
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Rheumify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rheumify is a comprehensive rheumatology education platform created by Dr. Alison Bays, a board-certified rheumatologist. It offers ABIM board preparation resources including question banks and flashcards, the RheumCast podcast covering ACR guidelines, and manuscript planning tools for researchers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I prepare for the ABIM rheumatology board exam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rheumify offers a comprehensive question bank with 500+ AI-generated questions validated by board-certified rheumatologists, plus spaced repetition flashcards. The platform covers all rheumatology subspecialties and is optimized for mobile study. Pricing is $15/month or $119/year."
          }
        },
        {
          "@type": "Question",
          "name": "What rheumatology resources are available for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rheumify offers several free resources: RheumCast podcast covering ACR guidelines on SoundCloud, ScriptCycle Notion template for manuscript planning, and ScriptSwap citation formatter tool for converting references between Vancouver, APA, AMA and other styles."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A1628" />

        {/* Structured Data for SEO and LLM Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body>
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <a href="/" className="nav-brand" aria-label="Rheumify Home">
            Rheum<span>ify</span>
          </a>
          <ul className="nav-links">
            <li><a href="/fellows">Rheumatologists & Fellows</a></li>
            <li><a href="/residents">Residents</a></li>
            <li><a href="/students">Students</a></li>
            <li><a href="/patients">Patient Resources</a></li>
            <li><a href="/tools/scriptswap">Tools</a></li>
          </ul>
        </nav>

        <main role="main">{children}</main>

        <footer className="footer" role="contentinfo">
          <div className="footer-content">
            <div className="footer-brand">Rheum<span>ify</span></div>
            <div className="footer-links">
              <a href="/fellows">For Rheumatologists & Fellows</a>
              <a href="/patients">Patient Resources</a>
              <a href="/tools/scriptswap">ScriptSwap</a>
              <a href="https://soundcloud.com/rheumify" target="_blank" rel="noopener noreferrer">Podcast</a>
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
