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