import { CanMatchFn } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { inject } from '@angular/core';

export const homeGuard: CanMatchFn = (route, segments) => {
  const service = inject(AuthenticationService)
  if(service.isLoggedIn()) {
      return true
  } else {
      return false
  }
};
