Rails.application.routes.draw do
  resources :projects, only: [:index, :show, :create, :destroy, :update]
  resources :news_articles, only: [:index, :create, :destroy, :update]
  resources :equipment, only: [:index, :show, :create, :destroy, :update]
  resources :careers, only: [:index, :create]
  post '/login', to: 'sessions#login'
  post '/contact-us-send-email', to: 'contact_us#send_email'
end
