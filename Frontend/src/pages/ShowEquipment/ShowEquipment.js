import React from 'react';
import { useStyles } from './ShowEquipmentStyles';

const ShowEquipment = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDivStyle}>
            <h1>Show Equipment</h1>
        </div>
    );
};

export default ShowEquipment;