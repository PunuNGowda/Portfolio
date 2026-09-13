/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyfont: ["Inter", "system-ui", "sans-serif"],
        titleFont: ["'Space Grotesk'", "Inter", "sans-serif"],
      },
      colors: {
        ink: "#08090a",
        surface: "#121316",
        surface2: "#191a1e",
        bodyColor: "#121316",
        textColor: "rgba(255,255,255,0.85)",
        designColor: "#e9ff5a",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(233,255,90,0.45)",
        soft: "0 20px 60px -30px rgba(0,0,0,0.9)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
