import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_actions'
import ReviewIndex from './Review_index'

const mapStateToProps = (state, ownProps) => ({
    reviews: Object.values(state.entities.reviews),
    authors: state.entities.users,
    authorId: state.session.id,
    // userKey: Object.keys(state.entities.users),
    // reviewKey: Object.keys(state.entities.reviews)
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: itemId => dispatch(fetchReviews(itemId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);