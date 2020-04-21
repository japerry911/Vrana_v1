Rails.application.routes.draw do
  resources :projects, only: [:index, :show]
  post '/login', to: 'sessions#login'
end
