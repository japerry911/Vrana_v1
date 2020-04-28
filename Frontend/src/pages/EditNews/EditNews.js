import React, { Fragment, useState, useEffect } from 'react';
import { useStyles } from './EditNewsStyles';
import { useFormFields } from '../../hooks/customHooks';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsArticles, updateNews } from '../../redux/actions/newsActions';
import Spinner from '../../components/Spinner/Spinner';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import FormButton from '../../components/FormButton/FormButton';
import NewsFormBody from '../../components/NewsFormBody/NewsFormBody';
import Grid from '@material-ui/core/Grid';
import FormSelect from '../../components/FormSelect/FormSelect';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

const INITIAL_STATE = {
    headline: '',
    source: '',
    datePublished: '',
    articleLink: '',
    newsImage: ''
}

const EditNews = ({ history }) => {
    const classes = useStyles();

    const [fields, setField, setFields, setImageField] = useFormFields(INITIAL_STATE);
    const [articleToEdit, setArticleToEdit] = useState('');
    const [validationStatus, setValidationStatus] = useState(false);

    const isLoading = useSelector(state => state.news.loading);
    const token = useSelector(state => state.admins.admin.token);
    const articles = useSelector(state => state.news.newsArticles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsArticles());
    }, [dispatch]);

    useEffect(() => {
        setValidationStatus(fields.headline && fields.source && fields.datePublished && fields.articleLink);
    }, [fields]);

    useEffect(() => {
        if (articleToEdit) {
            setFields({
                headline: articleToEdit.Headline ? articleToEdit.Headline : '',
                source: articleToEdit.Source ? articleToEdit.Source : '',
                articleLink: articleToEdit.Article_Link ? articleToEdit.Article_Link : '',
                datePublished: articleToEdit.Date_Published ? articleToEdit.Date_Published.toString().substring(0, 10) : '',
                newsImage: ''
            });
        }
    }, [articleToEdit, setFields]);

    const handleSubmit = event => {
        event.preventDefault();

        const articleObject = {
            Headline: fields.headline,
            Source: fields.source,
            Date_Published: fields.datePublished,
            Article_Link: fields.articleLink
        };

        const formData = new FormData();

        if (fields.newsImage) {
            formData.append('image_filename', `vrana_article_image_${Date.now()}`);
            formData.append('image_filetype', fields.newsImage.type.replace('image/', ''));
            formData.append('image', fields.newsImage);
        }

        Object.keys(articleObject).forEach(key => {
            formData.append(key, articleObject[key]);
        });

        dispatch(updateNews(articleToEdit.id, formData, token)).then(
            () => dispatch(getNewsArticles())
        );

        setArticleToEdit('');
        setFields(INITIAL_STATE);

        history.push('/admin/edit-news');
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
                <HeroHeader headerText='Admin: Edit News' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form onSubmit={handleSubmit} className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Edit News Article' />
                            <FormSelect
                                inputLabelText='Article to Edit'
                                selectValue={articleToEdit}
                                onChangeSelect={newArticleToEdit => setArticleToEdit(newArticleToEdit.target.value)}
                                menuItemFunction={articles.map(article => {
                                                                                return (
                                                                                    <MenuItem 
                                                                                        value={article}
                                                                                        key={article.id}
                                                                                    >
                                                                                        {article.Headline}
                                                                                    </MenuItem>
                                                                                );
                                })}
                            />
                            <FormHeader headerText='Article Fields' variant='h6' />
                            <NewsFormBody
                                fields={fields}
                                setField={setField}
                                setImageField={setImageField}
                            />
                            <FormButton
                                validationStatus={validationStatus}
                                buttonText='Update Article'
                            />
                        </Grid>
                    </form>
                </Grid>
            </Fragment>}
        </div>
    );
};

export default EditNews;