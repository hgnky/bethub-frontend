import { GET_ALL_GAMES, GET_SLOT_GAMES } from '../types';

const initialState = {
    push_games: [],
    all_games: []
};

function slotReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SLOT_GAMES:
            return {
                ...state,
                push_games: action.payload
            }
        case GET_ALL_GAMES:
            return {
                ...state,
                all_games: action.payload
            }
        default:
            return state;
    }

}

export default slotReducer;