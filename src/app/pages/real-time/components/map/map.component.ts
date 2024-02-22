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
    this.initMap()
    setInterval(()=>this.onUpdatePosition(),10000)
   } 
      
  constructor(private realTimeService:RealTimeService){}
 
  onUpdatePosition(){
    this.onGetSid();
    this.onGetVehiclePosition(this.sid);
    this.onUpdateMakers();
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


  onAddMarkers(Y:number,X:number,vehicule:string) {
    L.marker([Y, X]).addTo(this.map).bindPopup("<p>Vehicule</p><b>"+" "+ vehicule + "</b>").openPopup()
  }

  onUpdateMakers(){
     if(this.vehiclePosition.length>0){
        this.vehiclePosition.map((item)=>{
          this.onAddMarkers((item as any).pos.y,(item as any).pos.x,(item as any).nm)
        })
     }
  }

  onMapReady($event: L.Map) {
    this.map = $event;
    this.onAddMarkers(4.0226731,9.7030975,"FM1000-2");
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
