import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, ADD_CART_ITEM, UPDATE_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART } from "../actions/cart_items_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
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
            return Object.assign({}, state, action.cartItem);

        case RECEIVE_CURRENT_USER: 
            return Object.assign({}, state, action.user.cartItems);
        
        case ADD_CART_ITEM:
            const newCart = [...state.cart, action.item];
            return {...state, cart: newCart};

        case UPDATE_CART_ITEM:
            const nextState = Object.assign({}, state);
            nextState.forEach(item => {if (item.id === action.item.id) item.quantity = action.item.quantity})
            return nextState;
            
        case REMOVE_CART_ITEM:
            let updatedCart = [...state.cart];
            const index = state.cart.findIndex(
                (item) => item.id === action.item
            );
            if (index >= 0) {
                updatedCart.splice(index, 1);
            }
            return {...state, cart: updatedCart};

        case CLEAR_CART:
            return {...state, cart: []};

        default: 
            return state;
    }
};

export default cartItemsReducer;