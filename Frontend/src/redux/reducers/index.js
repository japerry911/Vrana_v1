import projectsReducer from './projectsReducer';
import adminsReducer from './adminsReducer';
import newsReducer from './newsReducer';
import equipmentReducer from './equipmentReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    projects: projectsReducer,
    admins: adminsReducer,
    news: newsReducer,
    equipment: equipmentReducer 
});

export default allReducers;