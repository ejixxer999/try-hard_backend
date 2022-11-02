class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id
        else
            redirect_to "/"
        end
    end

    def 
end