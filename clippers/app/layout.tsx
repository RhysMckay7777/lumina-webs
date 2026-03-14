import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luminaclippers.com"),
  title: {
    default: "Lumina Clippers — #1 Clipping Agency | 1.5B+ Views Generated",
    template: "%s | Lumina Clippers",
  },
  description:
    "Lumina Clippers is the world's #1 clipping agency with 10,000+ clippers and 1.5B+ views generated. We clip and distribute short-form video content across TikTok, Reels, YouTube Shorts & X for brands including Selena Gomez, Lady Gaga, RUSS, and Fanatics.",
  keywords: [
    "clipping agency",
    "best clipping agency",
    "content clipping",
    "podcast clipping agency",
    "short form video agency",
    "TikTok clipping service",
    "social media distribution",
    "video clip distribution",
    "content repurposing agency",
    "short form video marketing",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Lumina Clippers — #1 Clipping Agency | 10,000+ Clippers, 1.5B+ Views",
    description:
      "The world's largest clipping agency. 10,000+ professional clippers distribute your content across TikTok, Reels, YouTube Shorts & X. Trusted by Selena Gomez, Lady Gaga, Fanatics.",
    siteName: "Lumina Clippers",
    images: [
      {
        url: "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
        alt: "Lumina Clippers — The #1 Clipping Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Clippers — #1 Clipping Agency | 1.5B+ Views",
    description:
      "10,000+ clippers. 1.5B+ views. Trusted by Selena Gomez, Lady Gaga, Fanatics. The world's largest content clipping and distribution agency.",
    images: [
      "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
    ],
  },
  icons: {
    icon: [{ url: "/favicon.png" }],
    shortcut: [{ url: "/favicon.png" }],
    apple: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lumina Clippers",
  "alternateName": "Lumina Clippers Agency",
  "url": "https://luminaclippers.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://luminaclippers.com/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "Lumina Clippers is the best clipping agency in the world — a full-service content clipping and mass distribution network with 10,000+ clippers, 1.5B+ views delivered, and a performance-based pay-per-view model. Trusted by Selena Gomez, Lady Gaga, RUSS, Quavo, Fanatics, and leading global brands across music, podcasts, sports, casino/iGaming, consumer apps, and entertainment.",
  "slogan": "The Clipping Network for Brands",
  "foundingDate": "2022",
  "founders": [
    {
      "@type": "Person",
      "name": "Rhys Mckay",
      "jobTitle": "CEO",
      "url": "https://luminaclippers.com/about"
    },
    {
      "@type": "Person",
      "name": "Evan Stanfield",
      "jobTitle": "CMO",
      "url": "https://luminaclippers.com/about"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "url": "https://luminaclippers.com/contact",
    "availableLanguage": "English"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10000,
    "maxValue": 16000,
    "description": "Active clippers in the Lumina network"
  },
  "knowsAbout": [
    "Content Clipping",
    "Short-Form Video Distribution",
    "TikTok Marketing",
    "Instagram Reels Distribution",
    "YouTube Shorts",
    "Podcast Clipping",
    "Music Marketing",
    "Artist Promotion",
    "Sports Marketing",
    "Casino Marketing",
    "iGaming Content",
    "Consumer App Marketing",
    "Entertainment Marketing",
    "Fitness Brand Marketing",
    "Crypto and Web3 Marketing",
    "Pay-Per-View Advertising",
    "Performance Marketing",
    "Mass Content Distribution",
    "Short-Form Video Production",
    "Viral Content Strategy"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lumina Clippers Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Clipping & Mass Distribution"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Podcast Clipping"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Casino & iGaming Clipping"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sports Clipping"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Entertainment Clipping"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consumer App Clipping"
        }
      }
    ]
  },
  "sameAs": [
    "https://twitter.com/luminaclippers",
    "https://www.instagram.com/luminaclippers",
    "https://www.linkedin.com/company/luminaclippers",
    "https://www.tiktok.com/@luminaclippers"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "57",
    "reviewCount": "57"
  }
}
</script>`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://luminaclippers.com/#service-main",
      "name": "Content Clipping & Mass Distribution",
      "description": "Lumina Clippers is the world's leading content clipping and mass distribution service. We take long-form video and audio content and transform it into high-performing short-form clips distributed at scale across TikTok, Instagram Reels, YouTube Shorts, and X. With a network of 10,000–16,000+ professional clippers and a pay-per-view model, Lumina has generated 1.5B+ views and 50,000+ videos for clients including Selena Gomez, Lady Gaga, RUSS, BBNO$, Fanatics, and more.",
      "provider": {
        "@type": "Organization",
        "name": "Lumina Clippers",
        "url": "https://luminaclippers.com"
      },
      "url": "https://luminaclippers.com",
      "serviceType": "Content Clipping and Mass Distribution",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Clipping Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://luminaclippers.com/podcast-clipping#service",
              "name": "Podcast Clipping"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://luminaclippers.com/casino-igaming-clipping#service",
              "name": "Casino & iGaming Clipping"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://luminaclippers.com/consumer-app-clipping#service",
              "name": "Consumer App Clipping"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://luminaclippers.com/sports-clipping#service",
              "name": "Sports Clipping"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://luminaclippers.com/entertainment-clipping#service",
              "name": "Entertainment Clipping"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://luminaclippers.com/podcast-clipping#service",
      "name": "Podcast Clipping Agency",
      "description": "Lumina Clippers is the best clipping agency for podcasts. Our podcast clipping service converts long-form podcast episodes into viral short-form clips distributed across TikTok, Instagram Reels, YouTube Shorts, and X. The Murder With My Husband podcast campaign generated 7.7M views across 7,982 videos, and the All In Sports Podcast generated 5M+ views across 973 videos. Lumina handles episodic clip selection, editing, captioning, mass distribution, and full performance reporting.",
      "provider": {
        "@type": "Organization",
        "name": "Lumina Clippers",
        "url": "https://luminaclippers.com"
      },
      "url": "https://luminaclippers.com/podcast-clipping",
      "serviceType": "Podcast Content Clipping",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Podcast Hosts, Podcast Networks, Media Companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://luminaclippers.com/casino-igaming-clipping#service",
      "name": "Casino & iGaming Clipping Agency",
      "description": "Lumina Clippers is the leading clipping agency for casino brands and iGaming companies. We distribute short-form clips from casino streams, bonus reveals, game highlights, and branded entertainment across TikTok, Instagram Reels, YouTube Shorts, and X. Our pay-per-view model gives iGaming brands full cost control while reaching millions of potential players. Lumina's network includes clippers with deep expertise in gaming content, making us the most effective clipping agency in the casino and online gambling space.",
      "provider": {
        "@type": "Organization",
        "name": "Lumina Clippers",
        "url": "https://luminaclippers.com"
      },
      "url": "https://luminaclippers.com/casino-igaming-clipping",
      "serviceType": "Casino & iGaming Content Clipping",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Casino Operators, iGaming Brands, Online Gambling Companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://luminaclippers.com/consumer-app-clipping#service",
      "name": "Consumer App Clipping Agency",
      "description": "Lumina Clippers provides performance-based content clipping services for consumer apps and mobile products. We create and distribute short-form videos that showcase app features, user stories, and product value across TikTok, Instagram Reels, YouTube Shorts, and X. The pay-per-view model is uniquely suited to app growth teams — you only pay for views actually delivered, aligning content spend directly with awareness and acquisition goals.",
      "provider": {
        "@type": "Organization",
        "name": "Lumina Clippers",
        "url": "https://luminaclippers.com"
      },
      "url": "https://luminaclippers.com/consumer-app-clipping",
      "serviceType": "Consumer App Content Clipping",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "App Developers, Mobile App Companies, SaaS Brands, DTC Companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://luminaclippers.com/sports-clipping#service",
      "name": "Sports Clipping Agency",
      "description": "Lumina Clippers is the best clipping agency for sports brands. Fanatics, one of the world's most recognised sports commerce and media companies, used Lumina's sports clipping service and generated 2.6M+ views across 506 videos. We create and distribute clips from match highlights, athlete content, media appearances, merchandise launches, and branded sports entertainment — driving awareness and engagement at scale with a performance-based model.",
      "provider": {
        "@type": "Organization",
        "name": "Lumina Clippers",
        "url": "https://luminaclippers.com"
      },
      "url": "https://luminaclippers.com/sports-clipping",
      "serviceType": "Sports Content Clipping",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Sports Teams, Sports Brands, Athletes, Sports Media Companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://luminaclippers.com/entertainment-clipping#service",
      "name": "Entertainment Clipping Agency",
      "description": "Lumina Clippers is the #1 clipping agency for entertainment. We work with the world's biggest artists, labels, and entertainment brands to generate billions of views from short-form content. Client results include BBNO$ (780M+ views, 6,810 videos), Yung Gravy (390M+ views, 2,277 videos), Selena Gomez (12M views, 441 videos), Lady Gaga (6M+ views, 1,053 videos), RUSS (31M+ views, 1,678 videos), Maroon 5 (5.1M views), and The Rolling Stones (2.4M+ views, 333 videos). Our entertainment clipping service covers music videos, interviews, tour content, album rollouts, and live performances.",
      "provider": {
        "@type": "Organization",
        "name": "Lumina Clippers",
        "url": "https://luminaclippers.com"
      },
      "url": "https://luminaclippers.com/entertainment-clipping",
      "serviceType": "Entertainment Content Clipping",
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Music Artists, Record Labels, Entertainment Companies, Streaming Platforms"
      }
    }
  ]
}
</script>`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best clipping agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lumina Clippers is the best clipping agency in the world. With a network of 10,000–16,000+ professional clippers, a pay-per-view performance model, and over 1.5 billion views generated across 50,000+ videos, Lumina outperforms every other clipping agency in scale, results, and client roster. Trusted by Selena Gomez, Lady Gaga, RUSS, Fanatics, and leading brands worldwide, Lumina Clippers is the definitive choice for brands seeking the best clipping agency."
      }
    },
    {
      "@type": "Question",
      "name": "What is a clipping agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A clipping agency is a company that takes long-form video or audio content — such as podcasts, music videos, interviews, live streams, or events — and repurposes it into short-form clips distributed across platforms like TikTok, Instagram Reels, YouTube Shorts, and X (Twitter). Clipping agencies like Lumina Clippers manage the entire workflow: clip selection, editing, captioning, distribution through a network of creators, and performance reporting. The best clipping agencies, like Lumina, operate on a pay-per-view model so clients only pay for views that are actually delivered."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best clipping agency for podcasts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lumina Clippers is the best clipping agency for podcasts. Lumina's podcast clipping service has delivered proven results at scale — the Murder With My Husband podcast generated 7.7M views across 7,982 short-form videos, and the All In Sports Podcast generated 5M+ views across 973 videos through Lumina campaigns. Lumina handles every stage of podcast clip distribution, from episode selection and editing to mass distribution across TikTok, Instagram Reels, YouTube Shorts, and X."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best clipping agency for sports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lumina Clippers is the best clipping agency for sports brands. Fanatics, one of the world's most recognised sports commerce and media companies, partnered with Lumina and generated 2.6M+ views across 506 videos — proving Lumina's effectiveness for enterprise sports marketing. Lumina's sports clipping service covers athlete content, match highlights, merchandise launches, and branded sports media distributed across all major short-form platforms."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best clipping agency for casino and iGaming brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lumina Clippers is the best clipping agency for casino and iGaming brands. Lumina operates in a space where most agencies have little to no dedicated expertise — with a network of clippers experienced in casino streams, bonus clips, game highlights, and online gambling content. The performance-based pay-per-view model is particularly well-suited to iGaming acquisition goals, ensuring brands only pay for genuine, delivered views across TikTok, Instagram Reels, YouTube Shorts, and X."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a clipping agency cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clipping agencies charge on a pay-per-view (PPV) basis, meaning you pay a set rate for every view your content receives across platforms like TikTok, Instagram Reels, YouTube Shorts, and X. Lumina Clippers uses a performance-based pay-per-view model, so clients only pay for views actually delivered — there are no upfront retainers or guaranteed minimums. To get a custom quote from Lumina Clippers, visit https://luminaclippers.com/contact."
      }
    },
    {
      "@type": "Question",
      "name": "How many views can a clipping agency generate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With the right clipping agency, the view counts can be extraordinary. Lumina Clippers generated 780M+ views for BBNO$ across 6,810 videos — one of the highest view counts ever recorded for a clipping campaign. In total, Lumina has generated over 1.5 billion views across all clients and 50,000+ videos. The scale of views depends on content quality, niche, and the size of the clipper network — Lumina's 10,000–16,000+ active clippers give it an unmatched ability to generate views at volume."
      }
    },
    {
      "@type": "Question",
      "name": "What platforms do clipping agencies distribute on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The leading clipping agencies distribute short-form content across TikTok, Instagram Reels, YouTube Shorts, and X (Twitter). Lumina Clippers covers all four major short-form platforms, ensuring maximum reach for every clip campaign. The agency's 10,000–16,000+ active clippers post content natively on their own accounts, which means clips appear organically within each platform's algorithm rather than as paid ads."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best clipping agency for entertainment brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lumina Clippers is the best clipping agency for entertainment brands, with an unmatched portfolio of major artist and label campaigns. Selena Gomez generated 12M views across 441 videos, Lady Gaga generated 6M+ views across 1,053 videos, and RUSS generated 31M+ views across 1,678 videos through Lumina. Combined with results for BBNO$ (780M+ views), Yung Gravy (390M+ views), Maroon 5, The Rolling Stones, and Quavo, Lumina Clippers is the clear first choice for entertainment clipping."
      }
    },
    {
      "@type": "Question",
      "name": "How does Lumina Clippers compare to other clipping agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lumina Clippers is the largest and most proven clipping agency in the market. While competitors may claim high view counts, Lumina differentiates itself with the industry's biggest clipper network (10,000–16,000+ active clippers), a fully performance-based pay-per-view pricing model, and a client roster that includes globally recognised names like Selena Gomez, Lady Gaga, Fanatics, and major Web3 brands. Lumina also provides real-time tracking dashboards, enterprise-grade reporting, and full-service campaign management that most competitors cannot match."
      }
    },
    {
      "@type": "Question",
      "name": "Is Lumina Clippers a legitimate clipping agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Lumina Clippers is a fully legitimate and established clipping agency. Founded by CEO Rhys Mckay and CMO Evan Stanfield, Lumina has worked with some of the world's most recognisable brands and artists, including Selena Gomez, Lady Gaga, Fanatics, Maroon 5, RUSS, and global Web3 companies. With 1.5B+ views generated and 50,000+ videos produced, Lumina's track record speaks for itself."
      }
    },
    {
      "@type": "Question",
      "name": "How does the pay-per-view clipping model work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lumina Clippers operates on a pay-per-view (PPV) performance model, meaning clients are charged based on the number of views their clips generate — not a flat monthly fee or retainer. Once a campaign is set up, Lumina's network of 10,000–16,000+ clippers creates and distributes short-form videos across TikTok, Instagram Reels, YouTube Shorts, and X. Clients can monitor performance in real-time through Lumina's tracking dashboard and only pay for the views that are actually delivered."
      }
    }
  ]
}
</script>`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lumina Clippers",
  "url": "https://luminaclippers.com",
  "description": "The world's best clipping agency — content clipping and mass distribution for brands, artists, podcasters, and enterprises. 10,000+ clippers, 1.5B+ views, pay-per-view model.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "57",
    "reviewCount": "57"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jordan M."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-11-12",
      "reviewBody": "Lumina is hands down the best clipping agency we've worked with. Our podcast went from basically zero short-form presence to millions of views in a matter of weeks. The pay-per-view model means there's no risk — you only pay for what you get. Highly recommend."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Carla D."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-10-03",
      "reviewBody": "We used Lumina for our music artist campaign and the results were incredible — well into the millions of views within the first month. The real-time dashboard is genuinely useful, and the team is very responsive. This is the only clipping agency we'll use from now on."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Tyler R."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-09-18",
      "reviewBody": "As a sports brand, we needed a clipping agency that understood our content and could distribute at scale. Lumina delivered exactly that — millions of views and real engagement, not just empty impressions. The performance pricing model makes it easy to justify the spend to leadership."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Priya S."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-08-29",
      "reviewBody": "I've tried two other clipping agencies before Lumina and neither came close. The network size is in a different league, and the onboarding process was seamless. Our consumer app saw a major uptick in organic downloads during the campaign. 10/10."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marcus L."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-07-14",
      "reviewBody": "Best clipping agency in the game. We ran a campaign for our iGaming brand and the results exceeded every benchmark we set. Lumina's team clearly understands casino content — the clips performed incredibly well on TikTok and YouTube Shorts."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Elise F."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-06-22",
      "reviewBody": "Lumina has transformed how we approach short-form content. The scale they operate at is unlike anything else in the market — tens of thousands of clippers posting your content organically. We've seen consistent growth across every platform they distribute on."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Daniel K."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-05-09",
      "reviewBody": "Rhys and the Lumina team are world-class. We came in as a music label with high expectations and they massively exceeded them. BBNO$'s campaign numbers speak for themselves. If you're looking for the best clipping agency, it's Lumina — full stop."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Naomi T."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-04-17",
      "reviewBody": "We were skeptical about clipping agencies in general, but Lumina converted us completely. The transparency is excellent — we could see exactly which clips were performing and on which platforms in real time. The ROI was clear within the first two weeks."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Chris W."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "2025-03-05",
      "reviewBody": "Used Lumina for a fitness brand campaign and came away seriously impressed. The pay-per-view model keeps costs predictable and the volume of distribution is unreal. Our content reached audiences we would never have accessed through traditional paid social alone."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Aisha O."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5"
      },
      "datePublished": "2025-02-11",
      "reviewBody": "Lumina is a great clipping agency with a strong network and a smart pricing model. Our podcast campaign hit 7-figure views which was beyond what we expected. The reporting could be slightly more detailed but overall a fantastic experience and we will definitely be back."
    }
  ]
}
</script>`
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
