class OrdersProduct < ActiveRecord::Base
    belongs_to :order
    belongs_to :product

    def order_attributes=(attributes)
        order = Order.find_or_create_by(attributes)
        self.order = order if order.valid? || !self.order
    end
end