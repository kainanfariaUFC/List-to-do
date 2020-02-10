import { CONSTANTS } from '../actions';

export const delList = title => {
    return{
        type: CONSTANTS.DELETE_LIST,
        payload: {title},
    };
};
