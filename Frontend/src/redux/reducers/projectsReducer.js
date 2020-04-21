const INITIAL_STATE = { projects: { commercial: [], retails: [] }, showProject: {}, loading: false, error: '' };

const projectsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PROJECTS_PENDING':
            return { ...state, loading: true };

        case 'GET_PROJECTS_SUCCESS':
            return { ...state, loading: false, projects: { commercial: action.payload.commercial, retail: action.payload.retail }};

        case 'GET_PROJECTS_ERROR':
            return { ...state, loading: false , projects: [], error: action.error };

        case 'GET_PROJECT_PENDING':
            return { ...state, loading: true };

        case 'GET_PROJECT_SUCCESS':
            return { ...state, loading: false, showProject: action.payload };

        case 'GET_PROJECT_ERROR':
            return { ...state, loading: false , showProject: {}, error: action.error };

        default:
            return state;
    }
};

export default projectsReducer;