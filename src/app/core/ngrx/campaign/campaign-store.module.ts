import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { storeFeatureKey } from "./campaign.state";
import { campaignReducer } from "./campaign.reducers";
import { EffectsModule } from "@ngrx/effects";
import { CampaignEffects } from "./campaign.effects";
import { CampaignStoreFacade } from "./campaign.facade";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(storeFeatureKey, campaignReducer),
    EffectsModule.forFeature([CampaignEffects]),
  ],
  exports: [],
  providers: [CampaignStoreFacade],
})
export class CampaignStoreModule {}
