import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, CLEAR_CART } from "../actions/cart_items_actions";
import { RECEIVE_ITEM, REMOVE_ITEM } from "../actions/item_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ITEM:
            newState.items[action.item.id] = action.item
            return newState;

        case REMOVE_ITEM:
            delete newState.items[action.itemId]
            return newState;

        case RECEIVE_CART_ITEMS:
            const cartItems = {}
            if (!action.cartItems.cartItems) {
                return cartItems;
            } else {
                Object.values(action.cartItems.cartItems).forEach(cartItem => {
                    return cartItems[cartItem.id] = cartItem;
                });
                return cartItems;
            }

        case RECEIVE_CART_ITEM:
            if (Object.values(state.items).length === 0) {
                newState = action.cartItem
                return newState
            } else {
                newState = action.cartItem
                let cartState = action.cartItem.items
                newState.items = {}
                cartState.forEach(item => {
                    newState.items[Object.values(item)[0].id] = Object.values(item)[0]
                })
                return newState
            }

        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, action.user.cartItems);

        case CLEAR_CART:
            return {...state, cart: []};

        default: 
            return state;
    }
};

export default cartItemsReducer;