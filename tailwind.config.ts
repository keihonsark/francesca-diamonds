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
        background: '#FDFBF7',
        foreground: '#1A1A1A',
        muted: '#8C8578',
        accent: '#C4A265',
        hover: '#B08D7E',
        card: '#F5F0EA',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        questrial: ['Questrial', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
