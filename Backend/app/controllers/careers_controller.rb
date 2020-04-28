class CareersController < ApplicationController
    def index
        @careers = Career.all 

        render json: { career: @careers }
    end
end
