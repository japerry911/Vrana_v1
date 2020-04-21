import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import { ROUTES_OBJECT} from '../../misc/routesObject';
import { useStyles } from './MainAppBarStyles';

const MainAppBar = ({ handleDrawerOpen, location }) => {
    const classes = useStyles();

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
                        <div>
                            <Typography 
                                variant='h6' 
                                display='inline'
                                className={classes.pageTitleStyle}
                            >
                                {ROUTES_OBJECT[location.pathname]}
                            </Typography>
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