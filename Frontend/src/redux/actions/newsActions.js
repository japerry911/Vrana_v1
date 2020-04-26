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

export const newsPending = () => {
    return {
        type: 'NEWS_PENDING'
    };
};

export const getNewsArticlesSuccess = payload => {
    return {
        type: 'GET_NEWS_ARTICLES_SUCCESS',
        payload 
    };
};

export const newsError = error => {
    return {
        type: 'NEWS_ERROR',
        error
    };
};