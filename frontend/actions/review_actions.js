import * as ReviewAPIUtil from '../util/review_api_util'

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

const removeReview = reviewId =>({
    type: REMOVE_REVIEW,
    reviewId
})

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = itemId => dispatch => (
    ReviewAPIUtil.fetchReviews(itemId)
    .then(res => dispatch(receiveReviews(res))),
    err => (dispatch(receiveReviewErrors(err)))
)

export const createReview = (review, itemId) => dispatch => (
    ReviewAPIUtil.createReview(review, itemId)
    .then(res => dispatch(receiveReview(res)),
    err => dispatch(receiveReviewErrors(err)))
)

export const deleteReview = reviewId => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
    .then(res => dispatch(removeReview(res)))
)