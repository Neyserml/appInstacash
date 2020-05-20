import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as compaignActions from "./campaign.actions";
import * as fromCompaignSelectors from "./campaign.selectors";
import * as fromCompaignState from "./campaign.state";
@Injectable()
export class CampaignStoreFacade {
  getCompaign$ = this.store.select(fromCompaignSelectors.getCompaign);
  loading$ = this.store.select(fromCompaignSelectors.getCompaignLoading);
  failed$ = this.store.select(fromCompaignSelectors.getLaboralFailed);
  constructor(private store: Store<fromCompaignState.CampaignState>) {}
  public dispatchLoadCompaign() {
    this.store.dispatch(new compaignActions.LoadAction());
  }
}
