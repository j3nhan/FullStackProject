import { connect } from 'react-redux'
import ItemsSearch from './items_search'

const mapStateToProps = state => ({
    items: state.entities.search
})

export default connect(mapStateToProps, null)(ItemsSearch);