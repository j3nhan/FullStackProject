import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

class NavSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { keyword: '' }

        this.searchTerm = this.searchTerm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchItemsSearch(this.state.keyword)
        .then(() => { this.props.history.push('/search')})
        .then(() => this.setState({ keyword: ''}))
    }

    searchTerm(e) {
        e.preventDefault();
        this.setState({ keyword: e.currentTarget.value })
    }

    render() {
        return (
            <form className="search" onSubmit={this.handleSubmit}>
                <select>
                    <option>All</option>
                </select>
                <input type="text" className="searchInput" value={this.state.keyword} onChange={this.searchTerm} />
                <SearchIcon className="searchIcon" onClick={this.handleSubmit} />
            </form>
        )
    }

}

export default withRouter(NavSearch);