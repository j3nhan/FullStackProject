class Api::CartsController < ApplicationController
    def show
        @cart = Cart.find_by(user_id: current_user.id)
        render :show
    end

end
