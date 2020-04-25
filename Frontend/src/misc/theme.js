import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CD2126'
    },
    secondary: {
      main: '#FCFEFF'
    },
  },
  colors: {
    vranaRed: '#CD2126',
    textWhite: '#FCFEFF',
    nonTextWhite: '#FEF7F7',
    lightGrey: '#E3E2E2',
    darkGrey: '#4B4A4A',
  },
  fonts: {
    avenirItalicize: 'Avenir-Italicize',
    avenirBold: 'Avenir-Bold',
    avenirMedium: 'Avenir-Medium',
    avenir: 'Avenir'
  },
  articlePaperStyle: {
    width: '50%',
    backgroundColor: 'black'
  }
});

theme = responsiveFontSizes(theme);

export default theme;