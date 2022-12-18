class RemoveColumnFromOrders < ActiveRecord::Migration[6.1]
  def change
    
      remove_column :orders, :collection_of_products
    
  end
end
