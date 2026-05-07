import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f2",
          100: "#ffe4e6",
          400: "#f43f5e",
          600: "#b91c1c",
          700: "#991b1b",
          900: "#3f0d12"
        }
      }
    }
  },
  plugins: []
};

export default config;
