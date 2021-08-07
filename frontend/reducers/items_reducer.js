import { RECEIVE_ITEMS, RECEIVE_ITEM } from '../actions/item_actions'

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ITEMS:
            return action.items;
        case RECEIVE_ITEM:
            nextState[action.item.id] = action.item;
            return nextState;
        default: 
            return state;
    }
}

export default itemsReducer;