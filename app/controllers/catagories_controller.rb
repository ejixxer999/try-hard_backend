class CatagoriesController < ApplicationController
    before_action :set_catagory, only: [:show]
    def index
        @catagories = Catagories.all 
        render json: @catagories.to_json(:include => :products) 
    end 

    def show
        @catagories = Catagories.find_by_id(params[:id])
        render json: @catagories
    end 

    
end
