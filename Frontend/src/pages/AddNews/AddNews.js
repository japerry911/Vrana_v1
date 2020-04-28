import React, { Fragment, useState, useEffect } from 'react';
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
import { createNews } from '../../redux/actions/newsActions'

const INITIAL_STATE = {
    headline: '',
    source: '',
    datePublished: '',
    articleLink: '',
    newsImage: ''
}

const AddNews = ({ history }) => {
    const classes = useStyles();

    const [fields, setField, setFields, setImageField] = useFormFields(INITIAL_STATE);
    const [validationStatus, setValidationStatus] = useState(false);

    const isLoading = useSelector(state => state.news.loading);
    const token = useSelector(state => state.admins.admin.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fields.headline && fields.source && fields.datePublished && fields.articleLink && fields.newsImage) {
            setValidationStatus(true);
        } else {
            setValidationStatus(false);
        }
    }, [fields]);

    const handleSubmit = event => {
        event.preventDefault();

        const articleObject = {
            Headline: fields.headline,
            Source: fields.source,
            Date_Published: fields.datePublished,
            Article_Link: fields.articleLink
        };

        const formData = new FormData();

        formData.append('image_filename', `vrana_article_image_${Date.now()}`);
        formData.append('image_filetype', fields.newsImage.type.replace('image/', ''));
        formData.append('image', fields.newsImage);

        Object.keys(articleObject).forEach(key => {
            formData.append(key, articleObject[key]);
        });

        dispatch(createNews(formData, token));

        setFields(INITIAL_STATE);

        history.push('/admin/add-news');
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
                <HeroHeader headerText='Admin: Add News' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
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