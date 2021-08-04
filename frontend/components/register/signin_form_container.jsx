import { connect } from 'react-redux';
import React from 'react';
import { signinUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signin',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signinUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
