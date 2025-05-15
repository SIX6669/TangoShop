/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // 👈 Incluye todo dentro de src
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

