import { connect } from 'react-redux';
import { signoutUser } from '../../actions/session_actions';

import Header from './Header';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    cart: state.entities.cartItems
});

const mapDispatchToProps = dispatch => ({
    signoutUser: () => dispatch(signoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)