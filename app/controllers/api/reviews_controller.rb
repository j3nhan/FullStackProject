class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find_by(item_id: params[:item_id])
        if @reviews
            render :show
        end
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def review_params
        params.require(:review).permit(:title, :body, :rating, :author, :author_id, :item_id)
    end

end
