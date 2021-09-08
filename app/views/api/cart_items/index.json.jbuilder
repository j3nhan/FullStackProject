@cart_items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :title, :description, :price
        json.photoUrl url_for(item.photo)
    end
end