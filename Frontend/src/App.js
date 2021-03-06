import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Router/Routes';
import Navigation from './components/Navigation/Navigation';
import theme from './misc/theme';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
