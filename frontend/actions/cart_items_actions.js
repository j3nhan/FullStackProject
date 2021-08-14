import { fetchCartItems, fetchCartItem, createCartItem, updateCartItem, deleteCartItem } from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

const recieveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const removeCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId: cartItemId.id
});

export const fetchCartItems = () => dispatch => (
    fetchCartItems()
    .then(res => dispatch(receiveCartItems(res)))
);

export const fetchCartItem = cartItemId => dispatch => (
    fetchCartItem(cartItemId)
    .then(res => dispatch(receiveCartItem(res)))
);

export const addCartItem = cartItem => dispatch => (
    createCartItem(cartItem)
    .then(res => dispatch(receiveCartItems(res)))
);

export const editCartItem = (cartItemId, cartItem) => dispatch => (
    updateCartItem(cartItemId, cartItem)
    .then(res => dispatch(receiveCartItems(res)))
);

export const deleteCartItem = cartItemId => dispatch => (
    deleteCartItem(cartItemId)
    .then(res => dispatch(removeCartItem(res)))
);