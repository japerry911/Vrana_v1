import React, { useState, useEffect, Fragment } from 'react';
import { useStyles } from './EditCareerStyles';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

const EditCareer = () => {
    const classes = useStyles();

    const isLoading = useSelector(state => state.careers.loading);
    const careers = useSelector(state => state.careers.careers);
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

export default EditCareer;