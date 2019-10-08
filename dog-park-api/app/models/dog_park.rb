class DogPark < ApplicationRecord

	validates :name, :city, :state, :zip_code, :address, :fenced, :hours, presence: true

	validates :address, uniqueness: { message: "%{attribute} is already taken"}

	validates :zip_code, length: { is: 5 }

	 validates :zip_code, format: { with: /\d/,
    message: "only allows numbers" }

end
