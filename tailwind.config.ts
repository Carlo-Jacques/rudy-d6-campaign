import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        patriot: {
          red: "#B31942",
          blue: "#0A3161",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;

