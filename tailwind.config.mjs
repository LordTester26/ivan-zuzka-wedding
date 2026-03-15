export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    screens: {

      'short': { 'raw': '(max-height: 800px)' }

    }
  },
  plugins: [require("@tailwindcss/typography")]
}
