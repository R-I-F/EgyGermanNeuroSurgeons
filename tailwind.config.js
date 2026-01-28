/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        medical: {
          navy: '#0f2942',
          blue: '#1e4976',
          light: '#e8f0f7',
          gray: '#94a3b8',
        },
        accent: {
          gold: '#c9a227',
          'gold-light': '#e5c76b',
        },
      },
    },
  },
  plugins: [],
}
