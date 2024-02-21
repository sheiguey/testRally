import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lap1',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './lap1.component.html',
  styleUrl: './lap1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lap1Component {
  displayedColumns = ['Rang', 'Pilotes', 'Marques', 'Vehicules', 'Total Kilometrage', 'Heure Total Parcours']
  dataSource = DATA;
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
  {
    rang: 8,
    img: '../../../assets/images/car/user.png',
    imgCar: '../../../assets/images/car/opel.png',
    pilote: 'Olivier Ramdam',
    km_total: 105,
    hour_total: '4h 45min 5s',
    marque: 'OPEL',
    car: 'LT 705454-X',
  },

]