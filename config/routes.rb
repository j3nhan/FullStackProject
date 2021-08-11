Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create,  :destroy, :show]
    resources :user, only: [:create] 
    resources :items, only: [:index, :show]
    resources :cart_items
    resources :reviews 
  end

  root "static_pages#root"
end