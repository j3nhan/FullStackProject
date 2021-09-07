class CartItem < ApplicationRecord
    validates :user_id

    belongs_to :users, foreign_key: :user_id
    has_many :items, foreign_key: :item_id
end
