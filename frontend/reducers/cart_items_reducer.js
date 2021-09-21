import { RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART } from "../actions/cart_items_actions";
import { SIGNOUT_CURRENT_USER } from "../actions/session_actions";

const cartItemsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItem.id];
            return nextState;
        case CLEAR_CART:
            delete nextState[action.cartItems];
            return nextState;
        case SIGNOUT_CURRENT_USER:
            return [];
        default: 
            return state;
    }
};

export default cartItemsReducer;