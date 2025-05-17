/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {  // <-- 'screens' key was missing
      'mobile': { 'min': '280px', 'max': '479px' },
      'tablet': { 'min': '480px', 'max': '823px' },
      'laptop': { 'min': '933px', 'max': '1479px' },
      'desktop': { 'min': '1480px', 'max': '2559px' },
      'large-desktop': { 'min': '2560px' }
    }
  },
  plugins: [],
}