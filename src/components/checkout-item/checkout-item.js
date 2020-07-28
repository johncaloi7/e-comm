import React from 'react';

import './checkout-item.scss';

import {connect} from 'react-redux';
import {clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';


const CheckoutItem = ({ cartItems, clearItem, removeOne, addOne }) => {
    const { imageUrl, name, price, quantity } = cartItems;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeOne(cartItems)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addOne(cartItems)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="clear-item" onClick={() => clearItem(cartItems)}>&#10005;</span>
        </div>
    )
}


const mapDispatchToProps  = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    removeOne: item => dispatch(removeItem(item)),
    addOne: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);