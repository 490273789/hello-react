/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-blue": "#79ece8",
        "c-shallow-blue": "#f5f2f9",
        "c-purple": "#8a64ba",
        "c-green": "#87d675",
        "c-shallow-yellow": "#f2f7f2",
        "c-yellow": "#f6ce4b",
        "c-red": "#e15156",
      },
    },
  },
  plugins: [],
};
