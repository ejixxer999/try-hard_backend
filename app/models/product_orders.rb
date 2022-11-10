class Product_Orders < ActiveRecord
    belongs_to :orders
    belongs_to :products
end