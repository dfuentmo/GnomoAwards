/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 4px #ffbb33, 0 0 8px #ff5500' },
          '50%': { textShadow: '0 0 8px #ffdd66, 0 0 16px #ff8800' },
        },
      },
      animation: {
        flicker: 'flicker 1s infinite',
        glow: 'glow 1s infinite alternate',
      },
    },
  },
  plugins: [],
}
