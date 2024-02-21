import { Injectable, signal } from '@angular/core';
import { LocalService } from '../local-storage/local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _localStorageService: LocalService) { }

  isLoggedIn(): boolean {
    const token = this._localStorageService.getItem()
    if (token) return true
    return false

  }

}
