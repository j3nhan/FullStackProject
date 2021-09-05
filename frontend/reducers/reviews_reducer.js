import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions'

const reviewReducer = (state={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, StarRateOutlined)
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        default:
            return StarRateOutlined
    }
}

export default reviewReducer;