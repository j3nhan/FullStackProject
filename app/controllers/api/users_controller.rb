class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            signin(@user)
            Cart.create!(user_id: user.id)
            @user = User.includes(:cart).find_by(id: user.id)
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end