/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./projects/**/*.{html,ts}",
    "./libs/**/*.{html,ts}",
    "./projects/cronos-ui/**/*.{html,ts}",
    "./projects/ui-test/**/*.{html,ts}",
    "./projects/cronos-ui/src/components/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '8xl': '1920px',
      }


    },
    colors:{
      primary: {
        light: 'var(--turing-color-primario)',
        DEFAULT: '#088A87',
        dark: '#2DFFE0',
      },
    }
  },
  plugins: [],
}

