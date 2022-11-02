class ProductsController < ApplicationController
    before_action :set_product, only: [:show]

    def index 
        products = Product.all

        render json: products
    end

    def show 
        product = Product.find_by_id(params[:id])
        render json: product
    end


    private 

    def set_product
        product = Product.find(parmas[:id])
    end





end
