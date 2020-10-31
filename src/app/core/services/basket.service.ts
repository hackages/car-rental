import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';

import { CarService } from './car.service';
import { Car } from '@shared/models/car';
import { concatMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  items: number[] = [];
  total$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private carService: CarService) { }

  getItemsByIds(): Observable<Car[]> {
    if (this.items.length == 0) return of(null);

    return from(this.items)
      .pipe(
        concatMap((carId: number) => this.carService.getCarById(carId)),
        toArray()
      );
  }

  addItem(carId: number): void {
    this.items.push(carId);
    this.total$.next(this.items.length);
  }

  removeItem(carId: number): void {
    const index: number = this.items.indexOf(carId);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.total$.next(this.items.length);
    }
  }

  containsItem(carId: number): boolean {
    return this.items.includes(carId);
  }

  sumItem(): Observable<number> {
    return this.total$.asObservable();
  }

}
