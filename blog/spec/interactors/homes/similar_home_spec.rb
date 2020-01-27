require 'rails_helper'

describe Homes::FindSimilar do
  let!(:owner1) { FactoryBot.create(:owner) }
  let(:params) do
    {
      owner: owner1,
      price: 192.10,
      extra_service: 100.00,
      status: :published
    }
  end
  let!(:home1) { FactoryBot.create(:home, params) }
  let!(:home2) { FactoryBot.create(:home, params) }
  let!(:home3) { FactoryBot.create(:home) }
  let!(:home4) { FactoryBot.create(:home) }

  context "When homes are similar" do
    it ".call" do
      find_similar_ctx = ::Homes::FindSimilar.call
      expect(find_similar_ctx).to be_a_success
      expect(find_similar_ctx.homes).to eq([home1, home2])
    end
  end
end