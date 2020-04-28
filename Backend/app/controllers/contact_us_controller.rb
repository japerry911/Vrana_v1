class ContactUsController < ApplicationController
    def send_email
        ContactUsMailer.send_email(strong_params).deliver_now
    end

    private

        def strong_params
            params.require(:email_options).permit(:date, :name, :email, :description, :phone, :subject)
        end
end