import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  show = signal(true)

  constructor(private observer: BreakpointObserver) {
    this.observer.observe(['max-width: 1524px']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.show.update(val => val=true)
      } 
    })

  }

  ShowNav() {
    this.show.update(val => val=false)
    // return this.showNav
  }

  hideNav() {
    this.show.update(val => val=true)
  }
}
