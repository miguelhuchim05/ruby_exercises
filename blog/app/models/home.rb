class Home
  include Mongoid::Document
  include Mongoid::Enum

  before_validation :calculate_total

  field :price, type: Float
  field :extra_service, type: String
  field :total_amount, type: Float
  field :home_features, type: Hash, default: { garden: false, furnished: false, gym: false }
  enum :status, [:in_progress, :published, :rented]

  belongs_to :owner
  has_many :rents

  validates :price, :extra_service, :total_amount, :home_features, presence: true

  private
   def calculate_total
     self.total_amount = price.to_f + extra_service.to_f
   end
end
