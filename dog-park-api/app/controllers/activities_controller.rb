class ActivitiesController < ApplicationController

    def index
     activities = Activity.all
     render json: activities
    end

    def create
        activity = Activity.create(activity_params)
        render json: activity
    end

    def show
        activity = Activity.find_by(id: params[:id])
        render json: activity
    end


    private

    def activity_params
        params.require(:activity).permit(:name, :description)
    end

end