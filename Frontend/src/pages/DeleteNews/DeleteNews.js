import React, { Fragment, useState, useEffect } from 'react';
import { useStyles } from './DeleteNewsStyles';
import HeroHeader from '../../components/HeroHeader/HeroHeader';
import FormHeader from '../../components/FormHeader/FormHeader';
import Grid from '@material-ui/core/Grid';
import FormButton from '../../components/FormButton/FormButton';
import FormSelect from '../../components/FormSelect/FormSelect';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNews, getNewsArticles } from '../../redux/actions/newsActions';
import MenuItem from '@material-ui/core/MenuItem';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';

const DeleteNews = () => {
    const classes = useStyles();

    const [articleToDelete, setArticleToDelete] = useState('');

    const isLoading = useSelector(state => state.news.loading);
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
                <HeroHeader headerText='Admin: Delete News' />
                <Grid container spacing={0} className={classes.darkGreyContainerStyle}  justify='center' align='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <form className={classes.formContainerStyle}>
                        <Grid container spacing={0} className={classes.whiteContainerStyle}>
                            <FormHeader headerText='Delete News Article' />
                            <FormSelect
                                inputLabelText='News Article to Delete'
                                selectValue={articleToDelete}
                                onChangeSelect={newArticleToDelete => setArticleToDelete(newArticleToDelete.target.value)}
                                menuItemFunction={articles.map(article => {
                                                                            return (
                                                                                <MenuItem 
                                                                                    value={article.id}
                                                                                    key={article.id}
                                                                                >
                                                                                    {article.Headline}
                                                                                </MenuItem>
                                                                            );
                                })} 
                            />
                            <FormButton
                                buttonText='Delete Project'
                                validationStatus={articleToDelete}
                            />
                        </Grid>
                    </form>
                </Grid>
                <Footer />
            </Fragment>}
        </div>
    );
};

export default DeleteNews;