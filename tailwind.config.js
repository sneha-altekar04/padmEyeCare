/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F9FA8",
        secondary: "#F36C21",
        light: "#F8FAFC",
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
};