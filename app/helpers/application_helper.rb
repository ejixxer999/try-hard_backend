module ApplicationHelper

    def current_user
     @user ||= User.find_by_id(session[:user_id])
    end

    def logged_in?
     !!session[:user_id]
    end 

    def logout
        session.delete(:user_id)
        @current_user = nil
    end

    def security
     if !logged_in?
        redirect_to root_path
        else
        end
    end
end