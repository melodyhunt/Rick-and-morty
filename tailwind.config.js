/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Syne Mono",
        secundary: "Rubik Wet Paint",
      },
      colors: {
        primario: "#00b5cc",
        secundario: "#b2df28",
        fondo: "#383837",
        card: "#5d5e61",
      },
    },
  },
  plugins: [],
};
