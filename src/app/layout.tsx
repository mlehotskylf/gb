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
    { "@type": "City", name: "San Francisco" },
    { "@type": "City", name: "Oakland" },
    { "@type": "City", name: "San Jose" },
    { "@type": "City", name: "Berkeley" },
    { "@type": "City", name: "Palo Alto" },
    { "@type": "AdministrativeArea", name: "Marin County" },
    { "@type": "AdministrativeArea", name: "Bay Area" },
    { "@type": "AdministrativeArea", name: "Silicon Valley" },
    { "@type": "State", name: "California" },
  ],
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
  // TODO: Uncomment and replace with real URLs when Facebook/YouTube pages are live
  // sameAs: [
  //   "https://www.facebook.com/REPLACE_WITH_REAL_PAGE",
  //   "https://www.youtube.com/@REPLACE_WITH_REAL_CHANNEL",
  //   "https://g.co/kgs/REPLACE_WITH_GOOGLE_BUSINESS_ID",
  // ],
};

const rawGaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const gaMeasurementId = /^G-[A-Z0-9]+$/.test(rawGaId) ? rawGaId : undefined;

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
