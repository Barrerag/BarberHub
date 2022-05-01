import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

 
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  map: Leaflet.map;
  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter(){ this.leafletMap();}

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([-36.592010, -72.121354], 16);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    Leaflet.marker([-36.592010, -72.121354]).addTo(this.map).bindPopup();

  }

}
