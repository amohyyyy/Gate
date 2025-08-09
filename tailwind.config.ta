import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        barcaBlue: "#004D98",
        barcaClaret: "#A50044",
        barcaAccent: "#FDB927",
        muted: "#6b7280"
      },
      transitionTimingFunction: {
        morph: "cubic-bezier(.22,.8,.32,1)"
      },
      keyframes: {
        morph: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.95" },
          "50%": { transform: "translateY(-6px) scale(1.02)", opacity: "1" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "0.95" }
        }
      },
      animation: {
        morph: "morph 8s infinite"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
};

export default config;
