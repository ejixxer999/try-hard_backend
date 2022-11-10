class ProductOrders < ActiveRecord::Migration[6.1]
  def change
    create_join_table :orders, :products do |t|
      t.index :product_id
      t.index :order_id
      t.integer :quantity
    end
  end
end
              
  
         
 
