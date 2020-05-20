import { INITIAL_STATE } from "./campaign.state";
import { campaignReducer } from "./campaign.reducers";
import {
  LoadAction,
  LoadFailAction,
  LoadSuccessAction,
} from "./campaign.actions";

describe("CampaignReducer", () => {
  describe("undefined state", () => {
    it("should return the default state", () => {
      const action = { type: "NOOP" } as any;
      const result = campaignReducer(undefined, action);

      expect(result).toBe(INITIAL_STATE);
    });
  });

  describe("[Compaign] Compaign LOAD", () => {
    it("should load", () => {
      const action = new LoadAction();
      const result = campaignReducer(INITIAL_STATE, action);

      expect(result).toEqual({
        ...INITIAL_STATE,
        loading: true,
        error: null,
      });
    });
  });

  describe("[Compaign] Compaign FAIL", () => {
    it("should load fail", () => {
      const action = new LoadFailAction("state");
      const result = campaignReducer(INITIAL_STATE, action);

      expect(result).toEqual({
        ...INITIAL_STATE,
        loaded: false,
        loading: false,
        error: action.payload,
      });
    });
  });

  describe("[Compaign] CCompaign SUCCESS", () => {
    it("should load success", () => {
      const compaigResponse = {
        campaign_name: "InstaCash",
        min_quota: 1,
        max_quota: 48,
        max_amount: 19600,
        min_amount: 1500,
        tea: 26.5612,
        payment_date: "2019-12-26T16:30:04.591Z",
        currency: "PEN",
      };
      const action = new LoadSuccessAction(compaigResponse);
      const result = campaignReducer(INITIAL_STATE, action);

      expect(result).toEqual({
        ...INITIAL_STATE,
        loading: false,
        loaded: true,
        data: action.payload,
      });
    });
  });
});
