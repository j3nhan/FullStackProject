import { RECEIVE_ITEMS_SEARCH } from "../actions/items_search_actions";

const searchReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_ITEMS_SEARCH:
            return action.itemsSearch 
        default:
            return state;
    }
}

export default searchReducer;