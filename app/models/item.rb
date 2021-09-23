class Item < ApplicationRecord
    validates :item_name, presence: true, uniqueness: true
    validates :description, :price, presence: true

    has_one_attached :photo
    has_many :reviews, foreign_key: :item_id
    has_many :cart_items, foreign_key: :item_id

    def self.search_by(query)
        self.where("item_name ILIKE ?", "%#{query}%")
            .or(self.where("description ILIKE ?", "%#{query}%"))
    end
end
