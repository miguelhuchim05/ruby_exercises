require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { FactoryBot.create(:user) }

  describe 'Include' do
    it { is_expected.to be_mongoid_document }
  end

  describe 'Fields' do
    it 'Need to has email' do
      user.email = nil
      expect(user).not_to be_valid
    end
    it 'Need to has name' do
      user.name = nil
      expect(user).not_to be_valid
    end
    it 'Need to has last_name' do
      user.last_name = nil
      expect(user).not_to be_valid
    end
    it 'Need to has mobile_phone' do
      user.mobile_phone = nil
      expect(user).not_to be_valid
    end
    it 'Need to has work_place' do
      user.work_place = nil
      expect(user).not_to be_valid
    end
  end

  describe 'Validations presence' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:mobile_phone) }
    it { should validate_presence_of(:work_place) }
  end

  describe 'Valid user' do
    it { expect(user).to be_valid}
  end

  describe 'associations' do
    it { should have_many(:rents) }
  end
end
