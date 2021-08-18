import { connect } from 'react-redux';
import CartItems from './Cart_items';
import { updateCart, deleteCartItem, clearCart } from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    cartItems: state.entities.cartItems,
});


const mapDispatchToProps = dispatch => ({
    updateCartItem: item => dispatch(updateCart(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems); 