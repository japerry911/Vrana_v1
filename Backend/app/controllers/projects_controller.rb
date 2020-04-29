class ProjectsController < ApplicationController
    before_action :authenticate, only: [:create, :destroy, :update]

    def index
        @projects = Project.all

        render json: { projects: @projects }
    end

    def show
        @project = Project.find(params[:id])

        render json: { project: @project }
    end

    def destroy 
        @project_to_destroy = Project.find(params[:id])

        @project_to_destroy.destroy

        render status: :ok
    end

    def update
        @project_to_update = Project.find(params[:id])
        strong_params = project_params_exc_image_urls

        s3 = Aws::S3::Resource.new(
            access_key_id: ENV['ACCESS_KEY_ID'],
            secret_access_key: ENV['SECRET_ACCESS_KEY'],
            region: ENV['REGION']
            #access_key_id: Rails.application.credentials.aws[:access_key_id],
            #secret_access_key: Rails.application.credentials.aws[:secret_access_key],
            #region: Rails.application.credentials.aws[:region] 
        ) 

        image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images'

        if strong_params[:card_image_filetype] != ''
            card_image_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                    .object("projects/images/#{strong_params[:images_file_client_name]}/card_image.#{strong_params[:card_image_filetype]}")
            card_image_status = card_image_s3_path.upload_file(strong_params[:card_image])
            if !card_image_status
                render status: :internal_server_error
            end
            card_image_url = "#{image_url_base}/#{strong_params[:images_file_client_name]}/card_image.#{strong_params[:card_image_filetype]}"
        end

        if strong_params[:template_image1_filetype] != ''
            template_image1_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                    .object("projects/images/#{strong_params[:images_file_client_name]}/template_image1.#{strong_params[:template_image1_filetype]}")
            template_image1_status = template_image1_s3_path.upload_file(strong_params[:template_image1])
            if !template_image1_status
                render status: :internal_server_error
            end
            template_image1_url = "#{image_url_base}/#{strong_params[:images_file_client_name]}/template_image1.#{strong_params[:template_image1_filetype]}"
        end

        if strong_params[:template_image2_filetype] != ''
            template_image2_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                    .object("projects/images/#{strong_params[:images_file_client_name]}/template_image2.#{strong_params[:template_image2_filetype]}")
            template_image2_status = template_image2_s3_path.upload_file(strong_params[:template_image2])
            if !template_image2_status
                render status: :internal_server_error
            end
            template_image2_url = "#{image_url_base}/#{strong_params[:images_file_client_name]}/template_image2.#{strong_params[:template_image2_filetype]}"
        end

        @project_to_update.update({Client_Name: strong_params[:Client_Name], Size: strong_params[:Size], Location: strong_params[:Location],
                                    YearCompleted_ProjectStatus: strong_params[:YearCompleted_ProjectStatus], Construction_Value: strong_params[:Construction_Value],
                                    Scope_Of_Work: strong_params[:Scope_Of_Work], Industry: strong_params[:Industry], First_P_Header: strong_params[:First_P_Header],
                                    First_P_Content: strong_params[:First_P_Content], Key_Projects_Bullets: strong_params[:Key_Projects_Bullets],
                                    Card_Image_Url: card_image_url, Template_Image1_Url: template_image1_url, Template_Image2_Url: template_image2_url}
                                    .reject {|k, v| v.nil?})

        render json: { project: @project_to_update }
    end

    def create
        strong_params = project_params_exc_image_urls

        s3 = Aws::S3::Resource.new(
            access_key_id: ENV['ACCESS_KEY_ID'],
            secret_access_key: ENV['SECRET_ACCESS_KEY'],
            region: ENV['REGION']
            #access_key_id: Rails.application.credentials.aws[:access_key_id],
            #secret_access_key: Rails.application.credentials.aws[:secret_access_key],
            #region: Rails.application.credentials.aws[:region] 
        ) 

        image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/projects/images'

        card_image_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("projects/images/#{strong_params[:images_file_client_name]}/card_image.#{strong_params[:card_image_filetype]}")
        card_image_status = card_image_s3_path.upload_file(strong_params[:card_image])
        if !card_image_status
            render status: :internal_server_error
        end
        card_image_url = "#{image_url_base}/#{strong_params[:images_file_client_name]}/card_image.#{strong_params[:card_image_filetype]}"

        template_image1_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("projects/images/#{strong_params[:images_file_client_name]}/template_image1.#{strong_params[:template_image1_filetype]}")
        template_image1_status = template_image1_s3_path.upload_file(strong_params[:template_image1])
        if !template_image1_status
            render status: :internal_server_error
        end
        template_image1_url = "#{image_url_base}/#{strong_params[:images_file_client_name]}/template_image1.#{strong_params[:template_image1_filetype]}"

        template_image2_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("projects/images/#{strong_params[:images_file_client_name]}/template_image2.#{strong_params[:template_image2_filetype]}")
        template_image2_status = template_image2_s3_path.upload_file(strong_params[:template_image2])
        if !template_image2_status
            render status: :internal_server_error
        end
        template_image2_url = "#{image_url_base}/#{strong_params[:images_file_client_name]}/template_image2.#{strong_params[:template_image2_filetype]}"

        @new_project = Project.create([Client_Name: strong_params[:Client_Name], Size: strong_params[:Size], Location: strong_params[:Location],
                                        YearCompleted_ProjectStatus: strong_params[:YearCompleted_ProjectStatus], Construction_Value: strong_params[:Construction_Value],
                                        Scope_Of_Work: strong_params[:Scope_Of_Work], Industry: strong_params[:Industry], First_P_Header: strong_params[:First_P_Header],
                                        First_P_Content: strong_params[:First_P_Content], Key_Projects_Bullets: strong_params[:Key_Projects_Bullets],
                                        Card_Image_Url: card_image_url, Template_Image1_Url: template_image1_url, Template_Image2_Url: template_image2_url])

        render json: { project: @new_project }
    end

    private
    
        def project_params_exc_image_urls
            params.permit([:Client_Name, :Size, :Location, :YearCompleted_ProjectStatus, :Construction_Value,
                            :Scope_Of_Work, :Industry, :First_P_Header, :First_P_Content, :Key_Projects_Bullets,
                            :images_file_client_name, :card_image_filetype, :card_image, :template_image1_filetype,
                            :template_image1, :template_image2_filetype, :template_image2])
        end
end
