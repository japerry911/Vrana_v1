import railsServer from '../../api/railsServer';

export const getProjects = () => {
    return async dispatch => {
        const getProjectsResponse = await railsServer.get('/projects');
        dispatch({ type: 'GET_PROJECTS', payload: getProjectsResponse.data.projects });
    };
};