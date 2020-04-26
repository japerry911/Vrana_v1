import React, { Fragment, useState } from 'react';
import { useStyles } from './AddNewsStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import NewsFormBody from '../../components/NewsFormBody/NewsFormBody';
import { useFormFields } from '../../hooks/customHooks';
import FormButton from '../../components/FormButton/FormButton';

const INITIAL_STATE = {
    headline: '',
    source: '',
    datePublished: '',
    articleLink: '',
    newsImage: ''
}

const AddNews = () => {
    const classes = useStyles();

    const [fields, setField, setImageField, setFields] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);

    const isLoading = useSelector(state => state.news.loading);
    const dispatch = useDispatch();

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
                <HeroHeader headerText='Admin: Add News' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Add News Article' />
                            <NewsFormBody
                                fields={fields}
                                setField={setField}
                                setImageField={setImageField}
                            />
                            <FormButton 
                                buttonText={'Add News Article'}
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

export default AddNews;