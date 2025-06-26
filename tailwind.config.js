/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        inter: ['Inter', 'sans-serif'],
        Pmark: ['Permanent Marker', 'cursive']
      },
    },
  },
  plugins: [],
}