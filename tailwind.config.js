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
        "spotify-background-light-gray-4": "#4d4d4d",
        "spotify-background-light-gray-5": "#a7a7a7",
        "spotify-text-color": "#b3b3b3",
        "spotify-green": "#1cc558",
        "spotify-white": "#fbfbfb",
      },
    },
  },
  plugins: [],
};
