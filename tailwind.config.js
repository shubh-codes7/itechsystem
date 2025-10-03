/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // If you're using a src directory
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },
      colors: {
        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha>)",
        foreground: "hsl(var(--foreground) / <alpha>)",
        border: "hsl(var(--border) / <alpha>)",
        input: "hsl(var(--input) / <alpha>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha>)",
          foreground: "hsl(var(--card-foreground) / <alpha>)",
          border: "hsl(var(--card-border) / <alpha>)",
        },
        borderColor: {
          DEFAULT: "hsl(var(--border))", // 👈 this makes `border` work globally
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha>)",
          foreground: "hsl(var(--popover-foreground) / <alpha>)",
          border: "hsl(var(--popover-border) / <alpha>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha>)",
          foreground: "hsl(var(--primary-foreground) / <alpha>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha>)",
          foreground: "hsl(var(--muted-foreground) / <alpha>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha>)",
          foreground: "hsl(var(--accent-foreground) / <alpha>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha>)",
          "2": "hsl(var(--chart-2) / <alpha>)",
          "3": "hsl(var(--chart-3) / <alpha>)",
          "4": "hsl(var(--chart-4) / <alpha>)",
          "5": "hsl(var(--chart-5) / <alpha>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha>)",
          border: "hsl(var(--sidebar-border) / <alpha>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};