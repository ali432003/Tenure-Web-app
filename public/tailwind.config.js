/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      accentColor: ({ theme }) => ({
        ...theme('colors'),
        auto: 'auto',
      }),
      screens: {
        'phone': '428px',//4 collumns - stretch - margin 32 - gutter 8
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1440px',//8 columns - stretch - margin 32 - gutter 24
      },
      gridTemplateColumns: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(428px, 1fr))',
      },
      fontFamily: {
        'sans': ['Cera-Pro', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#DCF8EA',
          200: '#BAF2DB',
          300: '#8EDAC2',
          400: '#66B5A4',
          500: '#38857B',
          600: '#28726F',
          700: '#1C5C5F',
          800: '#11444D',
          900: '#0A333F',
        },
        secondary: {
          100: '#FEF9DE',
          200: '#FDF1BE',
          300: '#F9E59D',
          400: '#F3D883',
          500: '#EBC55B',
          600: '#CAA242',
          700: '#A9812D',
          800: '#88631D',
          900: '#704D11',
        },
        gray: {
          50: '#FFFFFF',
          100: '#DCEDF6',
          200: '#BBDAED',
          300: '#8AAEC9',
          400: '#5A7894',
          500: '#25384D',
        },
        accent: {
          100: '#FEF0E2',
          200: '#FEDDC6',
          300: '#FEC6A9',
          400: '#FEB094',
          500: '#FE8C71',
          600: '#DA6252',
          800: '#932427',
          900: '#791520',
        },
        success: {
          100: '#C7F8E8',
          500: '#018485',
          700: '#004E5F',
        },
        warning: {
          100: '#FFF6CC',
          500: '#FFB800',
          700: '#B77900',
        },
        danger: {
          100: '#FCE2DA',
          500: '#D24252',
          700: '#972144',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
