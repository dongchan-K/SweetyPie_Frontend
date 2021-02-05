const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,html}', './public/index.html'],
<<<<<<< HEAD
<<<<<<< HEAD
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
=======
  presets: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
=======
  presets: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    extend: {
      fontSize: {
        '1.2rem': '1.2rem',
        '1.4rem': '1.4rem',
        '1.6rem': '1.6rem',
<<<<<<< HEAD
        '1.75rem': '1.75rem',
=======
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
        '1.8rem': '1.8rem',
        '2rem': '2rem',
        '2.2rem': '2.2rem',
        '2.4rem': '2.4rem',
        '2.6rem': '2.6rem',
        '3rem': '3rem',
<<<<<<< HEAD
        '3.2rem': '3.2rem',
        '3.6rem': '3.6rem',
        '4.8rem': '4.8rem',
        '6.4rem': '6.4rem',
        '9.5rem': '9.5rem'
=======
        '3.6rem': '3.6rem',
        '4.8rem': '4.8rem',
        '6.4rem': '6.4rem',
        '9.5rem': '9.5rem',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
      },
      colors: {
        airbnb: '#ff385c',
        airbnbHover: '#ff5473',
<<<<<<< HEAD
        searchBorder: 'rgba(118, 118, 118, 0.28)',
        searchBackground: 'rgb(255, 255, 255)',
        '#444': '#444',
        '#717171': '#717171',
        '#727272': 'rgb(72, 72, 72)',
        '#484848': '#484848',
        '#DDD': '#DDDDDD',
        '#EBEBEB': '#EBEBEB',
        '#f7f7f7': '#f7f7f7',
        '#rgb235': 'rgb(235, 235, 235)',
        '#008489': '#008489',
        orange: 'rgb(255, 175, 15)',
        '#b0b0b0': '#b0b0b0',
        '#D70466': '#D70466',
        modal: 'rgba(62, 60, 70, 0.5)'
      },
      boxShadow: {
        before: 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
        after: 'rgba(0, 0, 0, 0.2) 0px 6px 20px',
        input: 'rgb(176, 176, 176) 0px 0px 0px 1px inset'
      },
      borderRadius: {
        '50%': '50%'
      },
      spacing: {
        '10%': '10%',
        '45%': '45%',
        '0.4rem': '0.4rem',
        '0.8rem': '0.8rem',
        '1.2rem': '1.2rem',
        '1.3rem': '1.3rem',
        '1.4rem': '1.4rem',
        '1.6rem': '1.6rem',
        '1.8rem': '1.8rem',
        '2rem': '2rem',
        '2.4rem': '2.4rem',
        '2.6rem': '2.6rem',
        '3rem': '3rem',
        '3.2rem': '3.2rem',
        '3.5rem': '3.5rem',
        '3.6rem': '3.6rem',
        '4.5rem': '4.5rem',
        '4.8rem': '4.8rem',
        '5rem': '5rem',
        '5.5rem': '5.5rem',
        '5.6rem': '5.6rem',
        '6rem': '6rem',
        '6.4rem': '6.4rem',
        '6.5rem': '6.5rem',
        '7rem': '7rem',
        '8.5rem': '8.5rem',
        '9.5rem': '9.5rem',
        '11rem': '11rem',
        '11.2rem': '11.2rem',
        '14rem': '14rem',
        '14.2rem': '14.2rem',
        '14.5rem': '14.5rem',
        '15rem': '15rem',
        '17.3rem': '17.3rem',
        '17.4rem': '17.4rem',
        '17.5rem': '17.5rem',
        '18rem': '18rem',
        '18.1rem': '18.1rem',
        '18.5rem': '18.5rem',
        '19.2rem': '19.2rem',
        '19.4rem': '19.4rem',
        '21.4rem': '21.4rem',
        '22rem': '22rem',
        '22.8rem': '22.8rem',
        '24rem': '24rem',
        '25rem': '25rem',
        '27.4rem': '27.4rem',
        '27.5rem': '27.5rem',
        '30.8rem': '30.8rem',
        '32.4rem': '32.4rem',
        '20rem': '20rem',
        '27rem': '27rem',
        '28rem': '28rem',
        '32rem': '32rem',
        '33rem': '33rem',
        '34rem': '34rem',
        '36rem': '36rem',
        '37.2rem': '37.2rem',
        '38rem': '38rem',
        '38.8rem': '38.8rem',
        '43rem': '43rem',
        '44rem': '44rem',
        '48rem': '48rem',
        '48.6rem': '48.6rem',
        '54rem': '54rem',
        '56rem': '56rem',
        '56.4rem': '56.4rem',
        '66rem': '66rem',
        '70rem': '70rem',
        '84rem': '84rem',
        '85rem': '85rem',
        '86.4rem': '86.4rem',
        '111rem': '111rem'
      },
      minHeight: {
        '75rem': '75rem'
      },
      maxWidth: {
        1080: '10.8rem'
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor')
      })
