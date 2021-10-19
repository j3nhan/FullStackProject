import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormatter } from '../../util/money_util';


class CartItem extends React.Component {
        constructor(props) {
        super(props)

        this.state = {
            quantity: this.props.cartItem.quantity
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantity !== this.state.quantity) {
            this.props.updateCartItem({
                user_id: this.props.currentUser,
                item_id: this.props.cartItem.itemId,
                quantity: parseInt(this.state.quantity),
                id: this.props.cartItem.id
            })
            location.reload();
        }
    }

    updateQuantity(e) {
        e.preventDefault();

        this.setState({
            quantity: parseInt(e.currentTarget.value)
        });

    }

    render(){
        if (this.props.cartItem === undefined) return null;
        return(
            <li className='cart-list'>
                <div className='main-cont'>
                    <div>
                        <Link to={`/items/${this.props.cartItem.itemId}`}>
                            <img className="checkout-product-image" src={this.props.cartItem.photoUrl} />
                        </Link>
                    </div>

                    <div className="checkout-product-info">
                        <div>
                            <Link className="checkout-product-title" to={`/items/${this.props.cartItem.itemId}`}>
                                <div>{this.props.cartItem.itemName}</div>
                            </Link>
                            <div className="in-stock-name">In Stock</div>
                            <div className="free-shipping">Eligible for FREE Shipping & FREE Returns</div>

                            <label className="subtotal-gift-one">
                                <input type='checkbox' className='gift-one'/><div className='gift-text-one'>This is a gift</div>
                            </label>
                        </div>

                        <div className="qty-delete-div">
                            <form>
                                <div className="qty-cart-div">
                                    <label className='qty-cart-label'>Qty: </label>

                                    <select onChange={ (e) => this.updateQuantity(e) } value={ this.props.cartItem.quantity }> 
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
                            </form>
                            <div className="border-color"> | </div>
                            <p className='delete-cart-item' onClick={() => this.props.deleteCartItem(this.props.cartItem)}>Delete</p>
                        </div>
                    </div>
                </div>

                <div className="price-product">
                    <div>{moneyFormatter.format(this.props.cartItem.price / 100)}</div>
                </div>
            </li>
        )
    }


}

export default CartItem;