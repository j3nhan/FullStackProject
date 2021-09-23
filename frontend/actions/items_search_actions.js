import * as SearchAPIUtil from '../util/items_search_api_util'

export const RECEIVE_ITEMS_SEARCH = "RECEIVE_ITEMS_SEARCH"

const receiveItemsSearch = itemsSearch => ({
    type: RECEIVE_ITEMS_SEARCH,
    itemsSearch
})

export const fetchItemsSearch = search => dispatch => (
    SearchAPIUtil.fetchItemsSearch(search)
    .then(res => dispatch(receiveItemsSearch(res)))
)