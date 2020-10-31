import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineAll, concatAll, concatMap, map, mergeAll, take, tap, toArray } from "rxjs/operators";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Car } from '@shared/models/car';

interface CarsResponse {
  cars: Car[];
}

interface CarResponse {
  Car: Car;
}

@Injectable({ providedIn: 'root' })

export class CarService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<CarsResponse>(this.apiUrl + '/cars')
      .pipe(
        concatMap(res => res.cars),
        // take(50),
        toArray()
        // tap(res => console.log(res))
      );
  }

  getCarById(carId: number): Observable<Car> {
    return this.http.get<CarResponse>(this.apiUrl + `/cars/${carId}`)
      .pipe(map(res => res.Car));
  }

}
