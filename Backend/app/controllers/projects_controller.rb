require "base64"

class ProjectsController < ApplicationController
    # before_action :authenticate, only: [:create]

    def index
        @projects = Project.all

        render json: { projects: @projects }
    end

    def show
        @project = Project.find(params[:id])

        render json: { project: @project }
    end

    def create
        s3 = Aws::S3::Resource.new 
        image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images'

        card_image_s3_path = s3.bucket('vranaconstructionwebsiteimages').object("projects/images/#{params[:images_file_client_name]}/card_image#{params[:card_image_filetype]}")
        card_image_status = card_image_s3_path.upload_file(params[:card_image])
        if !card_image_status
            render status: :internal_server_error
        end
        Card_Image_Url = "#{image_url_base}/#{params[:images_file_client_name]}/card_image#{params[:card_image_filetype]}"

        template_image1_s3_path = s3.bucket('vranaconstructionwebsiteimages').object("projects/images/#{params[:images_file_client_name]}/template1_image#{params[:template_image1_filetype]}")
        template_image1_status = template_image1_s3_path.upload_file(params[:template_image1])
        if !template_image1_status
            render status: :internal_server_error
        end
        Template_Image1_Url = "#{image_url_base}/#{params[:images_file_client_name]}/template_image1#{params[:template_image1_filetype]}"

        template_image2_s3_path = s3.bucket('vranaconstructionwebsiteimages').object("projects/images/#{params[:images_file_client_name]}/template2_image#{params[:template_image2_filetype]}")
        template_image2_status = template_image2_s3_path.upload_file(params[:template_image2])
        if !template_image2_status
            render status: :internal_server_error
        end
        Template_Image2_Url = "#{image_url_base}/#{params[:images_file_client_name]}/template_image2#{params[:template_image2_filetype]}"

        @new_project = Project.create(project_params, Card_Image_Url: Card_Image_Url, Template_Image1_Url: Template_Image1_Url, Template_Image2_Url: Template_Image2_Url)

        render json: { project: @new_project }
    end

    private
    
        def project_params
            params.require(:project).permit([:Client_Name, :Size, :Location, :YearCompleted_ProjectStatus, :Construction_Value,
                                             :Scope_Of_Work, :Industry, :First_P_Header, :First_P_Content, :Key_Projects_Bullets])
        end
end
