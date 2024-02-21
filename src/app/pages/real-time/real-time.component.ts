import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-real-time',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    NgClass,
    MapComponent
  ],
  templateUrl: './real-time.component.html',
  styleUrl: './real-time.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealTimeComponent {
  @ViewChild('fullScreenElement',  { read: ElementRef }) fullScreenElement!: ElementRef;
  isFullScreen = signal(false);
  displayedColumns = ['Rang', 'Pilotes']
  dataSource = DATA;

  constructor () {
    if (typeof document !== 'undefined') {
      document.addEventListener('fullscreenchange', this.handleFullScreenChange.bind(this));
    }
  }

  toggleFullScreen() {
    const element = this.fullScreenElement.nativeElement as HTMLElement
    this.isFullScreen.update((val) => val=true)
    element.requestFullscreen();
  }

  hideFullScreen() {
    if (typeof document !== 'undefined') {
      document.exitFullscreen();
      this.isFullScreen.update((val) => val=false)
    }
  }

  handleFullScreenChange() { 
    if (typeof document !== 'undefined') {
      if (!document.fullscreenElement) {
        this.isFullScreen.update((val) => val=false)
      }
    }
  }
}

const DATA = [
  {
    rang: 1,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 2,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/bugatti.png',
    pilote: 'Christelle Wamou',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'BUGATTI',
    car: 'LT 705454-X',
  },
  {
    rang: 3,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 4,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 5,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 6,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 7,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },

]