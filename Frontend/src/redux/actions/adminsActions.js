import railsServer from '../../api/railsServer';

export const loginPending = () => {
    return {
        type: 'LOGIN_PENDING'
    };
};

export const loginSuccess = payload => {
    return {
        type: 'LOGIN_SUCCESS',
        payload
    };
};

export const loginFailed = error => {
    return {
        type: 'LOGIN_FAILED',
        error 
    };
};

export const attemptLogin = (username, password) => {
    return dispatch => {
        dispatch(loginPending());

        return railsServer.post('/login', { admin: { username, password }}).then(
            response => {
                dispatch(loginSuccess({ admin: response.data.admin }));
                return true;
            },
            error => {
                dispatch(loginFailed(error));
                return false;
            }
        );
    };
};

export const logOut = () => {
    return {
        type: 'LOG_OUT'
    };
};