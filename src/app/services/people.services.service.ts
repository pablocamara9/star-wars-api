import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleResponse } from '../interfaces/people-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleServicesService {

  constructor(private http: HttpClient) { }

  getPeopleList(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>('https://swapi.dev/api/people/')
  }
}
