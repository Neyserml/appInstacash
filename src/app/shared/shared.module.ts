import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { TwoDigitDecimaNumberDirective } from "./directives/twoDigitDecimal.directive";
import { PreloaderComponent } from "./components/preloader/preloader.component";
@NgModule({
  declarations: [
    NopagefoundComponent,
    TwoDigitDecimaNumberDirective,
    HeaderComponent,
    PreloaderComponent,
  ],
  exports: [
    NopagefoundComponent,
    TwoDigitDecimaNumberDirective,
    HeaderComponent,
    PreloaderComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
