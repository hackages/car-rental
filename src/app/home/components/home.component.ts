import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { merge, Observable, Subject } from "rxjs";

import { CarService } from "@core/services/car.service";
import { Car } from "@shared/models/car";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})

export class HomeComponent implements OnInit {
  cars$: Observable<Car[]>;
  searchTerm$: Subject<string> = new Subject();

  pageCurrent: number = 1;
  pageSize: number = 12;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars$ = merge(
      this.carService.getCars(), // first time
      this.carService.search(this.searchTerm$) // each search
    );
  }

  onPageChange(event: PageEvent) {
    this.pageCurrent = ++event.pageIndex;
  }
}
