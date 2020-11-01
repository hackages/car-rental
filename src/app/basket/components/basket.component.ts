import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BasketService } from '@core/services/basket.service';
import { Car } from '@shared/models/car';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-basket',
  templateUrl: 'basket.component.html',
  styles: []
})

export class BasketComponent implements OnInit {

  isLoading: boolean = false;
  carsInBasket$: Observable<Car[]>;

  dataSource: MatTableDataSource<Car> = new MatTableDataSource(null);
  tableColumns: string[] = ['id', 'car', 'car_model', 'price'];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.basketService.getItemsByIds().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      },
      () => { },
      () => { this.isLoading = false; }
    );
  }

  getTotalPrices() {
    return this.dataSource.data
      .map(car => Number(car.price.substring(1))) // remove the currency character
      .reduce((acc, value) => acc + value, 0);
  }

}
