json.extract! item, :id, :item_name, :description, :price, :rating
json.photoUrl url_for(item.photo)

json.reviews item.reviews.each do |review|
    json.id review.id
    json.title review.title
    json.body review.body
    json.itemId review.item_id
    json.rating review.rating
    json.authorId review.author_id
    json.author review.author
    json.name review.user.name
    json.createdAt review.created_at
end