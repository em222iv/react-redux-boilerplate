import { combineReducers, createStore } from 'redux';

import pointsReducer from './store/reducers/points';
import initialState from './store/initial-state';

const reducers = combineReducers({
    points: pointsReducer,
});

const store = createStore(reducers, initialState());

export default store;
