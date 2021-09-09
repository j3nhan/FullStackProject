@cart_items.each do |item|
    json.set! item.id do
        json.extract! item.item, :id, :item_name, :description, :price, :rating
        json.photoUrl url_for(item.item.photo)
    end
end