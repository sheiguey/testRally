import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-winner',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatCardModule
  ],
  templateUrl: './modal-winner.component.html',
  styleUrl: './modal-winner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalWinnerComponent {


  closeModal() {
    console.log('dfds');
    
  }
}
