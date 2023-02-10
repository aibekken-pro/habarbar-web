import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../../token/token.service';

@Injectable()
export class AddTokensInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authRegex = /\/(signin|signup)$/gm;
    const isWriting = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method);
    const headers = {
      ...((!req.url.match(authRegex) && isWriting) && { Authorization: `Bearer ${this.tokenService.getToken()}` }),
    };
    const newReq = req.clone({
      setHeaders: {
        ...headers,
      },
    });
    return next.handle(newReq);
  }
}
