// See https://tailwindcss.com/docs/configuration for details
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js'],
  plugins: [
    //require('tailwindcss-pseudo-elements'),
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant('hover_before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`hover_before${separator}${className}`)}:hover::before`;
        });
      });
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.empty-content': {
          content: "''",
        },
        '.scaleX-0': {
          transform: 'scale(0)',
        },
        '.scaleX-1': {
          transform: 'scale(1)',
          transition: 'transform 0.2s',
        },
      };

      addUtilities(contentUtilities, ['before', 'after', 'hover_before']);
    }),
  ],
  variants: {
    extend: {
      display: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover_before',
      ],
      inset: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover_before',
      ],
      position: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover_before',
      ],
      backgroundColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover_before',
      ],
      height: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        'hover_before',
      ],
    },
  },
  theme: {
    screens: {
      xxs: '229px',
      xs: '360px',
      ...screens,
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gcpr_green: {
          light: '#d8ed9e',
          DEFAULT: '#0cb02b',
          lime: '#8fd300',
        },
        matrix_green: {
          900: '#07140a',
          800: '#031908',
          700: '#0a2511',
          600: '#0f2e18',
          500: '#15361e',
          400: '#1a3f24',
          300: '#244f31',
          200: '#326643',
          100: '#376f49',
        },
        facebook: {
          blue: '#4267b2',
        },
        google: {
          blue: '#4086f4',
          green: '#31a952',
          yellow: '#fbbe00',
          red: '#eb4132',
        },
      },
      inset: {
        '-40': '-40px',
      },
      height: {
        132: '32rem',
        142: '42rem',
        152: '52rem',
      },
      minWidth: {
        249: '229px',
        360: '360px',
      },
    },
  },
};
