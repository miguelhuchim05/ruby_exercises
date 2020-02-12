class Home
  include Mongoid::Document
  include Mongoid::Enum

  before_validation :set_total_amount

  field :title, type: String
  field :price, type: Float
  field :extra_service, type: String
  field :total_amount, type: Float

  validates :title, :price, presence: true

  private

  def set_total_amount
    self.total_amount = price.to_f + extra_service.to_f
  end
end
