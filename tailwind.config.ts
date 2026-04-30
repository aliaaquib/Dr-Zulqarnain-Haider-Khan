import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#111111",
        accent: "#6F8A7A",
        accentSoft: "#E5ECE7",
        accentBlue: "#7A90A4"
      }
    }
  },
  plugins: []
};

export default config;
