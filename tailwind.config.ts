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
        darknavy: '#05081D',
        wagerGreen: '#41F7B5',
        wagerBlue: '#323A76',
        wagerYellow: '#FFCA40',
        wagerLilac: '#8D3DF2',       
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
