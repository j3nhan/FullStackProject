import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../Loading_page';
import Header from '../header/Header'

class ItemShow extends React.Component {
    constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addItem = this.addItem.bind(this);
        
    }
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) 
        this.props.fetchItem(this.props.match.params.itemId)
    }

    addItem(currentItem) {
        this.props.createCartItem({
            user_id: this.props.sessionId,
            item_id: currentItem.id
        });
    }

    addToCart(e) {
        e.preventDefault();

        if (this.props.sessionId) {
            let { item, userCartItems } = this.props;
            let cartItems = Object.values(userCartItems);
            let itemsArr = [];
            for (let i = 0; i < cartItems.length; i++) {
                itemsArr.push(cartItems[i])
            }
            if (itemsArr.includes(item)) {
                return (
                    <div>
                        <span className='already-added-message'>
                            already added to your cart
                        </span>
                    </div>
                )
            } else {
                this.addItem(item);
            }
        } else {
            this.props.history.push('/signin');
        }
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
                <button className="clickbutton" onClick={this.addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        )

        return null
    }
}

export default ItemShow;