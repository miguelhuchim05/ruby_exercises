require 'rails_helper'

RSpec.describe Rent, type: :model do
  let!(:rent) { FactoryBot.create(:rent) }

  describe 'Include' do
    it { is_expected.to be_mongoid_document }
  end

  describe 'Valid Rent' do
    it { expect(rent).to be_valid}
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:home) }
  end
end
