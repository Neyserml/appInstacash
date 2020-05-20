import { ICompaignResponse } from "../../interfaces/compaign.interface";

export const storeFeatureKey = "campaigns";

export interface CampaignState {
  data: ICompaignResponse;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const INITIAL_STATE: CampaignState = {
  data: null,
  loaded: false,
  loading: false,
  error: null,
};
