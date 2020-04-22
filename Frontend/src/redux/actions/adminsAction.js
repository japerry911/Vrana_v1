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
    return async dispatch => {
        dispatch(loginPending());

        try {
            const loginAttemptResponse = await railsServer.post('/login', { admin: { username, password }});
            
            const admin = loginAttemptResponse.data.admin;

            dispatch(loginSuccess({ admin }));
            return true;
        } catch (error) {
            dispatch(loginFailed({ error }));
            return false;
        }
    };
};