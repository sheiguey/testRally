import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HourPipe } from '../../../../pipe/hour-pipe';
import { NewDataFinal } from '../../../../models/input';
import { PiloteService } from '../../../../services/pilotes/pilote.service';

@Component({
  selector: 'app-special-4',
  standalone: true,
  imports: [
    MatTableModule,
    HourPipe
  ],
  templateUrl: './special-4.component.html',
  styleUrl: './special-4.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Special4Component {
  displayedColumns = ['Rang', 'Pilotes', 'Marques', 'Vehicules', 'Total Kilometrage', 'Heure Total Parcours']
  dataSource: NewDataFinal[] = []

  constructor(private piloteService: PiloteService) {
    this.dataSource = this.piloteService.resSpecial4()
  }
}
