/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
