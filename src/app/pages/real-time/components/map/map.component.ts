import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RealTimeService } from '../../../../services/realtime/realtime.service';

import * as L from 'leaflet';

import { GoogleMap } from '@angular/google-maps';

L.Icon.Default.imagePath = 'assets/icons/map/'
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap,LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MapComponent implements OnInit {
  private map!: L.Map;
  markers: L.Marker[] = [];
  options!:{};
  sid!:"";
  vehiclePosition!:[]


  ngOnInit(): void {
    this.initMap()
    this.onUpdatePosition()
   } 
      
  constructor(private realTimeService:RealTimeService){}
 
  onUpdatePosition(){
    this.onGetSid();
    this.onGetVehiclePosition(this.sid)
  }

  onGetSid(){
    this.realTimeService.getSessionId()
    .then(res=>{
      this.sid=res.data.eid
    })
    .catch(err => console.log(err))
    .finally(()=>console.log(this.sid))
  }
  
  onGetVehiclePosition(param:string){
    this.realTimeService.getVehiclePosition(param)
    .then(res=>{
      this.vehiclePosition=res.data.items
    })
    .catch(err => console.log(err))
    .finally(()=>console.log(this.vehiclePosition))
  }

  addMarkers(Y:number,X:number) {
    L.marker([Y, X]).addTo(this.map)
  }

  onMapReady($event: L.Map) {
    this.map = $event;
    this.addMarkers(4.0226731,9.7030975);
  }

 private initMap():void{
  this.options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://camtrack.net/">Camtrack</a>'
      })
    ],
    zoom: 16,
    center: { lat: 447496.86056717, lng: 578176.46167328 }
  }
}
 
 

}
