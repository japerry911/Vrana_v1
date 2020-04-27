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

export const getSpecificEquipmentSuccess = payload => {
    return {
        type: 'GET_SPECIFIC_EQUIPMENT_SUCCESS',
        payload 
    };
};

export const getSpecificEquipment = id => {
    return dispatch => {
        dispatch(equipmentPending());

        return railsServer.get(`/equipment/${id}`).then(
            response => dispatch(getSpecificEquipmentSuccess(response.data.equipment)),
            error => dispatch(equipmentError(error))
        );
    };
}

export const createEquipment = (formUploadData, token) => {
    return dispatch => {
        dispatch(equipmentPending());

        return railsServer.post('/equipment', formUploadData, { headers: { Authorization: `Bearer ${token}` }}).then(
            response => dispatch(equipmentSuccess()),
            error => dispatch(equipmentError(error))
        );
    };
};

export const deleteEquipment = (id, token) => {
    return dispatch => {
        dispatch(equipmentPending());

        return railsServer.delete(`/equipment/${id}`, { headers: { Authorization: `Bearer ${token}` }}).then(
            response => dispatch(equipmentSuccess()),
            error => dispatch(equipmentError(error))
        );
    };
};

export const updateEquipment = (id, formUpdateBody, token) => {
    return dispatch => {
        dispatch(equipmentPending());

        return railsServer.put(`/equipment/${id}`, formUpdateBody).then(
            response => dispatch(equipmentSuccess()),
            error => dispatch(equipmentError(error))
        );
    };
};