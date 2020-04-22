class ProjectsController < ApplicationController
    before_action :authenticate, only [:create]

    def index
        @projects = Project.all

        render json: { projects: @projects }
    end

    def show
        @project = Project.find(params[:id])

        render json: { project: @project }
    end

    def create
        @new_project = Project.create(project_params)

        render json: { project: @new_project }
    end

    private
    
        def project_params
            params.require(:project).permit([:Client_Name, :Size, :Location, :YearCompleted_ProjectStatus, :Construction_Value,
                                             :Scope_Of_Work, :Industry, :First_P_Header, :First_P_Content, :Key_Projects_Bullets,
                                             :Card_Image_Url, :Template_Image1_Url, :Template_Image2_Url])
        end
end
