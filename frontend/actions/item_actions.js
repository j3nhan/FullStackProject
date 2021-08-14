import { fetchItems, fetchItem } from "./item_actions"; ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items
});

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});

export const fetchItems = () => dispatch => (
    fetchItems()
    .then(res => dispatch(receiveItems(res)))
);


export const fetchItem = itemId => dispatch => (
    fetchItem(itemId)
    .then(res => dispatch(receiveItem(res)))
);