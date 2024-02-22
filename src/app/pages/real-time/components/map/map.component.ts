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
  options!:{};
  sid!:"";
  vehiclePosition!:[]

  ngOnInit(): void {
    this.initMap();
    this.onGetVehiclePosition();
    setInterval(this.onGetVehiclePosition,15000)
   } 
      
  constructor(private realTimeService:RealTimeService){}

  
  onGetVehiclePosition(){
   this.realTimeService.getSessionId()
   .then(res=>{
     this.sid=res.data.eid
   }).then(()=>{
      this.realTimeService.getVehiclePosition(this.sid)
    .then(res=>{
      this.vehiclePosition=res.data.items
    })
    .then(()=>console.log(this.vehiclePosition))
    .then(()=>this.vehiclePosition.map((item)=>{
       if((item as any).pos?.y && (item as any).pos?.x){
         this.onAddMarkers((item as any).pos?.y,(item as any).pos?.x,(item as any).nm);
       }return{}
    }))
    .catch(err => console.log(err))
   }  
   )
  } 

  onAddMarkers(Y:number,X:number,vehicule:string) {
    L.marker([Y, X]).addTo(this.map).bindPopup("<p>Vehicule</p><b>"+" "+ vehicule + "</b>").openPopup()
  }



  onMapReady($event: L.Map) {
    this.map = $event;
  }

 private initMap():void{
  this.options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://camtrack.net/">Camtrack</a>'
      })
    ],
    zoom: 16,
    center: { lat: 4.0482700, lng: 9.7042800 }
  }
}
 
}
