import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0
        }

        this.cartFull = this.cartFull.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
    }

    updateTotal(amount) {
        let itemsPrice = [];
        let grandTotal = itemsPrice.reduce((a, b) => a + b, 0);
        amount.forEach(item => itemsPrice.push(item.price));
        return (
            <div>{moneyFormatter.format(grandTotal / 100)}</div>
        )
    }

    componentDidMount() {
        this.props.fetchCartItems();
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

    cartFull() {
        let cartItemsCount = Object.values(this.props.cartItems).length;
        let cartItemsKey = Object.keys(this.props.cartItems);
        let cartItemsVal = Object.values(this.props.cartItems);

        return (
            <div>
                <div>Shopping Cart</div>
                <div className='left-cart-cont'>
                    <ul>
                        {cartItemsKey.map(cartItemId => (
                            <li key={cartItemId}>
                                <div>
                                    <img src={this.props.cartItems[cartItemId].photoUrl}/>
                                </div>

                                <div className='mid-cart-cont'>
                                    <div>
                                        <Link to={`/items/${this.props.cartItems[cartItemId].id}`}>
                                            <div>{this.props.cartItems[cartItemId].itemName}</div>
                                        </Link>
                                    </div>
                                    <div>
                                        <div>Price</div>
                                        {moneyFormatter.format(this.props.cartItems[cartItemId].price / 100)}
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
                    <div>Subtotal ({cartItemsCount} items): <div className='cart-total'>{this.updateTotal(cartItemsVal)}</div></div>
                    </div>

                    <button className='proceed-to-checkout'>Proceed to checkout
                        <div className='checkout'>
                            Thank you! Your order has been received.
                        </div>
                    </button>

                    <div>
                        <div>In Stock</div>
                        <div>Prime & FREE Returns</div>
                    </div>

                    <label className='gift'>
                        <input type='checkbox' className='gift-checkbox'/><div className='gift-text'>This is a gift</div>
                    </label>
                </div>

            </div>
        )
    }

    componentWillUnmount() {
        this.props.clearCart();
    }

    render() {
        if (!this.props.cartItems) {
            return null
        }

        if (Object.values(this.props.cartItems).length === 0) {
            return (
                <div className='cart-signin'>Your ValYOU cart is empty
                    <Link className='cart-button-link' to='/signin'>
                        <button className="sign-in-yellow">Sign in to your account</button>
                    </Link>
                    <Link className='cart-button-link' to='/signup'>
                        <button className="sign-up-gray">Sign up now</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <div>
                    <div>{this.cartFull}</div>
                </div>

            )
        }
    }
}

export default Cart;