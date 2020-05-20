import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { SimulatorComponent } from "./simulator/simulator.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "simulador", component: SimulatorComponent },
      { path: "", redirectTo: "/simulador", pathMatch: "full" },
    ],
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
