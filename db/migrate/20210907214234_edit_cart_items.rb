class EditCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :item_id, :integer
    add_index :cart_items, :item_id
    add_index :cart_items, :user_id
  end
end
