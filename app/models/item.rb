class Item < ApplicationRecord
    validates :item_name, presence: true, uniqueness: true
    validates :description, :price, presence: true

    has_one_attached :photo
    has_many :reviews, foreign_key: :item_id
    has_many :cart_items, foreign_key: :cart_item_id
end
