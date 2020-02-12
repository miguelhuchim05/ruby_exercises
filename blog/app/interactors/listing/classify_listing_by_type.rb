class Listing::ClassifyListingByType
  LISTING_NAME = 'mercado_libre'
  include Interactor
 
  def call
    provider_id = ListingProvider.find_by(name: LISTING_NAME).id
    listings = Home::Listing.includes(:home).where(listing_name: LISTING_NAME)
    outstandings = Home::Listing::Outstanding.includes(:home).where(listing_provider_id: provider_id)
    
    context.should_not_be_sent = listing_in_outstanding(listings)
    context.should_be_sent = outstanding_in_listing(outstandings)
  end

  def listing_in_outstanding(listings)
    wrong_sent = {}
	
    listings.each do |listing|
      listing_type = listing_type_id(listing.publish_xml_or_response)
      home_id = listing.home.id
      home_found = Home::Listing::Outstanding.where(home_id: home_id)	  
      outstanding_type = home_found.first._outstanding_type if home_found.exists?	  
      next if outstanding_type.eql?(listing_type) && home_found.exists?
	  
      wrong_sent[listing_type] ||= {ids: [], ids_lenght: 0}
      wrong_sent[listing_type][:ids] << home_id.to_s
      wrong_sent[listing_type][:ids_lenght] += 1
    end
	
    wrong_sent
  end

  def outstanding_in_listing(outstandings)
    wrong_sent = {}
	
    outstandings.each do |outstanding|
      home_id = outstanding.home.id
      home_found = Home::Listing.where({ home_id: home_id, listing_name: LISTING_NAME })
      listing_type = listing_type_id(home_found.first.publish_xml_or_response) if home_found.exists?
	  
      next if listing_type.eql?(outstanding.outstanding_type) && home_found.exists?
	  
      listing_type = outstanding.outstanding_type
      wrong_sent[listing_type] ||= {ids: [], ids_lenght: 0}
      wrong_sent[listing_type][:ids] << home_id.to_s
      wrong_sent[listing_type][:ids_lenght] += 1
    end
	
    wrong_sent
  end

  def listing_type_id(publish_xml_or_response)
    publish_xml_or_response = eval(publish_xml_or_response)
    publish_xml_or_response[:listing_type_id]
  end
end
