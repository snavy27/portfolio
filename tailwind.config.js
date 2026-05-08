/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfaf3",
          100: "#faf6ee",
          200: "#f3ecdc",
          300: "#e8dcc1",
          400: "#d8c499",
        },
        ink: {
          DEFAULT: "#1a1614",
          soft: "#3a332e",
          muted: "#6b5f56",
          line: "#cdbfa8",
        },
        terracotta: {
          DEFAULT: "#d4654a",
          dark: "#b04e35",
          soft: "#e89279",
          tint: "#f6d8cb",
        },
        forest: {
          DEFAULT: "#3a5a40",
          dark: "#2a4530",
          soft: "#6b8f74",
          tint: "#d8e2da",
        },
        gold: {
          DEFAULT: "#c9a96e",
          dark: "#a78848",
          tint: "#ecdfc4",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        editorial: "0 2px 0 0 #1a1614, 6px 8px 0 0 #1a1614",
        "editorial-sm": "0 1px 0 0 #1a1614, 3px 4px 0 0 #1a1614",
        soft: "0 30px 60px -30px rgba(26, 22, 20, 0.25)",
        ring: "inset 0 0 0 1px #1a1614",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.10 0 0 0 0 0.08 0 0 0 0 0.07 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        wiggle: "wiggle 3.6s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
