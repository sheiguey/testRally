import { ChangeDetectionStrategy, Component, HostListener, OnInit, inject, signal } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarService } from '../../services/navbar/navbar.service';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidenavComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  isSmallScreen: boolean = false
  _navBarService = inject(NavbarService)
  
  constructor(private router: Router, private observer: BreakpointObserver) {
    this.observer.observe(['(max-width: 1524px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isSmallScreen = true;
        this._navBarService.show.update((val) => val=false)
      } else {
        this.isSmallScreen = false;
        this._navBarService.show.update((val) => val=true)
      }
    });

    this.router.navigate(['resultat-finale'])
  }
  
  
  ngOnInit(): void {
    const currentUrl = this.router.url;
    // this.router.navigate(['resultat-finale'])
    // this.router.navigate([currentUrl]) 
  }

  showNav() {
    this._navBarService.hideNav()
  }
  
}
