import { connect } from 'react-redux'
import { fetchItemsSearch } from '../../actions/items_search_actions'
import NavSearch from './nav_search'

const mapStateToProps = state => ({
    search: state.entities.search 
})

const mapDispatchToProps = dispatch => ({
    fetchItemsSearch: search => dispatch(fetchItemsSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);