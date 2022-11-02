Rails.application.routes.draw do


  get'/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/auth/google_oauth2/callback' => 'sessions#google_login'
  resources :catagories
  resources :products
  resources :users

  resources :catagories do 
    resources :products
  end

  resources :user do 
    resources :products, only:[:index, :show]
    resource :catagories, only:[:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
