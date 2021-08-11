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

                    <p>
                        <strong>{ moneyFormatter.format(item.price / 100) } </strong>
                    </p>

                    <div>
                        {Array(item.rating).fill().map((_, idx) => (
                            <p key={ idx }>
                                <span role="img" aria-label="star">⭐</span>
                            </p>
                        ))}
                    </div>
                </div>

            <img src={ item.photoUrl } />
            <button>Add To Cart</button>

        </div>

        )
    }
}

export default ItemShow;