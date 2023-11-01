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
        'tertiary': '#f2eded',
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
          "@apply rounded-xl": {}
        },

        ".transition": {
          "@apply transition-all duration-200": {}
        },

        ".center": {
          "@apply flex justify-center items-center": {}
        },

        ".card-primary": {
          "@apply bg-primary round p-4": {}
        },

        ".card-secondary": {
          "@apply bg-secondary round p-4 placeholder-primary": {}
        },

        ".card": {
          "@apply bg-tertiary round p-4 placeholder-primary": {}
        },

        ".title": {
          "@apply text-lg font-semibold": {}
        },

        ".title": {
          "@apply text-lg font-semibold": {}
        },

        ".button-primary": {
          "@apply !py-2 card-primary outline-none text-background": {}
        },

        ".button-secondary": {
          "@apply !py-2 card-secondary outline-none": {}
        },

        ".button": {
          "@apply !py-2 card outline-none": {}
        },
      })
    }
  ],
}

