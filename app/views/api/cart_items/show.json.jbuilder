json.items do 
    @cart_items.each do |cart_item|
        json.set! cart_item.item_id do 
            json.partial! 'api/items/item', item: cart_item.item
            json.photoUrl url_for(item.photo)
        end

    end
end


json.cartItems do 
    @cart_items.each do |cart_item|
        json.set! cart_item.id do 
            json.partial! 'api/cart_items/cart_item', cart_item: cart_item
        end
    end
end
