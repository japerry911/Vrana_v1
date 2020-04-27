const INITIAL_STATE = { equipment: [], loading: false, error: null };

const equipmentReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'EQUIPMENT_PENDING':
            return { ...state, loading: true };

        case 'EQUIPMENT_SUCCESS':
            return { ...state, loading: false };

        case 'EQUIPMENT_ERROR':
            return { ...state, loading: false, error: action.error };

        case 'GET_EQUIPMENT_SUCCESS':
            return { ...state, loading: false, equipment: action.payload };
        
        default:
            return state;
    }
};

export default equipmentReducer;