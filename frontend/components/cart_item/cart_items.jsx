import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../loading_page';
import CartItem from './cart_item'

class CartItems extends React.Component {
    constructor(props) {
        super(props);

        this.totalQuantity = this.totalQuantity.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }
    
    componentDidUpdate(prevProps, prevState) {
        const oldProps = Object.values(prevProps.cartItems);
        const newProps = Object.values(this.props.cartItems);

        if (oldProps.length !== newProps.length) {
            this.props.fetchCartItems();
        } 
    }

    totalQuantity() {
        let qty = 0;
        this.props.cartItemVal.forEach(item => {
            qty += item.quantity
        });

        return qty;
    }

    updateTotal(cartItemVal) {
        let grandTotal = 0;
        cartItemVal.forEach(item => {
            if (item.price !== undefined) {
                grandTotal += (item.price * item.quantity)
            }
        });

        return moneyFormatter.format(grandTotal / 100)
    }
    
    emptyCart(e) {
        e.preventDefault()

        this.props.clearCart()
        .then(() => this.props.history.push('/thankyou'));
    }

    render() {
        const { currentUser, cartItemVal } = this.props;
        let cartItemsCount = this.props.cartItemVal.length;
        
        if (!this.props.cartItems) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        }

        if (!currentUser) {
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
        } else if (currentUser && cartItemVal.length > 0) {
            return (
                <div>
                    <div className="checkout-product">
                        <div className="left-right-cont">
                            <div className='left-cart-cont'>
                                <h1 className='cart-title'>Shopping Cart</h1>
                                <div className="price-title">Price</div>
                                <ul>
                                    {cartItemVal.map((cartItem) => (
                                        <CartItem 
                                            key={ cartItem.id }
                                            cartItem={ cartItem }
                                            quantity={ cartItem.quantity }
                                            deleteCartItem={this.props.deleteCartItem}
                                            updateCartItem={this.props.updateCartItem}
                                            fetchCartItem={this.props.fetchCartItem}
                                        />
                                    ))}
                                </ul>
                                
                                <div className='total-container'>
                                    <div className='items-count'>Subtotal ({this.totalQuantity()} items): </div>
                                    <div className='cart-total'>{this.updateTotal(cartItemVal)}</div>
                                </div>
                            </div>

                            <div className="checkout-right">
                                <div className="orders-over">Orders of $25 or more of eligible items qualify for FREE Shipping.</div>
                                <div className='subtotal-cont'>
                                    <div className='items-count'>Subtotal ({this.totalQuantity()} items): </div>
                                    <div className='cart-total'>{this.updateTotal(cartItemVal)}</div>
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
                                <div className='cart-total'>{this.updateTotal(cartItemVal)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default CartItems;