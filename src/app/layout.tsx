import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { serviceMetaMap } from "@/lib/service-metadata";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-raleway",
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalbunkers.us";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  authors: [{ name: "Global Bunkers US" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Global Bunkers US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Global Bunkers US",
  url: BASE_URL,
  telephone: "+14159908051",
  email: "contact@globalbunkers.us",
  foundingDate: "1988",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1592 Union St. Ste 216",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94123",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7985,
    longitude: -122.4265,
  },
  openingHoursSpecification: [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
  ].map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day,
    opens: "00:00",
    closes: "23:59",
  })),
  areaServed: [
    "San Francisco",
    "Oakland",
    "San Jose",
    "Berkeley",
    "Marin County",
    "Palo Alto",
    "Silicon Valley",
    "Bay Area",
    "California",
  ].map((name) => ({ "@type": "City", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security Solutions",
    itemListElement: Object.entries(serviceMetaMap).map(([, meta]) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: meta.title.split("|")[0].trim(),
        url: meta.canonical,
        description: meta.description,
      },
    })),
  },
  // sameAs: add social/profile URLs here when available, e.g.:
  // sameAs: [
  //   "https://www.facebook.com/globalbunkersus",
  //   "https://www.youtube.com/@globalbunkersus",
  //   "https://g.co/kgs/...",
  // ],
};

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
