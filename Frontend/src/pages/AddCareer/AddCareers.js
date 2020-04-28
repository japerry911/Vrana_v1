import React, { Fragment, useState, useEffect } from 'react';
import { useStyles } from './AddCareerStyles';
import { useSelector, useDispatch } from 'react-redux';
import { createCareer } from '../../redux/actions/careersActions';
import Spinner from '../../components/Spinner/Spinner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import { useFormFields } from '../../hooks/customHooks';
import CareersFormBody from '../../components/CareersFormBody/CareersFormBody';
import FormButton from '../../components/FormButton/FormButton';

const INITIAL_STATE = {
    title: '',
    department: '',
    location: '',
    jobUrl: ''
};

const AddCareers = ({ history }) => {
    const classes = useStyles();

    const [fields, setField, setFields] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);

    const isLoading = useSelector(state => state.careers.loading);
    const token = useSelector(state => state.admins.admin.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fields.title && fields.department && fields.location && fields.jobUrl) {
            setValidationStatus(true);
        } else {
            setValidationStatus(false);
        }
    }, [fields]);

    const handleSubmit = event => {
        event.preventDefault();

        const careerObject = {
            Title: fields.title,
            Department: fields.department,
            Location: fields.location,
            Job_Url: fields.jobUrl
        };

        const formData = new FormData();

        Object.keys(careerObject).forEach(key => {
            formData.append(key, careerObject[key]);
        });

        dispatch(createCareer(formData, token));

        setFields(INITIAL_STATE);

        history.push('/admin/add-career');
    };

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='Admin: Add Careers' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Add Career' />
                            <CareersFormBody
                                fields={fields}
                                setField={setField}
                            />
                            <FormButton
                                buttonText='Add Career'
                                validationStatus={validationStatus}
                            />
                        </Grid>
                    </form>
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default AddCareers;