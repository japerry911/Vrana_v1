Rails.application.routes.draw do
  resources :projects, only: [:index, :show, :create]
  post '/login', to: 'sessions#login'
end
