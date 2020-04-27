Rails.application.routes.draw do
  resources :projects, only: [:index, :show, :create, :destroy, :update]
  resources :news_articles, only: [:index, :create, :destroy, :update]
  resources :equipment, only: [:index, :show, :create, :destroy, :update]
  post '/login', to: 'sessions#login'
end
