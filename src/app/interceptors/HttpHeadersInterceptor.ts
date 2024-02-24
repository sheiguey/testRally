import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
  
    if (!request.headers.has('Content-Type')) {
      // Si non, définir le bon type de contenu pour votre API (multipart/form-data)
      // const headers = new HttpHeaders({
      //   'Content-Type': 'undefined'
      // });
      
      // Cloner la requête avec les nouveaux en-têtes
      // request = request.clone({
      //   headers: headers
      // });
    }
    
    return next.handle(request);
  }
}