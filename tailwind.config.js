/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // asegúrate de incluir todos tus componentes
  ],
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
        fire: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(-4px) scale(1.05)', opacity: '0.8' },
        },
        ember: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(-6px) rotate(5deg)', opacity: '0.5' },
          '100%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        flicker: 'flicker 1s infinite',
        glow: 'glow 1s infinite alternate',
        fire: 'fire 1.2s infinite alternate',
        ember: 'ember 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
