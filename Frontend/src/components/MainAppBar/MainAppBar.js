import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from '@material-ui/styles/makeStyles'
import { withRouter } from 'react-router-dom';
import { ROUTES_OBJECT} from '../../misc/routesObject';

const useStyles = makeStyles(theme => ({
    appBarStyle: {
        backgroundColor: theme.colors.nonTextGrey,
        paddingBottom: 10,
        paddingTop: 10
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
    },
    imageStyle: {
        width: 'auto',
        height: '5em'
    }
}));

const MainAppBar = ({ handleDrawerOpen, title, location }) => {
    const classes = useStyles();

    return (
                <AppBar position='static' className={classes.appBarStyle}>
                    <Toolbar className={classes.toolbarStyle}>
                        <a href='/'>
                            <img
                                src='https://lh3.googleusercontent.com/jgzv--nvrFkTzY0XSvXiV-pXst9Ypf2erbvHUqN3weS0YZge1xssgVqqGT846PbXhlY5vSsZsv2ky5vaGsNrJHET3qv-wRf1e6-0asZhNaCr5bSNzw4tw8p3CyFo2kWkqMMe__1kKp_9kMXk2NtCmhwM-6mT4UsjXW90MGEwNLxinwNvW0TrfJpf1_qduESeDpckMl2XGMpVhRlWoZCJt-2eZ0X8qk741SvSFS24UZdScjOWBVVrspG3b33a1Ik42pjXNKk5gpnIBZlqEmpAHMLSRJ9XTXhUNXxA6QlvcQF_p-z-uegogsfsaiXI81BNLjN1hwZx-46ewkYglEgZR1ve9WC80cYdnjSK9G0tYRwIlf9m_6T1LgcmGPFtUw_-RfhtYFdjLfv1JClI6hD8lXB9RsZiLLiVZmHf7qCEiqBBG38-J0St1xiEpiFpzwEirDF1t4f5TVz5Fds56UG-UQqgD47pzbxff23jbo1oQU-KwkY_jJ09qaFAAUbdkO4hzkj6BdlYHxeGihXZN6uvdZdfxRC7lNWn64xBCwAxd8Li-DWNjRCrNN4eka2wBFZwc2-zqr0USAX26N3d5TomOXUHj9LUwtv6TMfOOFVEC6t8uMSNJZ_DScgSRXUzn8oE6oLqLFpju25SbEdU-rC9EJbUakUVMEqmHdTgpCxI72tA9OZy9Op9RqFqlEcQIQ=w988-h396-no'
                                className={classes.imageStyle}
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