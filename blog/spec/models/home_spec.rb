require 'rails_helper'

RSpec.describe Home, type: :model do
  let!(:home) { FactoryBot.create(:home) }

  describe 'Include' do
    it { is_expected.to be_mongoid_document }
  end

  describe 'Fields' do
    it 'Need to has price' do
      home.price = nil
      expect(home).not_to be_valid
    end
    it 'Need to has extra_service' do
      home.extra_service = nil
      expect(home).not_to be_valid
    end
    it 'Need to has home_features' do
      home.home_features = nil
      expect(home).not_to be_valid
    end
  end

  describe 'Validations presence' do
    it { should validate_presence_of(:price) }
    it { should validate_presence_of(:extra_service) }
    it { should validate_presence_of(:total_amount) }
    it { should validate_presence_of(:home_features) }
  end

  describe 'Valid home' do
    it { expect(home).to be_valid}
  end

  describe 'associations' do
    it { should belong_to(:owner) }
    it { should have_many(:rents) }
  end
end
