import React from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/session_actions';
import SessionForm from './Session_form';

const mapStateToProps = ({errors}) => {
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
