/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circularStdMed: "CircullarStdMedium",
        circularStdBook: "CircullarStdBook",
      },
      colors: {
        "spotify-background-gray": "#121212",
        "spotify-text-color": "#b3b3b3",
      },
    },
  },
  plugins: [],
};
