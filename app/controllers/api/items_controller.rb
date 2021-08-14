class Api::ItemsController < ApplicationController
    def index
        @items = Item.all
        render :index
    end

    def show
        @item = Item.find(params[:id])
        render :show
    end

    private
    def item_params
        params.require(:item).permit(:item_name, :description, :price, :rating, photos: [])
    end

end
