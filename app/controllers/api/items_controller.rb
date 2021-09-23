class Api::ItemsController < ApplicationController
    def index
        @items = Item.all
        render :index
    end

    def show
        @item = Item.find(params[:id])
        render :show
    end

    def search
        @items = Item.search_by(params[:search])
        render :items_search
    end
    
end
