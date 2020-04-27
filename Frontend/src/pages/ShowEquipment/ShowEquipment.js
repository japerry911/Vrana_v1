import React, { Fragment, useEffect } from 'react';
import { useStyles } from './ShowEquipmentStyles';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { getSpecificEquipment } from '../../redux/actions/equipmentActions';

const ShowEquipment = ({ match }) => {
    const classes = useStyles();

    const id = match.params.id;

    const isLoading = useSelector(state => state.equipment.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificEquipment(id));
    }, [dispatch, id]);

    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment>
            </Fragment>}
        </div>
    );
};

export default ShowEquipment;