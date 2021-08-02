import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER, 
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})

export const signupUser = user => dispatch => (
    signup(user)
    .then(res => dispatch(receiveCurrentUser(res)),
    error => dispatch(receiveSesErrors(error.responseJSON))
    )
)

export const loginUser = user => dispatch => (
    login(user)
    .then(res => dispatch(receiveCurrentUser(res)),
    error => dispatch(receiveSesErrors(error.responseJSON))
    )
)

export const logoutUser = () => dispatch => (
    logout()
    .then(() => dispatch(logoutCurrentUser()))
)

export const removeErrors = () => dispatch => (removeSessionErrors())