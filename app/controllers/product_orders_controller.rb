class ProductOrdersController < ApplicationController

    def new 
        if params[:order_id] && order = Order.find_by_id(params[:order_id])
            @po = order.product_orders.build
        else
            @po = ProductOrder.new
            @po.build_order
        end

    end 

    def create
        @po = product_orders.build(po_params)
        if @po.save
            render json: status: :completed
        else
            render json: {error: "Please review your order"}
        
    end


    def show
        @po = ProductOrder.find_by_id(params[:id])
    end 


    def edit  
        if current_user
            @po = current_user.orders.find_by_id(parmas[:id])
        end
    end 

    def update 
        @po = ProductOrder.find_by_id(params[:id])
        if @po && @po.update(po_params)
            render json: @po
        else
            render json: {error: "Update cannot be completed"}
        end
    end 

    def destroy
        set_po
        @po.destroy

    end 




    private 

    def set_po
        @po = ProductOrder.find_by(id: params[:id])
        if !@po
            render json: 
        end 
        # figure out where to go after deleted !!
    end 

    def po_params
        params.require(:product_order).permit(product_ids: [], :order_id, :quantity)
    end


end


