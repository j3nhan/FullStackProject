import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../Loading_page';
import Header from '../header/Header';
import ReviewIndexContainer from './Review_index_container'

class ItemShow extends React.Component {
    componentDidMount() {
        this.props.fetchItem(this.props.itemIdMat);
        this.addToCart = this.addToCart.bind(this);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.itemIdMat !== this.props.itemIdMat) {
            this.props.fetchItem();
        }
    }

    addToCart(e) {
        e.preventDefault();

        if (this.props.currentUser) {
            this.props.createCartItem({
                user_id: this.props.currentUser,
                item_id: this.props.itemIdMat,
                quantity: 1
            })
            this.props.history.push('/checkout')
        } else {
            this.props.history.push('/signin')
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
            <div className="item-show-entire">
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

                <hr className="horizontal-line"/>
                <div className="review-show-cont">
                                        
                    <div>
                        <h2>Customer Reviews</h2>
                        <h3>Review this Product</h3>
                        <div>Share your thoughts with other customers</div>
                        <div>
                            {this.props.currentUser ? 
                                <Link to={`/reviews/create/${item.id}`}>
                                    <button className="review-button">Write a customer review</button></Link>
                             : 
                                <Link to={"/signin"}>
                                    <button className="review-button">Write a customer review</button>
                                </Link>
                            }
                        </div>
                    </div>

                    <div>
                        <div>
                            <ReviewIndexContainer itemId={this.props.item.id} />
                        </div>
                    </div>
                </div>

            </div>
        )

        return null
    }
}

export default ItemShow;