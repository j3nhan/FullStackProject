import { connect } from 'react-redux';
import { fetchItems, fetchItem } from '../../actions/item_actions';
import { createCartItem } from '../../actions/cart_items_actions';
import ItemShow from './Item_show';

const mapStateToProps = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.params.itemId],
    itemAdded: state.entities.cartItems,
    currentUser: state.session.id,
})

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItems()),
    fetchItem: itemId => dispatch(fetchItem(itemId)),
    addCartItem: item => dispatch(createCartItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);