import { connect } from 'react-redux';
import CartItems from './cart_items';
import { fetchCartItems, fetchCartItem, createCartItem, updateCartItem, deleteCartItem, clearCart } from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    item: state.entities.items[ownProps.match.params.itemId],
    itemIdMat: ownProps.match.params.itemId,
    cartItems: state.entities.cartItems,
    cartItemKey: Object.keys(state.entities.cartItems), 
    cartItemVal: Object.values(state.entities.cartItems)
});

const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchCartItem: cartItemId => dispatch(fetchCartItem(cartItemId)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
    deleteCartItem: cartItem => dispatch(deleteCartItem(cartItem)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);