/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // If you want to add additional small breakpoints, you can’t use "extend" because the
    // small breakpoint would be added to the end of the breakpoint list, and breakpoints
    // need to be sorted from smallest to largest in order to work as expected with a
    // min-width breakpoint system.
    screens: {
      xs: "400px", // @media (min-width: 400px) { ... }
      ...defaultTheme.screens
    },

    extend: {
      colors: {
        "my-yellow": "#FFCD05",
        "my-yellow-dark": "#C69E00"
      }
    }
  },

  plugins: [require("@tailwindcss/forms")]
}
