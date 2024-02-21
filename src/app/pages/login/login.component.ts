import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local-storage/local.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  authService = inject(AuthenticationService)
  _localService = inject(LocalService)
  route = inject(Router)

  login() {
    this._localService.setItem('dsfdsfdfsf')
    this.route.navigate(['dashboard'])
    console.log('token ', this.authService.isLoggedIn());
  }

}
