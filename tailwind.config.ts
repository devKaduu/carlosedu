import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/template/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101111",
        navbar: "#1C1C1C",
        bgButtonNavbar: "#292929",
        black: "#000",
      },
      fontSize: {
        title: "2rem",
      },
      lineHeight: {
        title: "3.513rem",
      },
      borderRadius: {
        button: "2.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
