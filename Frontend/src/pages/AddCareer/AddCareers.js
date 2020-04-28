import React, { Fragment, useState } from 'react';
import { useStyles } from './AddCareerStyles';

const AddCareers = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDivStyle}>
            <Fragment><h1>AddCareers</h1></Fragment>
        </div>
    );
};

export default AddCareers;