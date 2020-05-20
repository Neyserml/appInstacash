import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SimulatorEffects } from "./simulator.effects";
import { SimulatorStoreFacade } from "./simulator.facade";
import { simulatorReducer } from "./simulator.reducer";
import { storeFeatureKey } from "./simulator.state";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(storeFeatureKey, simulatorReducer),
    EffectsModule.forFeature([SimulatorEffects]),
  ],
  exports: [],
  providers: [SimulatorStoreFacade],
})
export class SimuladorStoreModule {}
