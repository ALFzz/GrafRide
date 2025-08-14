/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Dela Gothic One', 'sans-serif'],
        marksquad: ['Mark Squad', 'sans-serif'],
        ruberoid: ['Ruberoid', 'sans-serif'],
      },
      colors: {
        neonpink: '#F3236E',
        dark: '#171318',
        gre: '#514953'
      },
    },
  },
  plugins: []
}