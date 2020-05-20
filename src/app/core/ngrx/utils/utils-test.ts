import { StoreModule } from "@ngrx/store";
import { campaignReducer } from "../campaign/campaign.reducers";
import { simulatorReducer } from "../simulator/simulator.reducer";

export const StoreModuleForRootTest = StoreModule.forRoot({
  ...campaignReducer,
});

export const StoreModuleSimulatorForRootTest = StoreModule.forRoot({
  ...simulatorReducer,
});
