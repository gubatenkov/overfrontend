/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.rose.400')}`,
              '&:hover': {
                borderBottomWidth: '2px'
              }
            },
            mark: {
              padding: '0 0.125rem 0',
              background: theme('colors.rose.400'),
              borderRadius: theme('borderRadius.sm')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
