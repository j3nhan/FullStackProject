class Api::ReviewsController < ApplicationController
    def index
        if params[:item_id]
            @reviews = Review.where(item_id: params[:item_id])
        else
            @reviews = Review.all
        end

        render :index
    end

    def show
        @review = Review.find(params[:id])
            render :show
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.item_id = params[:review][:item_id]

        if @review.save!
            @reviews = Review.all
            render :index
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        @review = current_user.authored_reviews.find(params[:id]).destroy
    end

    def review_params
        params.require(:review).permit(:title, :body, :rating, :author, :author_id, :item_id)
    end

end
