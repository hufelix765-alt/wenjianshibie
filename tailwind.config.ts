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
        ink: "#1a2332",
        paper: "#f7f4ef",
        navy: "#1e3a5f",
        gold: "#c9a227",
        goldLight: "#e8d48b",
        plaintiff: "#2563eb",
        defendant: "#dc2626",
        third: "#64748b",
        appellant: "#7c3aed",
        muted: "#6b7280",
        card: "#ffffff",
      },
      fontFamily: {
        display: ["Noto Serif SC", "Georgia", "serif"],
        sans: ["system-ui", "PingFang SC", "Microsoft YaHei", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
