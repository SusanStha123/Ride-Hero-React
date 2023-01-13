/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6C63FF',
        'back': '#111827',
        'danger': '#f50057',
        'secondary': '#fafafa',
        'black': '#2e2e2e',
        'white': '#ffff',
      }
    },
  },
  plugins: [],
}
