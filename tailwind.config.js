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

      keyframes: { 
      appear: {
        "0%": {
          opacity: '0',
          scale: '0.5',
        },
        "100%": {
          opacity: '1',
          scale: '1',
        }
      },
     
    },
    animation: {
      appear: 'appear  linear',
       animationTimeline: 'in-view()',
     },
  },
  plugins: [],
}

