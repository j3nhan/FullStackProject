import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../Loading_page';
import Header from '../header/Header';

class ItemShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) 
        this.props.fetchItem(this.props.match.params.itemId)
    }

    render() {
        const { item } = this.props;
        
        if (!item) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        }
        
        if (item) return (
            <div>
            <Header/>
            <div className='itemshow-div'>
                <div className='itemshow-main-div'>
                    <div className='itemshow-pic-div'>
                        <img className='itemshow-pic-img' src={item.photoUrl} />
                    </div>

                    <div className='itemshow-details-div'>
                        <div className='itemshow-details-name'>
                            {item.itemName}
                            <p className='itemshow-details-seller'>Support Yours Truly</p>
                        </div>
                        <div className='itemshow-details-rating-div'>
                            <div className="rating">
                                {Array(item.rating).fill().map((_, idx) => (
                                    <div key={ idx }>
                                        <span role="img" aria-label="star">⭐</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='itemshow-details-price-div'>
                        <p>Price: </p>
                        <p className='itemshow-details-price'>{moneyFormatter.format(item.price / 100)}</p>
                        </div>
                        <div className='itemshow-details-description-div'>
                            <p>About this item</p>
                            <ul className='itemshow-details-description-bullets'>
                                <li>{item.description}</li>
                                <li>ValYOU's Choice</li>
                                <li>Environmentally Friendly and Cruelty-Free</li>
                                <li>Made with love and care</li>
                                <li>Fast and Free Shipping</li>
                                <li>Eligible for Return, Refund or Replacement</li>
                            </ul>
                        </div>
                        <button className="clickbutton" onClick={this.addItem}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        )

        return null
    }
}

export default ItemShow;