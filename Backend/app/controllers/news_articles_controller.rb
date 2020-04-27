class NewsArticlesController < ApplicationController
    before_action :authenticate, only: [:create, :destroy, :update]

    def index
        @news_articles = NewsArticle.all 

        render json: { articles: @news_articles }
    end

    def destroy
        @article_to_destroy = NewsArticle.find(params[:id])

        @article_to_destroy.destroy

        render status: :ok
    end

    def update
        @article_to_update = NewsArticle.find(params[:id])
        strong_params = article_params_exc_image_urls

        if strong_params[:image_filetype] != ''
            s3 = Aws::S3::Resource.new(
                access_key_id: Rails.application.credentials.aws[:access_key_id],
                secret_access_key: Rails.application.credentials.aws[:secret_access_key],
                region: Rails.application.credentials.aws[:region] 
            ) 

            image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/News_Articles'

            image_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                    .object("News_Articles/#{strong_params[:image_filename]}.#{strong_params[:image_filetype]}")
            image_status = image_s3_path.upload_file(strong_params[:image])
            if !image_status
                render status: :internal_server_error
            end
            image_url = "#{image_url_base}/#{strong_params[:image_filename]}.#{strong_params[:image_filetype]}"
        end

        @article_to_update.update({Headline: strong_params[:Headline], Source: strong_params[:Source], Date_Published: strong_params[:Date_Published],
                                    Article_Link: strong_params[:Article_Link], Feature_Image_Url: image_url}
                                    .reject {|k, v| v.nil?})

        render json: { article: @article_to_update }
    end

    def create
        strong_params = article_params_exc_image_urls

        s3 = Aws::S3::Resource.new(
            access_key_id: Rails.application.credentials.aws[:access_key_id],
            secret_access_key: Rails.application.credentials.aws[:secret_access_key],
            region: Rails.application.credentials.aws[:region] 
        ) 

        image_url_base = 'https://vranaconstructionwebsiteimages.s3.us-east-2.amazonaws.com/News_Articles'

        image_s3_path = s3.bucket('vranaconstructionwebsiteimages')
                .object("News_Articles/#{strong_params[:image_filename]}.#{strong_params[:image_filetype]}")
        image_status = image_s3_path.upload_file(strong_params[:image])
        if !image_status
            render status: :internal_server_error
        end
        image_url = "#{image_url_base}/#{strong_params[:image_filename]}.#{strong_params[:image_filetype]}"

        @new_article = NewsArticle.create([Headline: strong_params[:Headline], Source: strong_params[:Source], Date_Published: strong_params[:Date_Published],
                                            Article_Link: strong_params[:Article_Link], Feature_Image_Url: image_url])
        
        render json: { article: @new_article }
    end

    private
    
        def article_params_exc_image_urls
            params.permit([:Headline, :Source, :Date_Published, :Article_Link, :image_filetype, :image, :image_filename])
        end
end