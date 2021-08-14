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
        if current_user && current_user.cart_items.any? {|cart_item| cart_item.item_id == params[:cart_item][:item_id].to_i}
            @cart_item = current_user.cart_items.find_by(item_id: params[:cart_item][:item_id].to_i)
            new_qty = @cart_item.quantity + params[:cart_item][:quantity].to_i

            if @cart_item.update_attributes({user_id: params[:cart_item][:user_id], item_id: params[:cart_item][:item_id], quantity: new_qty, fulfilled: false})
                    @cart_items = CartItem.all.select {|cart_item| cart_item.user_id == current_user.id}        
                    render :show
                else
                    render json: ['Item is not available.'], status: 401
                end
            else
                @cart_item = CartItem.new(cart_item_params)

                if @cart_item.save!
                    @cart_items = CartItem.all.select {|cart_item| cart_item.user_id == current_user.id}        
                    render :show
                end
            end
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
