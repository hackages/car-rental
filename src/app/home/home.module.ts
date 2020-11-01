import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './components/home.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, NgxPaginationModule]
})

export class HomeModule { }
