import React from 'react';
import { useStyles } from './AboutStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const About = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>
                <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={classes.aboutUsHeaderDiv}>
                        <Typography variant='h4' className={classes.aboutUsHeaderTextStyle}>
                            ABOUT US
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;