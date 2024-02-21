import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  getItem(): string | null {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token')
      return token
    }
    return null
  }

  setItem(value: string='token'): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', value)
    }
  }
}
