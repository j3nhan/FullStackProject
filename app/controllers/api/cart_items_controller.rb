class Api::CartItemsController < ApplicationController
    def show
        @cart_item = CartItem.find(params[:id])
        return nil if !current_user

        if @cart_item
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 404 
        end
    end

    def create
        cart_item_params[:user_id] != "" ? @cart_item = CartItem.new(cart_item_params) : @cart_item = CartItem.new()

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
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy 
    end

    def cart_item_params 
        params.require(:cart_item).permit(:id, :item_id, :user_id)
    end

end
