class Homes::FindSimilar
  include Interactor

  def call
    homes_ids = []
    owners = Owner.includes(:homes)

    owners.map do |owner|
      homes_per_owner = owner.homes.where(_status: 'published', home_master_id: nil)

      homes_per_owner.select do |home|
        home_total_amount_size = homes_per_owner.pluck(:total_amount).count(home.total_amount)
        home_location_size = homes_per_owner.pluck(:location).count(home.location)

        similar_homes = home_total_amount_size > 1 && home_location_size > 1

        if similar_homes
          text_format = "#{home.owner.user.name} #{home.owner.user.last_name}, #{home.owner.user.email} "
          text_format += "#{home.owner_id}, #{home.total_amount}, #{home.status}, #{home.location}"
          homes_ids << home
          puts text_format
        end
      end
    end
    context.homes = homes_ids
  end
end