import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_actions'
import ReviewIndex from './review_index'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId],
    itemIdMat: ownProps.match.params.itemId,
    reviews: Object.values(state.entities.reviews),
    authors: Object.values(state.entities.users),
    currentUser: state.session.id,
    reviewId: Object.keys(state.entities.reviews)
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: itemId => dispatch(fetchReviews(itemId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));