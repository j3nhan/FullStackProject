import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';

class ItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) this.props.fetchItem(this.props.match.params.itemId)
    }

    render() {
        const { item } = this.props;
        console.log(item);
        if (!item) return null;
        return (
            <div className="item">
                <div className="info">
                    <Link to={`/items/${item.id}`} className="item-name">
                        <p>{ item.itemName }</p>
                    </Link>

                    <div className="rating">
                        {Array(item.rating).fill().map((_, idx) => (
                            <div key={ idx }>
                                <span role="img" aria-label="star">⭐</span>
                            </div>
                        ))}
                    </div>

                    <p>
                        <strong>{ moneyFormatter.format(item.price / 100) } </strong>
                    </p>

                    {/* description */}

                </div>

                <img src={ item.photoUrl } />
                <button onClick={}>Add To Cart</button>
            </div>
        )
    }
}

export default ItemShow;