export const fetchReviews = () => (
    $.ajax({
        url: '/api/reviews'
    })
)

export const fetchReview = () => (
    $.ajax({
        url: '/api/reviews'
    })
)

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
)
