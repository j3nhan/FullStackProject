@reviews.each do |review|
    json.set! review.id do
        json.id review.id
        json.title review.title
        json.body review.body
        json.rating review.rating
        json.author review.author
        json.itemId review.item_id
        json.authorId review.author_id
        json.created_at review.created_at
        json.name @review.user.name
    end
end