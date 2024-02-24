import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HourPipe } from '../../../../pipe/hour-pipe';
import { NewDataFinal } from '../../../../models/input';
import { PiloteService } from '../../../../services/pilotes/pilote.service';

@Component({
  selector: 'app-special-2',
  standalone: true,
  imports: [
    MatTableModule,
    HourPipe
  ],
  templateUrl: './special-2.component.html',
  styleUrl: './special-2.component.scss'
})
export class Special2Component {
  displayedColumns = ['Rang', 'Pilotes', 'Marques', 'Vehicules', 'Heure Total Parcours']
  dataSource: NewDataFinal[] = []

  constructor(private piloteService: PiloteService) {
    this.dataSource = this.piloteService.resSpecial2()
  }
}
