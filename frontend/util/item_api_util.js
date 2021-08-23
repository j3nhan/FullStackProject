export const fetchItems = () => (
    $.ajax({
        url: '/api/items'
    })
)

export const fetchItem = itemId => (
    $.ajax({
        url: `/api/items/${itemId}`,
    })
)

export const deleteItem = itemId => (
    $.ajax({
        method: "DELETE",
        url: `/api/items/${itemId}`
    })
)

