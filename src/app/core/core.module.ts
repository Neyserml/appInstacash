import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppStoreModule } from "./ngrx/app-store.module";
import { CompaignApiService } from "./services/compaign/compaign.service";

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, HttpClientModule, AppStoreModule],
  providers: [CompaignApiService],
  exports: [],
})
export class CoreModule {}
