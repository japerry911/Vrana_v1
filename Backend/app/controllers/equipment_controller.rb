class EquipmentController < ApplicationController
    def index
        @equipment = Equipment.all

        render json: { equipment: @equipment }
    end
end
