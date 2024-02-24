import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local-storage/local.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  username: string = ''
  password: string = ''
  usernameError: boolean = false;
  passwordError: boolean = false;
  authService = inject(AuthenticationService)
  _localService = inject(LocalService)
  route = inject(Router)


  login() {
    this.usernameError = !this.username;
    this.passwordError = !this.password;
    
    if (this.usernameError || this.passwordError) {
      return;
    }  
    if (this.authService.login(this.username, this.password)) {
      this.authService.login(this.username, this.password )
      this.route.navigate(['dashboard'])
    } 
  }

  resetUsernameError(): void {
    this.usernameError = false;
  }

  resetPasswordError(): void {
    this.passwordError = false;
  }

}
