import { connect } from 'react-redux';
import Review from './Review';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId],

    review: {
        title: '',
        body: '',
        rating: 1,
        item_id: ownProps.match.params.itemId,
        author_id: state.session.id,
    },
});

const mapDispatchToProps = dispatch => ({
    createReview: (review, itemId) => dispatch(createReview(review, itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
