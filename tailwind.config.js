/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        white: "#E3E3E3",
        dark: "#0C0C0C",
        color1: "#000000",
        pri: "#E3E3E3",
        sec: "#0C0C0C",
      },
      fontSize: {
        fontSize1: 120,
        fontSize2: 65,
        fontSize3: 25,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark", "active"],
      borderColor: ["dark"],
      textColor: ["dark", "hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
