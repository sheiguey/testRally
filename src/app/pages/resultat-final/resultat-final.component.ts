import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ModalWinnerComponent } from '../../components/modal-winner/modal-winner.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-resultat-final',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    ModalWinnerComponent,
    NgClass
  ],
  templateUrl: './resultat-final.component.html',
  styleUrl: './resultat-final.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultatFinalComponent {
  @ViewChild('fullScreenElement',  { read: ElementRef }) fullScreenElement!: ElementRef;
  displayedColumns = ['Rang', 'Pilotes', 'Marques', 'Vehicules', 'Total Kilometrage', 'Heure Total Parcours', 'Actions']
  dataSource = DATA;
  isFullScreen = signal(false);

  constructor(public dialog: MatDialog) {
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
    document.exitFullscreen();
    this.isFullScreen.update((val) => val=false)
  }

  handleFullScreenChange() { 
    if (!document.fullscreenElement) {
      this.isFullScreen.update((val) => val=false)
    }
  }
  
  openDialogWinner() {
    this.dialog.open(ModalWinnerComponent);
    console.log('dfdfd');
  }
}


const DATA = [
  {
    rang: 1,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 2,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/bugatti.png',
    pilote: 'Christelle Wamou',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'BUGATTI',
    car: 'LT 705454-X',
  },
  {
    rang: 3,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 4,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 5,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 6,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 7,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },
  {
    rang: 8,
    img: '/assets/images/car/user.png',
    imgCar: '/assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },

]