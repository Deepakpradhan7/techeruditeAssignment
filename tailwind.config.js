/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#232323",  //primary text color
        "secondary": "#FFFFFF",  //secondary text color
        "tertiary" : "#606060",  // tertiary text color
        "orange"   : "#FF6400"    //stroke color
      }
    },
  },
  plugins: [],
}

