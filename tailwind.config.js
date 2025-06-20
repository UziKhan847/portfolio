/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'fhd': '1920px',
        'qhd': '2560px',
        'uhd': '3840px',
        'mobile-tall': { raw: '(max-aspect-ratio: 1/1)' },
        'aspect-4/3': { raw: '(aspect-ratio: 4/3)' },
        'aspect-16/9': { raw: '(aspect-ratio: 16/9)' },
        'macbook-16/10': { raw: '(aspect-ratio: 16/10)' },
        'surface-3/2': { raw: '(aspect-ratio: 3/2)' },
      },
      fontSize: {
        '4x1': ['2.25rem', { lineHeight: '2.5rem' }],
        '8x1': ['6rem', { lineHeight: '1' }],
        '9x1': ['8rem', { lineHeight: '1' }],
        '10x1': ['9rem', { lineHeight: '1' }],
        '11x1': ['10rem', { lineHeight: '1' }],
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        oswald: ['OswaldVariable', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        firaCode: ['FiraCode', 'sans-serif'],
        notoSans: ['NotoSans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-black': 'linear-gradient(270deg, #191919, #252525)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    },
  },
  plugins: [],
}

