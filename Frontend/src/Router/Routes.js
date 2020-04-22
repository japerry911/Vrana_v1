import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import OurWork from '../pages/OurWork/OurWork';
import Safety from '../pages/Safety/Safety';
import Shop from '../pages/Shop/Shop';
import News from '../pages/News/News';
import Careers from '../pages/Careers/Careers';
import ContactUs from '../pages/ContactUs/ContactUs';
import ShowProject from '../pages/ShowProject/ShowProject';
import Admin from '../pages/Admin/Admin';
import AddProject from '../pages/AddProject/AddProject';
import EditProject from '../pages/EditProject/EditProject';
import DeleteProject from '../pages/DeleteProject/DeleteProject';
import Sandbox from '../misc/Sandbox.js';

export default () => {
    return (
        <Switch>
            <Route 
                exact
                path='/sandbox'
                component={Sandbox}
            />

            <Route
                exact
                path='/admin/login'
                component={Admin}
            />

            <ProtectedRoute 
                exact
                path='/admin/add-project'
                component={AddProject}
            />

            <ProtectedRoute 
                exact 
                path='/admin/edit-project'
                component={EditProject}
            />

            <ProtectedRoute
                exact 
                path='/admin/delete-project'
                component={DeleteProject}
            />

            <Route 
                exact
                path='/our-work/projects/:id'
                component={ShowProject}
            />

            <Route 
                exact 
                path='/'
                component={Home}
            />

            <Route
                exact
                path='/about-us'
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
                compoennt={ContactUs}
            />
        </Switch>
    );
};