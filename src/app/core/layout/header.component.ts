import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BasketService } from '@core/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})

export class HeaderComponent implements OnInit {

  carInBasket: Observable<number>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.carInBasket = this.basketService.sumItem();
  }

}
