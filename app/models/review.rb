class Review < ApplicationRecord
    validates :title, :body, :rating, :item_id, :author, :author_id, presence: true

    belongs_to :user, foreign_key: :author_id

    belongs_to :item, foreign_key: :item_id
end
