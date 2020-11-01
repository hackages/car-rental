import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './modules/material.module';

import { SearchPipe } from './pipes/search.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarComponent } from './components/car/car.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SidebarComponent,
    HeaderComponent,
    CarComponent,
    SearchPipe
  ],
  declarations: [SidebarComponent, HeaderComponent, CarComponent, SearchPipe]
})

export class SharedModule { }
