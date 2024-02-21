import { ChangeDetectionStrategy, Component, OnInit,AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  private initMap():void{
    this.map = L.map('map').setView([51.505, -0.09], 13);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map)

    L.marker([51.5, -0.09]).addTo(this.map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
   }

  constructor(){}
  ngAfterViewInit(): void {
    this.initMap()
  }

 

  
}
