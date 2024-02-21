import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CountComponent } from './components/count/count.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {NgClass} from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    CountComponent,
    MatTableModule,
    MatButtonModule,
    NgClass
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  @ViewChild('fullScreenElement',  { read: ElementRef }) fullScreenElement!: ElementRef;
  displayedColumns = ['d', 'Pilote', 'Sponsors', 'Marque', 'Vehicules', 'Actions'];
  dataSource = DATA;
  isFullScreen = signal(false);

  constructor() {
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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



const DATA = [
  {
    img: '/assets/images/car/user.png', 
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    sponsors: 'CAMTRACK',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    img: '/assets/images/car/user.png', 
    imgCar: '/assets/images/car/bugatti.png',
    pilote: 'Christelle Wamou',
    sponsors: 'YOOMEE',
    marque: 'BUGATI',
    car: 'LT 705454-X',
  },
  {
    img: '/assets/images/car/user.png', 
    imgCar: '/assets/images/car/Volkswagen.png',
    pilote: 'Christelle Wamou',
    sponsors: 'YOOMEE',
    marque: 'BUGATI',
    car: 'LT 705454-X',
  },
  {
    img: '/assets/images/car/user.png', 
    imgCar: '/assets/images/car/bugatti.png',
    pilote: 'Christelle Wamou',
    sponsors: 'YOOMEE',
    marque: 'BUGATI',
    car: 'LT 705454-X',
  },
  {
    img: '/assets/images/car/user.png', 
    imgCar: '/assets/images/car/bugatti.png',
    pilote: 'Christelle Wamou',
    sponsors: 'YOOMEE',
    marque: 'BUGATI',
    car: 'LT 705454-X',
  },
  {
    img: '/assets/images/car/user.png', 
    imgCar: '/assets/images/car/bugatti.png',
    pilote: 'Christelle Wamou',
    sponsors: 'YOOMEE',
    marque: 'BUGATI',
    car: 'LT 705454-X',
  },
]