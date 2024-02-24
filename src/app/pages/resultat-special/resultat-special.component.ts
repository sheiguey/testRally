import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PiloteService } from '../../services/pilotes/pilote.service';

@Component({
  selector: 'app-resultat-special',
  standalone: true,
  imports: [
    MatCardModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './resultat-special.component.html',
  styleUrl: './resultat-special.component.scss'
})
export class ResultatSpecialComponent implements OnInit {
  @ViewChild('fullScreenElement',  { read: ElementRef }) fullScreenElement!: ElementRef;
  isFullScreen = signal(false);

  constructor(private router: Router, private piloteService: PiloteService) {
    if (typeof document !== 'undefined') {
      document.addEventListener('fullscreenchange', this.handleFullScreenChange.bind(this));
    }
    
    router.navigate(['resultat-speciale', {
      outlets: {
        special:  ['special-1'] 
      }
    }]);
    this.piloteService.resultatSpeciale()
  }

  ngOnInit(): void {
  }
  toggleFullScreen() {
    const element = this.fullScreenElement.nativeElement as HTMLElement
    this.isFullScreen.update((val) => val=true)
    element.requestFullscreen();
  }

  hideFullScreen() {
    if (typeof document !== 'undefined') {
      document.exitFullscreen();
    }
    this.isFullScreen.update((val) => val=false)
  }

  handleFullScreenChange() { 
    if (typeof document !== 'undefined') {
      if (!document.fullscreenElement) {
        this.isFullScreen.update((val) => val=false)
      }
    }
  }
}
