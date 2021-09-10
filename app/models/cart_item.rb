class CartItem < ApplicationRecord
    belongs_to :item, foreign_key: :item_id
    belongs_to :user, foreign_key: :user_id
end