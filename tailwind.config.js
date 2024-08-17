/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#DCC224",
        primaryFontColor: "#453302",
        sceondaryFontColor: "#CF9E1A",
        contactUsBtnColor: "#A67B05",
        primaryBgColor: "#FFFEE8",
        secondaryBgColor: " #FFF9EB",
        textWhite: "#FFFFFF",
        contentFontColor: " #919299",
        homeAboutUsBgColor: "#FFF1CC",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "hero-image": "url('../src/assets/Hero_Image.png')",
        "home-hero-image": "url('/src/assets/homeHeroSection.png')",
        writers_n_creators_bg_image:
          "url('/src/assets/writers_n_creators_bg.png')",
        home_services_bg_image: "url('/src/assets/services_bg.png')",
        why_choose_us_bg_image: "url('/src/assets/why_choose_us_bg.png')",
        writers_n_creators_bg:
          "url('/src/assets/writers_n_creators_about_us.png')",
      },
    },
  },
  plugins: [],
};
