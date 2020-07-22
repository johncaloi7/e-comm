import React from 'react';

import './checkout.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { cartTotal, selectCartItems } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItems={cartItem}/>
            )
        )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    total: cartTotal,
    cartItems: selectCartItems
})


export default connect(mapStateToProps)(CheckoutPage);