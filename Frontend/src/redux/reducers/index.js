import projectsReducer from './projectsReducer';
import adminsReducer from './adminsReducer';
import newsReducer from './newsReducer';
import equipmentReducer from './equipmentReducer';
import careersReducer from './careersReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    projects: projectsReducer,
    admins: adminsReducer,
    news: newsReducer,
    equipment: equipmentReducer,
    careers: careersReducer
});

export default allReducers;