import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../loading_page';
import ReviewIndexContainer from './review_index_container'

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
        const today = new Date().toDateString();

        if (!item) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        }
        
        if (item) return (
            <div className="item-show-entire">
                    <div className='itemshow-main-div'>
                        <div>
                            <img className='itemshow-pic-img' src={item.photoUrl} />
                        </div>

                        <div className='itemshow-details-div'>
                            <div className='itemshow-details-name'>{item.itemName}</div>
                            <p className='itemshow-details-seller'>Support Yours Truly</p>
                            <div className='itemshow-details-rating-div'>
                                <div className="rating">
                                    {Array(item.rating).fill().map((_, idx) => (
                                        <div key={ idx }>
                                            <span role="img" aria-label="star">⭐</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="ratings-word">1,234 ratings</div>
                            </div>
                            <div className='best-seller'>#1 Best Seller</div>
                            
                            <div className='itemshow-price-div'>
                                <div className='itemshow-price'>Price: </div>
                                <div className='itemshow-details-price'>{moneyFormatter.format(item.price / 100)}</div>
                                <div className='fast-shipping'>Get <span id='free-bold'>Fast, Free Shipping</span> with <span id="valyou-prime">ValYOU Prime</span></div>
                            </div>

                            <div className='itemshow-details-description-div'>
                                <p className='about-item'>About this item</p>
                                <ul className='itemshow-details-description-bullets'>
                                    <li>{item.description}</li>
                                    <li>ValYOU's Choice</li>
                                    <li>Environmentally Friendly and Cruelty-Free</li>
                                    <li>Made with love and care</li>
                                    <li>Eligible for Return, Refund or Replacement</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div className="add-to-cart-box">
                            <div className="pur" >One-time purchase</div>
                            <div className="pur">Fastest delivery:</div>
                            <div className="pur-date"> { today } </div>
                            <div className="in-stock">In Stock</div>
                            <div className="qty-div">
                                <label className='qty-label'>Qty:</label>
                                <select name="qty" id="qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <button className="clickbutton" onClick={this.addToCart}>Add to Cart</button>
                        </div>
                    </div>

                <div className='horizontal-line-cont'>
                    <div className="horizontal-line"></div>
                </div>
                <div className="review-show-cont">          
                    <div className="review-left-cont">
                        <h2 className="customer-review-title">Customer Reviews</h2>
                        <h3 className='review-this'>Review this Product</h3>
                        <div className='share-thoughts'>Share your thoughts with other customers</div>
                        <div>
                            {this.props.currentUser ? 
                                <Link to={`/reviews/create/${item.id}`}>
                                    <button className="review-button">
                                        <div className="review-text">Write a customer review</div>
                                    </button></Link>
                             : 
                                <Link to={"/signin"}>
                                    <button className="review-button">
                                        <div className="review-text">Write a customer review</div>
                                    </button>
                                </Link>
                            }
                        </div>
                    </div>

                    <div className="review-right-cont">
                        <ReviewIndexContainer itemId={this.props.item.id} />
                    </div>
                </div>

            </div>
        )

        return null
    }
}

export default ItemShow;