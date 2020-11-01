import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { HomeModule } from './home/home.module';
import { BasketModule } from './basket/basket.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule, AppRoutingModule, AuthModule, HomeModule, BasketModule],
  bootstrap: [AppComponent],
})

export class AppModule {}
