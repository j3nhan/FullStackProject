import { SET_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case SET_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
};

export default usersReducer;