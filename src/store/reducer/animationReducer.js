import { SHOW_SIDEBAR } from '../types';

const initialState = {
    show_sidebar: true
};

function animationReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return {
                ...state,
                show_sidebar: action.payload
            }
        default:
            return state;
    }
}

export default animationReducer;