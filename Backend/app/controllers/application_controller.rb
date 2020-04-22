class ApplicationController < ActionController::API
    def authenticate 
        auth_header = request.headers['Authorization']

        token = auth_header.split(' ')[1]
        secret = Rails.application.secret_key_base

        begin   
            payload = JWT.decode(token, secret)[0]
            admin_id = payload['admin_id']

            @admin = Admin.find(admin_id)

            if !@admin 
                render status: :unauthorized
            end
        rescue
            render status: :unauthorized
        end
    end
end
