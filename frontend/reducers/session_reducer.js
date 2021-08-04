import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER } from "../actions/session_actions";

const _nullSession = {
  id: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const { id } = action.user;
            return Object.assign({}, { id });
        case SIGNOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
  }
};

export default sessionReducer;