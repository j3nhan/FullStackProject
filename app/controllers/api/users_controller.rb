class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = selected_user
    end

    private
    def selected_user
        User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:first_name, :email, :password)
    end
end

# $.ajax({
#     method: "POST",
#     url: '/api/users',
#     data: { user: {
#         first_name: 'test',
#         email: 'test1@test',
#         password: 'testing'
#     } }
# })