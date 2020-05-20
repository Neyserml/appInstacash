import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../../environments/environment";
import { CampaignStoreModule } from "./campaign/campaign-store.module";
import { EffectsModule } from "@ngrx/effects";
import { SimuladorStoreModule } from "./simulator/simulador-store.module";

@NgModule({
  declarations: [],
  imports: [
    CampaignStoreModule,
    SimuladorStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
})
export class AppStoreModule {}
