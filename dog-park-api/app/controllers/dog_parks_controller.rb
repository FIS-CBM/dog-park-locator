class DogParksController < ApplicationController

    def index
     dog_parks = DogPark.all
     render json: activities
    end

    def create
        dog_park = DogPark.create(dog_park_params)
        render json: dog_park
    end

    def show
        dog_park = DogPark.find_by(id: params[:id])
        render json: dog_park
    end


    private

    def dog_park_params
        params.require(:dog_park).permit(:name, :city, :state, :zip_code, :address, :website, :info, :fenced, :hours)
    end

end