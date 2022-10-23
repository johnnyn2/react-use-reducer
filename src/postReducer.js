import {ACTION_TYPES} from './actionTypes';

export const INIT_STATE = {
    loading: false,
    post: {},
    error: false,
};

export const postReducer = (state, action) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_START:
            return {
                ...state,
                loading: true,
                error: false,
                post: {}
            };
        case ACTION_TYPES.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                post: action.payload
            };
        case ACTION_TYPES.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                post: {}
            }
        default:
            return state;
    }
}