import railsServer from '../../api/railsServer';

export const getProjects = () => {
    return async dispatch => {
        console.log('Fetching!');
        const getProjectsResponse = await railsServer.get('/projects');
        console.log('Done Fetching');
        console.log('response below');
        console.log(getProjectsResponse);
        dispatch({ type: 'GET_PROJECTS', payload: getProjectsResponse.data.projects });
    };
};