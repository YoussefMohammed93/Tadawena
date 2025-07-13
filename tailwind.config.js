/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Open Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        sakkal: ["Sakkal Majalla", "serif"],
      },
      colors: {
        primary: {
          50: "#f0f0ff",
          100: "#e6e6ff",
          200: "#d1d1ff",
          300: "#b3b3ff",
          400: "#8080ff",
          500: "#4d4dff",
          600: "#0B0070",
          700: "#090060",
          800: "#070050",
          900: "#050040",
          950: "#030020",
        },
        netural: {
          800: "#5A5858",
        },
      },
    },
  },
  plugins: [],
};
