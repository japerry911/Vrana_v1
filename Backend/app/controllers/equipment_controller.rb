class EquipmentController < ApplicationController
    def index
        @equipment = Equipment.all

        render json: { equipment: @equipment }
    end

    def show
        @specific_equipment = Equipment.find(params[:id])

        render json: { equipment: @specific_equipment }
    end

    def create
        strong_params = equipment_params_exc_image_urls
        
        s3 = Aws::S3::Resource.new(
            access_key_id: Rails.application.credentials.aws[:access_key_id],
            secret_access_key: Rails.application.credentials.aws[:secret_access_key],
            region: Rails.application.credentials.aws[:region] 
        ) 

        image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Equipment'

        card_image_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:card_image_filename]}.#{strong_params[:card_image_filetype]}")
        card_image_status = card_image_s3_path.upload_file(strong_params[:card_image])
        if !card_image_status
            render status: :internal_server_error
        end
        card_image_url = "#{image_url_base}/#{strong_params[:card_image_filename]}.#{strong_params[:card_image_filetype]}"

        if :template_image1_filetype != ''
            template_image1_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:template_image1_filename]}.#{strong_params[:template_image1_filetype]}")
            template_image1_status = template_image1_s3_path.upload_file(strong_params[:template_image1])
            if !template_image1_status
                render status: :internal_server_error
            end
            image_left_url = "#{image_url_base}/#{strong_params[:template_image1_filename]}.#{strong_params[:template_image1_filetype]}"
        end

        if :template_image2_filetype != ''
            template_image2_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:template_image2_filename]}.#{strong_params[:template_image2_filetype]}")
            template_image2_status = template_image2_s3_path.upload_file(strong_params[:template_image2])
            if !template_image2_status
                render status: :internal_server_error
            end
            image_right_url = "#{image_url_base}/#{strong_params[:template_image2_filename]}.#{strong_params[:template_image2_filetype]}"
        end

        @new_equipment = Equipment.create([Name: strong_params[:Name], Year: strong_params[:Year], Price: strong_params[:Price], Description: strong_params[:Description],
                                            Card_Image: card_image_url, Image_Left: image_left_url, image_right_url]
                                            .reject {|k, v| v.null?})

        render json: { equipment: @new_equipment }
    end

    private

        def equipment_params_exc_image_urls
            params.permit([:Name, :Year, :Price, :Description, :card_image_filetype, :card_image_filename, :card_image, :template_image1_filetype,
                            :template_image1_filename, :template_image1, :template_image2_filetype, :template_image2])
end