json.array! @items do |item|
    json.extract! item, :id, :item_name, :description, :price, :rating
    json.photoUrl url_for(item.photo)
end