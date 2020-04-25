import React, { Fragment } from 'react';
import { useStyles } from './SafetyStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Safety = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <HeroHeader headerText='SAFETY' />
            <Grid container spacing={0} className={classes.whiteContainerStyle} alignItems='center' justify='center'>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} className={classes.greetingContentGridStyle}>
                    <div className={classes.safetyHeaderDivStyle}>
                        <Typography variant='h5' className={classes.darkGreyHeaderStyle}>
                            FOCUS ON&nbsp;
                            <div className={classes.redHeaderTextStyle}>
                                SAFETY.
                            </div>
                        </Typography>
                    </div>
                    <Typography paragraph variant='body1' className={classes.safetyDescStyle}>
                        With the commitment to continually improve safety, Vrana Construction has implemented the Vrana Safe Site Program.
                        The key to any successful endeavor is rooted in proper planning. In doing this, Vrana Safe Site Program takes the 
                        industry standard, JSAs jobsite safety analysis, to the next level. The Safe Site Program is rooted on the following
                        principles:&nbsp; 
                        <span className={classes.redHeaderTextStyle}>
                            Plan, Train, Monitor & Improve
                        </span>
                        .
                    </Typography>
                    <Typography paragraph variant='body1' className={classes.safetyDescStyle}>
                        By empowering our workers to participate in safety planning, training, monitoring, and improvement, we protect our biggest
                        assets while building a stronger and more productive workforce.
                    </Typography>
                    <div className={classes.buttonDivStyle}>
                        <Button className={classes.buttonStyle}>
                            <Typography className={classes.buttonTextStyle}>
                                CONTACT US
                            </Typography>
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img
                        alt='Vrana Safe Site Logo'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/vrana_safesite_logo3.jpg'
                        className={classes.safeSiteImageStyle}
                    />
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    );
};

export default Safety;