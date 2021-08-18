class Reviews < ActiveRecord::Migration[5.2]
  def change
    t.string "title", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.integer "item_id", null: false
    t.string "author", null: false
    t.integer "author_id", null: false
  end

  add_index :reviews, :author_id
  add_index :reviews, :item_id
end
