import C from './constants';

export default {
    pointsIncrease(){
        return {type: C.POINTS_INC};
    },
    pointsDecrease(){
        return {type: C.POINTS_DEC};
    }
};
