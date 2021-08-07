import { RECEIVE_ITEM } from '../actions/item_actions'

const itemsReducer = (state = {}, action) => {
    Object.freeze(state.items);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ITEM:
            
    }
}