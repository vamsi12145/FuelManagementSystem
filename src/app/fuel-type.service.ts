import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { bindCallback, Observable } from 'rxjs';
import'rxjs/add/operator/map';
import { Fueltype} from './fueltype';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {
  getFuel(): Observable<Fueltype[]> {
    return this.http.get<Fueltype[]>("http://localhost:5959/fuelapi/fuel");
      
  }
  getFuelById(fuel_id:String): Observable<Fueltype>{
    return this.http.get<Fueltype>("http://localhost:5959/fuelapi/getFuel/"+fuel_id);
      
  }
  constructor(private http:HttpClient) { }
}
