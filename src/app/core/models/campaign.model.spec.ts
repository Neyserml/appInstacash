import { CampaignModel } from "./campaign.model";
import { ICompaignResponse } from "../interfaces/compaign.interface";

describe("CampaignModel", () => {
  let model: CampaignModel;
  const campaignResponse: ICompaignResponse = {
    campaign_name: "InstaCash",
    min_quota: 1,
    max_quota: 48,
    max_amount: 19600,
    min_amount: 1500,
    tea: 26.5612,
    payment_date: "2019-12-26T16:30:04.591Z",
    currency: "PEN",
  };

  it("should create model", () => {
    model = new CampaignModel(campaignResponse);
    expect(model).toBeDefined();
  });

  it("should create without parameter", () => {
    model = new CampaignModel();
    expect(model).toBeDefined();
  });
});
