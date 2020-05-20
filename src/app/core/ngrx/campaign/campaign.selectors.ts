import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCompaignState from "./campaign.state";

export const selectCompaignState = createFeatureSelector<
  fromCompaignState.CampaignState
>(fromCompaignState.storeFeatureKey);

export const getCompaign = createSelector(
  selectCompaignState,
  (state: fromCompaignState.CampaignState) => state.data
);
export const getCompaignLoading = createSelector(
  selectCompaignState,
  (state: fromCompaignState.CampaignState) => state.loading
);
export const getLaboralFailed = createSelector(
  selectCompaignState,
  (state: fromCompaignState.CampaignState) => state.error
);
