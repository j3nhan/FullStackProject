import { connect } from 'react-redux';
import { fetchItems, fetchItem } from '../../actions/item_actions';
import { createCartItem, updateCartItem, deleteCartItem } from '../../actions/cart_items_actions';
import ItemShow from './item_show';
import { fetchReviews } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

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
    fetchReviews: itemId => dispatch(fetchReviews(itemId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemShow));
