/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BgHero': "url('./assets/images/png/hero-bg-img.png')",
      },
      backgroundSize: {
        'bgsize': "100% 100%"
      },
    },
  },
  plugins: [],
}

