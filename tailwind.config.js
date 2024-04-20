/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BgHero': "url('./assets/images/web.p/hero-bg-img.webp')",
      },
      backgroundSize: {
        'bgsize': "100% 100%"
      },
      screens: {
        "xs": "425px"
      },
    },
  },
  plugins: [],
}

