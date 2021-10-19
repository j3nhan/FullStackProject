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

export const deleteCartItem = cartItem => (
    $.ajax({
        method: 'DELETE',
        url: `/api/cart_items/${cartItem.id}`
    })
)

export const clearCart = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/cart_items/clear',
    })
};
