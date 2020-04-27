import React, { Fragment } from 'react';
import { useStyles } from './ContactUsStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import FormTextField from '../../components/FormTextField/FormTextField';
import FormTextareaAutosize from '../../components/FormTextareaAutosize/FormTextareaAutosize';
import FormButton from '../../components/FormButton/FormButton';

const ContactUs = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <HeroHeader headerText='Contact Us' />
            <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container spacing={0} className={classes.whiteContainerStyle} alignItems='center'>
                    <Grid container spacing={0} item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography variant='h5' className={classes.headerMedStyle} paragraph>
                                Contact Us.    
                            </Typography>
                            <Typography variant='body1' className={classes.regAvenirStyle}>
                                Please use the form below to contact Vrana with a specific question.
                            </Typography>
                        </Grid>
                        <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FormTextField
                                label='First & Last Name'
                                gridLength={6}
                                width='90%'
                            />
                            <FormTextField
                                label='Email'
                                gridLength={6}
                                width='90%'
                                type='email'
                            />
                        </Grid>
                        <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FormTextField
                                label='Phone Number'
                                gridLength={6}
                                width='90%'
                                type='tel'
                            />
                            <FormTextField
                                label='Subject'
                                gridLength={6}
                                width='90%'
                            />
                        </Grid>
                        <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FormTextareaAutosize
                                labelText='What can we help you with?'
                            />
                        </Grid>
                        <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <FormButton
                                buttonText='CONTACT US'
                                validationStatus={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Grid container spacing={0}>
                            <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                                    <Typography variant='body1' className={classes.headerBoldCentStyle}>
                                        Address
                                    </Typography>
                                    <Typography variant='body1' className={classes.contentMedCentStyle}>
                                        4816 F Street
                                    </Typography>
                                    <Typography variant='body1' className={classes.contentMedCentStyle}>
                                        Omaha, NE
                                    </Typography>
                                    <Typography variant='body1' className={classes.contentMedCentStyle}>
                                        68117
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} align='center'>
                                    <Typography variant='body1' className={classes.headerBoldCentStyle}>
                                        Contact Info
                                    </Typography>
                                    <Typography variant='body1' className={classes.contentMedCentStyle}>
                                        Phone: (402) 733-5200
                                    </Typography>
                                    <Typography variant='body1' className={classes.contentMedCentStyle}>
                                        Fax: (402) 733-5203
                                    </Typography>
                                    <Typography variant='body1' className={classes.contentMedCentStyle}>
                                        Email: info@vrana.com
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridTopMarginStyle}>
                                <img
                                    alt='Map showing Vrana location'
                                    src='https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-27+at+12.47.36+PM.png'
                                    className={classes.mapImageStyle}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    );
};

export default ContactUs;