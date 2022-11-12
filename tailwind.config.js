/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        11: "4rem",
      },
      width: {
        9: "95%",
      },
    },
  },
  plugins: [],
};
