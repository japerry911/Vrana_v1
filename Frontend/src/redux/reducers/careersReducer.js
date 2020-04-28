const INITIAL_STATE = { careers: [], loading: false, error: null };

const careersReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CAREERS_PENDING':
            return { ...state, loading: true };

        case 'CAREERS_ERROR':
            return { ...state, loading: false, error: action.error };

        case 'GET_CAREERS_SUCCESS':
            return { ...state, loading: false, careers: action.payload };
        
        default: 
            return state;
    }
};

export default careersReducer;