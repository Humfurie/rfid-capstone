/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "powderblue-tints80%": "#ee9b55",
        "powderblue-shades10%": "#8c8585",
        "powderblue-shades20%":"#89afb6",
        "powderblue-shades50%": "#566e72",

        "light-grey": "#F2f2f2",
        "theme-blue": "#0A1578",
        
        "teal-blue": "#388087",
        "moonstone-blue": "#6fb3b8",
        "powder-blue": "#badfe7",
        "magic-mint": "#c2edce",
        "white-smoke": "#f6f6f2"
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}
