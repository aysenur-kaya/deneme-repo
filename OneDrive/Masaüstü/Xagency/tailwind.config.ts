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
        neon: {
          DEFAULT: "#39FF14",
          dim: "#2ECC71",
          glow: "rgba(57, 255, 20, 0.4)",
          muted: "rgba(57, 255, 20, 0.15)",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          100: "#111111",
          200: "#1A1A1A",
          300: "#252525",
          400: "#333333",
        },
        soft: {
          gray: "#A0A0A0",
          light: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-neon":
          "linear-gradient(rgba(57,255,20,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.03) 1px, transparent 1px)",
        "gradient-radial-neon":
          "radial-gradient(ellipse at center, rgba(57,255,20,0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.1)",
        "neon-lg":
          "0 0 30px rgba(57, 255, 20, 0.4), 0 0 60px rgba(57, 255, 20, 0.15)",
        "neon-sm": "0 0 10px rgba(57, 255, 20, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 3s linear infinite",
        "scan-line": "scanLine 4s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        pulseNeon: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(57,255,20,0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(57,255,20,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
