import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleResponse } from '../interfaces/vehicle-interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehicleServicesService {

  constructor(private http: HttpClient) { }

  getVehicleList(): Observable<VehicleResponse> {
    return this.http.get<VehicleResponse>('https://swapi.dev/api/vehicles/')
  }
}
