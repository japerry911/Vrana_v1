const INITIAL_STATE = { projects: [], showProject: {}, loading: false, error: '' };

const projectsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PROJECTS_PENDING':
            return { ...state, loading: true };

        case 'GET_PROJECTS_SUCCESS':
            return { ...state, loading: false, projects: action.payload };

        case 'GET_PROJECTS_ERROR':
            return { ...state, loading: false , projects: [], error: action.error };

        default:
            return state;
    }
};

export default projectsReducer;