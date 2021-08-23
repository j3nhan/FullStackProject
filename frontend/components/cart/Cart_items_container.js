import { connect } from 'react-redux';
import CartItems from './Cart_items';
import { fetchCartItem, clearCart } from '../../actions/cart_items_actions';
import { deleteItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    cartItem: state.entities.cartItem,
    items: state.entities.cartItem.items
});


const mapDispatchToProps = dispatch => ({
    fetchCartItem: cartItemId => dispatch(fetchCart(cartItemId)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems); 