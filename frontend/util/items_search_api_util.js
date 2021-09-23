export const fetchItemsSearch = search => {
    return $.ajax ({
        url: '/api/items/search',
        data: { search }
    })
}