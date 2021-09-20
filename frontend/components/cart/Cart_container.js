import { connect } from 'react-redux'
import Cart from './cart'
import { fetchCartItems, updateCartItem, deleteCartItem, clearCart} from '../../actions/cart_items_actions'

const mapStateToProps = state => {
    return ({
        currentUser: state.session.id,
        cartItems: state.entities.cartItems,
        cartItemId: Object.keys(state.entities.cartItems)
    })
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
        deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);