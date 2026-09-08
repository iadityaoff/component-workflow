/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        ink: {
          50:  "#f7f7f8",
          100: "#ececee",
          200: "#d9d9de",
          300: "#b9b9c1",
          400: "#8d8d97",
          500: "#6b6b75",
          600: "#4f4f57",
          700: "#3a3a40",
          800: "#222227",
          900: "#141418",
          950: "#0a0a0d",
        },
        /* ── Surface tokens (via CSS vars for theme switching) ── */
        surface: {
          1: "rgb(var(--surface-1) / <alpha-value>)",
          2: "rgb(var(--surface-2) / <alpha-value>)",
          3: "rgb(var(--surface-3) / <alpha-value>)",
        },
      },
      boxShadow: {
        card:      "0 1px 0 rgb(var(--ring) / .06), 0 4px 10px -4px rgb(var(--ring) / .12)",
        "card-lg": "0 1px 0 rgb(var(--ring) / .06), 0 20px 40px -20px rgb(var(--ring) / .25)",
        glass:     "inset 0 1px 0 rgba(255,255,255,.08), 0 10px 30px -10px rgba(0,0,0,.4)",
        glow:      "0 0 20px -5px rgba(139, 92, 246, 0.3)",
        "glow-lg": "0 0 30px -10px rgba(139, 92, 246, 0.5)",
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(at 20% 10%, rgba(139,92,246,.18), transparent 50%), radial-gradient(at 80% 0%, rgba(236,72,153,.14), transparent 50%), radial-gradient(at 50% 100%, rgba(14,165,233,.12), transparent 50%)",
        "gradient-aurora":
          "conic-gradient(from 210deg at 50% 50%, #7c3aed, #0ea5e9, #22c55e, #7c3aed)",
        "dot-grid":
          "radial-gradient(rgb(var(--dot) / .35) 1px, transparent 1px)",
        "gradient-featured":
          "linear-gradient(120deg, #d946ef 0%, #f43f5e 50%, #f59e0b 100%)",
      },
      backgroundSize: {
        "dot-grid": "18px 18px",
      },
      animation: {
        "fade-in":    "fadeIn 180ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        shimmer:      "shimmer 2.2s linear infinite",
        "slide-up":   "slideUp 200ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        "slide-down": "slideDown 200ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
