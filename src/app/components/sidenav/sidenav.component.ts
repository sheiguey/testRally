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
  
  refreshPage() {
    // this.router.navigate(['dashboard']).then(() => {
    //   window.location.reload();
    // });
  }

  showNav() {
    this._navBarService.ShowNav()
  }

  connexion() {
    this.router.navigate(['login'])
  }
  
  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
