import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        green:{
          200:'#AFC8AD',
          //400:'#88AB8E',
          400:'#bcb095',
          600:'#777C74', 
          800:'#7c868c' 
        },
        neutral:{
          200:'#E5CDAF',
          400:'#EDCDC2',

          
        },
        stone:{
          100:'#f8ece8',
          200:'#f3ddd5',
          400:'#EDCDC2'
          
        },
        red:{
          300:'#EDB4B8',
          700:'#ad354b',
          900:'#73283A'
        },
        grey:{
          200:'#c0cad6'
        },
        yellow:{
          200:'#e5ceaf', 
          400:'#EEE7DA',
          950:'#30261b'
        },
        nomad:{
          300:'#b3b1a3'
        }

      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
