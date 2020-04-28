class CareersController < ApplicationController
    def index
        @careers = Career.all 

        render json: { careers: @careers }
    end

    def create
        @new_career = Career.create(career_params)

        render json: { career: @new_career }
    end

    def destroy
        @career_to_destroy = Career.find(params[:id])

        @career_to_destroy.destroy 

        render status: :ok
    end

    def update
        @career_to_update = Career.find(params[:id])

        @career_to_update.update(career_params)

        render json: { career: @career_to_update }
    end

    private

        def career_params
            params.permit(:Title, :Department, :Location ,:Job_Url)
        end
end
