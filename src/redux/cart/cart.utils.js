export const addItemToCart = (cartItems, addedCartItem) => {
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === addedCartItem.id
    )

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === addedCartItem.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, { ...addedCartItem, quantity: 1 }]
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => 
        cartItem.id === cartItemToRemove.id )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}