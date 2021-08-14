import * as CartItemsAPIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItems = cartItems => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
}

const recieveCartItem = cartItem => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const removeCartItem = cartItemId => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId: cartItemId.id
    }
}

export const fetchCartItems = () => dispatch => {
    return (
        CartItemsAPIUtil.fetchCartItems()
            .then(cartItems => dispatch(receiveCartItems(cartItems)))
    )
}

export const fetchCartItem = cartItemId => dispatch => {
    return (
        CartItemsAPIUtil.fetchCartItem(cartItemId)
            .then(cartItem => dispatch(receiveCartItem(cartItem)))
    )
}

export const createCartItem = cartItem => dispatch => {
    return (
        CartItemsAPIUtil.createCartItem(cartItem)
            .then(cartItem => dispatch(recieveCartItem(cartItem)))
    )
}

export const deleteCartItem = cartItemId => dispatch => {
    return (
        CartItemsAPIUtil.deleteCartItem(cartItemId)
            .then((cartItemId) => dispatch(removeCartItem(cartItemId)))
    )
}