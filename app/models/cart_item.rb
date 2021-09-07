class CartItem < ApplicationRecord
    belongs_to :users, foreign_key: :user_id, optional: true
    belongs_to :items, foreign_key: :item_id, optional: true
end