=======
        '#222': '#222222',
        '#717171': '#717171',
      },
      spacing: {
        '0.4rem': '0.4rem',
        '0.8rem': '0.8rem',
        '1.2rem': '1.2rem',
        '1.4rem': '1.4rem',
        '1.6rem': '1.6rem',
        '2.4rem': '2.4rem',
        '2.6rem': '2.6rem',
        '4.5rem': '4.5rem',
        '4.8rem': '4.8rem',
        '5.6rem': '5.6rem',
        '9.5rem': '9.5rem',
        '11.2rem': '11.2rem',
        '14.2rem': '14.2rem',
        '19.2rem': '19.2rem',
        '19.4rem': '19.4rem',
        '20rem': '20rem',
        '21.4rem': '21.4rem',
        '22.8rem': '22.8rem',
        '27.4rem': '27.4rem',
        '30.8rem': '30.8rem',
        '32.4rem': '32.4rem',
        '37.2rem': '37.2rem',
        '38rem': '38rem',
        '38.8rem': '38.8rem',
        '48.6rem': '48.6rem',
        '56.4rem': '56.4rem',
        '68.8rem': '68.8rem',
        '111rem': '111rem',
      },
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
<<<<<<< HEAD
      '2xl': '1536px'
=======
      '2xl': '1536px',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
<<<<<<< HEAD

=======
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
<<<<<<< HEAD
      pink: colors.pink
=======
      pink: colors.pink,
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
<<<<<<< HEAD
      96: '24rem'
=======
      96: '24rem',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
<<<<<<< HEAD
      bounce: 'bounce 1s infinite'
=======
      bounce: 'bounce 1s infinite',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    backgroundColor: theme => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr':
        'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br':
        'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl':
        'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
<<<<<<< HEAD
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
=======
      'gradient-to-tl':
        'linear-gradient(to top left, var(--tw-gradient-stops))',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    backgroundOpacity: theme => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
<<<<<<< HEAD
      top: 'top'
=======
      top: 'top',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
<<<<<<< HEAD
      contain: 'contain'
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor')
=======
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    borderOpacity: theme => theme('opacity'),
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
<<<<<<< HEAD
      full: '9999px'
=======
      full: '9999px',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
<<<<<<< HEAD
      8: '8px'
=======
      8: '8px',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
<<<<<<< HEAD
      none: 'none'
=======
      none: 'none',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
<<<<<<< HEAD
      'not-allowed': 'not-allowed'
=======
      'not-allowed': 'not-allowed',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    divideColor: theme => theme('borderColor'),
    divideOpacity: theme => theme('borderOpacity'),
    divideWidth: theme => theme('borderWidth'),
    fill: { current: 'currentColor' },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
<<<<<<< HEAD
      none: 'none'
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1'
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1'
=======
      none: 'none',
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
<<<<<<< HEAD
        '"Noto Color Emoji"'
=======
        '"Noto Color Emoji"',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
<<<<<<< HEAD
        'serif'
=======
        'serif',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
<<<<<<< HEAD
        'monospace'
      ]
=======
        'monospace',
      ],
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
<<<<<<< HEAD
      '9xl': ['8rem', { lineHeight: '1' }]
=======
      '9xl': ['8rem', { lineHeight: '1' }],
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
<<<<<<< HEAD
      black: '900'
=======
      black: '900',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gap: theme => theme('spacing'),
    gradientColorStops: theme => theme('colors'),
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
<<<<<<< HEAD
      fr: 'minmax(0, 1fr)'
=======
      fr: 'minmax(0, 1fr)',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
<<<<<<< HEAD
      fr: 'minmax(0, 1fr)'
=======
      fr: 'minmax(0, 1fr)',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
<<<<<<< HEAD
      'span-full': '1 / -1'
=======
      'span-full': '1 / -1',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
<<<<<<< HEAD
      13: '13'
=======
      13: '13',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
<<<<<<< HEAD
      13: '13'
=======
      13: '13',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
<<<<<<< HEAD
      'span-full': '1 / -1'
=======
      'span-full': '1 / -1',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
<<<<<<< HEAD
      7: '7'
=======
      7: '7',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
<<<<<<< HEAD
      7: '7'
=======
      7: '7',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
<<<<<<< HEAD
      'top-left': 'top left'
=======
      'top-left': 'top left',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
<<<<<<< HEAD
      12: 'repeat(12, minmax(0, 1fr))'
=======
      12: 'repeat(12, minmax(0, 1fr))',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
<<<<<<< HEAD
      6: 'repeat(6, minmax(0, 1fr))'
=======
      6: 'repeat(6, minmax(0, 1fr))',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
<<<<<<< HEAD
      screen: '100vh'
=======
      screen: '100vh',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    inset: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
<<<<<<< HEAD
      '-full': '-100%'
=======
      '-full': '-100%',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    keyframes: {
      spin: {
        to: {
<<<<<<< HEAD
          transform: 'rotate(360deg)'
        }
=======
          transform: 'rotate(360deg)',
        },
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
<<<<<<< HEAD
          opacity: '0'
        }
      },
      pulse: {
        '50%': {
          opacity: '.5'
        }
=======
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
<<<<<<< HEAD
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
        }
      }
=======
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
<<<<<<< HEAD
      widest: '0.1em'
