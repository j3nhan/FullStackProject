class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            signin(@user)
            render "api/users/show"
        else
            render json: ["Email/password combination does not exist."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            signout
            render "api/users/show"
        else
            render json: ["No user has signed in."], status: 404
        end
    end
end
