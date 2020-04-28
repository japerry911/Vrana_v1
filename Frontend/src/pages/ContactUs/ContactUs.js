import React, { Fragment, useEffect, useState } from 'react';
import { useStyles } from './ContactUsStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import Footer from '../../components/Footer/Footer';
import FormTextField from '../../components/FormTextField/FormTextField';
import FormTextareaAutosize from '../../components/FormTextareaAutosize/FormTextareaAutosize';
import FormButton from '../../components/FormButton/FormButton';
import railsServer from '../../api/railsServer';
import { useFormFields } from '../../hooks/customHooks';
import Spinner from '../../components/Spinner/Spinner';

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: ''
};

const ContactUs = ({ history }) => {
    const classes = useStyles();

    const [validationStatus, setValidationStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fields, setField, setFields] = useFormFields(INITIAL_STATE);

    const handleSubmit = event => {
        event.preventDefault();

        setIsLoading(true);

        const formBody = { email_options: { ...fields, date: new Date() }};

        railsServer.post('/contact-us-send-email', formBody).then(
            () => setIsLoading(false)
        );

        setFields(INITIAL_STATE);

        history.push('/contact-us');
    };

    useEffect(() => {
        if (fields.name && fields.email && fields.phone && fields.subject && fields.description) {
            setValidationStatus(true);
        } else {
            setValidationStatus(false);
        }
    }, [fields]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='Contact Us' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={0} className={classes.whiteContainerStyle} alignItems='center'>
                        <Grid container spacing={0} item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Typography variant='h5' className={classes.headerMedStyle} paragraph>
                                        Contact Us.    
                                    </Typography>
                                    <Typography variant='body1' className={classes.regAvenirStyle}>
                                        Please use the form below to contact Vrana.
                                    </Typography>
                                </Grid>
                                <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormTextField
                                        label='First & Last Name'
                                        gridLength={6}
                                        width='90%'
                                        labelText='First Paragraph Content' 
                                        value={fields.name}
                                        onChange={setField}
                                        id='name'
                                    />
                                    <FormTextField
                                        label='Email'
                                        gridLength={6}
                                        width='90%'
                                        type='email'
                                        value={fields.email}
                                        onChange={setField}
                                        id='email'
                                    />
                                </Grid>
                                <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormTextField
                                        label='Phone Number'
                                        gridLength={6}
                                        width='90%'
                                        type='tel'
                                        value={fields.phone}
                                        onChange={setField}
                                        id='phone'
                                    />
                                    <FormTextField
                                        label='Subject'
                                        gridLength={6}
                                        width='90%'
                                        value={fields.subject}
                                        onChange={setField}
                                        id='subject'
                                    />
                                </Grid>
                                <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormTextareaAutosize
                                        labelText='What can we help you with?'
                                        value={fields.description}
                                        onChange={setField}
                                        id='description'
                                    />
                                </Grid>
                                <Grid container spacing={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <FormButton
                                        buttonText='CONTACT US'
                                        validationStatus={validationStatus}
                                    />
                                </Grid>
                            </form>
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
            </Fragment>}
        </div>
    );
};

export default ContactUs;