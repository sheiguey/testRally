import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ModalWinnerComponent } from '../../components/modal-winner/modal-winner.component';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PiloteService } from '../../services/pilotes/pilote.service';
import { NewDataFinal } from '../../models/input';

@Component({
  selector: 'app-resultat-final',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    ModalWinnerComponent,
    NgClass,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './resultat-final.component.html',
  styleUrl: './resultat-final.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultatFinalComponent implements OnInit {
  @ViewChild('fullScreenElement',  { read: ElementRef }) fullScreenElement!: ElementRef;
  displayedColumns = ['Rang', 'Pilotes', 'Marques', 'Vehicules', 'Total Kilometrage', 'Heure Total Parcours', 'Actions']
  // dataSource = DATA;
  isFullScreen = signal(false);

  constructor(private router: Router, public dialog: MatDialog, private piloteService: PiloteService) {
    if (typeof document !== 'undefined') {
      document.addEventListener('fullscreenchange', this.handleFullScreenChange.bind(this));
    }

    this.router.navigate(['resultat-finale', {
      outlets: {
        final: ['final-1']
      }
    }])
  }

  ngOnInit(): void {
    this.piloteService.resultatSpeciale()
    // console.log( 'final 1',
    // this.piloteService.dataSourceFinal1())
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

  reload() {
    this.piloteService.resultatSpeciale()
    console.log('reloadi')
  }

}


