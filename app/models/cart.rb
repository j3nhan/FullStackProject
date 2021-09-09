class Cart < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user, foreign_key: :user_id
    has_many :cart_items, foreign_key: :cart_id
    has_many :items, through: :cart_items, source: :item
end
