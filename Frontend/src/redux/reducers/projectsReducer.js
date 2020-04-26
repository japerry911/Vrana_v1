const INITIAL_STATE = { projects: [], showProject: {}, loading: false, error: null };

const projectsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PROJECTS_PENDING':
            return { ...state, loading: true };

        case 'GET_PROJECTS_SUCCESS':
            return { ...state, loading: false, projects: action.payload };

        case 'GET_PROJECTS_ERROR':
            return { ...state, loading: false , projects: [], error: action.error };

        case 'GET_PROJECT_PENDING':
            return { ...state, loading: true };

        case 'GET_PROJECT_SUCCESS':
            return { ...state, loading: false, showProject: action.payload.project };

        case 'GET_PROJECT_ERROR':
            return { ...state, loading: false , showProject: {}, error: action.error };

        case 'PROJECT_PENDING':
            return { ...state, loading: true };

        case 'PROJECT_SUCCESS':
            return { ...state, loading: false };

        case 'PROJECT_ERROR':
            return { ...state, loading: false, error: action.error };

        default:
            return state;
    }
};

export default projectsReducer;