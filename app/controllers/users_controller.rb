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
            @token = generate_token(@user)
            render json: {
                user: @user, token: @token
            }, status: :created
        else
            render json: {
                errors: @user.errors.full_messages
            }, status: :ok
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
