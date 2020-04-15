import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Routes from './Routes';

let theme = createMuiTheme({
  colors: {
    vranaRed: '#CD2126',
    textWhite: '#FCFEFF',
    nonTextWhite: '#FEF7F7',
    greyText: '#E3E2E2',
    nonTextGrey: '#4B4A4A'
  },
  fonts: {
    avenirItalicize: 'Avenir-Italicize',
    avenirBold: 'Avenir-Bold',
    avenirMedium: 'Avenir-Medium',
    avenir: 'Avenir'
  }
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
