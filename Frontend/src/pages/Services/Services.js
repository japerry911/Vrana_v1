import React from 'react'
import { useStyles } from './ServicesStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/Card/Card';
import ImageBannerSection from '../../components/ImageBannerSection/ImageBannerSection';
import Footer from '../../components/Footer/Footer';
import CommonHeader from '../../components/CommonHeader/CommonHeader';

const Services = () => {
    const classes = useStyles();

    return (
        <div>
            <HeroHeader headerText='WHAT WE DO' />
            <Grid container spacing={0} className={classes.whiteContainerPaddingStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center'>
                    <Typography variant='h5' className={classes.darkGreyHeaderStyle}>
                        Quality Construction.&nbsp;
                        <div className={classes.redHeaderTextStyle}>
                            Exceptional Results.
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Pencil on Paper'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(18).png'
                        headerText='PRECONSTRUCTION'
                        bodyText="Vrana's stragetic approach to preconstruction an project management ensures a seamless
                        and successful project delivery. Our experienced leadership team will guide you through
                        project objectives and constraints."
                        ctaText={'Read More > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Cranes'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.05.49+PM.jpg'
                        headerText='QUALITY CONSTRUCTION'
                        bodyText="Whether you are planning a large industrial or commercial building, or a small renovation,
                        Vrana clients always enjoy the best of both large and small contractor worlds."
                        ctaText={'Read More > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Constructions workers working'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(17).png'
                        headerText='GENERAL CONTRACTING'
                        bodyText="Vrana's sophisicated approach to general contracting allows us to take on projects of any scale.
                        Our experienced field supervision and labor can fully execute projects of all sizes."
                        ctaText={'Read More > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Excavator shoveling dirt'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(16).png'
                        headerText='EQUIPMENT SALES'
                        bodyText="With a vast selection of construction equipment for sale, Vrana can help you build your realities
                        from your dreams. Check out our full list of equipment for sale."
                        ctaText={'Read More > >'}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                <ImageBannerSection
                    justify='center'
                    imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(15).png'
                    noOpacity
                />
            </Grid>
            <Grid container spacing={0} className={classes.whiteContainerStyle}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align='center' className={classes.gridTopPaddingStyle}>
                    <CommonHeader 
                        headerText='OUR MARKETS'
                        headerTextColor='dark'
                        subHeaderText='INDUSTRY SPECIALIZATION'
                        dividerColor='dark'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Omaha Steaks building'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.06.42+PM.jpeg'
                        headerText='COMMERCIAL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt="Baker's Grocery Store"
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.09.53+PM.jpeg'
                        headerText='RETAIL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Apartment building'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.07.15+PM.jpg'
                        headerText='HOUSING'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Office building'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+2.07.28+PM.jpeg'
                        headerText='RELIGIOUS/EDUCATIONAL'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Parking garage'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-18+at+7.09.33+PM.jpg'
                        headerText='PARKING STRUCTURE'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} align='center'>
                    <Card 
                        alt='Highway/Interstate'
                        imageUrl='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/image(19).png'
                        headerText='CIVIL/HEAVY HIGHWAY'
                        bodyText="From large-scale tenant improvements to ground up construction, we have the experience to execute commercial projects of all sizes."
                        ctaText={'Our Work > >'}
                    />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default Services;