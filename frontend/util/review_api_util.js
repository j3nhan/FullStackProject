export const fetchReviews = (reviewId) => (
    $.ajax({
        url: `/api/reviews/${itemId}/reviews`
    })
)

export const fetchReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`
    })
)

export const createReview = (review, itemId) => (
    $.ajax({
        method: 'POST',
        url: `/api/items/${itemId}/reviews`,
        data: { review }
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
)
