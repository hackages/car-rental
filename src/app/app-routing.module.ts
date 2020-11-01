import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { BasketModule } from './basket/basket.module';

const routes: Routes = [
  { path: "", loadChildren: () => HomeModule },
  { path: "basket", loadChildren: () => BasketModule },
  { path: "profile", loadChildren: () => ProfileModule },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
