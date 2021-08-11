import React from 'react';
import { connect } from 'react-redux';
import SignInForm from './SignInForm';
import { signinUser , receiveSesErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
    signinUser: user => dispatch(signinUser(user)),
    receiveSesErrors: errors => dispatch(receiveSesErrors(errors)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);