import * as CartItemsAPIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const removeCartItem = cartItem => ({
    type: REMOVE_CART_ITEM,
    cartItem
})

export const fetchCartItems = () => dispatch => (
    CartItemsAPIUtil.fetchCartItems()
    .then(res => dispatch(receiveCartItems(res)))
);

export const fetchCartItem = cartItemId => dispatch => (
    CartItemsAPIUtil.fetchCartItem(cartItemId)
    .then(res => dispatch(receiveCartItem(res)))
);

export const createCartItem = cartItem => dispatch => (
    CartItemsAPIUtil.createCartItem(cartItem)
    .then(res => dispatch(receiveCartItem(res)))
);

export const updateCartItem = cartItem => dispatch => (
    CartItemsAPIUtil.updateCartItem(cartItem)
    .then(res => dispatch(receiveCartItem(res)))
);

export const deleteCartItem = cartItemId => dispatch => (
    CartItemsAPIUtil.deleteCartItem(cartItemId)
    .then(res => dispatch(removeCartItem(res)))
);