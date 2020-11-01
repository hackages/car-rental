import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, map, switchMap, tap, toArray } from 'rxjs/operators';

import { CarService } from './car.service';
import { Car } from '@shared/models/car';


@Injectable({
  providedIn: 'root'
})

export class BasketService {

  items$: BehaviorSubject<number[]> = new BehaviorSubject([]);

  constructor(private carService: CarService) { }

  getItemsByIds(): Observable<Car[]> {
    if (this.items$.value.length == 0) return of(null);

    return this.items$
      .pipe(
        switchMap((item: number[]) => [...item]),
        concatMap((carId: number) => this.carService.getCarById(carId)),
        toArray()
      );
  }

  addItem(carId: number): void {
    const newItems: number[] = this.items$.getValue();
    newItems.push(carId);
    this.items$.next(newItems);
    console.log(newItems);
  }

  removeItem(carId: number): void {
    const newItems: number[] = this.items$.getValue();
    const index: number = newItems.indexOf(carId);
    if (index !== -1) {
      newItems.splice(index, 1);
      this.items$.next(newItems);
    }
  }

  containsItem(carId: number): boolean {
    return this.items$.value.includes(carId);
  }

  totalItem(): Observable<number> {
    return this.items$.pipe(
      map(item => item.length)
    );
  }

}
