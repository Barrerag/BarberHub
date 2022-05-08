import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { Observable } from 'rxjs';
import { BarbershopsService } from '../services/barbershops.service';

 
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  map: Leaflet.map;
  barberia: Observable<any[]>;
  lat: number;
  lon: number
  constructor(private barbershopService: BarbershopsService) {
    this.getData();
   }
    
  ngOnInit() {
  }
  ionViewDidEnter(){ this.leafletMap(this.lat,this.lon);}

  
  leafletMap(lat: number, lon: number) {
    this.map = Leaflet.map('mapId').setView([lat, lon], 16);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    Leaflet.marker([lat, lon]).addTo(this.map).bindPopup();

  }
  getData(){
    this.barberia = this.barbershopService.getBarberiaById();
 }


}
