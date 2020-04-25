Rails.application.routes.draw do
  resources :projects, only: [:index, :show, :create, :destroy, :update]
  resources :news_articles, only [:index]
  post '/login', to: 'sessions#login'
end
