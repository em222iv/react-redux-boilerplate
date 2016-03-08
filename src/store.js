import { combineReducers, createStore } from 'redux';

import pointsReducer from './reducers/points';
import initialState from './initial-state';

const reducers = combineReducers({
    points: pointsReducer,
});

const store = createStore(reducers, initialState());

export default store;
