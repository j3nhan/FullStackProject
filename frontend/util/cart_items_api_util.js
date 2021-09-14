export const fetchCartItems = () => (
    $.ajax({
        url: `/api/cart_items`
    })
)

export const fetchCartItem = cartItemId => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`
    })
) 

export const createCartItem = cartItem => (
    $.ajax({
        method: 'POST',
        url: `/api/cart_items`,
        data: { cartItem }
    })
)

export const updateCartItem = cartItem => (
    $.ajax({
        method: 'PATCH',
        url: `/api/cart_items/${cartItem.id}`,
        data: { cartItem }
    })
)

export const deleteCartItem = cartItemId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/cart_items/${cartItemId}`
    })
)

export const clearCart = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/cart_items/clear'
    })
)