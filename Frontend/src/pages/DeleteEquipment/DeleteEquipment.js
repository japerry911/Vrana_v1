import React from 'react';
import { useStyles } from './DeleteEquipmentStyles';

const DeleteEquipment = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDivStyle}>
            <h1>Delete Equipment</h1>
        </div>
    );
};

export default DeleteEquipment;