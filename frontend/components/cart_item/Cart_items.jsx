import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import Header from '../header/Header';

class CartItems extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0
        }

        this.updateTotal = this.updateTotal.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
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

    componentDidUpdate(prevProps) {
        const oldProps = Object.values(prevProps.cartItems);
        const newProps = Object.values(this.props.cartItems);

        if (oldProps.length !== newProps.length) {
            this.props.fetchCartItems();
        } 
    }

    componentWillUnmount() {
        this.props.clearCart();
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
                <div className='cart-signin'>
                    <div>Shopping Cart</div>
                    <div>Your ValYOU cart is empty</div>
                    <Link className='cart-button-link' to='/signin'>
                        <button className="sign-in-yellow">Sign in to your account</button>
                    </Link>
                    <Link className='cart-button-link' to='/signup'>
                        <button className="sign-up-gray">Sign up now</button>
                    </Link>
                </div>
            )
        } else if (this.props.currentUser && Object.values(this.props.cartItems).length > 0) {
            return (
                <div>
                    <Header/>
                        
                    <div>Shopping Cart</div>
                    <div className='left-cart-cont'>
                        <ul>
                            {cartItemsKey.map((cartItemId, idx) => (
                                <li key={idx}>
                                    <div>
                                        <Link to={`/items/${this.props.cartItems[cartItemId].itemId}`}>
                                            <img src={this.props.cartItems[cartItemId].photoUrl}/>
                                        </Link>
                                    </div>

                                    <div className='mid-cart-cont'>
                                        <div>
                                            <Link to={`/items/${this.props.cartItems[cartItemId].itemId}`}>
                                                <div>{this.props.cartItems[cartItemId].itemName}</div>
                                            </Link>
                                        </div>
                                        <div>
                                            <div>Price</div>
                                            <div>{moneyFormatter.format(this.props.cartItems[cartItemId].price / 100)}</div>
                                        </div>
                                        <div>
                                            <p className='delete-cart-item' onClick={() => this.props.deleteCartItem(cartItemId)}>Delete</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='right-cart-cont'>
                        <div className='subtotal-cont'>
                            <div>Subtotal ({cartItemsCount} items): 
                                <div className='cart-total'>{this.updateTotal(cartItemsVal)}</div>
                            </div>
                        </div>

                        <button className='proceed-to-checkout'>Proceed to checkout</button>

                        <div>
                            <div>In Stock</div>
                            <div>FREE Shipping & FREE Returns</div>
                        </div>

                        <label className='gift'>
                            <input type='checkbox' className='gift-checkbox'/><div className='gift-text'>This is a gift</div>
                        </label>
                    </div>

                </div>
            )

        } else {
            return (
                <div>
                    <Header/>
                    <div>Shopping Cart</div>
                    <div>Your ValYOU cart is empty</div>
                </div>
            )
        }
    }
}

export default CartItems;