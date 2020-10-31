import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BasketComponent } from "./pages/basket/basket.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "basket", component: BasketComponent },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((module) => module.ProfileModule),
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
