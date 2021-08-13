class Api::CartItemsController < ApplicationController
    def index
        @cart_items = current_user.cart_items
    end

    def show
        @cart_item = CartItem.find(params[:id])
    end

    def create 
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save 
            render :show
        else 
            render :json['Item is not available.'], status: 422
        end
    end

    def destroy 
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy 
        render :show
    end

    def cart_item_params 
        params.require(:cartItem).permit(:user_id, :item_id)
    end

end
