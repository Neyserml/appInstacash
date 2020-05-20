import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PAGES_ROUTES } from "./pages.routes";
import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";
import { SimulatorComponent } from "./simulator/simulator.component";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [PagesComponent, SimulatorComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PAGES_ROUTES,
  ],
})
export class PagesModule {}
