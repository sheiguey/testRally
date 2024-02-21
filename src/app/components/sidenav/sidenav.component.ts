import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarService } from '../../services/navbar/navbar.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatDividerModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  menus = [
    {
      name: 'Dashboard', 
      routeLink:'dashboard',
      icon: '/assets/icons/dashboard.png'
    },
    {
      name: 'Resultat Finale',
      routeLink:'resultat-finale',
      icon: '/assets/icons/resultatFinal.png'
    },
    {
      name: 'Créer un pilote',
      routeLink:'create-pilote',
      icon: '/assets/icons/create.png',
    },
    {
      name: 'Resultat Lap', 
      routeLink:'resultat-lap',
      icon: '/assets/icons/resultatLap.png', 
    },
    {
      name: 'Real Time', 
      routeLink:'real-time',
      icon: '/assets/icons/realtime.png'
    },
    {
      name: 'Resultat Speciale', 
      routeLink:'resultat-speciale',
      icon: '/assets/icons/resultatSpec.png', 
    },
  ]
  btnMenu = signal(true)
  
  constructor(
    public _navBarService: NavbarService, 
    private router: Router,
    private observer: BreakpointObserver,
    public serviceAuth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.observer.observe(['max-width: 1524px']).subscribe((screeSize) => {
      if (screeSize.matches) {
        this.btnMenu.update((val) => val=true)
      }
    })
  }
  
  showNav() {
    this._navBarService.ShowNav()
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
