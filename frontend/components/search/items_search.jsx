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
                <li key={idx}>
                    <Link onClick={() => { this.props.history.push(`/items/${item.id}`) }} >
                        <div>
                            <img src={item.photoUrl} />
                        </div>
                        <div>
                            <div>{item.itemName}</div>
                        <div>
                            <div>Price: </div>
                            <div>{moneyFormatter.format(item.price / 100)}</div>
                            </div>
                            <div>
                                <div>Get it as soon as tomorrow</div>
                                <div>FREE Delivery for Prime Members</div>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        }))

        if (this.props.items.length) {
            return (
                <div>
                    <div>
                        <ul className="search-list">
                            {searchResults}
                        </ul>
                    </div>
                </div>
            )

        } else {
            return (
                <div>
                    <div className="no-search-cont">
                        <div className="no-search-term">
                            No items were found that match the given search term. Please try again.
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(ItemsSearch);