class Home
  include Mongoid::Document
  include Mongoid::Enum

  before_validation :set_total_amount

  field :price, type: Float
  field :extra_service, type: String
  field :total_amount, type: Float
  field :home_features, type: Hash, default: { garden: false, furnished: false, gym: false }
  enum :status, [:in_progress, :published, :rented]
  field :location, type: Array, default: [21.019777, -89.632661]
  field :master_home_id, type: String

  belongs_to :owner
  has_many :rents

  validates :price, :extra_service, :total_amount, :home_features, :status, :location, presence: true

  private

  def set_total_amount
    self.total_amount = price.to_f + extra_service.to_f
  end
end
