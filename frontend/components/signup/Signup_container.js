import { connect } from 'react-redux';
import SignUpForm from './signUpForm'
import { signupUser, receiveSesErrors, removeSesErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'signup',
});

const mapDispatchToProps = dispatch => ({
    signupUser: (user) => dispatch(signupUser(user)),
    receiveSesErrors: errors => dispatch(receiveSesErrors(errors)),
    removeSesErrors: () => dispatch(removeSesErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);