import createDataContext from './createDataContext';
import railsServer from '../api/railsServer';

const INITIAL_STATE = { projects: [], showProject: {} };

const projectReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export const { Context, Provider } = createDataContext(projectReducer, {}, INITIAL_STATE);