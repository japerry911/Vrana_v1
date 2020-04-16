import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  colors: {
    vranaRed: '#CD2126',
    textWhite: '#FCFEFF',
    nonTextWhite: '#FEF7F7',
    lightGreyText: '#E3E2E2',
    darkGrey: '#4B4A4A',
  },
  fonts: {
    avenirItalicize: 'Avenir-Italicize',
    avenirBold: 'Avenir-Bold',
    avenirMedium: 'Avenir-Medium',
    avenir: 'Avenir'
  }
});

theme = responsiveFontSizes(theme);

export default theme;