=======
      widest: '0.1em',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
<<<<<<< HEAD
      10: '2.5rem'
=======
      10: '2.5rem',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
<<<<<<< HEAD
      decimal: 'decimal'
=======
      decimal: 'decimal',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
<<<<<<< HEAD
      ...negative(theme('spacing'))
=======
      ...negative(theme('spacing')),
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    maxHeight: theme => ({
      ...theme('spacing'),
      full: '100%',
<<<<<<< HEAD
      screen: '100vh'
=======
      screen: '100vh',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
<<<<<<< HEAD
      ...breakpoints(theme('screens'))
=======
      ...breakpoints(theme('screens')),
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    minHeight: {
      0: '0px',
      full: '100%',
<<<<<<< HEAD
      screen: '100vh'
=======
      screen: '100vh',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
<<<<<<< HEAD
      max: 'max-content'
=======
      max: 'max-content',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
<<<<<<< HEAD
      top: 'top'
=======
      top: 'top',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
<<<<<<< HEAD
      100: '1'
=======
      100: '1',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
<<<<<<< HEAD
      12: '12'
=======
      12: '12',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    outline: {
      none: ['2px solid transparent', '2px'],
      white: ['2px dotted white', '2px'],
<<<<<<< HEAD
      black: ['2px dotted black', '2px']
=======
      black: ['2px dotted black', '2px'],
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    placeholderOpacity: theme => theme('opacity'),
    ringColor: theme => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
<<<<<<< HEAD
      ...theme('colors')
=======
      ...theme('colors'),
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    ringOffsetColor: theme => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
<<<<<<< HEAD
      8: '8px'
    },
    ringOpacity: theme => ({
      DEFAULT: '0.5',
      ...theme('opacity')
=======
      8: '8px',
    },
    ringOpacity: theme => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
<<<<<<< HEAD
      8: '8px'
=======
      8: '8px',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
<<<<<<< HEAD
      180: '180deg'
=======
      180: '180deg',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
<<<<<<< HEAD
      150: '1.5'
=======
      150: '1.5',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
<<<<<<< HEAD
      12: '12deg'
    },
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    stroke: {
      current: 'currentColor'
=======
      12: '12deg',
    },
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    stroke: {
      current: 'currentColor',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    strokeWidth: {
      0: '0',
      1: '1',
<<<<<<< HEAD
      2: '2'
=======
      2: '2',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    textColor: theme => theme('colors'),
    textOpacity: theme => theme('opacity'),
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
<<<<<<< HEAD
      1000: '1000ms'
=======
      1000: '1000ms',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
<<<<<<< HEAD
      1000: '1000ms'
=======
      1000: '1000ms',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
<<<<<<< HEAD
      transform: 'transform'
=======
      transform: 'transform',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
<<<<<<< HEAD
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
=======
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
<<<<<<< HEAD
      '-full': '-100%'
=======
      '-full': '-100%',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
<<<<<<< HEAD
      max: 'max-content'
=======
      max: 'max-content',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
<<<<<<< HEAD
      50: '50'
    }
>>>>>>> 199b1195dac238c635d16e89c4b58431a6ad5a8c
=======
      50: '50',
    },
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
<<<<<<< HEAD
    'disabled'
  ],
  variants: {
<<<<<<< HEAD
    extend: {}
=======
=======
    'disabled',
  ],
  variants: {
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    accessibility: ['responsive', 'focus-within', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    animation: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
<<<<<<< HEAD
      'focus'
=======
      'focus',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    ],
    backgroundImage: ['responsive'],
    backgroundOpacity: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
<<<<<<< HEAD
      'focus'
=======
      'focus',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    ],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
<<<<<<< HEAD
      'focus'
=======
      'focus',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    ],
    borderOpacity: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
<<<<<<< HEAD
      'focus'
=======
      'focus',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    ],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    boxSizing: ['responsive'],
    clear: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive', 'dark'],
    divideOpacity: ['responsive'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontWeight: ['responsive'],
    gap: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    gridAutoColumns: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridAutoRows: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridColumnStart: ['responsive'],
    gridRow: ['responsive'],
    gridRowEnd: ['responsive'],
    gridRowStart: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus-within', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'dark', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    ringOpacity: ['responsive', 'focus-within', 'focus'],
    ringWidth: ['responsive', 'focus-within', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
<<<<<<< HEAD
      'focus'
=======
      'focus',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    ],
    textDecoration: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
<<<<<<< HEAD
      'focus'
=======
      'focus',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    ],
    textOpacity: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
<<<<<<< HEAD
      'focus'
=======
      'focus',
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
    ],
    textOverflow: ['responsive'],
    textTransform: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    transitionDelay: ['responsive'],
    transitionDuration: ['responsive'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    translate: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
<<<<<<< HEAD
    zIndex: ['responsive', 'focus-within', 'focus']
>>>>>>> 199b1195dac238c635d16e89c4b58431a6ad5a8c
=======
    zIndex: ['responsive', 'focus-within', 'focus'],
>>>>>>> 254186d0f8acff228844b52ac016b61043b37f0a
  },
  plugins: [],
};
