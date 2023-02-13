/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "powderblue-tints80%": "#eef8f9",
        "powderblue-shades10%": "#9ac5cc",
        "powderblue-shades20%":"#89afb6",
        "powderblue-shades50%": "#566e72",

        "light-grey": "#F2f2f2",
        "theme-blue": "#0A1578",
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
