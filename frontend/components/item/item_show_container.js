import { connect } from 'react-redux';
import { fetchItems, fetchItem } from '../../actions/item_actions';
import { createCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_items_actions';
import { fetchReviews, createReview, deleteReview } from '../../actions/review_actions';
import ItemShow from './Item_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    item: state.entities.items[ownProps.match.params.itemId],
    itemIdMat: ownProps.match.params.itemId,
    itemsAdded: Object.values(state.entities.cartItems),
    reviews: Object.values(state.entities.reviews)
})

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItems()),
    fetchItem: itemIdMat => dispatch(fetchItem(itemIdMat)),
    createCartItem: item => dispatch(createCartItem(item)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    fetchReviews: () => dispatch(fetchReviews()),
    createReview: review => dispatch(createReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);