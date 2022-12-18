class ApplicationController < ActionController::API
    # skip_before_action :verify_authenticity_token

    include JwtToken
    def authenticate_user
        token = request.headers['Authorization']
        begin
            decoded_hash = jwt_decode(token)
            @current_user = User.find(decoded_hash[:user_id])
        rescue ActiveRecord::RecordNotFound => e
            render json: { error: true, message: 'User not found' }, status: :unauthorized
        rescue JWT::DecodeError => e
            render json: { error: true, message: 'Invalid Token' }, status: :unauthorized
        end
    end

    def generate_token(user)
        jwt_encode({user_id: user.id})
    end
end
