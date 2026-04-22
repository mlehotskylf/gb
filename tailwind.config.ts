import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a1a",
          light: "#2d2d2d",
        },
        secondary: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
        },
        accent: {
          DEFAULT: "#c9a961",
          light: "#d4b876",
        },
        steel: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
