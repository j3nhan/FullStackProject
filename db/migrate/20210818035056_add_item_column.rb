class AddItemColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :cart_item_id, :integer
    add_column :items, :review_id, :integer
    add_index :items, :cart_item_id
    add_index :items, :review_id
    
    add_column :users, :review_id, :integer
    add_index :users, :review_id
  end

end
