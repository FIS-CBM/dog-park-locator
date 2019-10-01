class DogPark < ApplicationRecord

	validates :name, :city, :state, :zip_code, :address, :website, :info, :fenced, :hours, presence: true
	
end
