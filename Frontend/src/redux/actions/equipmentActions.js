import railsServer from '../../api/railsServer';

export const equipmentPending = () => {
    return {
        type: 'EQUIPMENT_PENDING'
    };
};

export const equipmentSuccess = () => {
    return {
        type: 'EQUIPMENT_SUCCESS'
    };
};

export const equipmentError = error => {
    return {
        type: 'EQUIPMENT_ERROR',
        error 
    };
};

export const getEquipmentSuccess = payload => {
    return {
        type: 'GET_EQUIPMENT_SUCCESS',
        payload 
    };
};

export const getEquipment = () => {
    return dispatch => {
        dispatch(equipmentPending());

        return railsServer.get('/equipment').then(
            response => dispatch(getEquipmentSuccess(response.data.equipment)),
            error => dispatch(equipmentError(error))
        );
    };
};