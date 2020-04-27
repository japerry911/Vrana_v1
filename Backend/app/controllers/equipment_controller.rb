class EquipmentController < ApplicationController
    def index
        @equipment = Equipment.all

        render json: { equipment: @equipment }
    end

    def show
        @specific_equipment = Equipment.find(params[:id])

        render json: { equipment: @specific_equipment }
    end
end