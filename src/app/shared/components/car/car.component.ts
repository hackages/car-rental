import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '@core/services/basket.service';
import { Car } from '@shared/models/car';

@Component({
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styles: []
})

export class CarComponent implements OnInit {

  @Input() car: Car;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void { }

  updateCarToBasket(carId: number) {
    this.isCarInBasket(carId) ?
      this.basketService.removeItem(carId) :
      this.basketService.addItem(carId);
  }

  isCarInBasket(carId: number) {
    return this.basketService.containsItem(carId);
  }

}
