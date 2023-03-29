/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      grayscale: {
        100: "100%",
      },
      keyframes: {
        resume: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        resume: "wiggle 200ms ease-in-out",
      },
      backgroundImage: {
        bgMain: "url('../../public/assets/bg15.jpg')",
        bgEarth: "url('../../public/assets/earth.jpg')",
      },
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  plugins: [],
};
