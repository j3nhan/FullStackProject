import React from 'react';
import ReactDOM from 'react-dom';
import { signinUser, signupUser} from './actions/session_actions';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

// testing
    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.signinUser = signinUser;
    window.signupUser = signupUser;
});