import { signup, signin, signout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER, 
});

export const receiveSesErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
});

export const signupUser = user => dispatch => (
    signup(user)
    .then(res => dispatch(receiveCurrentUser(res)),
        error => dispatch(receiveSesErrors(error.responseJSON))
    )
);

export const signinUser = user => dispatch => (
    signin(user)
    .then(res => dispatch(receiveCurrentUser(res)),
        error => dispatch(receiveSesErrors(error.responseJSON))
    )
);

export const signoutUser = () => dispatch => (
    signout()
    .then(() => dispatch(signoutCurrentUser()))
);

export const removeErrors = () => dispatch => dispatch(removeSessionErrors());