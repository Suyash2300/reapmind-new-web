import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "rgb(26 105 253)",
          hover: "rgb(12 79 203)",
          foreground: "var(--primary-foreground)",
          light: "rgb(100 149 255)",
        },
        accent: {
          DEFAULT: "var(--color-accent-yellow)",
          soft: "var(--color-accent-yellow-soft)",
        },
        muted: "var(--color-text-muted)",
        secondary: "var(--color-text-secondary)",
        surface: {
          dark: "rgb(0 0 0)",
          header: "rgb(15 15 15)",
          elevated: "rgb(29 31 32)",
          warm: "var(--color-bg-warm)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      fontFamily: {
        sans: ["var(--font-app)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "var(--fs-xs)",
        sm: "var(--fs-sm)",
        para: "var(--fs-para)",
        base: "var(--fs-base)",
        md20: "var(--fs-md20)",
        md: "var(--fs-md)",
        subtitle: "var(--fs-subtitle)",
        lg: "var(--fs-lg)",
        h4: "var(--fs-h4)",
        h3: "var(--fs-h3)",
        h2: "var(--fs-h2)",
        h1: "var(--fs-h1)",
        "sp-title": "var(--fs-sp-title)",
      },
      spacing: {
        section: "var(--section-padding)",
        container: "var(--container-padding)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
