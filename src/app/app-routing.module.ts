import { RouterModule, Routes } from "@angular/router";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { PagesComponent } from "./pages/pages.component";
// Route Components //
const appRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
  },
  { path: "**", component: NopagefoundComponent },
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });
