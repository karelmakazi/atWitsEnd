module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spartan: ['Spartan'],
        squada: ['Squada One']
      },
      colors: {
        tealStrong: '#014040',
        tealMid: '#40736E',
        orangeStrong: '#BF452A',
        orangeMid: '#F26835',
        orangeLight: '#F28444',
        blueDark: '#012340',
        blueMid: '#026773',
        blueLight: '#03A6A6',
        greenDark: '#3E5902',
        greenMid: '#888C03',
        textWhite: '#F3F5F0'
      },
      fontSize: {
        display: ['12rem', { lineHeight: '1' }]
      },
      screens: {
        break1: '871px'
      },
      width: {
        396: '396px',
        427: '427px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
