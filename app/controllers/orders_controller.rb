class OrdersController < ApplicationController
    def new
        @order = Order.new
    end

    def index 
        render json: Order.all
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
        order = Order.create(order_params)
        render json: order, status :placed

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
        params.permit(:amount, :user_id, :collection_of_products, :status)
    end

end 
