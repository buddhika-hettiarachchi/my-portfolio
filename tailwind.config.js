/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'letter-typing': 'type 4s steps(60, end)'
      },
      keyframes: {
        type: {
          '0%, 100%': { width: 0 }
        }
      }
    },
  },
  plugins: [],
}
