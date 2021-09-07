class CartItem < ApplicationRecord
    belongs_to :users, foreign_key: :user_id, optional: true
    has_many :items, foreign_key: :item_id
end
