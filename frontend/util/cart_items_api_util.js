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

export const updateCartItem = (cartItemId, cartItem) => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'PATCH',
        data: { cartItem }
    })
)

export const deleteCartItem = (cartItemId) => (
    $.ajax({
        url: `/api/cart_items/${cartItemId}`,
        method: 'DELETE'
    })
)