/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        small: "340px",
        medium: "540px",
        large: "768px",
        largee: '870px',
        xxlarge: "988px",
        xlarge: "1180px" 
      },
  },
  plugins: [],
}

