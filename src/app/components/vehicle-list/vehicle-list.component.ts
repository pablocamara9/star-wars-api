import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle-interfaces';
import { VehicleServicesService } from '../../services/vehicle.services.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent implements OnInit {

  listadoVehiculos: Vehicle[] = [];

  constructor(private vehicleService: VehicleServicesService ) { }

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe(respuesta => {
      this.listadoVehiculos = respuesta.results;
    })
  }

}
