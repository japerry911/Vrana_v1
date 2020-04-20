import railsServer from '../../api/railsServer';

export const getProjects = () => {
    return async dispatch => {
        dispatch(getProjectsPending());

        try {
            const getProjectsResponse = await railsServer.get('/projects');
            
            const projects = getProjectsResponse.data.projects;

            const commercial = projects.filter(project => project.Industry === 'Commercial');
            const retail = projects.filter(project => project.Industry === 'Retail')

            dispatch(getProjectsSuccess({ commercial, retail }));
        } catch (error) {
            dispatch(getProjectsError(error));
        }
    };
};

export const getProjectsPending = () => {
    return {
        type: 'GET_PROJECTS_PENDING'
    };
}

export const getProjectsSuccess = payload => {
    return {
        type: 'GET_PROJECTS_SUCCESS',
        payload 
    };
};

export const getProjectsError = error => {
    return {
        type: 'GET_PROJECTS_ERROR',
        error
    };
};