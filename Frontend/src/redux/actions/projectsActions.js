import railsServer from '../../api/railsServer';

export const getProjects = () => {
    return async dispatch => {
        dispatch(getProjectsPending());

        try {
            const getProjectsResponse = await railsServer.get('/projects');
            dispatch(getProjectsSuccess(getProjectsResponse.data.projects));
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