import { CanMatchFn } from '@angular/router';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { inject } from '@angular/core';

export const loginGuard: CanMatchFn = (route, segments) => {
  const service = inject(AuthenticationService)
  if (service.isLoggedIn()) {
      return false
  } else {
      return true
  }
};
