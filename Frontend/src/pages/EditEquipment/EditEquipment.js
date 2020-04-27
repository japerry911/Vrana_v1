import React, { Fragment } from 'react';
import { useStyles } from './EditEquipmentStyles';

const EditEquipment = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDivStyle}>
            <h1>Edit Equipment</h1>
        </div>
    );
};

export default EditEquipment;