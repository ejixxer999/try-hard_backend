class ProductsController < ApplicationController
    before_action :set_product, only: [:show, :index, :update]

    def index 
        products = Product.all

        render json: products
    end

    def show 
        product = Product.find_by_id(params[:id])
        render json: product
    end

    def update 
        product = Product.find_by(id:params[:id])
        if product
            render json: product
        else
            render json: {error: "Product not avalible"}, status: :not_found
        end
    end 


    private 

    def set_product
        product = Product.find_by(params[:id])
    end





end
