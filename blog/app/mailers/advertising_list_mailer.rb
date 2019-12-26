class AdvertisingListMailer < ApplicationMailer
  def send_advertising_list
    mail(to: 'miguelhuchim94@gmail.com', subject: 'Proceso de registro')
  end
end
