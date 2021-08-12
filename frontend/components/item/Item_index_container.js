import { connect } from 'react-redux';
import { fetchItems } from '../../actions/session_actions';
import { selectItems } from '../../reducers/selectors';

const mapStateToProps = state => ({
    items: selectItems(state)
});

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex);