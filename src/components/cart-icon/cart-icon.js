import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const CartIcon = ({toggleCartHidden, itemCount, currentUser}) => (
    <div className="cart-icon" onClick={toggleCartHidden} >
         <ShoppingIcon className="shopping-icon" />
        {
            currentUser ?  
            <span className="item-count">{itemCount}</span>
            :
            <span className="item-count">0</span>
        }
        
    </div>
)


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);