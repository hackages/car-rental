import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './modules/material.module';

import { SearchPipe } from './pipes/search.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SidebarComponent,
    CarComponent,
    SearchPipe
  ],
  declarations: [SidebarComponent, CarComponent, SearchPipe]
})

export class SharedModule { }
