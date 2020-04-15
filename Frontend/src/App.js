import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import OurWork from './pages/OurWork/OurWork';
import Safety from './pages/Safety/Safety';
import Shop from './pages/Shop/Shop';
import News from './pages/News/News';
import Careers from './pages/Careers/Careers';
import ContactUs from './pages/ContactUs/ContactUs';

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />

        <Route 
          exact
          path='/about'
          component={About}
        />

        <Route 
          exact
          path='/services'
          component={Services}
        />

        <Route 
          exact 
          path='/our-work'
          component={OurWork}
        />

        <Route 
          exact
          path='/safety'
          component={Safety}
        />

        <Route 
          exact 
          path='/shop'
          component={Shop}
        />

        <Route 
          exact 
          path='/news'
          component={News}
        />

        <Route 
          exact 
          path='/careers'
          component={Careers}
        />

        <Route 
          exact
          path='/contact-us'
          component={ContactUs}
        />
      </Switch>
    </div>
  );
};

export default App;
