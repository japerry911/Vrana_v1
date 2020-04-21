import React from 'react';
import { useStyles } from './AdminStyles';
import Grid from '@material-ui/core/Grid';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Admin = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader />
            <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center'>
                <Grid container spacing={0} className={classes.whiteContainerStyle}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                        <Typography variant='h4' className={classes.headerFontStyle}>
                            Sign In
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                        <TextField label='Username' className={classes.textFieldStyle} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                        <TextField label='Password' className={classes.textFieldStyle} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='left' className={classes.gridItemStyle} align='center'>
                        <Button className={classes.buttonStyle}>
                            <Typography variant='h6' className={classes.buttonTextStyle}>
                                Sign In
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default Admin;