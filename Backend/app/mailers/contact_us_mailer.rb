class ContactUsMailer < ApplicationMailer
    def send_email
        mail(subject: 'Test')
    end
end
