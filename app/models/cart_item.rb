class CartItem < ApplicationRecord
    validates :cart_id, :item_id, presence: true
    belongs_to :cart, foreign_key: :cart_id
    belongs_to :item, foreign_key: :item_id
end
