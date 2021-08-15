import { fetchCartItems, fetchCartItem, createCartItem, updateCartItem, deleteCartItem } from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_CART_ITEMS = 'CLEAR_CART_ITEMS';

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const clearCartItems = () => ({
    type: CLEAR_CART_ITEMS
});

export const fetchCartItems = () => dispatch => (
    fetchCartItems()
    .then(res => dispatch(receiveCartItems(res)))
);

export const fetchCartItem = cartItemId => dispatch => (
    fetchCartItem(cartItemId)
    .then(res => dispatch(receiveCartItem(res)))
);

export const updateCart = cartItem => dispatch => (
    updateCartItem(cartItem)
    .then(res => dispatch(receiveCartItem(res)))
)

export const deleteCartItem = cartItemId => dispatch => (
    deleteCartItem(cartItemId)
    .then(res => dispatch(removeCartItem(res)))
);

export const clearCartItems = () => dispatch => dispatch(clearCartItems())
