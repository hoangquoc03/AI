/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#01579b",
        "secondary-color": "#1565c0",
      },
      animation: {
        "spin-slow": " rotate 4s linear infinite",
      },
    },
  },
  plugins: [],
};
