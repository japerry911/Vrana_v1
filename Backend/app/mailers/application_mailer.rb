class ApplicationMailer < ActionMailer::Base
  default from: ENV['RAILS_ENV'] == 'production' ? ENV['user_name'] : Rails.application.credentials.gmail[:user_name]
  default to: ENV['RAILS_ENV'] == 'production' ? ENV['user_name'] : Rails.application.credentials.gmail[:user_name]
  layout 'mailer'
end