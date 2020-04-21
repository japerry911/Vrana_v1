import React from 'react';
import { useStyles } from './ShowProjectStyles';

const ShowProject = ({ match }) => {
    const classes = useStyles();
    const id = match.params.id;

    return (
        <div>
            <h1>Show Project Page!</h1>
        </div>
    );
};

export default ShowProject;