import React, { Fragment } from 'react';
import { useStyles } from './EditNewsStyles';

const EditNews = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDivStyle}>
            <Fragment>
                <h1>Edit News</h1>
            </Fragment>
        </div>
    );
};

export default EditNews;