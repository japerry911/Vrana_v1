import React from 'react';
import { useStyles } from './DeleteProjectStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Footer from '../../components/Footer/Footer';


const DeleteProject = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader headerText='Admin: Delete Project' />
            <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                <form className={classes.formContainerStyle}>
                    <Grid container spacing={0} className={classes.whiteContainerStyle}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                            <Typography variant='h4' className={classes.headerFontStyle}>
                                Delete Project
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemStyle} align='center'>
                            <Button 
                                className={classes.buttonStyle} 
                                type='submit'
                            >
                                <Typography variant='h6' className={classes.buttonTextStyle}>
                                    Delete Project
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            <Footer />
        </div>
    );
};

export default DeleteProject;