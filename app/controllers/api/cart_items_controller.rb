class Api::CartItemsController < ApplicationController
    def index 
        @cart_items = current_user.cart_items
    end

    def show
        @cart_item = CartItem.find(params[:id])
        return nil if !current_user
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save!
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 401
        end
    end

    def update 
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item
            @cart_item.update(cart_item_params)
            render :show
        else
            render json: ['Cart is not updated.'], status: 401
        end
    end

    def destroy 
        @cart_item = CartItem.find_by(id: params[:id])
        @cart_item.destroy 
        render :show
    end

    def cart_item_params 
        params.require(:cart_item).permit(:user_id, :item_id, :quantity)
    end

end
