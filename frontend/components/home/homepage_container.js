import { connect } from 'react-redux';
import { signoutUser } from '../../actions/session_actions';
import Homepage from './Homepage';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    signoutUser: () => dispatch(signoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)