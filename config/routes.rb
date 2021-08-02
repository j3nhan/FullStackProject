Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show]
    resources :categories, only: [:show]
    resources :items, only: [:index, :show]
    resources :cart_items
    resources :reviews 
  end

  root "static_pages#root"
end
