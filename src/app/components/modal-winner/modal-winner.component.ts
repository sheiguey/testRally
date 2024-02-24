import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NewDataFinal } from '../../models/input';
import { HourPipe } from '../../pipe/hour-pipe';

@Component({
  selector: 'app-modal-winner',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatCardModule,
    HourPipe
  ],
  templateUrl: './modal-winner.component.html',
  styleUrl: './modal-winner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalWinnerComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: NewDataFinal) {
    console.log('modal ', this.data) 
  }

  closeModal() {
    console.log('dfds');
  }
}
