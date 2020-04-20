import createDataContext from './createDataContext';
import railsServer from '../api/railsServer';

const INITIAL_STATE = { projects: [], showProject: {} };

const projectReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return { ...state, projects: action.payload };

        default: 
            return state;
    }
};

const getProjects = dispatch => {
    return async () => {
        const getProjectsResponse = await railsServer.get('/projects');
        dispatch({ type: 'GET_PROJECTS', payload: getProjectsResponse.data.projects });
    };
};

export const { Context, Provider } = createDataContext(projectReducer, { getProjects }, INITIAL_STATE);