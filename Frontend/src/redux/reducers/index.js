import projectsReducer from './projectsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    projects: projectsReducer
});

export default allReducers;