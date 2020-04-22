import projectsReducer from './projectsReducer';
import adminsReducer from './adminsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    projects: projectsReducer,
    admins: adminsReducer
});

export default allReducers;