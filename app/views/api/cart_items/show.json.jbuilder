json.id @cart_item.id
json.user_id @cart_item.user_id
json.items @cart_item.items.each do |item|
    json.set! item.id do
        json.partial! 'item', item: item
        json.photoUrl url_for(item.photo)
    end
end