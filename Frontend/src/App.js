import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './misc/Routes';
import Navigation from './components/Navigation/Navigation';
import theme from './misc/theme';
import { Provider as ProjectProvider } from './contexts/projectContext';

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <ProjectProvider>
          <Navigation />
          <Routes />
        </ProjectProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
