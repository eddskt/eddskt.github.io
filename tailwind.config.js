/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  silverMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    './src/components/**/*.{html,js}',
    './src/container/**/*.{html,js}',
    './src/layout/**/*.{html,js}',
    './src/redux/**/*.{html,js}',
    './src/routes/**/*.{html,js}'],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        bluePrimary: '#0152e9',
        blueDark: '#004da3',
        blueLight: '#508fd9',
        blueSecondary: '#d6e7f7',
        redGrad1: '#f36200',
        redGrad2: '#bb3100',
        blueGrad1: '#005de2',
        blueGrad2: '#036bff',
        grayPrimary: '#ece9d8',
        grayGrad1: '#f1f1f0',
        grayGrad2: '#eee9d5',
        windowBg: '',
        greenStart: '#157b15',
        buttonGrayColor: '#f7f7ef',
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
      },
      boxShadow: {
        /*regular: '0 5px 20px rgba(160,160,160,0.05)',
        pricing: '0 5px 20px rgba(146,153,184,0.2)',
        action: '0 5px 20px rgba(64, 64, 64, 0.08)',
        box: '0 15px 25px rgba(146,153,184,0.2)',
        boxLarge: '0 10px 40px rgba(146,153,184,0.2)',
        custom: '0 15px 50px #9299b820',
        dot: '0 0 0 1px #fff',
        btn: '0 8px 13px rgba(130, 49 ,211, 0.13)',
        faq: '0 15px 40px rgba(116, 116 ,116, 0.08)',*/
      },
      dropShadow: {
        'appTextDk': '0 3px 2px rgba(0, 0, 0, 1)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      borderWidth: {
        1: '1px',
        5: '5px',
      },
      borderRadius: {
        4: '4px',
        6: '6px',
        10: '10px',
      },
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
        Awesome: ['FontAwesome'],
      },
      fontSize: {
        10: ['10px', '14px'],
        11: ['11px', '15px'],
        13: ['13px', '18px'],
        15: ['15px', '24px'],
        17: ['17px', '26px'],
        22: ['22px', '30px'],
        42: ['42px', '62px'],
        58: ['58px', '86px'],
      },
      zIndex: {
        998: '998',
        99998: '99998',
      },
    },
    screens: {
      '4xl': { max: '1699px' },
      '3xl': { max: '1599px' },
      '2xl': { max: '1299px' },
      xl: { max: '1199px' },
      lg: { max: '991px' },
      md: { max: '767px' },
      sm: { max: '575px' },
      ssm: { max: '480px' },
      xs: { max: '380px' },
      xxs: { max: '320px' },
      'min-xxs': '320px',
      'min-xs': '380px',
      'min-ssm': '480px',
      'min-sm': '575px',
      'min-md': '768px',
      'min-lg': '991px',
      'min-xl': '1199px',
      'min-2xl': '1299px',
      'min-3xl': '1599px',
      'min-4xl': '1699px',
    },
  },
  plugins: [
    // plugin(function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       'text-shadow': (value) => ({
    //         textShadow: value,
    //       }),
    //     },
    //     { values: theme('textShadow') }
    //   )
    // }),
  ],
}

