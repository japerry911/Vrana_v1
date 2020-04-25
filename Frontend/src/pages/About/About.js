import React, { Fragment } from 'react';
import { useStyles } from './AboutStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer/Footer';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';
import CommonHeader from '../../components/CommonHeader/CommonHeader';

const About = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <HeroHeader headerText='ABOUT US' />
            <Grid container spacing={0} className={classes.whiteContainerStyle} alignItems='center' justify='center'>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} className={classes.aboutUsGreetingContentGridStyle}>
                    <div className={classes.charIntComHeaderDivStyle}>
                        <Typography variant='h5' className={classes.blackHeaderTextStyle}>
                            CHARACTER.&nbsp;
                            <span className={classes.redHeaderTextStyle}>
                                INTEGRITY.&nbsp;
                            </span>
                            COMMITMENT.
                        </Typography>
                    </div>
                    <Typography paragraph variant='body1' className={classes.aboutUsDescStyle}>
                        Since 1909, Charles Vrana & Son Construction Company has been building confidence for its clients,
                        large and small, by providing an exclusive blend of the advantages of both the large and small contractor.
                    </Typography>
                    <Typography paragraph variant='body1' className={classes.aboutUsDescStyle}>
                        We combine the strength of one of the Midwest's largest and most successful general construction firms with the
                        responsiveness and economy of a closely held family business.
                    </Typography>
                    <Typography paragraph variant='body1' className={classes.aboutUsDescStyle}>
                        Whether you are planning a large industrial or commercial building, or a small renovation, Vrana clients ejoy the benefits
                        of quality construction and economy. 
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img
                        alt='Charles Vrana and Troy Perry'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-17+at+11.png'
                        className={classes.charlesAndTroyImageStyle}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ImageBannerSection
                    justify='center'
                    headerText='MEET OUR TEAM'
                    imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/unnamed.jpg'
                />
            </Grid>
            <Grid container spacing={0} className={classes.whiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.ourLeadershipHeaderGridStyle}>
                    <CommonHeader
                        headerText='OUR LEADERSHIP'
                        subHeaderText='TEAM BUILDING'
                        headerTextColor='dark'
                        dividerColor='dark'
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='Troy - CEO & President'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.01.33+PM.jpg'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        TROY PERRY
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        CEO & President 
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='Charles Vrana - President'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.01.51+PM.jpg'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        CHARLES VRANA
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        President 
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='Jeff - Controller'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.02.14+PM.jpg'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        JEFF JEZEWSKI
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        Controller
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} align='center'>
                    <img
                        alt='John - Director of Preconstruction'
                        src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.02.40+PM.jpg'
                        className={classes.profileImageStyle}
                    />
                    <Typography variant='subtitle1' className={classes.profileTitleStyle}>
                        JOHN FARSON
                    </Typography>
                    <Typography variant='subtitle1' className={classes.profileDescStyle}>
                        Director of Preconstruction
                    </Typography>
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    );
};

export default About;