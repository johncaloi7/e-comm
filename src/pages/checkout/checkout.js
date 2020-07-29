import React from 'react';

import './checkout.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { cartTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CheckoutPage = ({ cartItems, total, currentUser }) => (
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

        {  cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItems={cartItem}/>))}
        <div className="total">TOTAL: ${total}</div>
            
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        {
            currentUser ?
            <StripeCheckoutButton price={total} /> 
            :
            <h2 className="payment-terms">Log-in or Sign-up to process payment</h2>
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    total: cartTotal,
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(CheckoutPage);