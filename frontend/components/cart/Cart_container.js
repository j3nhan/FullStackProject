import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Cart from './Cart'
import { fetchCartItems, updateCartItem, deleteCartItem} from '../../actions/cart_items_actions'

const mSTP = state => {
    return ({
        currentUser: state.users.id,
        cartItems: state.entities.cartItems,
        cartItemId: Object.keys(state.entities.cartItems)
    })
}

const mDTP = dispatch => {
    return {
        fetchCartItems: () => dispatch(fetchCartItems()),
        updateCartItem: cartItem => dispatch(updateCartItem(cartItem)),
        deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    }
}

export default withRouter(connect(mSTP, mDTP)(Cart))