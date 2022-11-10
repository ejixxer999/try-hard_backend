class Orders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
     t.integer :amount 
     t.integer :user_id
     t.integer :collection_of_products
     t.string :status
    end
  end
end

