const INITIAL_STATE = { admin: {}, loading: false, authed: false, error: null };

const adminsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return { ...state, loading: true };
        
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, admin: action.payload.admin, authed: true };

        case 'LOGIN_FAILED':
            return { ...state, loading: false, authed: false, error: action.error };

        case 'LOGOUT':
            return INITIAL_STATE;
        
        default:
            return state;
    }
};

export default adminsReducer;