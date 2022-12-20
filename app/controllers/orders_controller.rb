class OrdersController < ApplicationController
    before_action :authenticate_user
    def new
        @order = Order.new
    end

    def index 
        orders = current_user.orders
        render json: orders
    end 

    def show
        order = Order.find_by(id:params[:id])
        if order
            render json: order
        else
            render json: {error: "Order not found"}, status: :not_found
        end

    end 

    def create 
        @order = @current_user.orders.create!(order_params)
        render json: @order, status: :created
    end

    def update
        order = Order.find_by(id:params[:id])
        if order
            order.update(order_params)
            render json: order
        else
            render json: {error: "Order not found"}, status: :not_found
        end
    end 

    private

    def order_params
        params.require(:order).permit(:amount, :orders_products_attributes => [:product_id])
    end

end 
