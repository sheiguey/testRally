import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    GoogleMap
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral | null = null;

  // moveMap(event: google.maps.MapMouseEvent) {
  //   this.center = (event?.latLng.toJSON());
  // }

  // move(event: google.maps.MapMouseEvent) {
  //   this.display = event.latLng.toJSON();
  // }
}
