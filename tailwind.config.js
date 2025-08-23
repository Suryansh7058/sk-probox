
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1740B6', dark: '#0F2C82', light: '#2F6FFF' },
        accent: '#FF7A1A',
      },
      boxShadow: { soft: '0 10px 25px rgba(0,0,0,0.08)' },
      borderRadius: { '2xl': '1rem' }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji']
    }
  },
  plugins: [],
}
