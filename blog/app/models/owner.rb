class Owner
  include Mongoid::Document
  field :curp, type: String
  field :registered_in_srpago, type: Mongoid::Boolean

  has_many :homes
  belongs_to :user, required: true

  validates :curp, :registered_in_srpago, presence: true
end
