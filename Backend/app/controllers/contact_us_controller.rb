class ContactUsController < ApplicationController
    def send_email
        ContactUsMailer.send_email.deliver_now
    end
end