class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :id
      t.string :first_name
      t.string :email
      t.string :password_digest
      t.string :session_token
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
