import { connect } from 'react-redux';
import CartItems from './Cart_items';
import { fetchCartItems, fetchCartItem, createCartItem, deleteCartItem, clearCart } from '../../actions/cart_items_actions';
import { deleteItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    cartItems: state.entities.cartItems,
});


const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchCartItem: cartItemId => dispatch(fetchCartItem(cartItemId)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);