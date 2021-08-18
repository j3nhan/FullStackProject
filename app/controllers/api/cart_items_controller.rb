class Api::CartItemsController < ApplicationController
    def index
        return nil if !current_user
        @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id }
        render :show
    end

    def show
        return nil if !current_user
        @cart_item = CartItem.find(params[:id])
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        if @item.save
            render :show
        else 
            render json: @item.errors.full_messages, status: 422
        end
    end

    def update 
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.user_id == current_user.id
            if @cart_item.update_attributes(cart_item_params)
                @cart_items = CartItem.all.select {|cart_item| cart_item.user_id == current_user.id}        
                render :show
            else
                render json: ['Cart is not updated.'], status: 401
            end
        end
    end

    def destroy 
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy 
        if current_user && @cart_item && (@cart_item.user_id == current_user.id)
            if @cart_item.delete
                @cart_items = CartItem.all.select {|cart_item| cart_item.user_id == current_user.id}        
                render :show
            end
        else  
            render json: ['Item is not deleted from cart.'], status: 401
        end
    end

    def cart_item_params 
        params.require(:cart_item).permit(:user_id, :item_id, :quantity)
    end

end
