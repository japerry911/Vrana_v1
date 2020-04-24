Rails.application.routes.draw do
  resources :projects, only: [:index, :show, :create, :destroy, :update]
  post '/login', to: 'sessions#login'
end
