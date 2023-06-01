/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            'primary.900': '#14532D',
            'primary.800': '#1D6F3F',
            'primary.700': '#2A8A51',
            'primary.600': '#3DAF6C',
            'primary.500': '#22C55E',
            'primary.400': '#7EE6A1',
            'primary.300': '#A1F0B9',
            'primary.200': '#C4F8D2',
            'primary.100': '#E7FCEA',
            'primary.50': '#F7FEF6',
            'secondary': '#00D3AD',
            'secondary-light': '#1FFFC9',

        },
      fontSize: {
          '2xs': '.625rem',
          'xs': '.75rem',
          'sm': '.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.5rem',
          '2xl': '2rem',
          '3xl': '2.5rem',
      },
        fontWeight: {
            'light': 300,
            'normal': 400,
            'medium': 500,
            'semibold': 600,
            'bold': 700,
            'extrabold': 800,
            'black': 1000,
        }
    },
  },
  plugins: [],
}
