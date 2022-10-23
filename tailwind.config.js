/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "letter-typing": "type 4s steps(60, end)",
      },
      keyframes: {
        type: {
          "0%, 100%": { width: 0 },
        },
      },
      colors: {
        primary: "#0000ff",
        secondary: "#f3f7fd",
        "default-text": "ffffff",
        "primary-text": "#0A2540",
        "secondary-text": "#425466",
        "ternary-text": "#fb8c00",
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
