import { connect } from 'react-redux';
import Review from './Review';
import { createReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    review: {
        user_id: state.session.id,
        title: '',
        body: '',
        item_id: ownProps.match.params.itemId,
        rating: 1
    },
    
    item: state.entities.items[ownProps.match.params.itemId]
});

const mapDispatchToProps = dispatch => ({
    createReview: (review, itemId) => dispatch(createReview(review, itemId))
});

export default withRouter(connect(mapStateToProps, mapStateToProps)(Review));
