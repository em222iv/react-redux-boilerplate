import initialState from '../initial-state';
import C from '../constants';

const PointsReducer = (state, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case C.POINTS_INC:
            newState.currentValue += 1;
            return newState;
        default:
            return state || initialState().points;
    }
};

export default PointsReducer;
