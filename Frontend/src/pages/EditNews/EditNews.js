import React, { Fragment, useState, useEffect } from 'react';
import { useStyles } from './EditNewsStyles';
import { useFormFields } from '../../hooks/customHooks';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsArticles } from '../../redux/actions/newsActions';
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

const EditNews = () => {
    const classes = useStyles();

    const [fields, setField, setImageField, setFields] = useFormFields(INITIAL_STATE);
    const [articleToEdit, setArticleToEdit] = useState('');

    const isLoading = useSelector(state => state.news.loading);
    const token = useSelector(state => state.admins.admin.token);
    const articles = useSelector(state => state.news.newsArticles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsArticles());
    }, [dispatch]);

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
                    <form className={classes.formContainerStyle}>
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
                                validationStatus={true}
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