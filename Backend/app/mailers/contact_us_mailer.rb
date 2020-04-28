class ContactUsMailer < ApplicationMailer
    def send_email(email_contents)
        @email_contents = email_contents
        mail(subject: 'Website Contact Us Submission')
    end
end
