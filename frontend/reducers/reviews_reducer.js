import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions'
import { SIGNOUT_CURRENT_USER } from "../actions/session_actions";

const reviewsReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, state, action.review);
        case REMOVE_REVIEW:
            delete nextState[action.reviewId.id]
            return nextState;
        case SIGNOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default reviewsReducer;