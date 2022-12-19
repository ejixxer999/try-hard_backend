class Order < ApplicationRecord
    has_many :orders_products
    has_many :products, through: :orders_products

    accepts_nested_attributes_for :orders_products
end
