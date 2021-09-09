class ChangeCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :user_id, :integer
    add_column :cart_items, :cart_id, :integer
    add_index :cart_items, :cart_id
  end
end
