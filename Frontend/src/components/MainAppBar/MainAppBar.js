import React, { Fragment, useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import { useStyles } from './MainAppBarStyles';
import { ROUTES_ARRAY, AUTHED_ROUTES_ARRAY } from '../../Router/routesObject';

const MainAppBar = ({ handleDrawerOpen, location }) => {
    const classes = useStyles();

    const [title, setTitle] = useState('');

    useEffect(() => {
        const combined = ROUTES_ARRAY.concat(AUTHED_ROUTES_ARRAY);
        setTitle(combined.find(routeObject => routeObject.link === location.pathname).title); 
    }, [location]);    

    return (
        <AppBar position='static' className={classes.appBarStyle}>
            <Toolbar className={classes.toolbarStyle}>
                <a href='/'>
                    <img
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/VRANA+Logo_Long+V1.png'
                        className={classes.imageStyle}
                        alt='Vrana Logo'
                    />
                </a>
                <div className={classes.divGrowStyle} />
                <Fragment>
                    <Typography 
                        variant='h6' 
                        display='inline'
                        className={classes.pageTitleStyle}
                    >
                        {title}
                    </Typography>
                </Fragment>
                <div className={classes.iconDivStyle}>
                    <IconButton 
                        edge='start' 
                        aria-label='menu'
                        className={classes.iconButtonStyle}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon/>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default withRouter(MainAppBar);