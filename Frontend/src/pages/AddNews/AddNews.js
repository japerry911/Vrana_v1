import React, { Fragment } from 'react';
import { useStyles } from './AddNewsStyles';

const AddNews = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDivStyle}>
            <h1>Add News Page</h1>
        </div>
    );
};

export default AddNews;