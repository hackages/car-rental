import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./pages/home/home.component";
import { BasketComponent } from "./pages/basket/basket.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, BasketComponent],
  imports: [CoreModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
