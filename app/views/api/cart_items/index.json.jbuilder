@cart_items.each do |cart_item|
    json.set! cart_item.id do 
        json.partial! '/api/cart_items/cart_items', cart_item: cart_item
        json.item_name cart_item.item.item_name
        json.price cart_item.item.price
        json.photoUrl url_for(cart_item.item.photo)
    end
end