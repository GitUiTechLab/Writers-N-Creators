/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#DCC224",
        primaryFontColor: "#453302",
        sceondaryFontColor: "##CF9E1A",
        contactUsBtnColor: "#A67B05",
        primaryBgColor: "#FFFEE8",
        secondaryBgColor: " #FFFEE8",
        textWhite: "#FFFFFF",
        contentFontColor: " #919299",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "hero-image": "url('../src/assets/Hero_Image.png')",
      },
    },
  },
  plugins: [],
};
