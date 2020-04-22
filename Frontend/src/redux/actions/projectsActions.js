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

export const getProject = projectId => {
    return async dispatch => {
        dispatch(getProjectPending());

        try {
            const getProjectResponse = await railsServer.get(`/projects/${projectId}`);

            const project = getProjectResponse.data.project;

            dispatch(getProjectSuccess({ project }));
        } catch (error) {
            dispatch(getProjectError({ error }));
        }
    };
};

export const getProjectPending = () => {
    return {
        type: 'GET_PROJECT_PENDING'
    };
}

export const getProjectSuccess = payload => {
    return {
        type: 'GET_PROJECT_SUCCESS',
        payload 
    };
};

export const getProjectError = error => {
    return {
        type: 'GET_PROJECT_ERROR',
        error
    };
};

export const createProjectPending = () => {
    return {
        type: 'CREATE_PROJECT_PENDING'
    };
};

export const createProjectSuccess = () => {
    return {
        type: 'CREATE_PROJECT_SUCCESS', 
    };
};

export const createProjectError = error => {
    return {
        type: 'CREATE_PROJECT_ERROR',
        error
    };
};

export const createProject = uploadObject => {
    return async dispatch => {
        dispatch(createProjectPending());

        try {
            await railsServer.post('/projects', { project: uploadObject });

            dispatch(createProjectSuccess());
        } catch (error) {
            dispatch(createProjectError(error));
        }
    };
};