const INITIAL_STATE = { projects: [], showProject: {} };

const projectsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return { ...state, projects: action.payload };

        default:
            return state;
    }
};

export default projectsReducer;