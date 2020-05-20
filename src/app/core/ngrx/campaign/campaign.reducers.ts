import * as actions from "./campaign.actions";
import { ICompaignResponse } from "../../interfaces/compaign.interface";
import { INITIAL_STATE, CampaignState } from "./campaign.state";

export function campaignReducer(
  state = INITIAL_STATE,
  action: actions.Actions
): CampaignState {
  switch (action.type) {
    case actions.LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actions.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };

    case actions.LOAD_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
