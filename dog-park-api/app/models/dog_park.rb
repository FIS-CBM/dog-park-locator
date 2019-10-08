class DogPark < ApplicationRecord

	validates :name, :city, :state, :zip_code, :address, :website, :info, :fenced, :hours, presence: true

	validates :address, uniqueness: { message: "%{attribute} is already taken"}

	validates :zip_code, length: { is: 5 }

end
