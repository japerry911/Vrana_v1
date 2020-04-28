import React, { Fragment, useEffect } from 'react';
import { useStyles } from './DeleteCareerStyles';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

const DeleteCareer = () => {
    const classes = useStyles();

    const isLoading = useSelector(state => state.careers.loading);
    const token = useSelector(state => state.admins.admin.token);
    const dispatch = useDispatch();
    
    return (
        <div className={classes.mainDivStyle}>
            {isLoading
            ?
            <div className={classes.spinnerDiv}>
                <Spinner />
            </div>
            :
            <Fragment></Fragment>}
        </div>
    );
};

export default DeleteCareer;