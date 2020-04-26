import React, { Fragment } from 'react';
import { useStyles } from './DeleteNewsStyles';

const DeleteNews = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainDivStyle}>
            <Fragment>
                <h1>Delete Page</h1>
            </Fragment>
        </div>
    );
};

export default DeleteNews;