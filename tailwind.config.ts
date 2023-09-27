import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        "fontPoppins":"Poppins"
      },
      colors:{
        "first-color":"#323142",
        "second" : "#ACADB9",
        "third":"#3E3E3E",
        "fourth":"#6C5FBC"
      },
      backgroundColor:{
        "bg-color1":"#6C5FBC",
        "bg-color2":"#F5F5F5",
        "bg-button":"#6C5FBC",
        "bg-color3":"#8E97A6",
        "bg-color4":"#F9F9F9"
      },
    },
  },
  plugins: [],
}
export default config
