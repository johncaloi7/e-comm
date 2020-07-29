import React from 'react';

import './cart-dropdown.scss';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const CartDropdown = ({cartItems, history, dispatch, currentUser}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
         {
             currentUser ?
                cartItems.length ? 
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)) 
                :
                <span className="empty-message">Your cart is empty</span>
             :
             <span className="empty-message">Sign to view items</span>
         }
                    
             
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout")
            dispatch(toggleCartHidden())}
        }>
            Go To Checkout
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(CartDropdown));