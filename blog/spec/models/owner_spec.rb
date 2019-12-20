require 'rails_helper'

RSpec.describe Owner, type: :model do
  let!(:owner) { FactoryBot.create(:owner) }

  describe 'Include' do
    it { is_expected.to be_mongoid_document }
  end

  describe 'Fields' do
    it 'Need to has curp' do
      owner.curp = nil
      expect(owner).not_to be_valid
    end
    it 'Need to has registered_in_srpago' do
      owner.registered_in_srpago = nil
      expect(owner).not_to be_valid
    end
  end

  describe 'Validations presence' do
    it { should validate_presence_of(:curp) }
    it { should validate_presence_of(:registered_in_srpago) }
  end

  describe 'Valid owner' do
    it { expect(owner).to be_valid}
  end

  describe 'associations' do
    it { should have_many(:homes) }
    it { should belong_to(:user) }
  end
end
