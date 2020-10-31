import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from './layout/header.component';

import { SharedModule } from '@shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    HttpClientModule,
    NgxPaginationModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    NgxPaginationModule
  ]
})

export class CoreModule { }
