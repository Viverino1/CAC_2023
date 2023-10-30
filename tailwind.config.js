/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#000000"
        },

        background: {
          DEFAULT: "#ffffff"
        }
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".card": {
          "@apply ": {}
        },
      })
    }
  ],
}

