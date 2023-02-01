class UserMailer < ApplicationMailer
    default from: 'freshlookdetails@gmail.com'

    def welcome_email
        @user = params[:user]
        @url = 'http://localhost:3000/login'
        mail(to: @user.email, subject: "welcome to FreshLookDetails")
    end
end
