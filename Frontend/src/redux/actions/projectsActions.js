import railsServer from '../../api/railsServer';

export const getProjects = () => {
    return async dispatch => {
        dispatch(projectPending());

        try {
            const getProjectsResponse = await railsServer.get('/projects');
            
            const projects = getProjectsResponse.data.projects;

            const commercial = projects.filter(project => project.Industry === 'Commercial');
            const retail = projects.filter(project => project.Industry === 'Retail');
            const housing = projects.filter(project => project.Industry === 'Housing');

            dispatch(getProjectsSuccess({ commercial, retail, housing }));
        } catch (error) {
            dispatch(projectError(error));
        }
    };
};

export const getProject = projectId => {
    return async dispatch => {
        dispatch(projectPending());

        try {
            const getProjectResponse = await railsServer.get(`/projects/${projectId}`);

            const project = getProjectResponse.data.project;

            dispatch(getProjectSuccess({ project }));
        } catch (error) {
            dispatch(projectError({ error }));
        }
    };
};

export const createProject = (formUploadData, token) => {
    return async dispatch => {
        dispatch(projectPending());

        try {
            await railsServer.post('/projects', formUploadData, { headers: { Authorization: `Bearer ${token}` }});

            dispatch(projectSuccess());
        } catch (error) {
            dispatch(projectError(error));
        }
    };
};

export const deleteProject = (projectId, token) => {
    return async dispatch => {
        dispatch(projectPending());

        try {
            await railsServer.delete(`/projects/${projectId}`, { headers: { Authorization: `Bearer ${token}` }});

            dispatch(projectSuccess());
        } catch (error) {
            dispatch(projectError(error));
        }
    };
};

export const updateProject = (projectId, formUpdateData, token) => {
    return async dispatch => {
        dispatch(projectPending());

        try {
            await railsServer.put(`/projects/${projectId}`, formUpdateData, { headers: { Authorization: `Bearer ${token}` }});

            dispatch(projectSuccess());
        } catch (error) {
            dispatch(projectError(error));
        }
    };
};

export const projectPending = () => {
    return {
        type: 'PROJECT_PENDING'
    };
};

export const projectSuccess = () => {
    return {
        type: 'PROJECT_SUCCESS',
    };
};

export const projectError = error => {
    return {
        type: 'PROJECT_SUCCESS',
        error
    };
};

export const getProjectsSuccess = payload => {
    return {
        type: 'GET_PROJECTS_SUCCESS',
        payload 
    };
};

export const getProjectSuccess = payload => {
    return {
        type: 'GET_PROJECT_SUCCESS',
        payload 
    };
};