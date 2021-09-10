class ModifyCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :cart_id
    add_column :cart_items, :quantity, :integer
    add_column :cart_items, :user_id, :integer
    add_index :cart_items, :user_id
  end
end
