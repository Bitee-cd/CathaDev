/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color1:"#000000",
        color2:"#0C0C0C",
        background1:"#E3E3E3",
        background2:"#0C0C0C"
      },
      fontSize:{
        fontSize1:120,
        fontSize2:65,
        fontSize3:25,
        
      }

    },
  },
  plugins: [],
};
