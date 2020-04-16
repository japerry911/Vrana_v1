import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    appBarStyle: {
        backgroundColor: theme.colors.nonTextGrey
    },
    toolbarStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    pageTitleStyle: {
        marginRight: '3em',
        fontFamily: theme.fonts.avenirMedium
    },
    iconButtonStyle: {
        padding: 5,
        backgroundColor: theme.colors.vranaRed,
        borderRadius: 10,
        opacity: .75,
        color: theme.colors.nonTextWhite
    }
}));

const MainAppBar = () => {
    const classes = useStyles();

    return (
                <AppBar position='static' className={classes.appBarStyle}>
                    <Toolbar className={classes.toolbarStyle}>
                        <Typography variant='h6'>
                            VRANA LOGO
                        </Typography>
                        <div>
                            <Typography 
                                variant='h6' 
                                display='inline'
                                className={classes.pageTitleStyle}
                            >
                                Title of Page Goes Here
                            </Typography>
                            <IconButton 
                                edge='start' 
                                aria-label='menu'
                                className={classes.iconButtonStyle}
                                
                            >
                                <MenuIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
    );
};

export default MainAppBar;