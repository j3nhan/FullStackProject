class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :item_name, null: false
      t.text :description, null: false
      t.integer :price, null: false

      t.timestamps
    end
    add_index :items, :item_name, unique: true 
  end
end
