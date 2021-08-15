import { connect } from 'react-redux';
import { fetchItem } from '../../actions/item_actions';
import ItemShow from './Item_show';

const mapStateToProps = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId],
    // currentUser: state.session.id,
    userCartItems: state.entities.cartItems,
    sessionId: state.session.id,
    matchedId: ownProps.match.params.itemId

})

const mapDispatchToProps = dispatch => ({
    fetchItem: itemId => dispatch(fetchItem(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);