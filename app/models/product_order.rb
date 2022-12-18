class ProductOrder < ActiveRecord::Base
    belongs_to :orders
    belongs_to :products
    validates :order_id, presence: true

    def order_attributes=(attributes)
        order = Order.find_or_create_by(attributes)
        self.order = order if order.valid? || !self.order
    end
end