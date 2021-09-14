import * as ReviewApiUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS  = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = review =>({
    type: REMOVE_REVIEW,
    review
})

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = itemId => dispatch => (
    ReviewApiUtil.fetchReviews(itemId)
    .then(res => dispatch(receiveReviews(res))),
    err => (dispatch(receiveReviewErrors(err)))
)

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
    .then(res => dispatch(receiveReview(res)),
    err => dispatch(receiveReviewErrors(err)))
)

export const deleteReview = review => dispatch => (
    ReviewApiUtil.deleteReview(review)
    .then(res => dispatch(removeReview(res)))
)