import type { Metadata } from "next";
import "./globals.css";
import config from "@/config";

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  keywords: config.metaKeywords,
  metadataBase: new URL(config.siteUrl),
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: config.siteUrl,
    siteName: config.businessName,
    images: [
      {
        url: config.ogImage,
        width: 1200,
        height: 630,
        alt: `${config.businessName} – ${config.tagline}`,
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.metaTitle,
    description: config.metaDescription,
    images: [config.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: config.businessName,
  description: config.metaDescription,
  url: config.siteUrl,
  image: `${config.siteUrl}${config.ogImage}`,
  priceRange: `From ${config.startingPrice}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "English",
  },
  sameAs: [
    `https://www.facebook.com/${config.facebookPageUsername}`,
  ],
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "ZAR",
    description: "Affordable refurbished ready-to-use PCs starting from R999",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
