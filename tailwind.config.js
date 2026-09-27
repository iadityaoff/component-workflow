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
        display: [
          "Instrument Serif",
          "Georgia",
          "serif",
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
        uf: {
          bg: "var(--uf-bg)",
          panel: "var(--uf-panel)",
          "panel-2": "var(--uf-panel-2)",
          border: "var(--uf-border)",
          "border-subtle": "var(--uf-border-subtle)",
          "border-hover": "var(--uf-border-hover)",
          text: "var(--uf-text)",
          "text-secondary": "var(--uf-text-secondary)",
          "text-muted": "var(--uf-text-muted)",
          accent: "var(--uf-accent)",
          "accent-hover": "var(--uf-accent-hover)",
        },
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
          950: "#0a0a0a",
        },
        surface: {
          1: "rgb(var(--surface-1) / <alpha-value>)",
          2: "rgb(var(--surface-2) / <alpha-value>)",
          3: "rgb(var(--surface-3) / <alpha-value>)",
        },
      },
      boxShadow: {
        card:      "0 1px 0 rgba(255,255,255,.04), 0 4px 10px -4px rgba(0,0,0,.3)",
        "card-lg": "0 1px 0 rgba(255,255,255,.04), 0 20px 40px -20px rgba(0,0,0,.5)",
        glass:     "inset 0 1px 0 rgba(255,255,255,.06), 0 10px 30px -10px rgba(0,0,0,.5)",
        glow:      "0 0 20px -5px rgba(10, 92, 255, 0.3)",
        "glow-lg": "0 0 30px -10px rgba(10, 92, 255, 0.5)",
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(at 20% 10%, rgba(10,92,255,.15), transparent 50%), radial-gradient(at 80% 0%, rgba(124,58,237,.12), transparent 50%), radial-gradient(at 50% 100%, rgba(14,165,233,.08), transparent 50%)",
        "dot-grid":
          "radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "18px 18px",
      },
      animation: {
        "fade-in":    "fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        shimmer:      "shimmer 1.5s ease infinite",
        "slide-up":   "slideUp 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slideDown 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
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
