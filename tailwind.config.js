// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const _ = require('lodash')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        headind: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({addUtilities, theme, e}) {
      const placeholderFontWeight = _.map(theme('fontWeight'), (value, key) => {
        return {
          [`.${e(`placeholder-${key}`)}::placeholder`]: {
            'font-weight': value,
          },
        }
      })
      addUtilities(placeholderFontWeight)
    }),
  ],
}
