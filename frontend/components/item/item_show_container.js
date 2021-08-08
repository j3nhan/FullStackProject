import { connect } from 'react-redux';
import { fetchItems, fetchItem } from '../../actions/item_actions';
import ItemShow from './Item_show';

const mapStateToProps = (state, ownProps) => ({
    item: state.entities.items[ownProps.match.itemId]
})

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItems()),
    fetchItem: itemId => dispatch(fetchItem(itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);