import * as ReviewApiUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS  = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = () => dispatch => (
    ReviewApiUtil.fetchReviews()
    .then(res => dispatch(receiveReviews(res)))
)

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
    .then(res => dispatch(receiveReview(res)),
    err => dispatch(receiveReviewErrors(err)))
)
