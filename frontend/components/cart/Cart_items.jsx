import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';
import LoadingPage from '../Loading_page';


class CartItems extends React.Component {
    constructor(props) {
        super(props) 

        const { item } = this.props;
        this.state = {
            id: item.id,
            userId: item.userId,
            quantity: item.quantity
        }

        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearCart();
    }
    
    handleQuantity(e) {
        this.setState({quantity: e.target.value})
        let nextState = Object.assign({}, this.state, {quantity: e.target.value})
        this.props.updateCartItem(nextState)
    }

    handleDelete(e) {
        this.setState({quantity: 0})
        this.props.deleteCartItem(this.props.item.id)
    }


    handleSubmit(e) {
        alert('Thank you for shopping with ValYOU.')
    }

    render() {
        const {currentUser, cartItems, updateCartItem, deleteCartItem } = this.props;

        if (currentUser) return (
            <div>
                <LoadingPage/>
            </div>
        )
        
        if (this.state.quantity === 0) return (
            <div className='cart-item-deleted'>
                <p><Link className='cart-item-deleted-link' to={`snacks/${item.snack.id}`}>{item.snack.name}</Link> was removed from your Shopping Cart.</p>
            </div>
        )

        let subTotal = cartItems.prices.reduce((a, b) => a + b, 0)
        return (
            <div>
                {!currentUser ?
                <p className='cart-empty-message'>Please <Link className='cart-empty-link' to='/sigin'>Sign in</Link> or <Link className='cart-empty-link' to='/signup'>sign up</Link> to view your cart.</p>
                :
                cartItems.items.length ?
                    <div className='cart-has-items-div'>
                    <div className='cart-cart-items'>
                        <p className='cart-text-main'>Shopping Cart</p>
                        <p className='cart-text-price'>Price</p>
                        {cartItems.items.map((item, idx) => <CartItem key={item.id} item={item} itemSubtotal={cartItems.prices[idx]} updateCartItem={updateCartItem} deleteCartItem={deleteCartItem} />)}
                    </div>
                    <div className='cart-aside'>
                        <div className='cart-checkout-div'>
                        <div className='cart-checkout-subtotal'>
                            <p className='cart-checkout-subtotal-text'>Subtotal ({cartItems.items.length} {cartItems.items.length > 1 ? 'items' : 'item'}): </p>
                            <p className='cart-checkout-subtotal-amount'>{moneyFormatter.format(subTotal / 100)}</p>
                        </div>
                        <div className='cart-checkout-button' onClick={this.handleSubmit}>Proceed to checkout</div>
                        </div>
                    </div>
                    </div>
                    :
                    <div className='cart-empty-message'>Your ValYOU Cart is empty.</div>
                }

                    <div className='cart-item-info'>
                    <Link className='cart-item-name' to={`/items/${item.id}`}>{item.itemName}</Link>
                   <p className='cart-item-availability'>In Stock</p>
                    <p className='cart-item-unit-price'>{moneyFormatter.format(item.price / 100)}</p>
                    <div className='cart-item-quantity-div'>
                        <p className='cart-item-quantity-text'>Qty: </p>
                        <select className='cart-item-quantity-select' value={item.quantity} onChange={this.handleQuantity}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        </select>
                    </div>
                    <p className='cart-item-delete' onClick={this.handleDelete}>Delete</p>
                    </div>
                    <p className='cart-item-price'>{moneyFormatter.format(itemSubtotal / 100)}</p>
                    
            </div>
        )
    }

}

export default CartItems;