import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../loading_page';

class CartItems extends React.Component {
    constructor(props) {
        super(props)

        this.updateTotal = this.updateTotal.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
    }

    updateTotal(cartItemsValue) {
        let itemsPrice = [];
        cartItemsValue.forEach(item => itemsPrice.push(item.price));
        let grandTotal = itemsPrice.reduce((a, b) => a + b, 0);
        return (
            <div>{moneyFormatter.format(grandTotal / 100)}</div>
        )
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    updateQuantity(e) {
        e.preventDefault();
    }

    deleteCartItem(e) {
        e.preventDefault();
        this.props.deleteCartItem(this.props.cartItemId)
    }
    
    emptyCart(e) {
        e.preventDefault()

        this.props.clearCart()
        .then(() => this.props.history.push('/checkout'));
        // .then(() => window.location.reload()
    }

    componentDidUpdate(prevProps) {
        const oldProps = Object.values(prevProps.cartItems);
        const newProps = Object.values(this.props.cartItems);

        if (oldProps.length !== newProps.length) {
            this.props.fetchCartItems();
        } 
    }

    render() {

        let cartItemsCount = Object.values(this.props.cartItems).length;
        let cartItemsKey = Object.keys(this.props.cartItems);
        let cartItemsVal = Object.values(this.props.cartItems);
        
        if (!this.props.cartItems) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        }

        if (!this.props.currentUser) {
            return (
                <div className="cart-signin-page">
                    <div className='cart-signin'>
                        <div className="your-cart-empty">Please sign in to access your ValYOU cart.</div>
                        <div className='cart-links'>
                            <Link className='cart-button-link' to='/signin'>
                                <button className="sign-in-yellow">Sign in to your account</button>
                            </Link>
                            <Link className='cart-button-link' to='/signup'>
                                <button className="sign-up-gray">Sign up now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.currentUser && Object.values(this.props.cartItems).length > 0) {
            return (
                <div>
                    <div className="checkout-product">
                        <div className="left-right-cont">
                            <div className='left-cart-cont'>
                                <h1 className='cart-title'>Shopping Cart</h1>
                                <div className="price-title">Price</div>
                                <ul>
                                    {cartItemsKey.map((cartItemId, idx) => (
                                        <li className='cart-list' key={idx}>
                                            <div className='main-cont'>
                                                <div>
                                                    <Link to={`/items/${this.props.cartItems[cartItemId].itemId}`}>
                                                        <img className="checkout-product-image" src={this.props.cartItems[cartItemId].photoUrl} />
                                                    </Link>
                                                </div>

                                                <div className="checkout-product-info">
                                                    <div>
                                                        <Link className="checkout-product-title" to={`/items/${this.props.cartItems[cartItemId].itemId}`}>
                                                            <div>{this.props.cartItems[cartItemId].itemName}</div>
                                                        </Link>
                                                        <div className="in-stock-name">In Stock</div>
                                                        <div className="free-shipping">Eligible for FREE Shipping & FREE Returns</div>
                                                        <label className="subtotal-gift-one">
                                                            <input type='checkbox' className='gift-one'/><div className='gift-text-one'>This is a gift</div>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <p className='delete-cart-item' onClick={() => this.props.deleteCartItem(cartItemId)}>Delete</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="price-product">
                                                <div>{moneyFormatter.format(this.props.cartItems[cartItemId].price / 100)}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className='total-container'>
                                    <div className='items-count'>Subtotal ({cartItemsCount} items): </div>
                                    <div className='cart-total'>{this.updateTotal(cartItemsVal)}</div>
                                </div>
                            </div>

                            <div className="checkout-right">
                                <div className="orders-over">Orders of $25 or more of eligible items qualify for FREE Shipping.</div>
                                <div className='subtotal-cont'>
                                    <div className='items-count'>Subtotal ({cartItemsCount} items): </div>
                                    <div className='cart-total'>{this.updateTotal(cartItemsVal)}</div>
                                </div>

                                <label className="subtotal-gift">
                                    <input type='checkbox' className='gift-checkbox'/><div className='gift-text'>This order contains a gift</div>
                                </label>

                                <button className='proceed-to-checkout' onClick={this.emptyCart}>Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )

        } else {
            return (
                <div>
                    <div className='zero-cart-cont'>
                        <div className='left-cart-cont'>
                            <h1 className='cart-title'>Your ValYOU Cart is empty.</h1>
                            <div className="price-title">Price</div>
                            <br/>
                            <Link to="/" className='shop-today'>
                                <p>Shop today's deals</p>
                            </Link>
                            <div className='total-container'>
                                <div className='items-count'>Subtotal ({cartItemsCount} items): </div>
                                <div className='cart-total'>{this.updateTotal(cartItemsVal)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default CartItems;