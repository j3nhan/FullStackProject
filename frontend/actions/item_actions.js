import * as ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items
});

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});

const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
})

export const fetchItems = () => dispatch => (
    ItemAPIUtil.fetchItems()
    .then(res => dispatch(receiveItems(res)))
);


export const fetchItem = itemId => dispatch => (
    ItemAPIUtil.fetchItem(itemId)
    .then(res => dispatch(receiveItem(res)))
);

export const deleteItem = itemId => dispatch => (
    ItemApiUtil.deleteItem(itemId)
    .then(() => dispatch(removeItem(itemId)))
);