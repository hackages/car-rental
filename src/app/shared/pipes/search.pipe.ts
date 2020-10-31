import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '@shared/models/car';

@Pipe({
  name: 'searchTerm',
  pure: false
})

export class SearchPipe implements PipeTransform {

  transform(cars: Car[], args?: any): Car[] {

    if (!cars || !cars.length) return [];
    if (!args) return cars;

    return cars.filter(car => 
      car.car.toLowerCase().includes(args.toLowerCase()) ||
      car.car_model.toLowerCase().includes(args.toLowerCase()) 
    );
    
  }

}
