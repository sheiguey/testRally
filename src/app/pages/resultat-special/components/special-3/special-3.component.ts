import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HourPipe } from '../../../../pipe/hour-pipe';
import { NewDataFinal } from '../../../../models/input';
import { PiloteService } from '../../../../services/pilotes/pilote.service';

@Component({
  selector: 'app-special-3',
  standalone: true,
  imports: [
    MatTableModule,
    HourPipe
  ],
  templateUrl: './special-3.component.html',
  styleUrl: './special-3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Special3Component {
  displayedColumns = ['Rang', 'Pilotes', 'Marques', 'models',  'Heure Total Parcours']
  dataSource: NewDataFinal[] = []

  constructor(private piloteService: PiloteService) {
    this.dataSource = this.piloteService.resSpecial3()
  }
}
