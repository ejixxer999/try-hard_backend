class UsersController < ApplicationController
    
    def new
        @user = User.new
    end 

    def index 
        @users = User.all
        if @users
            render json: {
                users: @users
            }
        else
            render json: {
                status: 500,
                errors: ['no users found']
            }
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            render json: {
                status: :created,
                user: @user
            }
        else
            render json: {
                status: 500, 
                errors: @user.errors.full_messages
            }
        end
    end 

    def show
        @user = current_user
    end 

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end 


end
