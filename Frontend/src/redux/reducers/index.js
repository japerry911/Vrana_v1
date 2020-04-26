import projectsReducer from './projectsReducer';
import adminsReducer from './adminsReducer';
import newsReducer from './newsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    projects: projectsReducer,
    admins: adminsReducer,
    news: newsReducer
});

export default allReducers;