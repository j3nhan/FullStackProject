import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { SIGNOUT_CURRENT_USER } from "../actions/session_actions";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case SIGNOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default usersReducer;