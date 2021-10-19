import { connect } from 'react-redux';
import { signoutUser } from '../../actions/session_actions';

import Header from './header';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    cart: Object.values(state.entities.cartItems)
});

const mapDispatchToProps = dispatch => ({
    signoutUser: () => dispatch(signoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)