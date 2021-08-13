import { connect } from 'react-redux';
import { signoutUser } from '../../actions/session_actions';

import Homepage from './homepage';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    signoutUser: () => dispatch(signoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)