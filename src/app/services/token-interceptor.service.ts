/**
 * Angular core imports
 */
import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpResponse, HttpErrorResponse
} from '@angular/common/http';

/**
 * Rxjs imports
 */
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * User custom imports
 */
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from '../entry-point/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService
  ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this._authService.getToken();

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }), catchError(this.handleError));
    }

    
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } 
      return throwError({message: error.error.error, status: error.error.statusCode});
    };
}
