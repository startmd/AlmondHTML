/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Almond Brand Colors
        almond: {
          50: '#FDFBF7',
          100: '#F5F0E6',
          200: '#E6DCC3',
        },
        
        // Primary (Green)
        primary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#2F855A',
          600: '#276749',
          700: '#22543D',
          800: '#1C4532',
          900: '#173828',
        },
        
        // Surface & Text
        surface: '#FFFFFF',
        text: {
          main: '#1E293B',
          muted: '#64748B',
        },
        
        // Secondary Navbar (Dark Brown)
        brown: {
          800: '#4A3728',
          850: '#3D2E22',
          900: '#2F241B',
        },
        
        // Cream Text (for dark navbar)
        cream: {
          50: '#FDFBF7',
          100: '#F5F0E6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
