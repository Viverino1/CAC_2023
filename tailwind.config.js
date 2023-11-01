/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#250604',
        'background': '#faf5f5',
        'tertiary': '#F2EDED',
        'primary': '#af5550',
        'secondary': '#ecd6d5',
        'accent': '#da241b',
       }          
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".round": {
          "@apply rounded-xl border-2 border-secondary": {}
        },

        ".card": {
          "@apply bg-tertiary round p-4": {}
        },

        // ".card-primary": {
        //   "@apply bg-tertiary round p-4": {}
        // },
      })
    }
  ],
}

