namespace :seeds do
  desc "Create home, listing and outstanding."
  task ini_db: :environment do
    provider = ListingProvider.find_or_create_by(name: 'mercado_libre')
    home1 = Home.find_or_create_by(title: 'Nuevo depa1', price: 12_000)
    publish1_xml = {
        title: home1.title,
        listing_type_id: :gold_premium,
        price: home1.price
    }.to_s
    Home::Listing.find_or_create_by(home: home1, publish_xml_or_response: publish1_xml, listing_name: 'mercado_libre')
    home2 = Home.find_or_create_by(title: 'Nuevo depa2', price: 13_000)
    publish2_xml = {
        title: home2.title,
        listing_type_id: :gold_premium,
        price: home2.price
    }.to_s
    home3 = Home.find_or_create_by(title: 'Nuevo depa3', price: 14_000)
    publish3_xml = {
        title: home3.title,
        listing_type_id: :gold_premium,
        price: home3.price
    }.to_s
    Home::Listing.find_or_create_by(home: home3, publish_xml_or_response: publish3_xml, listing_name: 'mercado_libre')
    home4 = Home.find_or_create_by(title: 'Nuevo depa4', price: 15_000)
    publish4_xml = {
        title: home4.title,
        listing_type_id: :silver,
        price: home4.price
    }.to_s
    Home::Listing.find_or_create_by(home: home4, publish_xml_or_response: publish4_xml, listing_name: 'mercado_libre')
    home5 = Home.find_or_create_by(title: 'Nuevo depa5', price: 16_000)
    publish5_xml = {
        title: home5.title,
        listing_type_id: :gold_premium,
        price: home5.price
    }.to_s
    Home::Listing.find_or_create_by(home: home5, publish_xml_or_response: publish5_xml, listing_name: 'mercado_libre')
    Home::Listing::Outstanding.find_or_create_by(outstanding_type: :gold, home: home1, listing_provider: provider)
    Home::Listing::Outstanding.find_or_create_by(outstanding_type: :gold_premium, home: home2, listing_provider: provider)
    Home::Listing::Outstanding.find_or_create_by(outstanding_type: :gold, home: home3, listing_provider: provider)
    Home::Listing::Outstanding.find_or_create_by(outstanding_type: :gold, home: home4, listing_provider: provider)
  end
end