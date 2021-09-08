import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../Loading_page';


class CartItems extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            total: 0
        }

        // this.userCart = this.userCart.bind(this);
        this.cartFull = this.cartFull.bind(this);
        this.updateTotal = this.updateTotal.bind(this);

        // const { item } = this.props;
        // this.state = {
        //     id: item.id,
        //     userId: item.userId,
        //     quantity: item.quantity
        // }

        // this.quantity = this.quantity.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
        // this.checkout = this.checkout.bind(this);
    }

    updateTotal(amount) {
        let newAmount = [];
        amount.forEach(item => newAmount.push(item.price));
        let total = newAmount.reduce((a, b) => a + b, 0);
        return (
            <div>{moneyFormatter.format(total / 100)}</div>
        )
    }
    
    componentDidMount() {
        this.props.fetchCartItems();
    }

    componentDidUpdate(prevProps) {
        const prev = Object.values(prevProps.cartItems);
        const current = Object.values(this.props.cartItems);
        
        if (prev.length !== current.length) {
            this.props.fetchCartItems();
        }
    }
    
    componentWillUnmount() {
        this.props.clearCart();
    }
    
    // quantity(e) {
    //     this.setState({quantity: e.target.value})
    //     let nextState = Object.assign({}, this.state, {quantity: e.target.value})
    //     this.props.updateCartItem(nextState)
    // }

    // deleteItem(e) {
    //     this.setState({quantity: 0})
    //     this.props.deleteCartItem(this.props.item.id)
    // }


    // checkout(e) {
    //     alert('Thank you for shopping with ValYOU.')
    // }

    // userCart() {
    //     return (
    //         <div className='cart-signin'>Your ValYOU cart is empty
    //             <Link className='cart-button-link' to='/sigin'>
    //                 <button className="sign-in-yellow">Sign in to your account</button>
    //             </Link>
    //             <Link className='cart-button-link' to='/signup'>
    //                 <button className="sign-up-gray">Sign up now</button>
    //             </Link>
    //         </div>
    //     )
    // }

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
                                            <div>{this.props.cartItems[cartItemId].title}</div>
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

    render() {
        // const {currentUser, cartItems, fetchCartItem, deleteItem, items } = this.props;
        if (!this.props.cartItems) {
            return null
        }   
            
        if (Object.values(this.props.cartItems).length > 0) {
            return (
                <div>
                    <div>{this.cartFull()}</div>
                </div>
            )
        } else {
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
        }


        // let subTotal = cartItems.prices.reduce((a, b) => a + b, 0)
        // return (
        //     <div>
        //         {!currentUser ?
        //         <p className='cart-empty-message'>Please <Link className='cart-empty-link' to='/sigin'>Sign in</Link> or <Link className='cart-empty-link' to='/signup'>sign up</Link> to view your cart.</p>
        //         :
        //         cartItems.items.length ?
        //             <div className='cart-has-items-div'>
        //             <div className='cart-cart-items'>
        //                 <p className='cart-text-main'>Shopping Cart</p>
        //                 <p className='cart-text-price'>Price</p>
        //                 {cartItems.items.map((item, idx) => <CartItem key={item.id} item={item} itemSubtotal={cartItems.prices[idx]} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} />)}
        //             </div>
        //             <div className='cart-aside'>
        //                 <div className='cart-checkout-div'>
        //                 <div className='cart-checkout-subtotal'>
        //                     <p className='cart-checkout-subtotal-text'>Subtotal ({cartItems.items.length} {cartItems.items.length > 1 ? 'items' : 'item'}): </p>
        //                     <p className='cart-checkout-subtotal-amount'>{moneyFormatter.format(subTotal / 100)}</p>
        //                 </div>
        //                 <div className='cart-checkout-button' onClick={this.checkout}>Proceed to checkout</div>
        //                 </div>
        //             </div>
        //             </div>
        //             :
        //             <div className='cart-empty-message'>Your ValYOU Cart is empty.</div>
        //         }

        //             <div className='cart-item-info'>
        //             <Link className='cart-item-name' to={`/items/${item.id}`}>{item.itemName}</Link>
        //            <p className='cart-item-availability'>In Stock</p>
        //             <p className='cart-item-unit-price'>{moneyFormatter.format(item.price / 100)}</p>
        //             <div className='cart-item-quantity-div'>
        //                 <p className='cart-item-quantity-text'>Qty: </p>
        //                 <select className='cart-item-quantity-select' value={item.quantity} onChange={this.quantity}>
        //                 <option value={1}>1</option>
        //                 <option value={2}>2</option>
        //                 <option value={3}>3</option>
        //                 <option value={4}>4</option>
        //                 <option value={5}>5</option>
        //                 </select>
        //             </div>
        //             <p className='cart-item-delete' onClick={this.deleteItem}>Delete</p>
        //             </div>
        //             <p className='cart-item-price'>{moneyFormatter.format(itemSubtotal / 100)}</p>
                    
        //     </div>
        // )
    }

}

export default CartItems;