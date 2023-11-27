import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-green': '#05E51C',
        'dark-green': '#087613',
        'light-blue': '#5DFEF4',
        'dark-blue': '#004d5996'
      },
      fontFamily: {
        bowlbyone: ['Bowlby One', 'sans-serif'],
        nerkoone: ['Nerko One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
