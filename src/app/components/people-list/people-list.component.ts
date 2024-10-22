import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/people-interfaces';
import { PeopleServicesService } from '../../services/people.services.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit {
  
  listadoPersonajes: Person[] = [];

  constructor(private peopleService: PeopleServicesService) { }

  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe(respuesta =>{
      this.listadoPersonajes = respuesta.results;
    })
  }



}
