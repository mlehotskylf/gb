const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.globalbunkers.us";

export interface ServiceMeta {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export const serviceMetaMap: Record<string, ServiceMeta> = {
  bunkers: {
    title: "Bunkers & Bomb Shelters | San Francisco Bay Area",
    description:
      "Custom underground bunkers and bomb shelters built to withstand extreme conditions. Serving San Francisco and all of California since 1988. Free consultation.",
    keywords: [
      "bunkers San Francisco",
      "bomb shelters Bay Area",
      "underground bunker California",
      "custom bunker installation SF",
      "survival shelter Bay Area",
    ],
    canonical: `${BASE_URL}/services/bunkers`,
  },
  "panic-safe-rooms": {
    title: "Panic Rooms & Safe Rooms | Bay Area Installation",
    description:
      "Custom panic rooms and safe rooms seamlessly integrated into Bay Area homes and businesses. Reinforced walls, air filtration & comms. Free consultation.",
    keywords: [
      "panic rooms San Francisco",
      "safe rooms Bay Area",
      "safe room installation California",
      "panic room contractor SF",
      "secure room Bay Area",
    ],
    canonical: `${BASE_URL}/services/panic-safe-rooms`,
  },
  "bulletproof-glass": {
    title: "Bulletproof Glass Installation | Bay Area, California",
    description:
      "Military-grade bulletproof glass for windows, doors & partitions. Protecting Bay Area homes and businesses since 1988. California service. Free consultation.",
    keywords: [
      "bulletproof glass San Francisco",
      "ballistic glass Bay Area",
      "transparent armor California",
      "bulletproof windows SF",
      "security glass installation CA",
    ],
    canonical: `${BASE_URL}/services/bulletproof-glass`,
  },
  "bank-liquidation": {
    title: "Bank Vault Liquidation | Bay Area Security Equipment",
    description:
      "Acquire bank-grade vaults, safes & security equipment from decommissioned financial institutions. Serving San Francisco and the Bay Area. Free consultation.",
    keywords: [
      "bank vault liquidation San Francisco",
      "bank safe liquidation Bay Area",
      "used bank vaults California",
      "decommissioned bank equipment SF",
      "vault acquisition CA",
    ],
    canonical: `${BASE_URL}/services/bank-liquidation`,
  },
  safes: {
    title: "High-Security Safes | San Francisco Bay Area",
    description:
      "Compact personal safes to large vault systems for Bay Area homes and businesses. Expert installation and consultation in San Francisco, CA. Free consultation.",
    keywords: [
      "safes San Francisco",
      "high security safes Bay Area",
      "safe installation California",
      "vault systems SF",
      "gun safe Bay Area",
      "fireproof safe CA",
    ],
    canonical: `${BASE_URL}/services/safes`,
  },
};
