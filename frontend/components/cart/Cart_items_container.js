import { connect } from 'react-redux';
import CartItems from './Cart_items';
import { fetchCartItem, fetchCartItems, deleteCartItem} from '../../actions/cart_items_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    userCartItems: state.entities.cartItems
});


const mapDispatchToProps = dispatch => ({
        fetchCartItems: () => dispatch(fetchCartItems()),
        fetchCartItem: cartItem => dispatch(fetchCartItem(cartItem)),
        deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems); 