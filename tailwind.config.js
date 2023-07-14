/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circularStdMed: "CircullarStdMedium",
        circularStdBook: "CircullarStdBook",
        circularStdBold: "CircullarStdBold",
      },
      colors: {
        "spotify-background-gray": "#121212",
        "spotify-background-light-gray-1": "#232323",
        "spotify-background-light-gray-2": "#2a2a2a",
        "spotify-background-light-gray-3": "#171717",
        "spotify-text-color": "#b3b3b3",
      },
    },
  },
  plugins: [],
};
