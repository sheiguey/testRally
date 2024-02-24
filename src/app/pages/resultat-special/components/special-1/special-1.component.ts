import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PiloteService } from '../../../../services/pilotes/pilote.service';
import { NewDataFinal } from '../../../../models/input';
import { HourPipe } from '../../../../pipe/hour-pipe';

@Component({
  selector: 'app-special-1',
  standalone: true,
  imports: [
    MatTableModule,
    HourPipe
  ],
  templateUrl: './special-1.component.html',
  styleUrl: './special-1.component.scss'
})
export class Special1Component {
  displayedColumns = ['Rang', 'Pilotes', 'Sponsors','Vehicules', 'Heure Total Parcours']
  dataSource: NewDataFinal[] = [];

  constructor(private piloteService: PiloteService) {
    this.dataSource = this.piloteService.resSpecial1()
  }
}

