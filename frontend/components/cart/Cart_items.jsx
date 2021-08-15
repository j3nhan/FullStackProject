import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';

class CartItems extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            subTotal: 0,
            quantity: 1,
            grandTotal: 0,
            render: false
        };

        this.emptyCart = this.emptyCart.bind(this);
        this.itemsCart = this.itemsCart.bind(this);
        this.updatedSubtotal = this.updatedSubtotal.bind(this);
    }

    updatedSubtotal(sub) {
        let newSub = [];
        sub.forEach(item => newSub.push(item.price));
        let grandTotal = newSub.reduce((a, b) => a + b, 0);
        return (
            <div>
                {moneyFormatter.format(grandTotal / 100)}
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchCartItems();
    }

    componentDidUpdate(prevProps) {
        const prev = Object.values(prevProps.userCartItems);
        const current = Object.values(this,props.userCartItems);

        if (prev.length !== current.length) {
            this.props.fetchCartItems();
        }
    }

    itemsCart() {
        let num = Object.values(this.props.userCartItems).length;
        let cartItemsArr = Object.keys(this.props.userCartItems);
        let finalItemsArr = Object.values(this.props.userCartItems);

        return (
            <div className='cart-container'>
                <header className='cart-head'>Shopping Cart</header>
                <div className='left-side-cart'>
                    <ul className='cart_items'>
                        { cartItemsArr.map( cartItemId => (
                            <li className='cart-index-item' key={cartItemId}>
                                <div className='main-cont'>
                                    <div className='cart-photo-cont'>
                                        <img className='cart-index-item-photo' src={this.props.userCartItems[cartItemId].photoUrl}></img>
                                    </div>
                                    <div className='mid-side-specific'>
                                        <Link className='item-body' to={`/items/${this.props.userCartItems[cartItemId].id}`}>
                                            <span className='cart-item-title'>{this.props.userCartItems[cartItemId].title}</span>
                                        </Link>
                                        <span className='cart-item-artist'><span className='by'>by </span> {this.props.userCartItems[cartItemId].artist}</span>
                                        <span className='in-stock-cart'>In Stock</span>
                                        <span className='cart-free-ship-cap'>FREE Shipping & FREE Returns</span>
                                        <label className='gift'>
                                            <input type='checkbox' className='yes-gift'/><span className='gift-text'>This is a gift</span>
                                        </label>
                                        <div className='qty-delete-row'>
                                            {/* <select className='quantity-cart' value='Qty:'>
                                                <option value='1'>Qty: 1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                                <option value='7'>7</option>
                                                <option value='8'>8</option>
                                                <option value='9'>9</option>
                                                <option value='10'>10</option>
                                            </select> */}
                                            <button className='delete-cart-item' onClick={() => this.props.deleteCartItem(cartItemId)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='price-cont'>
                                    <div className='price-shennanigans'>
                                        <span className='cart-dollar-sign'>$</span><div className='cart-item-price'>{(Math.round(this.props.userCartItems[cartItemId].price * 100) / 100).toFixed(2)}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='right-side-cart'>
                    <div className='subtotal-cont'>
                        <div>Subtotal ({num} items): <span className='cart-subtotal'>${this.updatedSubtotal(finalItemsArr)}</span></div>
                    </div>
                    <button className='proceed-to-checkout'>Proceed to checkout
                        <div className='checkout-message'>
                            Thank you! Your order has been received.
                        </div>
                    </button>
                </div>
            </div>

        )
    }

    emptyCart() {
        return (
            <div className='cart-container'>
                <span className='cart-head' id='empty-cart'>Shopping Cart</span>
                <br></br>
                <span className='empty-cart-message'>Your Shopping Cart is empty.</span>
            </div>
        )
    }

    render() {
        return Object.values(this.props.userCartItems).length === 0 ? this.emptyCart() : this.filledCart()
    }

}

export default CartItems;