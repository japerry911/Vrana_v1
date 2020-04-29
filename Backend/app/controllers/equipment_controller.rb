class EquipmentController < ApplicationController
    before_action :authenticate, only: [:create, :destroy]

    def index
        @equipment = Equipment.all

        render json: { equipment: @equipment }
    end

    def show
        @specific_equipment = Equipment.find(params[:id])

        render json: { equipment: @specific_equipment }
    end

    def destroy
        @equipment_to_destroy = Equipment.find(params[:id])

        @equipment_to_destroy.destroy 
    end

    def update
        strong_params = equipment_params_exc_image_urls

        if ENV['RAILS_ENV'] == 'production'
            s3 = Aws::S3::Resource.new(
                access_key_id: ENV['ACCESS_KEY_ID'],
                secret_access_key: ENV['SECRET_ACCESS_KEY'],
                region: ENV['REGION']
            ) 
        else  
            s3 = Aws::S3::Resource.new(
                access_key_id: Rails.application.credentials.aws[:access_key_id],
                secret_access_key: Rails.application.credentials.aws[:secret_access_key],
                region: Rails.application.credentials.aws[:region] 
            )
        end

        image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Equipment'

        if strong_params[:card_image_filetype] != nil
            card_image_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                    .object("Equipment/#{strong_params[:card_image_filename]}.#{strong_params[:card_image_filetype]}")
            card_image_status = card_image_s3_path.upload_file(strong_params[:card_image])
            if !card_image_status
                render status: :internal_server_error
            end
            card_image_url = "#{image_url_base}/#{strong_params[:card_image_filename]}.#{strong_params[:card_image_filetype]}"
        end

        if strong_params[:template_image1_filetype] != nil
            template_image1_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:template_image1_filename]}.#{strong_params[:template_image1_filetype]}")
            template_image1_status = template_image1_s3_path.upload_file(strong_params[:template_image1])
            if !template_image1_status
                render status: :internal_server_error
            end
            image_left_url = "#{image_url_base}/#{strong_params[:template_image1_filename]}.#{strong_params[:template_image1_filetype]}"
        end

        if strong_params[:template_image2_filetype] != nil
            template_image2_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:template_image2_filename]}.#{strong_params[:template_image2_filetype]}")
            template_image2_status = template_image2_s3_path.upload_file(strong_params[:template_image2])
            if !template_image2_status
                render status: :internal_server_error
            end
            image_right_url = "#{image_url_base}/#{strong_params[:template_image2_filename]}.#{strong_params[:template_image2_filetype]}"
        end

        @updated_equipment = Equipment.update({Name: strong_params[:Name], Year: strong_params[:Year], Price: strong_params[:Price], Description: strong_params[:Description],
                                                Card_Image: card_image_url, Image_Left: image_left_url, Image_Right: image_right_url}
                                                .reject {|k, v| v.nil?})

        render json: { equipment: @updated_equipment }
    end

    def create
        strong_params = equipment_params_exc_image_urls
        
        if ENV['RAILS_ENV'] == 'production'
            s3 = Aws::S3::Resource.new(
                access_key_id: ENV['ACCESS_KEY_ID'],
                secret_access_key: ENV['SECRET_ACCESS_KEY'],
                region: ENV['REGION']
            ) 
        else  
            s3 = Aws::S3::Resource.new(
                access_key_id: Rails.application.credentials.aws[:access_key_id],
                secret_access_key: Rails.application.credentials.aws[:secret_access_key],
                region: Rails.application.credentials.aws[:region] 
            )
        end

        image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/Equipment'

        card_image_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:card_image_filename]}.#{strong_params[:card_image_filetype]}")
        card_image_status = card_image_s3_path.upload_file(strong_params[:card_image])
        if !card_image_status
            render status: :internal_server_error
        end
        card_image_url = "#{image_url_base}/#{strong_params[:card_image_filename]}.#{strong_params[:card_image_filetype]}"

        if strong_params[:template_image1_filetype] != ''
            template_image1_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:template_image1_filename]}.#{strong_params[:template_image1_filetype]}")
            template_image1_status = template_image1_s3_path.upload_file(strong_params[:template_image1])
            if !template_image1_status
                render status: :internal_server_error
            end
            image_left_url = "#{image_url_base}/#{strong_params[:template_image1_filename]}.#{strong_params[:template_image1_filetype]}"
        else
            image_left_url = ''
        end

        if strong_params[:template_image2_filetype] != ''
            template_image2_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("Equipment/#{strong_params[:template_image2_filename]}.#{strong_params[:template_image2_filetype]}")
            template_image2_status = template_image2_s3_path.upload_file(strong_params[:template_image2])
            if !template_image2_status
                render status: :internal_server_error
            end
            image_right_url = "#{image_url_base}/#{strong_params[:template_image2_filename]}.#{strong_params[:template_image2_filetype]}"
        else
            image_right_url = ''
        end

        @new_equipment = Equipment.create([Name: strong_params[:Name], Year: strong_params[:Year], Price: strong_params[:Price], Description: strong_params[:Description],
                                            Card_Image: card_image_url, Image_Left: image_left_url, Image_Right: image_right_url])

        render json: { equipment: @new_equipment }
    end

    private

        def equipment_params_exc_image_urls
            params.permit([:Name, :Year, :Price, :Description, :card_image_filetype, :card_image_filename, :card_image, :template_image1_filetype,
                            :template_image1_filename, :template_image1, :template_image2_filename, :template_image2_filetype, :template_image2])
            
        end
end