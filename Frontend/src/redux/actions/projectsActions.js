import railsServer from '../../api/railsServer';

export const getProjects = () => {
    return dispatch => {
        dispatch(projectPending());

        return railsServer.get('/projects').then(
            response => dispatch(getProjectsSuccess(response.data.projects)),
            error => dispatch(projectError(error))
        );
    };
};

export const getProject = id => {
    return dispatch => {
        dispatch(projectPending());

        return railsServer.get(`/projects/${id}`).then(
            response => dispatch(getProjectSuccess(response.data.project)),
            error => projectError(error)
        );
    };
};

export const createProject = (formUploadData, token) => {
    return dispatch => {
        dispatch(projectPending());

        return railsServer.post('/projects', formUploadData, { headers: { Authorization: `Bearer ${token}` }}).then(
            response => dispatch(projectSuccess()),
            error => dispatch(projectError(error))
        );
    };
};

export const deleteProject = (id, token) => {
    return dispatch => {
        dispatch(projectPending());

        return railsServer.delete(`/projects/${id}`, { headers: { Authorization: `Bearer ${token}` }}).then(
            response => dispatch(projectSuccess()),
            error => dispatch(projectError(error))
        );
    };
};

export const updateProject = (id, formUpdateData, token) => {
    return dispatch => {
        dispatch(projectPending());

        return railsServer.put(`/projects/${id}`, formUpdateData, { headers: { Authorization: `Bearer ${token}` }}).then(
            response => dispatch(projectSuccess()),
            error => dispatch(projectError(error))
        );
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