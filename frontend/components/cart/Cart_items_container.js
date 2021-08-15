import { connect } from 'react-redux';
import CartItems from './Cart_items';
import { fetchCartItem, fetchCartItems, deleteCartItem, createCartItem, clearCartItems } from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => ({
    items: state.entities.items,
    curentUserId: state.session.currentUser.id,
    cartItems: Object.values(state.entities.cartItems),
    users: state.entities.users
});


const mapDispatchToProps = dispatch => ({
        fetchCartItems: () => dispatch(fetchCartItems()),
        fetchCartItem: cartItem => dispatch(fetchCartItem(cartItem)),
        createCartItem: cartItem => dispatch(createCartItem(cartItem)),
        deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);