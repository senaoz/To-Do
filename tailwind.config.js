module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blur': "url('/public/bg.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}