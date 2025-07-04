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
        gothic: "Dela Gothic One",
        marksquad: "Mark Squad",
        ruberoid: "Ruberoid",
      },

      textStrokeWidth: {
        DEFAULT: '0.1px',
        2: '2px',
        4: '4px',
      },
      textStrokeColor: {
        DEFAULT: '#000',
        white: '#fff',
        black: '#000',
      },
      colors: {
        neonpink: '#F3236E'
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const widths = theme('textStrokeWidth')
      const colors = theme('textStrokeColor')

      const strokeWidthUtilities = Object.entries(widths).map(([key, value]) => {
        return {
          [`.text-stroke-${e(key)}`]: {
            '-webkit-text-stroke-width': value,
          },
        }
      })

      const strokeColorUtilities = Object.entries(colors).map(([key, value]) => {
        return {
          [`.text-stroke-color-${e(key)}`]: {
            '-webkit-text-stroke-color': value,
          },
        }
      })

      addUtilities(strokeWidthUtilities)
      addUtilities(strokeColorUtilities)
    },
  ],
}