import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import itemsReducer from './items_reducer';
import cartItemsReducer from './cart_items_reducer';
import reviewsReducer from './reviews_reducer';
import searchReducer from './items_search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    items: itemsReducer,
    cartItems: cartItemsReducer,
    reviews: reviewsReducer,
    search: searchReducer
})

export default entitiesReducer;