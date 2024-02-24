import { Injectable, signal } from '@angular/core';
import { LocalService } from '../local-storage/local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth = signal(false)
  errorMessage = signal('')
  constructor(private _localStorageService: LocalService, private _localService: LocalService) { }

  login (username: string, password: string) {
    if (username == 'camtrackRallye' && password == 'Camtr@ck24') {
        this.isAuth.update((val) => val = true)
        this.errorMessage.update((val) => val='')
        this._localService.setItem('token jwt')
        return true;
    } else {
      this.isAuth.update((val) => val=false)
      this.errorMessage.update((val) => val = 'Invalid username or password')
      return false
    }

  }

  isLoggedIn(): boolean {
    const token = this._localStorageService.getItem()
    if (token) return true
    return false

  }

}
