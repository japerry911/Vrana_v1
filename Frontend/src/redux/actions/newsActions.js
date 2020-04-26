import railsServer from '../../api/railsServer';

export const getNewsArticles = () => {
    return dispatch => {
        dispatch(newsPending());

        return railsServer.get('/news_articles').then(
            response => dispatch(getNewsArticlesSuccess(response.data.articles)),
            error => dispatch(newsError(error))
        );
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
    return dispatch => {
        dispatch(newsPending());

        return railsServer.post('/news_articles', formUploadData).then(
            response => dispatch(newsSuccess()),
            error => dispatch(newsError(error))
        );
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

export const updateNews = (id, formUpdateData, token) => {
    return dispatch => {
        dispatch(newsPending());

        return railsServer.put(`/news_articles/${id}`, formUpdateData).then(
            response => dispatch(newsSuccess()),
            error => newsError(error)
        );
    };
};