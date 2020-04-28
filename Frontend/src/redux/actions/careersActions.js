import railsServer from '../../api/railsServer';

export const careersPending = () => {
    return {
        type: 'CAREERS_PENDING'
    };
};

export const careersError = error => {
    return {
        type: 'CAREERS_ERROR',
        error
    };
};

export const getCareersSuccess = payload => {
    return {
        type: 'GET_CAREERS_SUCCESS',
        payload
    };
};

export const careersSuccess = () => {
    return {
        type: 'CAREERS_SUCCESS'
    };
};

export const createCareer = (formUploadData, token) => {
    return dispatch => {
        dispatch(careersPending());

        return railsServer.post('/careers', formUploadData).then(
            response => dispatch(careersSuccess()),
            error => dispatch(careersError(error))
        );
    };
};

export const getCareers = () => {
    return dispatch => {
        dispatch(careersPending());

        return railsServer.get('/careers').then(
            response => dispatch(getCareersSuccess(response.data.careers)),
            error => dispatch(careersError(error))
        );
    };
};