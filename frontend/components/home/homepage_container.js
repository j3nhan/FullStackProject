import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import Homepage from './homepage';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)