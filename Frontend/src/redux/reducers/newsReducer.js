const INITIAL_STATE = { newsArticles: [], loading: false, error: null };

const newsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NEWS_PENDING':
            return { ...state, loading: true };

        case 'NEWS_ERROR':
            return { ...state, loading: false, error: action.error };

        case 'GET_NEWS_ARTICLES_SUCCESS':
            return { newsArticles: action.payload, loading: false };

        default:
            return state;
    }
};

export default newsReducer;