import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ModalWinnerComponent } from '../../../../components/modal-winner/modal-winner.component';
import { NewDataFinal } from '../../../../models/input';
import { ActivatedRoute } from '@angular/router';
import { HourPipe } from '../../../../pipe/hour-pipe';
import { PiloteService } from '../../../../services/pilotes/pilote.service';

@Component({
  selector: 'app-final-2',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    HourPipe
  ],
  templateUrl: './final-2.component.html',
  styleUrl: './final-2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Final2Component implements OnInit{
  displayedColumns = ['Rang', 'Pilotes', 'Marques', 'Vehicules', 'Heure Total Parcours', 'Actions']
  dataSource: NewDataFinal[] = [] ;

  constructor(public dialog: MatDialog, private piloteService: PiloteService) {
    
    this.dataSource = this.piloteService.dataSourceFinal2()
  }

  
  ngOnInit(): void {
  }

  openDialogWinner() {
    const dialogRef = this.dialog.open(ModalWinnerComponent, {
      data: this.dataSource[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    console.log('dfdfd');
  }



}

