json.extract! @cart_items, :user_id, :item_id, :quantity

json.array! @cart_items do |item|
  json.partial! '/api/cart_items', item: item
end