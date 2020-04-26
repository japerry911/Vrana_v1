import railsServer from '../../api/railsServer';

export const getNewsArticles = () => {
    return async dispatch => {
        dispatch(newsPending());

        try {
            const newsArticlesResponse = await railsServer.get('/news_articles');

            dispatch(getNewsArticlesSuccess(newsArticlesResponse.data.articles));
        } catch (error) {
            dispatch(newsError(error));
        }
    };
};

export const getNewsArticlesSuccess = payload => {
    return {
        type: 'GET_NEWS_ARTICLES_SUCCESS',
        payload 
    };
};

export const newsPending = () => {
    return {
        type: 'NEWS_PENDING'
    };
};

export const newsError = error => {
    return {
        type: 'NEWS_ERROR',
        error
    };
};

export const newsSuccess = () => {
    return {
        type: 'NEWS_SUCCESS'
    };
};

export const createNews = (formUploadData, token) => {
    return async dispatch => {
        dispatch(newsPending());

        try {
            await railsServer.post('/news_articles', formUploadData);

            dispatch(newsSuccess());
        } catch (error) {
            dispatch(newsError(error));
        }
    };
};

export const deleteNews = (id, token) => {
    return dispatch => {
        dispatch(newsPending());

        return railsServer.delete(`/news_articles/${id}`).then(
            response => dispatch(newsSuccess()),
            error => dispatch(newsError(error))
        );
    };
};

/*export const deleteNews = (id, token) => {
    return async dispatch => {
        dispatch(newsPending());

        try {
            await railsServer.delete(`/news_articles/${id}`);

            dispatch(newsSuccess());
        } catch (error) {
            dispatch(newsError(error));
        }
    };
};*/