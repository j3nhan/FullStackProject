import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../Loading_page';
import Header from '../header/Header';

class ItemShow extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     qty: 1
        // }

        this.buyItem = this.buyItem.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchItem(this.props.itemIdMat);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.itemIdMat !== this.props.itemIdMat) {
            this.props.fetchItem();
        }
    }

    buyItem(currItem) {
        // console.log({
        //     user_id: this.props.currentUser,
        //     item_id: currItem.id
        // })
        this.props.addCartItem({

            item_id: currItem.id
        })
    }

    addToCart(e) {
        e.preventDefault();
        
        if (this.props.currentUser) {
            let newArr = [];
            for (let i = 0; i < this.props.itemsAdded.length; i++) {
                newArr.push(this.props.itemsAdded[i])
            }
            // this.props.itemsAdded.forEach(item => {
            //     newArr.push(item);
            // })

            if (newArr.includes(this.props.item)) {
                return (
                    <div>
                        <div>
                            Added to your cart
                        </div>
                    </div>
                )
            } else {
                this.buyItem(this.props.item);
                this.props.history.push('/checkout');
                
            }
        
        } else {
            this.props.history.push('/signin');
        }

    }


    render() {
        const { item } = this.props;
        // if (item === undefined) return null;
        
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
                        <Link to="/checkout">
                            <button className="clickbutton" onClick={this.addToCart}>Add to Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )

        return null
    }
}

export default ItemShow;