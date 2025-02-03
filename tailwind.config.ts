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
        secondary:"#f2b698",
        darkBg: "#323640",
      },
      backgroundImage: {
        "gradient-cover": "linear-gradient(90deg, #101922, rgba(50, 54, 64, 0.5) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
