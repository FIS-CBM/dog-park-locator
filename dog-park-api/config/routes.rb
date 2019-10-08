Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :dog_parks, only: [:index, :create, :show]

  resources :activities, only: [:index, :create, :show]
end
