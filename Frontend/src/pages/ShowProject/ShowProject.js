import React, { useEffect } from 'react';
import { useStyles } from './ShowProjectStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../../redux/actions/projectsActions';
import Spinner from '../../components/Spinner/Spinner';

const ShowProject = ({ match }) => {
    const classes = useStyles();
    const id = match.params.id;
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.projects.loading);
    
    useEffect(() => {
        dispatch(getProject(id));
    }, [dispatch]); 

    return (
        <div>
            {isLoading
            ?
            <Spinner />
            :
            <h1>Show Project Page!</h1>}
        </div>
    );
};

export default ShowProject;