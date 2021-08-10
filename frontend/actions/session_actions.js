import { signup, signin, signout } from '../util/session_api_util';

// export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
// export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

// export const receiveCurrentUser = user => ({
//     type: RECEIVE_CURRENT_USER,
//     user
// });

// export const signoutCurrentUser = () => ({
//     type: SIGNOUT_CURRENT_USER, 
// });

// export const receiveSesErrors = errors => ({
//     type: RECEIVE_SESSION_ERRORS,
//     errors
// });

// export const removeSessionErrors = () => ({
//     type: REMOVE_SESSION_ERRORS
// });

// export const signupUser = user => dispatch => (
//     signup(user)
//     .then(res => dispatch(receiveCurrentUser(res)),
//         error => dispatch(receiveSesErrors(error.responseJSON))
//     )
// );

// export const signinUser = user => dispatch => (
//     signin(user)
//     .then(res => dispatch(receiveCurrentUser(res)),
//         error => dispatch(receiveSesErrors(error.responseJSON))
//     )
// );

// export const signoutUser = () => dispatch => (
//     signout()
//     .then(() => dispatch(signoutCurrentUser()))
// );

// export const removeErrors = () => dispatch => dispatch(removeSessionErrors());

// ----------------------------------------------------------------
export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

export const SIGNOUT_USER = "SIGNOUT_USER";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_FAIL = "SIGNOUT_FAIL";

export const SET_USER = "SET_USER";

export const signupUser = () => ({
    type: SIGNUP_USER
});

export const signupSuccess = user => ({
    type: SIGNUP_SUCCESS,
    user
});

export const signupError = error => ({
    type: SIGNUP_FAIL,
    error
});

export const signinUser = () => ({
    type: SIGNIN_USER
});

export const signinSuccess = user => ({
    type: SIGNIN_SUCCESS,
    user
});

export const signinError = error => ({
    type: SIGNIN_FAIL,
    error
});

export const signoutUser = () => ({
    type: SIGNOUT_USER
});

export const signoutSuccess = () => ({
    type: SIGNOUT_SUCCESS
})

export const signoutError = error => ({
    type: SIGNOUT_FAIL,
    error
});

export const setUser = user => ({
    type: SET_USER,
    user
});

export const signupInit = user => dispatch => (
    signup(user)
    .then(res => dispatch(signupSuccess(res))),
    .catch((error) => dispatch(signupError(error.message))); 
);

export const signinInit = user => dispatch => (
    signin(user)
    .then(res => dispatch(signupSuccess(res))),
    .catch((error) => dispatch(signinError(error.message))); 
);

export const signoutInit = () => dispatch => (
    signout()
    .then(() => dispatch(signoutSuccess())),
    .catch((error) => dispatch(signoutError(error.message))); 
);

