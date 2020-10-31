import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

import { CarService } from '@core/services/car.service';
import { Car } from '@shared/models/car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  searchFilter: string = '';
  cars$: Observable<Car[]>;

  pageCurrent: number = 1;
  pageSize: number = 12;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars$ = this.carService.getCars();
  }

  onSearch(value) {
    this.searchFilter = value;
  }

  onPageChange(event: PageEvent) {
    this.pageCurrent = ++event.pageIndex;
  }

}
