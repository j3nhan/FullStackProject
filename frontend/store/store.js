import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

// didn't add logger

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer, 
        preloadedState, 
        applyMiddleware(thunk)
    )
);


export default configureStore;