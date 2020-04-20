import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../redux/actions/projectsActions';

const Sandbox = () => {
    const projectsState = useSelector(state => state.projects)
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1>Sandbox:</h1>
            <button onClick={() => console.log(projectsState)}>Projects</button>
            <button onClick={() => dispatch(getProjects())}>Fetch Projects</button>
        </div>
    );
};

export default Sandbox;