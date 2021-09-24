import React from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { moneyFormatter } from '../../util/money_util';

class ItemsSearch extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const searchResults = (this.props.items.length > 0 && this.props.items.map((item, idx) => {
            return (
                <div className="search-container">
                    <li key={idx} className="each-item-cont">
                        <Link className='search-cont-link' to={`/items/${item.id}`} onClick={() => { this.props.history.push(`/items/${item.id}`) }} >
                            <img src={item.photoUrl} className='search-img' />
                            <div className='search-name'>{item.itemName}</div>
                            <div className="rating">
                                {Array(item.rating).fill().map((_, idx) => (
                                    <div key={ idx }>
                                        <span role="img" aria-label="star">⭐</span>
                                    </div>
                                ))}
                            </div>
                            <div className='search-price'>{moneyFormatter.format(item.price / 100)}</div>
                            <div className='free-del'>FREE Delivery for Prime Members</div>
                            <div className='tomorrow'>Get it tomorrow</div>
                        </Link>
                    </li>
                </div>
            )
        }))

        if (this.props.items.length) {
            return (
                <div className="search-results-container">
                    {searchResults}
                </div>
            )

        } else {
            return (
                <div className="no-search-container">
                    <img className='no-search-img' src={"images/no_search.jpg"} alt="jeff" />
                    <div className="no-search-term">
                        Sorry! No results found for the given search term. Please try again.
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(ItemsSearch);