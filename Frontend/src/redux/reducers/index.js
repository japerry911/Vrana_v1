import projectsReducer from './projects';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    projectsReducer
});

export default allReducers;