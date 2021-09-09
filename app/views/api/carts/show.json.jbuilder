json.array! @cart.cart_items do |cartitem|
    json.extract! cartitem, :id, :item_id
    json.extract! cartitem.item, :item_name, :price
end