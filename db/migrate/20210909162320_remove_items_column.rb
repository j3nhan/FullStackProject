class RemoveItemsColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :review_id, :integer
    remove_column :items, :cart_item_id, :integer
  end
end
