json.id @cart_item.item.id
json.item_name @cart_item.item.item_name
json.price @cart_item.item.price
json.photoUrl url_for(@cart_item.item.photo)