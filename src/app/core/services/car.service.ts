import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  catchError,
  concatMap,
  debounceTime,
  map,
  switchMap,
  tap,
  toArray,
} from "rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { Car } from "@shared/models/car";

interface CarsResponse {
  cars: Car[];
}

interface CarResponse {
  Car: Car;
}

@Injectable({ providedIn: "root" })
export class CarService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<CarsResponse>(this.apiUrl + "/cars").pipe(
      concatMap((res) => res.cars),
      toArray()
    );
  }

  getCarById(carId: number): Observable<Car> {
    return this.http
      .get<CarResponse>(this.apiUrl + `/cars/${carId}`)
      .pipe(map((res) => res.Car));
  }

  search(searchTerm$: Observable<string>): Observable<Car[]> {
    const apiName = `https://myfakeapi.com/api/cars/name/`;
    // const apiModel = `https://myfakeapi.com/api/cars/model/${searchTerm}`;
    const getByCarsByName = this.http.get<CarsResponse>(apiName);
    // const getByCarsByModel = this.http.get<CarsResponse>(apiModel);
    return searchTerm$.pipe(
      switchMap((searchTerm) =>
        this.http.get<CarsResponse>(apiName + searchTerm)
      ),
      tap(console.log),
      debounceTime(350),
      map((res) => res.Cars),
      catchError((e) => this.getCars())
    );
  }
}
