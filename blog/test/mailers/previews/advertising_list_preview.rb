class AdvertisingListPreview < ActionMailer::Preview
  def send_advertising_list
    AdvertisingListMailer.send_advertising_list
  end
end
