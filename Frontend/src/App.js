import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Routes';
import Navigation from './components/Navigation/Navigation';
import theme from './misc/theme';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
