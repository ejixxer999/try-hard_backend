class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:user][:username])
        if @user && @user.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: {
                logged_in: true,
                user: @user
            }
        else
            render json: {
                status: 401, 
                errors: ['user not found']
            }
        end
    end

    def create_oauth
        auth = request.env['omniauth.auth']
        user = User.find_or_create_by(email: auth.info.email)
        token = JWT.encode({ user_id: user.id }, 
        Rails.application.secrets.secret_key_base, 'HS256')
        
        render json: { token: token }
    end

    def google_login
        user_email = request.env['omniauth.auth']['info']['email']
        user_name = request.env['omniauth.auth']['info']['name']
        user = User.find_or_create_by(email: user_email) do |user|
            user.username = user_name
            user.password = SecureRandom.hex
        end
        session[:user_id] = user.id

        redirect_to user_path(user)

    end 

    #def destroy
     #   logout
     #   redirect_to '/'
   # end 
   def destroy
    # Invalidate the JWT by clearing the `user_id` from the payload
    payload = JWT.decode(request.headers['Authorization'], Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
    payload[0]['user_id'] = nil

    # Render an empty JSON object
    render json: {}

end