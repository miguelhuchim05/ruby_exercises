class Home::Listing::Outstanding
  MERCADO_LIBRE_TYPES = %i[gold_premium gold]
  include Mongoid::Document
  include Mongoid::Enum

  enum :outstanding_type, MERCADO_LIBRE_TYPES

  belongs_to :home
  belongs_to :listing_provider

  validate :validate_presence_home
  validates :listing_provider, presence: true

  scope :non_expired, -> {where(:expires_at.gt => Time.now)}

  private
    def validate_presence_home
      Home.unscoped.find(id: self.home_id) rescue errors.add(:home, I18n.t(:home_required))
    end
end