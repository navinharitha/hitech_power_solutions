module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE2626",
        secondary: "#221F1E",
        primaryred:"#ED2726",
      },
      fontFamily: {
        Hind: ["Hind", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
       },
      fontSize: {
        'sizeone': '1rem',
        'lgheading': '1.4rem',
        'blackheading':'2.6rem',
        'smallheading':'1.3rem',
        'bodyfont':'1.125rem',
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        bold: 700,
        extrabold:800,
      },
    },
  },
  plugins: [],
};
