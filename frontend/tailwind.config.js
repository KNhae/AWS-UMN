/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aws': {
          'orange': '#FF9900',
          'orange-light': '#FFB84D',
          'orange-dark': '#EC7211',
          'squid': '#232F3E',
          'squid-light': '#37475A',
          'slate': '#1B2533',
        },
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#ffd9b3',
          300: '#ffb84d',
          400: '#ff9900',
          500: '#ff9900',
          600: '#ec7211',
          700: '#cc6200',
          800: '#995100',
          900: '#663400',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
