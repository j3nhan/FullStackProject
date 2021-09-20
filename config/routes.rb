Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create] 
    resources :items, only: [:index, :show] do 
      resources :reviews, only: [:index, :show, :create]
    end
    resources :reviews, only: [:destroy]
    resources :cart_items, except: [:new, :edit] do 
      delete "clear", on: :collection
    end
  end

  root "static_pages#root"
end