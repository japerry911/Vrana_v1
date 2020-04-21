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
                                src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/VRANA%20Logo_Long%20V1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLWVhc3QtMSJGMEQCIBkQo6Qz75CdeAZc637ad5GJmN8KLRJwYVC8u3887nOoAiBb7G5gbjzVT2%2BusG26Gp46ky%2FMOGbbu9RLQ1ht%2FxFndCrmAQgzEAAaDDYyMzIxNTcxNjEwMiIMLw98mQmaj3YzlhoTKsMB%2Fm4DbOsiVerMRTzC9Oln0jyV4gCupsjw5NiEedmIValwZn3X5IAPXWCqJarzCkHv41tC4k2zBQU3lgRCj5XctHrQ8a6kBdkvcbiuPK%2FiQrFT6qFlXzPJupBAIfNHIq2uErKEFSOy3rFN7dG%2BQjhVsTsBAsgCxnnmDD%2FH%2BIZwY5BBDje3pQdC2ZSoi232ULGMsP6wpXnJJtGk7VZCv4xYq8KjIUa78%2BGzpRkZyPOvWM86ePjrekJNGQDRWEMa3%2FOV2szTMLns%2FPQFOvECkKrPr2P%2B19gLhG9Qfs%2B78kxAH9hhZ0WCFvXqZjqBgMNUdnC5iCHzCuMgz5QYbyoV2v1sqobbTO91OrklPr6r1TyDK38sqzDbVIzgLBAuENuJ%2B4zvKe6%2BTretYWZC%2F8e93aKZPIdAQRNGCoKSjz96Y6SrJaFinNbuZQpC98NCHDikc7Z6jn5E%2FrGHjoL9tfYnde%2FoCoIfBQxPvxsuHePEZx4n1wMchXsO2xxGWfxClblEucEGqukKyafm6JvnEESIFLPcRGjQ5ioaY7GQDMqe%2FEH%2BuDzj3XCDh5mxSPZGfy6cXSFockVJnSmXmdquf3brLg5ApkC8FczOU2zR0Yk%2FdTJdKeROFCfX5mCNoLI07%2FEuJ2q4KB55W%2F7Q8DUIWhoN70fadoeNepCJP6e4lMBxNaAedvRyaKaPP0m%2FWrtmNgD3XugpWrt9AN%2FtztzzjJDNSq6XOIOOEvhC6JUoTziADJ2ygLPejmT%2BcdLaju9p%2B0IP&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200421T181812Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZCGUNE4DCIQCZR74%2F20200421%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=66a021dd1a47b820534334e479b68e511a3c81abe01bedd3b70b289f0c6d8943'
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