class CreateCatagories < ActiveRecord::Migration[6.1]
  def change
    create_table :catagories do |t|
      t.string :name
      t.integer :product_id
      

      t.timestamps
    end
  end
end
