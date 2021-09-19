import { connect } from 'react-redux';
import Review from './review';
import { createReview } from '../../actions/review_actions';
import { fetchItem } from '../../actions/item_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId],
    itemIdMat: ownProps.match.params.itemId,

    review: {
        title: '',
        body: '',
        rating: 1,
        item_id: ownProps.match.params.itemId,
        author_id: state.session.id,
    },
});

const mapDispatchToProps = dispatch => ({
    createReview: (review, itemId) => dispatch(createReview(review, itemId)),
    fetchItem: itemId => dispatch(fetchItem(itemId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));
