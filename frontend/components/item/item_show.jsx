import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../loading_page';
import ReviewIndexContainer from './review_index_container'
import Rating from 'react-rating';
import { withRouter } from 'react-router';

class ItemShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        }

        this.updateQuantity = this.updateQuantity.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.itemCheckout = this.itemCheckout.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchItem(this.props.itemIdMat);
        this.props.fetchReviews(this.props.itemIdMat);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.itemIdMat !== this.props.itemIdMat) {
            this.props.fetchItem();
        }
    }

    updateQuantity(e) {
        e.preventDefault();
        this.setState({
            quantity: parseInt(e.target.value)
        });
    }

    updateRating() {
        let sumRating = 0;
        let averageRating = 0;
        if (this.props.reviews.length !== 0) {
            this.props.reviews.forEach(review => {
                if (review.rating) {
                    sumRating += review.rating;
                }
            });

            averageRating = Math.round(sumRating / this.props.reviews.length);
        }

        return averageRating;
    }
    
    updateReview(field) {
        return e => this.setState({ [field]: e })
    }

    itemCheckout() {
        return this.props.itemsAdded.some((item) => (item.itemId === this.props.item.id));
    }
    
    addToCart(e) {
        e.preventDefault();

        if (this.props.currentUser) {
            let cartItemId;
            this.props.itemsAdded.forEach((item) => {
                if (item.itemId === this.props.item.id) {
                    cartItemId = item.id
                }
            })

            const currItem = this.props.itemsAdded.filter((item) => item.id === cartItemId);
            const currQuantity = currItem.length > 0 ? currItem[0].quantity : 0;
            
            if (this.itemCheckout()) {
                this.props.updateCartItem({
                    user_id: this.props.currentUser,
                    item_id: this.props.item.id,
                    quantity: currQuantity + parseInt(this.state.quantity),
                    id: cartItemId
                })
                    .then(() => this.props.history.push('/checkout'))
            } else {
                this.props.createCartItem({
                    user_id: this.props.currentUser,
                    item_id: this.props.item.id,
                    quantity: parseInt(this.state.quantity),
                    id: cartItemId
                })
                    .then(() => this.props.history.push('/checkout'))
            }

        } else {
            this.props.history.push('/signin')
        }
    }

    render() {
        const { item, reviews } = this.props;
        const today = new Date().toDateString();

        const starIcon = (
            <img className="item-star-rev" src={'images/staricon.svg'} />
        )

        const noStar = (
            <img className="item-star-rev" src={'images/nostar.svg'} />
        )

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
                                <Rating
                                    initialRating={ this.updateRating() }
                                    emptySymbol={ noStar }
                                    fullSymbol={ starIcon }
                                    readonly
                                />
                                </div>
                                <div className="ratings-word"> {reviews.length} ratings</div>
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

                            <form onSubmit={this.addToCart}>
                            <div className="qty-div">
                                    <label className='qty-label'>Qty:</label>
                                    <select onChange={ this.updateQuantity } value={ this.state.quantity }> 
                                        <option value={"1"}>1</option>
                                        <option value={"2"}>2</option>
                                        <option value={"3"}>3</option>
                                        <option value={"4"}>4</option>
                                        <option value={"5"}>5</option>
                                        <option value={"6"}>6</option>
                                        <option value={"7"}>7</option>
                                        <option value={"8"}>8</option>
                                        <option value={"9"}>9</option>
                                        <option value={"10"}>10</option>
                                    </select>
                            </div>
                            <button className="clickbutton" type="submit">Add to Cart</button>
                            </form>

                        </div>
                    </div>

                <div className='horizontal-line-cont'>
                    <div className="horizontal-line"></div>
                </div>
                <div className="review-show-cont">          
                    <div className="review-left-cont">
                        <h2 className="customer-review-title">Customer Reviews</h2>
                        <div>
                            <img className='review-stars' src={"images/stars-rev.png"}/>
                        </div>
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

export default withRouter(ItemShow);