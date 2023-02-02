Rails.application.routes.draw do
  root 'pages#home'
  get 'page1', to:'pages#page1'
  get 'page2', to:'pages#page2'
  get 'page3', to:'pages#page3'
  get 'confirmation', to:'pages#confirmation'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
