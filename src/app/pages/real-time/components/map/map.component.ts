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

export class MapComponent implements OnInit {
  private map!: L.Map;

  private initMap():void{
    this.map = L.map('map').setView([51.505, -0.09], 13);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="https://camtrack.net/">Camtrack</a>'
    });

    tiles.addTo(this.map)

    L.marker([4.0227234,9.7029807]).addTo(this.map)
    .bindPopup('conducteur 1')
    .openPopup();
   }

  constructor(){}

  ngOnInit(): void {
    this.initMap()
  }
   

}
