import * as CartItemsAPIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const ADD_CART_ITEM = 'ADD_CART_ITEM'; 
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
});

const createCartItem = item => ({
    type: ADD_CART_ITEM,
    item
})

const updateCartItem = item => ({
    type: UPDATE_CART_ITEM,
    item
})

const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})

export const fetchCartItems = () => dispatch => (
    CartItemsAPIUtil.fetchCartItems()
    .then(res => dispatch(receiveCartItems(res)))
);

export const fetchCartItem = cartItemId => dispatch => (
    CartItemsAPIUtil.fetchCartItem(cartItemId)
    .then(res => dispatch(receiveCartItem(res)))
);

export const addCartItem = cartItem => dispatch => (
    CartItemsAPIUtil.createCartItem(cartItem)
    .then(res => dispatch(createCartItem(res)))
);

export const updateCart = cartItem => dispatch => (
    CartItemsAPIUtil.updateCartItem(cartItem)
    .then(res => dispatch(updateCartItem(res)))
);

export const deleteCartItem = cartItemId => dispatch => (
    CartItemsAPIUtil.deleteCartItem(cartItemId)
    .then(res => dispatch(removeCartItem(res)))
);

export const clearCart = () => dispatch => (
    dispatch({type: CLEAR_CART})
)