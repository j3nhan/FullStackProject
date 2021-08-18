class Api::ItemsController < ApplicationController
    def index
        @items = Item.all
        render :index
    end

    def show
        @item = Item.find(params[:id])
        render :show
    end

    def update
        @item = Item.find(params[:id])
        if @item
            @item.update(item_params)
            render :show
        end
    end

    def create
        @item = Item.new(item_params)
        if @item.save!
            render :show
        else
            render json: @item.errors.full_messages, status: 401
        end
    end

    def destroy
        @item = Item.find(params[:id])
        @item.destroy
    end

    private
    def item_params
        params.require(:item).permit(:item_name, :description, :price, :rating, photos: [], :cart_item_id)
    end

end
