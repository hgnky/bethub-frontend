import { combineReducers } from 'redux';
import animationReducer from './animationReducer';
import slotReducer from './slotReducer';

export default combineReducers({
    animation: animationReducer,
    slots: slotReducer
});
