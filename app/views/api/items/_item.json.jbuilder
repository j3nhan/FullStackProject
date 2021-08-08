json.extract! item, :id, :item_name, :description, :price
json.photoUrl url_for(item.photo)