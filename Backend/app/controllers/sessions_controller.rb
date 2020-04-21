class SessionsController < ApplicationController
    def login
        @admin = Admin.find_by(username: admin_params[:username])

        if !@admin 
            render json: { message: 'Wrong username' }, status: :unauthorized
        else 
            if @admin.authenticate(admin_params[:password])
                payload = {
                    admin_id: @admin.id
                }
                secret_key = Rails.application.secret_key_base

                token = JWT.encode(payload, secret_key)

                render json: { admin: { username: @admin.username, token: token }}
            else  
                render json: { message: 'Wrong password' }, status: :unauthorized
            end
        end
    end

    private

        def admin_params
            params.require(:admin).permit([:username, :password])
        end
end
