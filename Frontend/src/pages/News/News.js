import React, { useEffect } from 'react';
import { useStyles } from './NewsStyles.js';
import { useSelector, useDispatch } from 'react-redux';
import { getNewsArticles } from '../../redux/actions/newsActions';

const News = () => {
    const classes = useStyles();

    const isLoading = useSelector(state => state.news.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>News Page</h1>
        </div>
    );
};

export default News;